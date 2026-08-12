/**
 * Post-build patch for Nitro 3 beta / Rolldown bundler bugs.
 *
 * BUG 1: Rolldown generates `export { ssr_exports as i }` in ssr.mjs but FORGETS to
 * declare `ssr_exports`. This causes: SyntaxError: "Export 'ssr_exports' is not defined".
 * Rolldown INTENDED `ssr_exports` to be the module's own namespace (so that main.mjs can
 * access `n.i.default` where `n.i = ssr_exports` = {default: serverHandler, ...}).
 * Fix: Add `const ssr_exports = { default: server_default };` — where server_default is
 * TanStack Start's SSR handler (an object with `.fetch`). This gives lazyService in
 * main.mjs what it needs: _mod = ssr_exports, mod = _mod.default = server_default,
 * and mod.fetch(request) handles the SSR rendering.
 *
 * BUG 2: ssr.mjs and ssr2.mjs have a CIRCULAR DEPENDENCY:
 *   - ssr.mjs imports server_default from ssr2.mjs (static import)
 *   - ssr2.mjs imports createMiddleware from ssr.mjs
 * In Node.js ESM, var declarations are `undefined` during circular resolution.
 * ssr2.mjs calls createMiddleware() at module init time (via createCsrfMiddleware),
 * which fails with "createMiddleware is not a function".
 * Fix: Convert `var createMiddleware = (arrow fn)` to `function createMiddleware() {}`
 * declaration. Function declarations ARE fully hoisted in ESM.
 */

import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(__dirname, "..");

const ssrMjsPath = resolve(
  projectRoot,
  ".netlify/functions-internal/server/_ssr/ssr.mjs",
);

if (!existsSync(ssrMjsPath)) {
  console.log("[patch-netlify-ssr] ssr.mjs not found, skipping patch.");
  process.exit(0);
}

let content = readFileSync(ssrMjsPath, "utf-8");
let changed = false;

// ──────────────────────────────────────────────────────────────────────────────
// FIX 1: Define `ssr_exports` as `{ default: server_default }`.
//
// Rolldown intended ssr_exports to be the module's own namespace object.
// server_default (TanStack Start's SSR handler) is { fetch: Function }.
// lazyService in main.mjs does:
//   _mod = n.i (= ssr_exports)
//   mod = _mod.default || _mod  → mod = server_default
//   mod.fetch(request)          → TanStack Start handles the SSR request
// ──────────────────────────────────────────────────────────────────────────────

// Remove any previously added incorrect `import * as ssr_exports from "./ssr2.mjs"`
const wrongNamespaceImport = `\nimport * as ssr_exports from "./ssr2.mjs";`;
if (content.includes(wrongNamespaceImport)) {
  content = content.replace(wrongNamespaceImport, "");
  console.log("[patch-netlify-ssr] Removed previously-added wrong namespace import.");
}

const correctSsrExports = `\nconst ssr_exports = { default: server_default };`;
const hasSsrExportsBug =
  content.includes("ssr_exports as i") &&
  !content.includes("ssr_exports = {") &&
  !content.includes("ssr_exports = server_default");

if (hasSsrExportsBug) {
  // Find the named import from ssr2.mjs (where server_default is imported)
  const ssr2ImportRegex = /^import\s+\{[^}]+\}\s+from\s+["']\.\/ssr2\.mjs["'];/m;
  const ssr2ImportMatch = content.match(ssr2ImportRegex);

  if (!ssr2ImportMatch) {
    console.error("[patch-netlify-ssr] BUG1: Could not find ssr2.mjs named import. Aborting.");
    process.exit(1);
  }

  const originalImport = ssr2ImportMatch[0];
  content = content.replace(originalImport, `${originalImport}${correctSsrExports}`);
  changed = true;
  console.log("[patch-netlify-ssr] ✓ BUG1 fixed: added 'const ssr_exports = { default: server_default }'");
} else {
  console.log("[patch-netlify-ssr] BUG1: No patch needed (ssr_exports already defined).");
}

// ──────────────────────────────────────────────────────────────────────────────
// FIX 2: Convert `var createMiddleware = (arrow fn)` to `function` declaration.
// This breaks the ESM circular dependency by making createMiddleware fully hoisted.
// ──────────────────────────────────────────────────────────────────────────────
const createMiddlewareArrow = "var createMiddleware = (options, __opts) => {";
const createMiddlewareFunc = "function createMiddleware(options, __opts) {";

if (content.includes(createMiddlewareArrow)) {
  // Step 1: Replace the arrow function header with a function declaration header
  content = content.replace(createMiddlewareArrow, createMiddlewareFunc);

  // Step 2: Fix the closing `};` for this function.
  // All inner closings are INDENTED (e.g. `\n\t};`) so the FIRST `\n};` (no indent)
  // after the function start is the top-level closing brace of createMiddleware.
  const fnStart = content.indexOf(createMiddlewareFunc);
  const closingIdx = content.indexOf("\n};", fnStart);
  if (closingIdx !== -1) {
    content = content.slice(0, closingIdx) + "\n}" + content.slice(closingIdx + 3);
    changed = true;
    console.log("[patch-netlify-ssr] ✓ BUG2 fixed: createMiddleware converted to function declaration (hoisted for circular dep)");
  } else {
    console.warn("[patch-netlify-ssr] BUG2: Could not find closing }; for createMiddleware.");
  }
} else if (content.includes(createMiddlewareFunc)) {
  console.log("[patch-netlify-ssr] BUG2: No patch needed (createMiddleware is already a function declaration).");
} else {
  console.log("[patch-netlify-ssr] BUG2: createMiddleware not found in ssr.mjs, skipping.");
}

// ──────────────────────────────────────────────────────────────────────────────
// Write patched file
// ──────────────────────────────────────────────────────────────────────────────
if (changed) {
  writeFileSync(ssrMjsPath, content, "utf-8");
  console.log("[patch-netlify-ssr] ✓ Patched ssr.mjs written to disk.");
} else {
  console.log("[patch-netlify-ssr] No changes needed.");
}

import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { k as ChevronRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Breadcrumbs-BZRHlxZw.js
var import_jsx_runtime = require_jsx_runtime();
/** Sichtbare Breadcrumb-Navigation; das passende JSON-LD liefert die Route. */
function Breadcrumbs({ items }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
		"aria-label": "Brotkrumennavigation",
		className: "text-sm",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "flex flex-wrap items-center gap-1.5 text-muted-foreground",
			children: items.map((item, i) => {
				const isLast = i === items.length - 1;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-center gap-1.5",
					children: [i > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
						className: "size-3.5 opacity-60",
						"aria-hidden": "true"
					}), isLast ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-current": "page",
						className: "font-medium text-primary",
						children: item.name
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.path,
						className: "rounded transition-colors hover:text-accent hover:underline",
						children: item.name
					})]
				}, item.path);
			})
		})
	});
}
//#endregion
export { Breadcrumbs as t };

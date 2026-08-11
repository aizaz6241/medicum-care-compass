import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { h as Mail, l as Phone } from "../_libs/lucide-react.mjs";
import { f as company, s as cn } from "./router-D9WlpxzW.mjs";
import { t as Reveal } from "./Reveal-Cppm1T_U.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/CtaBand-YGPqfYAz.js
var import_jsx_runtime = require_jsx_runtime();
/** Wiederverwendbarer Handlungsaufruf-Block. */
function CtaBand({ title = "Sprechen wir über Ihre Situation", text = "In einem persönlichen Gespräch klären wir in Ruhe, welche Unterstützung zu Ihnen passt – unverbindlich und verständlich.", primaryLabel = "Pflegeberatung anfragen", tone = "primary" }) {
	const inverted = tone === "primary";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "container-page",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("overflow-hidden rounded-3xl px-7 py-12 shadow-soft md:px-14 md:py-16", inverted ? "bg-primary text-primary-foreground" : "bg-surface"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: cn("font-display text-3xl font-bold md:text-4xl", inverted && "text-primary-foreground"),
						children: title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: cn("mt-4 text-lg", inverted ? "text-primary-foreground/85" : "text-muted-foreground"),
						children: text
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/kontakt",
								className: cn("inline-flex min-h-12 items-center justify-center rounded-full px-7 font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift", inverted ? "bg-primary-foreground text-primary" : "bg-primary text-primary-foreground"),
								children: primaryLabel
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: company.phoneHref,
								className: cn("inline-flex min-h-12 items-center justify-center gap-2 rounded-full border px-7 font-semibold transition-colors", inverted ? "border-primary-foreground/35 text-primary-foreground hover:bg-primary-foreground/10" : "border-border bg-card text-primary hover:border-accent"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
									className: "size-4",
									"aria-hidden": "true"
								}), company.phone]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: company.emailHref,
								className: cn("inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-4 font-medium underline-offset-4 hover:underline", inverted ? "text-primary-foreground/90" : "text-primary"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
									className: "size-4",
									"aria-hidden": "true"
								}), "E-Mail schreiben"]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: cn("mt-6 text-sm", inverted ? "text-primary-foreground/70" : "text-muted-foreground"),
						children: ["Bürozeiten: ", company.officeHoursShort]
					})
				]
			})
		}) })
	});
}
//#endregion
export { CtaBand as t };

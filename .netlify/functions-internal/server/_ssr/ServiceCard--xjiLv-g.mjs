import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { P as ArrowRight } from "../_libs/lucide-react.mjs";
import { u as serviceIcons } from "./router-CUExU-96.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ServiceCard--xjiLv-g.js
var import_jsx_runtime = require_jsx_runtime();
function ServiceCard({ service }) {
	const Icon = serviceIcons[service.icon];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "card-lift group flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-soft",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"aria-hidden": "true",
				className: "mb-5 flex size-12 items-center justify-center rounded-xl bg-accent-soft text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-foreground",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-6" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display text-xl font-bold",
				children: service.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 flex-1 text-[0.975rem] leading-relaxed text-muted-foreground",
				children: service.teaser
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/leistungen/$slug",
				params: { slug: service.slug },
				className: "mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-accent",
				children: [
					"Mehr erfahren",
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "sr-only",
						children: [" über ", service.title]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
						className: "size-4 transition-transform duration-300 group-hover:translate-x-1",
						"aria-hidden": "true"
					})
				]
			})
		]
	});
}
//#endregion
export { ServiceCard as t };

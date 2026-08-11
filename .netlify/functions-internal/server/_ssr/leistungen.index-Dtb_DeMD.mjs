import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Breadcrumbs } from "./Breadcrumbs-BZRHlxZw.mjs";
import { d as services, r as crumbs } from "./router-D9WlpxzW.mjs";
import { t as Reveal } from "./Reveal-Cppm1T_U.mjs";
import { t as CtaBand } from "./CtaBand-YGPqfYAz.mjs";
import { t as ServiceCard } from "./ServiceCard--xjiLv-g.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/leistungen.index-Dtb_DeMD.js
var import_jsx_runtime = require_jsx_runtime();
function LeistungenPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-surface",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page py-12 md:py-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Breadcrumbs, { items: crumbs }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-6 max-w-3xl text-4xl font-extrabold md:text-5xl",
						children: "Unsere Leistungen für die Pflege zu Hause in Hanau"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-2xl text-lg text-muted-foreground",
						children: "Pflege ist keine Standardlösung. Deshalb stellen wir unsere Leistungen so zusammen, wie es Ihre Situation erfordert – von einzelnen medizinischen Maßnahmen bis zur umfassenden Begleitung im Alltag."
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			"aria-label": "Alle Leistungen",
			className: "section-y",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-page",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
					children: services.map((service, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						as: "li",
						delay: i % 3 * 60,
						className: "h-full",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceCard, { service })
					}, service.slug))
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {
			title: "Sie sind unsicher, welche Leistung passt?",
			text: "Das ist völlig normal. In einem Beratungsgespräch schauen wir gemeinsam auf Ihre Situation und erklären, welche Unterstützung möglich ist und wie die Kostenübernahme aussehen kann."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-20" })
	] });
}
//#endregion
export { LeistungenPage as component };

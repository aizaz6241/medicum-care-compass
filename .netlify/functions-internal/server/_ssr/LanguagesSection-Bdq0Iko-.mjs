import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { m as languages } from "./router-D9WlpxzW.mjs";
import { t as Reveal } from "./Reveal-Cppm1T_U.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/LanguagesSection-Bdq0Iko-.js
var import_jsx_runtime = require_jsx_runtime();
var team_medicum_default = "/assets/team-medicum-fUAqcf4_.jpg";
/** Sprachangebot laut Broschüre – bewusst als Unternehmensangebot formuliert. */
function LanguagesSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		"aria-labelledby": "sprachen-heading",
		className: "section-y bg-surface",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "sprachen-heading",
					className: "text-3xl font-bold md:text-4xl",
					children: "Wir sprechen Ihre Sprache."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 text-lg text-muted-foreground",
					children: "Pflege beginnt mit Verständigung. Wenn über Beschwerden, Gewohnheiten und Wünsche in der eigenen Sprache gesprochen werden kann, entsteht Vertrauen – und Pflege wird persönlicher."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-muted-foreground",
					children: "Medicum bietet Beratung und Betreuung in mehreren Sprachen an. Welche Kollegin oder welcher Kollege Ihre Sprache spricht, klären wir bei Ihrer Anfrage."
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: 100,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "grid grid-cols-2 gap-3 sm:grid-cols-3",
					children: languages.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "card-lift rounded-2xl border border-border bg-card px-4 py-5 text-center shadow-soft",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							dir: l.dir,
							className: "block font-display text-lg font-bold text-primary",
							children: l.native
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-1 block text-xs text-muted-foreground",
							children: l.label
						})]
					}, l.code))
				})
			})]
		})
	});
}
//#endregion
export { team_medicum_default as n, LanguagesSection as t };

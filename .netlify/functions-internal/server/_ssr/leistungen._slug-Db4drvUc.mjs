import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { P as ArrowRight, j as Check, l as Phone } from "../_libs/lucide-react.mjs";
import { t as Breadcrumbs } from "./Breadcrumbs-BZRHlxZw.mjs";
import { d as services, f as company, n as Route, s as cn, u as serviceIcons } from "./router-D9WlpxzW.mjs";
import { t as Reveal } from "./Reveal-Cppm1T_U.mjs";
import { t as CtaBand } from "./CtaBand-YGPqfYAz.mjs";
import { t as FaqSection } from "./FaqSection-CcpcwFAQ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/leistungen._slug-Db4drvUc.js
var import_jsx_runtime = require_jsx_runtime();
function ServiceDetailPage() {
	const { service } = Route.useLoaderData();
	const Icon = serviceIcons[service.icon];
	const related = service.related.map((slug) => services.find((s) => s.slug === slug)).filter((s) => Boolean(s));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: cn(service.tone === "calm" ? "bg-background" : "bg-surface"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page py-12 md:py-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Breadcrumbs, { items: [
					{
						name: "Startseite",
						path: "/"
					},
					{
						name: "Leistungen",
						path: "/leistungen"
					},
					{
						name: service.title,
						path: `/leistungen/${service.slug}`
					}
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-start",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": "true",
							className: "mb-6 flex size-14 items-center justify-center rounded-2xl bg-accent-soft text-accent",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-7" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "text-4xl font-extrabold md:text-5xl",
							children: [
								service.title,
								" in ",
								company.city
							]
						}),
						service.intro.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-lg text-muted-foreground",
							children: p
						}, p.slice(0, 24)))
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
						className: "rounded-2xl border border-border bg-card p-7 shadow-soft",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-lg font-bold",
								children: "Für wen ist diese Leistung?"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-[0.975rem] leading-relaxed text-muted-foreground",
								children: service.audience
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 space-y-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/kontakt",
									className: "flex min-h-12 items-center justify-center rounded-full bg-primary px-6 font-semibold text-primary-foreground btn-sheen shadow-soft",
									children: service.ctaLabel
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: company.phoneHref,
									className: "flex min-h-12 items-center justify-center gap-2 rounded-full border border-border px-6 font-semibold text-primary hover:border-accent",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
										className: "size-4",
										"aria-hidden": "true"
									}), company.phone]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-sm text-muted-foreground",
								children: company.officeHoursShort
							})
						]
					})]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section-y",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page max-w-3xl space-y-12",
				children: [service.sections.map((section, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: i * 60,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-2xl font-bold md:text-3xl",
							children: section.heading
						}),
						section.body && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-lg leading-relaxed text-foreground/85",
							children: section.body
						}),
						section.bullets && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-5 space-y-3",
							children: section.bullets.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
									className: "mt-1 size-5 shrink-0 text-accent",
									"aria-hidden": "true"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-foreground/90",
									children: b
								})]
							}, b))
						})
					]
				}, section.heading)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "rounded-2xl bg-surface p-6 text-[0.975rem] text-muted-foreground",
					children: [
						"Sie sind sich nicht sicher, ob diese Leistung die richtige ist? In unserer",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/leistungen/$slug",
							params: { slug: "pflegeberatung" },
							className: "font-semibold text-primary underline underline-offset-4",
							children: "Pflegeberatung"
						}),
						" ",
						"klären wir gemeinsam Ihren Bedarf und die Frage der Kostenübernahme."
					]
				}) })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaqSection, {
			faqs: service.faqs,
			title: `Häufige Fragen zur ${service.title}`
		}),
		related.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			"aria-labelledby": "verwandt-heading",
			className: "section-y bg-surface",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "verwandt-heading",
					className: "text-2xl font-bold md:text-3xl",
					children: "Weitere passende Leistungen"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
					children: related.map((r) => {
						const RelatedIcon = serviceIcons[r.icon];
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/leistungen/$slug",
							params: { slug: r.slug },
							className: "card-lift group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RelatedIcon, {
									className: "size-6 text-accent",
									"aria-hidden": "true"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 font-display text-lg font-bold",
									children: r.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 flex-1 text-sm text-muted-foreground",
									children: r.teaser
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent",
									children: [
										"Zur Seite ",
										r.title,
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
											className: "size-4 transition-transform group-hover:translate-x-1",
											"aria-hidden": "true"
										})
									]
								})
							]
						}) }, r.slug);
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pt-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {
				primaryLabel: service.ctaLabel,
				tone: service.tone === "calm" ? "quiet" : "primary",
				title: service.tone === "calm" ? "Sprechen Sie mit uns – in Ruhe" : "Sprechen wir über Ihre Situation",
				text: service.tone === "calm" ? "Wenn Sie über eine Begleitung zu Hause nachdenken, nehmen wir uns Zeit für Ihre Fragen. Ohne Druck und in Ihrem Tempo." : "In einem persönlichen Gespräch klären wir in Ruhe, welche Unterstützung zu Ihnen passt – unverbindlich und verständlich."
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-20" })
	] });
}
//#endregion
export { ServiceDetailPage as component };

import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { N as BadgeCheck, P as ArrowRight, _ as Languages, a as Star, j as Check, l as Phone, s as Quote, w as ExternalLink, y as HeartHandshake } from "../_libs/lucide-react.mjs";
import { c as featuredServiceSlugs, d as services, f as company, l as serviceBySlug, o as homeFaqs, s as cn } from "./router-CUExU-96.mjs";
import { t as Reveal } from "./Reveal-ZwHUfir2.mjs";
import { t as CtaBand } from "./CtaBand-CIp-MhE3.mjs";
import { t as FaqSection } from "./FaqSection-_JEHMoCe.mjs";
import { t as ServiceCard } from "./ServiceCard--xjiLv-g.mjs";
import { n as team_medicum_default, t as LanguagesSection } from "./LanguagesSection-DwYD0ld_.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DFrnywas.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var hero_pflege_default = "/assets/hero-pflege-BvArW6Xr.jpg";
/**
* Sanfter 3D-Parallax-Effekt, der der Maus folgt.
* Deaktiviert sich bei prefers-reduced-motion und auf Touch-Geräten.
*/
function Parallax3D({ children, className, strength = 10, depth = 18 }) {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		const fine = window.matchMedia("(pointer: fine)").matches;
		if (reduce || !fine) return;
		let frame = 0;
		let tx = 0;
		let ty = 0;
		let cx = 0;
		let cy = 0;
		const render = () => {
			cx += (tx - cx) * .09;
			cy += (ty - cy) * .09;
			el.style.setProperty("--px", cx.toFixed(4));
			el.style.setProperty("--py", cy.toFixed(4));
			el.style.transform = `perspective(1200px) rotateX(${(-cy * strength).toFixed(2)}deg) rotateY(${(cx * strength).toFixed(2)}deg)`;
			const inner = el.firstElementChild;
			if (inner) inner.style.transform = `translate3d(${(cx * depth).toFixed(2)}px, ${(cy * depth).toFixed(2)}px, 0)`;
			frame = requestAnimationFrame(render);
		};
		const onMove = (e) => {
			const rect = el.getBoundingClientRect();
			tx = Math.max(-1, Math.min(1, (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2)));
			ty = Math.max(-1, Math.min(1, (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2)));
		};
		const onLeave = () => {
			tx = 0;
			ty = 0;
		};
		window.addEventListener("pointermove", onMove, { passive: true });
		window.addEventListener("pointerleave", onLeave);
		frame = requestAnimationFrame(render);
		return () => {
			cancelAnimationFrame(frame);
			window.removeEventListener("pointermove", onMove);
			window.removeEventListener("pointerleave", onLeave);
		};
	}, [strength, depth]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className: cn("will-change-transform", className),
		style: { transformStyle: "preserve-3d" },
		children
	});
}
/**
* Testimonials / Erfahrungsberichte Sektion.
* Zeigt Google-Bewertungshinweis + Platzhalter für freigegebene Zitate.
* Bewusst KEINE erfundenen Zitate oder Bewertungen.
* Sobald freigegebene Rückmeldungen vorliegen, können sie im Array ergänzt werden.
*/
var testimonials = [];
function Testimonials() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		"aria-labelledby": "stimmen-heading",
		className: "section-y bg-surface",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-2xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "stimmen-heading",
					className: "text-3xl font-bold md:text-4xl",
					children: "Stimmen von Angehörigen & Patienten"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-lg text-muted-foreground",
					children: "Wir begleiten Menschen in Hanau seit Jahren. Lesen Sie, was Angehörige und Betroffene über die Arbeit von Medicum sagen."
				})]
			}), testimonials.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "col-span-full rounded-2xl border border-border bg-card p-8 shadow-soft",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex shrink-0 items-center gap-1",
								"aria-label": "5 von 5 Sternen",
								children: [
									1,
									2,
									3,
									4,
									5
								].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
									className: "size-5 fill-amber-400 text-amber-400",
									"aria-hidden": "true"
								}, i))
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground",
								children: "Bewertungen auf Google"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, {
							className: "mt-5 size-7 text-accent",
							"aria-hidden": "true"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-lg font-medium text-foreground/90",
							children: "Wir veröffentlichen an dieser Stelle Rückmeldungen von Menschen, die wir begleiten – ausschließlich mit ausdrücklicher Zustimmung der Betroffenen."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-muted-foreground",
							children: "Wir verzichten bewusst auf Bewertungen oder Zitate, die wir nicht belegen können."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "https://www.google.com/search?q=Medicum+Pflegedienst+Hanau+Bewertungen",
							target: "_blank",
							rel: "noopener noreferrer",
							className: "mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:border-accent",
							"aria-label": "Medicum Bewertungen auf Google ansehen",
							children: ["Bewertungen auf Google ansehen", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {
								className: "size-4",
								"aria-hidden": "true"
							})]
						})
					]
				}), [
					{
						stat: "9",
						label: "Sprachen",
						text: "Medicum bietet Pflege und Beratung in 9 Sprachen an – darunter Deutsch, Englisch, Russisch, Arabisch und Urdu."
					},
					{
						stat: "Mo–Fr",
						label: "08:00–16:00 Uhr",
						text: "Unser Büro ist Montag bis Freitag von 8 bis 16 Uhr erreichbar. Rufen Sie uns an – wir hören zu."
					},
					{
						stat: "100%",
						label: "Kassenzulassung",
						text: "Medicum ist von allen Pflege- und Krankenkassen zugelassen. Ihre Leistungen werden direkt abgerechnet."
					}
				].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-border bg-card p-7 shadow-soft",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-4xl font-extrabold text-accent",
							"aria-hidden": "true",
							children: item.stat
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm font-semibold text-primary",
							children: item.label
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-muted-foreground",
							children: item.text
						})
					]
				}, item.stat))]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-8 grid gap-6 md:grid-cols-2",
				children: testimonials.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-2xl border border-border bg-card p-7 shadow-soft",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-center gap-1",
							"aria-label": "5 von 5 Sternen",
							children: [
								1,
								2,
								3,
								4,
								5
							].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
								className: "size-4 fill-amber-400 text-amber-400",
								"aria-hidden": "true"
							}, i))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, {
							className: "mt-4 size-6 text-accent",
							"aria-hidden": "true"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
							className: "mt-4 text-lg text-foreground/90",
							children: [
								"„",
								t.quote,
								"\""
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 text-sm font-medium text-muted-foreground",
							children: [t.author, t.location && `, ${t.location}`]
						})
					]
				}, t.author))
			})]
		})
	});
}
var trustItems = [
	{
		icon: HeartHandshake,
		label: "Individuelle Pflege",
		text: "Abgestimmt auf Gewohnheiten und Bedürfnisse"
	},
	{
		icon: Languages,
		label: "Mehrsprachige Betreuung",
		text: "Neun Sprachen im Angebot"
	},
	{
		icon: BadgeCheck,
		label: "Von allen Krankenkassen zugelassen",
		text: "Abrechnung nach Verordnung und Pflegegrad"
	}
];
var trustPoints = [
	"Ganzheitlicher Pflegeansatz – Körper, Seele und Geist",
	"Individuelle Betreuung nach persönlichen Gewohnheiten",
	"Mehrsprachiges Angebot",
	"Kulturell und religiös sensible Pflege",
	"Laufende, unabhängige Qualitätssicherung",
	"Von allen Krankenkassen zugelassen"
];
function HomePage() {
	const featured = featuredServiceSlugs.map((slug) => serviceBySlug(slug)).filter((s) => Boolean(s));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden bg-surface",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"aria-hidden": "true",
					className: "float-slow pointer-events-none absolute -top-40 -right-32 size-[34rem] rounded-full bg-accent-soft opacity-70 blur-3xl"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-page relative grid gap-12 py-14 md:py-20 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "animate-fade-in",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-primary shadow-soft",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "size-2 animate-pulse rounded-full bg-accent",
										"aria-hidden": "true"
									}),
									"Ambulanter Pflegedienst in ",
									company.city
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "mt-6 text-4xl leading-[1.08] font-extrabold sm:text-5xl lg:text-6xl",
								children: [
									"Professionelle Pflege.",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-gradient-brand",
										children: "Menschlich. Individuell."
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-6 max-w-xl text-lg text-muted-foreground md:text-xl",
								children: [
									"Medicum unterstützt Menschen in ",
									company.serviceAreaLabel,
									" mit individueller Pflege, medizinischer Behandlungspflege und zuverlässiger Unterstützung im Alltag – zu Hause, in gewohnter Umgebung."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/kontakt",
									className: "inline-flex min-h-13 items-center justify-center rounded-full bg-primary px-8 py-3.5 font-semibold text-primary-foreground shadow-soft btn-sheen",
									children: "Pflegeberatung anfragen"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/leistungen",
									className: "inline-flex min-h-13 items-center justify-center gap-2 rounded-full border border-border bg-card px-8 py-3.5 font-semibold text-primary transition-colors hover:border-accent",
									children: ["Unsere Leistungen", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
										className: "size-4",
										"aria-hidden": "true"
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: company.phoneHref,
								className: "mt-7 inline-flex flex-wrap items-center gap-x-3 gap-y-1 text-lg font-semibold text-primary hover:text-accent",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "flex size-11 items-center justify-center rounded-full bg-accent-soft text-accent",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
											className: "size-5",
											"aria-hidden": "true"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "whitespace-nowrap",
										children: company.phone
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm font-normal whitespace-nowrap text-muted-foreground",
										children: company.officeHoursShort
									})
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Parallax3D, {
						className: "relative",
						strength: 7,
						depth: 14,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "overflow-hidden rounded-3xl shadow-lift",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: hero_pflege_default,
									width: 1600,
									height: 1200,
									fetchPriority: "high",
									decoding: "async",
									alt: "Pflegefachkraft von Medicum im Gespräch mit einer älteren Frau in deren Wohnzimmer in Hanau",
									className: "h-full w-full scale-105 object-cover transition-transform duration-700 ease-out"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 rounded-2xl border border-border bg-card p-5 shadow-soft sm:absolute sm:-bottom-8 sm:-left-6 sm:mt-0 sm:max-w-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display font-bold text-primary",
									children: "Wir kümmern uns."
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted-foreground",
									children: "Pflege, die sich an Ihrem Alltag orientiert – nicht umgekehrt."
								})]
							})]
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border-t border-border bg-background",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "container-page grid gap-6 py-8 sm:grid-cols-3",
						children: trustItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, {
								className: "mt-0.5 size-5 shrink-0 text-accent",
								"aria-hidden": "true"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block font-semibold text-primary",
								children: item.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-sm text-muted-foreground",
								children: item.text
							})] })]
						}, item.label))
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			"aria-labelledby": "leistungen-heading",
			className: "section-y",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						className: "max-w-2xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							id: "leistungen-heading",
							className: "text-3xl font-bold md:text-4xl",
							children: "Unsere Leistungen"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-lg text-muted-foreground",
							children: "Von der medizinischen Behandlungspflege bis zur Unterstützung im Haushalt: Wir stellen die Leistungen so zusammen, wie Sie sie brauchen."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
						children: featured.map((service, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							as: "li",
							delay: i * 60,
							className: "h-full",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceCard, { service })
						}, service.slug))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						className: "mt-10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/leistungen",
							className: "inline-flex min-h-12 items-center gap-2 rounded-full border border-border bg-card px-7 font-semibold text-primary transition-colors hover:border-accent",
							children: [
								"Alle ",
								services.length,
								" Leistungen ansehen",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
									className: "size-4",
									"aria-hidden": "true"
								})
							]
						})
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			"aria-labelledby": "vertrauen-heading",
			className: "section-y bg-surface",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page grid gap-12 lg:grid-cols-2 lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden rounded-3xl shadow-lift",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: team_medicum_default,
						width: 1408,
						height: 1008,
						loading: "lazy",
						decoding: "async",
						alt: "Drei Pflegekräfte von Medicum im Gespräch im Flur einer Wohnung",
						className: "h-full w-full object-cover"
					})
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: 80,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							id: "vertrauen-heading",
							className: "text-3xl font-bold md:text-4xl",
							children: "Warum Menschen sich für Medicum entscheiden"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-lg text-muted-foreground",
							children: "Für uns ist jeder Mensch eine individuelle Einheit aus Körper, Seele und Geist. Diese Haltung prägt, wie wir pflegen: aufmerksam, respektvoll und ohne Vorurteile."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-7 space-y-3",
							children: trustPoints.map((point) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
									className: "mt-1 size-5 shrink-0 text-accent",
									"aria-hidden": "true"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-foreground/90",
									children: point
								})]
							}, point))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/ueber-uns",
							className: "mt-8 inline-flex min-h-12 items-center gap-2 font-semibold text-accent",
							children: ["Mehr über unser Leitbild", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
								className: "size-4",
								"aria-hidden": "true"
							})]
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguagesSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaqSection, {
			faqs: homeFaqs,
			title: "Häufige Fragen zur Pflege in Hanau",
			intro: "Kurze Antworten auf die Fragen, die uns am häufigsten gestellt werden. Wenn Ihre Frage nicht dabei ist, rufen Sie uns gerne an."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-20" })
	] });
}
//#endregion
export { HomePage as component };

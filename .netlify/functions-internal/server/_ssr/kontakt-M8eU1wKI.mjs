import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { i as getServerFnById, r as createServerFn, t as TSS_SERVER_FUNCTION } from "./server-6c7O8yLE2.mjs";
import { n as objectType, r as stringType, t as literalType } from "../_libs/zod.mjs";
import { E as Clock, O as CircleCheck, c as Printer, g as LoaderCircle, h as Mail, l as Phone, m as MapPin, o as ShieldCheck, u as Navigation } from "../_libs/lucide-react.mjs";
import { t as Breadcrumbs } from "./Breadcrumbs-BZRHlxZw.mjs";
import { a as crumbs$2, f as company, m as languages, p as fullAddress, s as cn } from "./router-D9WlpxzW.mjs";
import { t as Reveal } from "./Reveal-Cppm1T_U.mjs";
import { n as useForm, t as u } from "../_libs/@hookform/resolvers+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/kontakt-M8eU1wKI.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
/**
* Serverseitige Validierung der Kontaktanfrage.
*
* WICHTIG / TODO für den Betrieb:
* Aktuell wird die Anfrage serverseitig geprüft und protokolliert, aber noch
* NICHT per E-Mail zugestellt. Für den Live-Betrieb muss hier ein
* E-Mail-Versand (z. B. über einen Transaktions-Mail-Dienst) oder eine
* Speicherung in der Datenbank ergänzt werden. Bis dahin bleiben Telefon und
* E-Mail die verbindlichen Kontaktwege – beide sind auf der Kontaktseite
* prominent verlinkt.
*
* Aus Datenschutzgründen werden bewusst KEINE Gesundheitsdaten abgefragt.
*/
var contactSchema = objectType({
	vorname: stringType().trim().min(2, "Bitte geben Sie Ihren Vornamen an.").max(80),
	nachname: stringType().trim().min(2, "Bitte geben Sie Ihren Nachnamen an.").max(80),
	email: stringType().trim().min(1, "Bitte geben Sie eine E-Mail-Adresse an.").email("Bitte prüfen Sie Ihre E-Mail-Adresse.").max(160),
	telefon: stringType().trim().max(40).regex(/^[0-9+()\/\s-]*$/, "Bitte geben Sie eine gültige Telefonnummer an.").optional().or(literalType("")),
	anliegen: stringType().trim().min(1, "Bitte wählen Sie ein Anliegen aus.").max(80),
	sprache: stringType().trim().max(40).optional().or(literalType("")),
	nachricht: stringType().trim().min(10, "Bitte beschreiben Sie Ihr Anliegen in wenigen Sätzen.").max(2e3, "Bitte fassen Sie sich etwas kürzer (maximal 2000 Zeichen)."),
	datenschutz: literalType(true, { errorMap: () => ({ message: "Bitte bestätigen Sie die Datenschutzhinweise." }) }),
	/** Honeypot gegen automatisierte Spam-Einträge – muss leer bleiben. */
	website: stringType().max(0).optional().or(literalType(""))
});
var submitContactRequest = createServerFn({ method: "POST" }).inputValidator((data) => contactSchema.parse(data)).handler(createSsrRpc("fbaaeece99b2a6e0e7f784ac00cd87823d5155c1dc258d50c844c46fdfda3548"));
var anliegen = [
	"Pflegeberatung",
	"Behandlungspflege",
	"Grundpflege",
	"Haushaltshilfe",
	"Betreuung",
	"Verhinderungspflege",
	"Sterbebegleitung",
	"Allgemeine Frage"
];
var fieldClass = "min-h-12 w-full rounded-xl border border-input bg-card px-4 text-base text-foreground transition-colors placeholder:text-muted-foreground focus-visible:border-accent";
var labelClass = "block text-sm font-semibold text-primary";
var errorClass = "mt-1.5 text-sm text-destructive";
function ContactForm() {
	const [sent, setSent] = (0, import_react.useState)(false);
	const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
		resolver: u(contactSchema),
		defaultValues: {
			anliegen: "Pflegeberatung",
			sprache: "Deutsch",
			website: ""
		}
	});
	const onSubmit = handleSubmit(async (values) => {
		await submitContactRequest({ data: values });
		setSent(true);
	});
	if (sent) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		role: "status",
		className: "rounded-3xl border border-accent bg-accent-soft p-8 text-center shadow-soft",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
				className: "mx-auto size-10 text-accent",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-4 font-display text-2xl font-bold",
				children: "Vielen Dank für Ihre Anfrage. Wir melden uns schnellstmöglich bei Ihnen."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 text-muted-foreground",
				children: [
					"Wenn Ihr Anliegen dringend ist, erreichen Sie uns während unserer Bürozeiten (",
					company.officeHoursShort,
					") telefonisch unter",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: company.phoneHref,
						className: "font-semibold text-primary hover:underline",
						children: company.phone
					}),
					"."
				]
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit,
		noValidate: true,
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 sm:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: labelClass,
							htmlFor: "vorname",
							children: ["Vorname ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": "true",
								children: "*"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "vorname",
							autoComplete: "given-name",
							className: cn(fieldClass, "mt-2", errors.vorname && "border-destructive"),
							"aria-invalid": Boolean(errors.vorname),
							"aria-describedby": errors.vorname ? "vorname-error" : void 0,
							...register("vorname")
						}),
						errors.vorname && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							id: "vorname-error",
							className: errorClass,
							children: errors.vorname.message
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: labelClass,
							htmlFor: "nachname",
							children: ["Nachname ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": "true",
								children: "*"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "nachname",
							autoComplete: "family-name",
							className: cn(fieldClass, "mt-2", errors.nachname && "border-destructive"),
							"aria-invalid": Boolean(errors.nachname),
							"aria-describedby": errors.nachname ? "nachname-error" : void 0,
							...register("nachname")
						}),
						errors.nachname && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							id: "nachname-error",
							className: errorClass,
							children: errors.nachname.message
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: labelClass,
							htmlFor: "email",
							children: ["E-Mail ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": "true",
								children: "*"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "email",
							type: "email",
							inputMode: "email",
							autoComplete: "email",
							className: cn(fieldClass, "mt-2", errors.email && "border-destructive"),
							"aria-invalid": Boolean(errors.email),
							"aria-describedby": errors.email ? "email-error" : void 0,
							...register("email")
						}),
						errors.email && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							id: "email-error",
							className: errorClass,
							children: errors.email.message
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: labelClass,
							htmlFor: "telefon",
							children: ["Telefon ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-normal text-muted-foreground",
								children: "(optional)"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "telefon",
							type: "tel",
							inputMode: "tel",
							autoComplete: "tel",
							className: cn(fieldClass, "mt-2", errors.telefon && "border-destructive"),
							"aria-invalid": Boolean(errors.telefon),
							...register("telefon")
						}),
						errors.telefon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: errorClass,
							children: errors.telefon.message
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: labelClass,
						htmlFor: "anliegen",
						children: ["Worum geht es? ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": "true",
							children: "*"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
						id: "anliegen",
						className: cn(fieldClass, "mt-2 appearance-none"),
						...register("anliegen"),
						children: anliegen.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: a,
							children: a
						}, a))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: labelClass,
						htmlFor: "sprache",
						children: [
							"Bevorzugte Sprache",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-normal text-muted-foreground",
								children: "(optional)"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
						id: "sprache",
						className: cn(fieldClass, "mt-2 appearance-none"),
						...register("sprache"),
						children: languages.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: l.label,
							children: l.label === l.native ? l.label : `${l.label} – ${l.native}`
						}, l.code))
					})] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: labelClass,
					htmlFor: "nachricht",
					children: ["Nachricht ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-hidden": "true",
						children: "*"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					id: "nachricht",
					rows: 6,
					className: cn(fieldClass, "mt-2 resize-y py-3 leading-relaxed", errors.nachricht && "border-destructive"),
					"aria-invalid": Boolean(errors.nachricht),
					"aria-describedby": "nachricht-hinweis",
					placeholder: "Beschreiben Sie kurz, worum es geht und wie wir Sie am besten erreichen.",
					...register("nachricht")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					id: "nachricht-hinweis",
					className: "mt-2 text-sm text-muted-foreground",
					children: "Bitte senden Sie uns über dieses Formular keine Gesundheits- oder Diagnosedaten. Persönliche Einzelheiten besprechen wir gerne telefonisch oder im persönlichen Gespräch."
				}),
				errors.nachricht && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: errorClass,
					children: errors.nachricht.message
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"aria-hidden": "true",
				className: "absolute -left-[9999px] h-0 w-0 overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					htmlFor: "website",
					children: "Website"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					id: "website",
					tabIndex: -1,
					autoComplete: "off",
					...register("website")
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start gap-3 rounded-xl bg-surface p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					id: "datenschutz",
					type: "checkbox",
					className: "mt-1 size-5 shrink-0 rounded border-input accent-[oklch(0.56_0.075_190)]",
					"aria-describedby": errors.datenschutz ? "datenschutz-error" : void 0,
					...register("datenschutz")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					htmlFor: "datenschutz",
					className: "text-sm leading-relaxed",
					children: [
						"Ich habe die",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/datenschutz",
							className: "font-semibold text-primary underline",
							children: "Datenschutzhinweise"
						}),
						" ",
						"gelesen und bin damit einverstanden, dass meine Angaben zur Bearbeitung meiner Anfrage verwendet werden. ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": "true",
							children: "*"
						})
					]
				}), errors.datenschutz && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					id: "datenschutz-error",
					className: errorClass,
					children: errors.datenschutz.message
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "submit",
					disabled: isSubmitting,
					className: "inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-8 font-semibold text-primary-foreground btn-sheen shadow-soft disabled:pointer-events-none disabled:opacity-70",
					children: [isSubmitting && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
						className: "size-4 animate-spin",
						"aria-hidden": "true"
					}), isSubmitting ? "Wird gesendet …" : "Anfrage senden"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "flex items-center gap-2 text-sm text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
						className: "size-4 text-accent",
						"aria-hidden": "true"
					}), "Ihre Angaben werden ausschließlich zur Bearbeitung Ihrer Anfrage genutzt."]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-muted-foreground",
				children: [
					"Mit ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-hidden": "true",
						children: "*"
					}),
					" gekennzeichnete Felder sind Pflichtfelder."
				]
			})
		]
	});
}
function KontaktPage() {
	const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${company.mapsQuery}`;
	const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${company.mapsQuery}`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-surface",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page py-12 md:py-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Breadcrumbs, { items: crumbs$2 }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-6 max-w-3xl text-4xl font-extrabold md:text-5xl",
						children: "Kontakt aufnehmen – wir hören zu"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-2xl text-lg text-muted-foreground",
						children: "Ob erste Frage oder konkreter Pflegebedarf: Schreiben Sie uns oder rufen Sie an. Wir klären mit Ihnen in Ruhe, welche Unterstützung möglich ist."
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section-y",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:items-start",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-3xl border border-border bg-card p-8 shadow-soft",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl font-bold",
							children: "Medicum"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: company.tagline
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("address", {
							className: "mt-7 space-y-5 not-italic",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "flex items-start gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
										className: "mt-1 size-5 shrink-0 text-accent",
										"aria-hidden": "true"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block font-semibold text-primary",
											children: "Adresse"
										}),
										company.street,
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										company.postalCode,
										" ",
										company.city
									] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "flex items-start gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
										className: "mt-1 size-5 shrink-0 text-accent",
										"aria-hidden": "true"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block font-semibold text-primary",
										children: "Telefon"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: company.phoneHref,
										className: "text-lg hover:underline",
										children: company.phone
									})] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "flex items-start gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, {
										className: "mt-1 size-5 shrink-0 text-accent",
										"aria-hidden": "true"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block font-semibold text-primary",
										children: "Fax"
									}), company.fax] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "flex items-start gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
										className: "mt-1 size-5 shrink-0 text-accent",
										"aria-hidden": "true"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block font-semibold text-primary",
										children: "E-Mail"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: company.emailHref,
										className: "break-all hover:underline",
										children: company.email
									})] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "flex items-start gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, {
										className: "mt-1 size-5 shrink-0 text-accent",
										"aria-hidden": "true"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block font-semibold text-primary",
										children: "Bürozeiten"
									}), company.officeHours] })]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-col gap-3 sm:flex-row",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: company.phoneHref,
								className: "inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full bg-primary px-6 font-semibold text-primary-foreground btn-sheen shadow-soft",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
									className: "size-4",
									"aria-hidden": "true"
								}), "Jetzt anrufen"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: company.emailHref,
								className: "inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full border border-border px-6 font-semibold text-primary hover:border-accent",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
									className: "size-4",
									"aria-hidden": "true"
								}), "E-Mail schreiben"]
							})]
						})
					]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 80,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-3xl border border-border bg-card p-8 shadow-soft",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-2xl font-bold",
								children: "Anfrage senden"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-muted-foreground",
								children: "Wir melden uns während unserer Bürozeiten bei Ihnen zurück."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-8",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactForm, {})
							})
						]
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			"aria-labelledby": "anfahrt-heading",
			className: "section-y bg-surface",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						id: "anfahrt-heading",
						className: "text-3xl font-bold md:text-4xl",
						children: "So finden Sie uns"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 max-w-2xl text-muted-foreground",
						children: [
							"Unser Büro befindet sich in der ",
							company.street,
							" in ",
							company.postalCode,
							" ",
							company.city,
							". Eine Beratung ist nach Absprache auch bei Ihnen zu Hause möglich."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 overflow-hidden rounded-3xl border border-border shadow-soft",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
							title: `Karte mit dem Standort von Medicum, ${fullAddress}`,
							src: `https://www.openstreetmap.org/export/embed.html?bbox=8.905%2C50.126%2C8.935%2C50.142&layer=mapnik&marker=50.1339%2C8.9200`,
							className: "h-[360px] w-full border-0",
							loading: "lazy",
							referrerPolicy: "no-referrer-when-downgrade"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: directionsUrl,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "inline-flex min-h-12 items-center gap-2 rounded-full bg-primary px-6 font-semibold text-primary-foreground btn-sheen shadow-soft",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigation, {
								className: "size-4",
								"aria-hidden": "true"
							}), "Route planen"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: mapsUrl,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "inline-flex min-h-12 items-center gap-2 rounded-full border border-border bg-card px-6 font-semibold text-primary hover:border-accent",
							children: "Standort in Karten öffnen"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm text-muted-foreground",
						children: "Hinweis: Die Karte wird von OpenStreetMap geladen. Dabei wird Ihre IP-Adresse an den Kartendienst übertragen."
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-20" })
	] });
}
//#endregion
export { KontaktPage as component };

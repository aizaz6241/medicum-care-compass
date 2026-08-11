import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, h as Link, j as notFound, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { r as __exportAll } from "./server-DodVHjpM.mjs";
import { A as ChevronDown, C as Flower2, D as Circle, E as Clock, M as CalendarClock, S as Footprints, T as Droplets, b as HandHeart, c as Printer, d as MessageSquare, f as MessageCircle, h as Mail, i as Stethoscope, j as Check, k as ChevronRight, l as Phone, m as MapPin, n as Utensils, p as Menu, r as Users, t as X, v as House, x as Globe } from "../_libs/lucide-react.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { a as Label2, c as Root2, d as SubTrigger2, f as Trigger, i as ItemIndicator2, l as Separator2, n as Content2, o as Portal2, r as Item2, s as RadioItem2, t as CheckboxItem2, u as SubContent2 } from "../_libs/@radix-ui/react-dropdown-menu+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/company-CmCj14_-.js
/**
* Zentrale Unternehmensdaten (NAP).
* Quelle: Medicum Firmenbroschüre, Stand Januar 2022.
* Alle Angaben an EINER Stelle pflegen – sie werden in Header, Footer,
* Kontaktseite, Impressum und im strukturierten Datenmarkup verwendet.
*/
var company = {
	name: "Medicum",
	legalName: "Medicum",
	tagline: "Ambulanter Pflegedienst in Hanau",
	street: "Hirschstraße 13",
	postalCode: "63450",
	city: "Hanau",
	country: "Deutschland",
	countryCode: "DE",
	phone: "06181 49 84 570",
	phoneHref: "tel:+4961814984570",
	fax: "06181 49 84 572",
	email: "info@medicum-pflegedienst.de",
	emailHref: "mailto:info@medicum-pflegedienst.de",
	domain: "medicum-pflegedienst.de",
	officeHours: "Montag bis Freitag, 08:00 – 16:00 Uhr",
	officeHoursShort: "Mo – Fr, 08:00 – 16:00 Uhr",
	/**
	* Einsatzgebiet: laut Broschüre nicht abschließend definiert.
	* Sobald das tatsächliche Einsatzgebiet bestätigt ist, hier ergänzen
	* (und erst dann eigene Ortsseiten anlegen).
	*/
	serviceAreaLabel: "Hanau",
	mapsQuery: "Medicum+Hirschstra%C3%9Fe+13+63450+Hanau"
};
var fullAddress = `${company.street}, ${company.postalCode} ${company.city}`;
/** Sprachangebot laut Broschüre. */
var languages = [
	{
		code: "de",
		label: "Deutsch",
		native: "Deutsch",
		dir: "ltr"
	},
	{
		code: "en",
		label: "Englisch",
		native: "English",
		dir: "ltr"
	},
	{
		code: "ru",
		label: "Russisch",
		native: "Русский",
		dir: "ltr"
	},
	{
		code: "ro",
		label: "Rumänisch",
		native: "Română",
		dir: "ltr"
	},
	{
		code: "ps",
		label: "Paschto",
		native: "پښتو",
		dir: "rtl"
	},
	{
		code: "hi",
		label: "Hindi",
		native: "हिन्दी",
		dir: "ltr"
	},
	{
		code: "prs",
		label: "Dari",
		native: "دری",
		dir: "rtl"
	},
	{
		code: "fa",
		label: "Persisch",
		native: "فارسی",
		dir: "rtl"
	},
	{
		code: "ur",
		label: "Urdu",
		native: "اردو",
		dir: "rtl"
	}
];
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/service-icons-ChJKe3PR.js
var services = [
	{
		slug: "behandlungspflege",
		title: "Behandlungspflege",
		teaser: "Medizinische Pflegeleistungen nach ärztlicher Verordnung – von der Wundversorgung bis zur Medikamentengabe.",
		icon: "stethoscope",
		metaTitle: "Behandlungspflege in Hanau | Medicum Pflegedienst",
		metaDescription: "Medizinische Behandlungspflege in Hanau nach ärztlicher Verordnung: Wundversorgung, Verbandwechsel, Injektionen, Medikamentengabe, Blutdruck- und Blutzuckermessung.",
		intro: ["Die Behandlungspflege umfasst medizinische Pflegeleistungen, die auf ärztlicher Verordnung beruhen. Unsere Pflegefachkräfte führen diese Maßnahmen bei Ihnen zu Hause durch und unterstützen die behandelnden Ärztinnen und Ärzte bei der Therapie.", "So können viele Behandlungen im gewohnten Umfeld stattfinden – ohne dass Sie für jeden Handgriff die Praxis oder das Krankenhaus aufsuchen müssen."],
		sections: [{
			heading: "Welche Leistungen gehören zur Behandlungspflege?",
			bullets: [
				"Blutdruckmessung – regelmäßige Kontrolle und Dokumentation der Werte",
				"Blutzuckermessung – Kontrolle bei Diabetes und Weitergabe der Werte an die Arztpraxis",
				"Wundversorgung – fachgerechte Versorgung akuter und chronischer Wunden",
				"Verbandwechsel – sauberes, schonendes Wechseln von Verbänden",
				"Medikamentengabe – Stellen und Verabreichen verordneter Medikamente",
				"Injektionen – Verabreichung nach ärztlicher Anordnung"
			]
		}, {
			heading: "So arbeiten wir mit Ihrer Ärztin oder Ihrem Arzt zusammen",
			body: "Grundlage jeder Maßnahme ist die ärztliche Verordnung. Wir dokumentieren die durchgeführten Leistungen sorgfältig, achten auf Veränderungen und geben Beobachtungen an die behandelnde Praxis weiter. Wenn Fragen zur Verordnung oder zur Kostenübernahme auftauchen, unterstützen wir Sie im Rahmen unserer Pflegeberatung."
		}],
		audience: "Für Menschen, die nach einem Krankenhausaufenthalt, bei chronischen Erkrankungen oder bei einer Wunde regelmäßig medizinische Pflege benötigen – und diese zu Hause erhalten möchten.",
		faqs: [
			{
				question: "Was ist Behandlungspflege?",
				answer: "Behandlungspflege sind medizinische Pflegeleistungen, die Pflegefachkräfte auf Grundlage einer ärztlichen Verordnung erbringen. Dazu gehören bei Medicum unter anderem Wundversorgung, Verbandwechsel, Injektionen, die Gabe von Medikamenten sowie Blutdruck- und Blutzuckermessungen. Die Leistungen finden bei Ihnen zu Hause statt und unterstützen die ärztliche Behandlung."
			},
			{
				question: "Welche Leistungen der Behandlungspflege bietet Medicum an?",
				answer: "Medicum übernimmt Blutdruckmessung, Blutzuckermessung, Wundversorgung, Verbandwechsel, Medikamentengabe und Injektionen. Welche dieser Leistungen in Ihrem Fall erbracht werden, ergibt sich aus der ärztlichen Verordnung. Gerne besprechen wir den konkreten Ablauf vorab mit Ihnen und Ihren Angehörigen."
			},
			{
				question: "Brauche ich für die Behandlungspflege eine ärztliche Verordnung?",
				answer: "Ja. Leistungen der Behandlungspflege werden auf ärztliche Verordnung erbracht. Sprechen Sie dazu Ihre Hausärztin oder Ihren Hausarzt an. Wenn Sie unsicher sind, welche Schritte nötig sind, unterstützen wir Sie in einem persönlichen Beratungsgespräch."
			}
		],
		related: [
			"grundpflege",
			"pflegeberatung",
			"verhinderungspflege"
		],
		ctaLabel: "Pflegeberatung anfragen"
	},
	{
		slug: "grundpflege",
		title: "Grundpflege",
		teaser: "Unterstützung bei der täglichen Körperpflege, bei der Ernährung und bei der Mobilität – angepasst an Ihre Gewohnheiten.",
		icon: "handHeart",
		metaTitle: "Grundpflege in Hanau | Medicum Pflegedienst",
		metaDescription: "Grundpflege in Hanau: Unterstützung bei Körperpflege, Ernährung und Mobilität – individuell abgestimmt auf Wünsche, Gewohnheiten und den persönlichen Bedarf.",
		intro: ["Die Grundpflege umfasst die Unterstützung bei den alltäglichen, körperbezogenen Verrichtungen. Sie ist für viele Menschen die Grundlage dafür, weiterhin in den eigenen vier Wänden leben zu können.", "Wir richten unsere Unterstützung an Ihren Wünschen, Ihren Gewohnheiten und Ihrem individuellen Bedarf aus – nicht an einem starren Schema."],
		sections: [{
			heading: "Was gehört zur Grundpflege?",
			bullets: [
				"Körperpflege – Unterstützung bei Waschen, Duschen, Haut- und Mundpflege",
				"Ernährung – Hilfe bei der Nahrungsaufnahme und beim Zubereiten von Mahlzeiten",
				"Mobilität – Unterstützung beim Aufstehen, Gehen und bei Lagewechseln"
			]
		}, {
			heading: "Pflege, die sich an Ihrem Alltag orientiert",
			body: "Ob Sie morgens gerne früh aufstehen, welche Pflegeprodukte Sie gewohnt sind, welche Speisen Sie mögen: Solche Details sind für uns nicht nebensächlich. Sie prägen, wie Pflege sich anfühlt. Deshalb sprechen wir sie zu Beginn in Ruhe mit Ihnen und – wenn Sie es wünschen – mit Ihren Angehörigen ab."
		}],
		audience: "Für Menschen, die im Alltag körperliche Unterstützung benötigen und dabei so viel Selbstständigkeit wie möglich bewahren möchten.",
		faqs: [{
			question: "Was gehört zur Grundpflege?",
			answer: "Zur Grundpflege gehören bei Medicum die Körperpflege, die Unterstützung bei der Ernährung einschließlich der Zubereitung von Mahlzeiten sowie die Hilfe bei der Mobilität. Der Umfang wird individuell festgelegt: Wir unterstützen dort, wo Hilfe nötig ist, und lassen Ihnen so viel Eigenständigkeit wie möglich."
		}, {
			question: "Worin unterscheiden sich Grundpflege und Behandlungspflege?",
			answer: "Die Grundpflege umfasst die Unterstützung bei alltäglichen körperbezogenen Verrichtungen wie Körperpflege, Ernährung und Mobilität. Die Behandlungspflege umfasst medizinische Maßnahmen auf ärztliche Verordnung, etwa Wundversorgung oder Injektionen. Beide Bereiche lassen sich miteinander kombinieren."
		}],
		related: [
			"koerperpflege",
			"ernaehrung",
			"mobilitaet"
		],
		ctaLabel: "Pflegeberatung anfragen"
	},
	{
		slug: "koerperpflege",
		title: "Körperpflege",
		teaser: "Achtsame Unterstützung bei der täglichen Hygiene – mit Respekt für Ihre Vorlieben und Ihre Privatsphäre.",
		icon: "droplets",
		metaTitle: "Körperpflege zu Hause in Hanau | Medicum Pflegedienst",
		metaDescription: "Unterstützung bei der Körperpflege zu Hause in Hanau: Waschen, Duschen, Haut- und Mundpflege – achtsam, diskret und an Ihren persönlichen Gewohnheiten orientiert.",
		intro: ["Körperpflege ist ein sehr persönlicher Bereich. Genau deshalb gehen wir hier besonders achtsam vor: Wir arbeiten diskret, erklären, was wir tun, und respektieren Ihre Grenzen.", "Sie sollen sich wohlfühlen – und genau darauf richten wir unsere Unterstützung aus."],
		sections: [{
			heading: "Womit wir Sie unterstützen",
			bullets: [
				"Waschen, Duschen und Baden – mit der Unterstützung, die Sie brauchen",
				"Hautpflege mit den Produkten, die Sie gewohnt sind",
				"Mund-, Zahn- und Prothesenpflege",
				"Haar- und Nagelpflege im Rahmen der Grundpflege",
				"Hilfe beim An- und Auskleiden"
			]
		}, {
			heading: "Gewohnheiten zählen",
			body: "Ob morgens oder abends gewaschen wird, welche Seife verwendet wird, wie viel Hilfe gewünscht ist: Wir orientieren uns an Ihren Gewohnheiten und an Ihrem kulturellen und religiösen Hintergrund. Was für Sie selbstverständlich ist, bleibt es auch mit Pflegebedarf."
		}],
		audience: "Für Menschen, denen die tägliche Hygiene allein schwerfällt und die dabei würdevoll begleitet werden möchten.",
		faqs: [{
			question: "Was umfasst die Körperpflege durch einen Pflegedienst?",
			answer: "Die Körperpflege umfasst die Unterstützung beim Waschen, Duschen oder Baden, die Haut- und Mundpflege sowie Hilfe beim An- und Auskleiden. Bei Medicum richtet sich der Umfang nach Ihrem Bedarf und Ihren Gewohnheiten. Wir arbeiten diskret und beziehen Ihre persönlichen Wünsche in die Planung ein."
		}],
		related: [
			"grundpflege",
			"ernaehrung",
			"mobilitaet"
		],
		ctaLabel: "Unterstützung anfragen"
	},
	{
		slug: "ernaehrung",
		title: "Ernährung",
		teaser: "Hilfe beim Zubereiten von Mahlzeiten und bei der Nahrungsaufnahme – mit Blick auf Vorlieben und gewohnte Essgewohnheiten.",
		icon: "utensils",
		metaTitle: "Unterstützung bei der Ernährung in Hanau | Medicum Pflegedienst",
		metaDescription: "Unterstützung bei Ernährung und Mahlzeiten zu Hause in Hanau: Zubereiten von Mahlzeiten, Hilfe bei der Nahrungsaufnahme und Rücksicht auf persönliche Essgewohnheiten.",
		intro: ["Ernährung bedeutet mehr als nur Nahrungsaufnahme. Mahlzeiten geben dem Tag Struktur, sie sind Genuss, Erinnerung und oft auch ein Stück Heimat.", "Wir unterstützen Sie dabei, regelmäßig und gut zu essen – und behalten dabei im Blick, was Ihnen schmeckt und was Sie gewohnt sind."],
		sections: [{
			heading: "Unsere Unterstützung im Bereich Ernährung",
			bullets: [
				"Zubereiten von Mahlzeiten im gewohnten Umfeld",
				"Hilfe bei der Nahrungsaufnahme, wenn das Essen allein schwerfällt",
				"Berücksichtigung persönlicher Vorlieben und Abneigungen",
				"Rücksicht auf kulturelle und religiöse Essgewohnheiten",
				"Achten auf eine ausreichende Flüssigkeitsaufnahme"
			]
		}, {
			heading: "Essen als Teil der Lebensqualität",
			body: "Wir nehmen uns Zeit. Eine Mahlzeit soll nicht abgearbeitet werden, sondern ein angenehmer Moment im Tagesablauf sein. Wenn sich Appetit oder Gewicht spürbar verändern, sprechen wir Sie und – nach Absprache – Ihre Angehörigen darauf an."
		}],
		audience: "Für Menschen, die beim Kochen oder beim Essen Unterstützung brauchen oder denen regelmäßige Mahlzeiten schwerfallen.",
		faqs: [{
			question: "Bereitet Medicum auch Mahlzeiten zu?",
			answer: "Ja. Das Zubereiten von Mahlzeiten gehört zu unseren Leistungen. Wir richten uns dabei nach Ihren Vorlieben und Ihren gewohnten Essgewohnheiten, einschließlich kultureller und religiöser Aspekte. Wenn Sie Unterstützung bei der Nahrungsaufnahme benötigen, begleiten wir Sie auch dabei."
		}],
		related: [
			"grundpflege",
			"haushaltshilfe",
			"koerperpflege"
		],
		ctaLabel: "Unterstützung anfragen"
	},
	{
		slug: "mobilitaet",
		title: "Mobilität",
		teaser: "Unterstützung, die Beweglichkeit im Alltag erhält und fördert – für mehr Sicherheit und Selbstständigkeit.",
		icon: "footprints",
		metaTitle: "Unterstützung bei der Mobilität in Hanau | Medicum Pflegedienst",
		metaDescription: "Mobilität erhalten und fördern: Unterstützung beim Aufstehen, Gehen und bei Lagewechseln zu Hause in Hanau – für mehr Sicherheit und Selbstständigkeit im Alltag.",
		intro: ["Beweglich zu bleiben bedeutet, am eigenen Leben teilzuhaben: aufstehen, sich in der Wohnung bewegen, ans Fenster gehen, Besuch empfangen.", "Unsere Unterstützung ist darauf ausgerichtet, vorhandene Bewegungsfähigkeit zu erhalten und im Alltag zu fördern."],
		sections: [{
			heading: "Womit wir Sie unterstützen",
			bullets: [
				"Hilfe beim Aufstehen, Hinsetzen und Umsetzen",
				"Begleitung beim Gehen innerhalb der Wohnung",
				"Unterstützung bei Lagewechseln",
				"Sicherer Umgang mit vorhandenen Hilfsmitteln",
				"Anregung zu Bewegung im Rahmen des Tagesablaufs"
			]
		}, {
			heading: "Selbstständigkeit als Ziel",
			body: "Wir nehmen Ihnen nicht ab, was Sie selbst können. Stattdessen geben wir dort Sicherheit, wo sie fehlt. Wenn Hilfsmittel den Alltag erleichtern könnten, sprechen wir das im Rahmen unserer Pflegeberatung an."
		}],
		audience: "Für Menschen mit eingeschränkter Beweglichkeit, die sich zu Hause sicherer bewegen und ihre Selbstständigkeit bewahren möchten.",
		faqs: [{
			question: "Wie unterstützt Medicum bei eingeschränkter Mobilität?",
			answer: "Wir helfen beim Aufstehen, Hinsetzen und Umsetzen, begleiten beim Gehen in der Wohnung und unterstützen bei Lagewechseln. Ziel ist es, vorhandene Beweglichkeit zu erhalten und zu fördern. Zu passenden Hilfsmitteln beraten wir Sie im Rahmen unserer Pflegeberatung."
		}],
		related: [
			"grundpflege",
			"pflegeberatung",
			"betreuung"
		],
		ctaLabel: "Unterstützung anfragen"
	},
	{
		slug: "haushaltshilfe",
		title: "Haushaltshilfe",
		teaser: "Unterstützung im Haushalt: Reinigung der Wohnräume, Wäsche, Einkauf des täglichen Bedarfs und Gartenpflege.",
		icon: "home",
		metaTitle: "Haushaltshilfe in Hanau | Medicum Pflegedienst",
		metaDescription: "Haushaltshilfe in Hanau: Reinigung der Wohnräume, Wäsche, Einkauf des täglichen Bedarfs und Gartenpflege – individuell nach Bedarf und Umfang organisiert.",
		intro: ["Ein gepflegtes Zuhause trägt viel zum Wohlbefinden bei. Wenn Hausarbeit zur Belastung wird, übernehmen wir die Aufgaben, die Ihnen schwerfallen.", "Art und Umfang der Unterstützung stimmen wir individuell mit Ihnen ab – von einzelnen Aufgaben bis zur regelmäßigen Begleitung."],
		sections: [{
			heading: "Womit wir Sie im Haushalt unterstützen",
			bullets: [
				"Reinigung der Wohnräume",
				"Wäsche waschen, trocknen und versorgen",
				"Einkauf des täglichen Bedarfs",
				"Gartenpflege"
			]
		}, {
			heading: "Nach Ihrem Bedarf organisiert",
			body: "Wir besprechen zu Beginn, welche Aufgaben übernommen werden sollen und in welchem Rhythmus. So entsteht eine verlässliche Unterstützung, die zu Ihrem Alltag passt – und die sich anpassen lässt, wenn sich Ihre Situation verändert."
		}],
		audience: "Für Menschen, die zu Hause leben und bei der Hausarbeit, beim Einkaufen oder im Garten Entlastung brauchen.",
		faqs: [{
			question: "Welche Unterstützung bietet Medicum im Haushalt?",
			answer: "Medicum unterstützt bei der Reinigung der Wohnräume, bei der Wäsche, beim Einkauf des täglichen Bedarfs und bei der Gartenpflege. Welche Aufgaben übernommen werden und in welchem Umfang, legen wir gemeinsam mit Ihnen fest – orientiert an Ihrem tatsächlichen Bedarf."
		}],
		related: [
			"betreuung",
			"ernaehrung",
			"pflegeberatung"
		],
		ctaLabel: "Unterstützung anfragen"
	},
	{
		slug: "betreuung",
		title: "Betreuung",
		teaser: "Begleitung im Alltag: Tagesstruktur, Beschäftigung, soziale Kontakte und Hilfe bei alltäglichen Aufgaben.",
		icon: "users",
		metaTitle: "Betreuung im Alltag in Hanau | Medicum Pflegedienst",
		metaDescription: "Alltagsbegleitung und Betreuung in Hanau: Unterstützung bei Tagesstruktur, Beschäftigung, sozialen Kontakten und alltäglichen Aufgaben – zugewandt und verlässlich.",
		intro: ["Nicht jede Unterstützung ist körperlich. Manchmal geht es darum, dem Tag eine Struktur zu geben, in Kontakt zu bleiben und Aufgaben zu bewältigen, die allein schwerfallen.", "Unsere Betreuung setzt genau hier an: zugewandt, verlässlich und ohne Eile."],
		sections: [{
			heading: "Was Betreuung bei Medicum bedeutet",
			bullets: [
				"Unterstützung beim Aufbau einer verlässlichen Tagesstruktur",
				"Gespräche und Zuwendung – Zeit für den Menschen",
				"Anregung zu Beschäftigung und Aktivitäten",
				"Erhalt sozialer Kontakte",
				"Hilfe bei alltäglichen Aufgaben und Wegen"
			]
		}, {
			heading: "Entlastung für Angehörige",
			body: "Betreuung entlastet nicht nur die pflegebedürftige Person, sondern auch die Familie. Wenn Angehörige wissen, dass jemand verlässlich da ist, entsteht Raum zum Durchatmen."
		}],
		audience: "Für Menschen, die Begleitung im Alltag brauchen, und für Angehörige, die Entlastung suchen.",
		faqs: [{
			question: "Was umfasst die Betreuung durch Medicum?",
			answer: "Die Betreuung unterstützt Menschen dabei, ihren Alltag zu strukturieren und zu bewältigen. Dazu gehören eine verlässliche Tagesstruktur, Anregung zu Beschäftigung, der Erhalt sozialer Kontakte und Hilfe bei alltäglichen Aufgaben. Umfang und Rhythmus stimmen wir individuell ab."
		}],
		related: [
			"haushaltshilfe",
			"verhinderungspflege",
			"pflegeberatung"
		],
		ctaLabel: "Unterstützung anfragen"
	},
	{
		slug: "verhinderungspflege",
		title: "Verhinderungspflege",
		teaser: "Wenn pflegende Angehörige ausfallen oder eine Auszeit brauchen, übernehmen wir die Pflege vorübergehend.",
		icon: "calendarClock",
		metaTitle: "Verhinderungspflege in Hanau | Medicum Pflegedienst",
		metaDescription: "Verhinderungspflege in Hanau: Vorübergehende Pflege, wenn pflegende Angehörige erkranken oder eine Auszeit brauchen. Kosten können in der Regel die Pflegeversicherung übernehmen.",
		intro: ["Angehörige, die zu Hause pflegen, leisten viel. Doch auch sie werden krank, haben Termine oder brauchen einmal einige Tage für sich.", "In solchen Situationen übernimmt Medicum die Pflege vorübergehend – damit die Versorgung zu Hause verlässlich weiterläuft."],
		sections: [{
			heading: "Wann Verhinderungspflege sinnvoll ist",
			bullets: [
				"Wenn die pflegende Angehörige oder der pflegende Angehörige erkrankt",
				"Bei eigenen Arzt-, Kur- oder Krankenhausterminen",
				"Wenn eine Auszeit oder ein Urlaub ansteht",
				"Bei kurzfristigen beruflichen oder familiären Verpflichtungen"
			]
		}, {
			heading: "Kostenübernahme",
			body: "Die Kosten können in der Regel über die Pflegeversicherung übernommen werden. Die individuellen Voraussetzungen sollten im Einzelfall geprüft werden. Wir erklären Ihnen gerne, welche Unterlagen benötigt werden und an wen Sie sich wenden können."
		}],
		audience: "Für pflegende Angehörige, die vorübergehend ausfallen, und für pflegebedürftige Menschen, deren Versorgung in dieser Zeit gesichert sein muss.",
		faqs: [{
			question: "Was ist Verhinderungspflege?",
			answer: "Verhinderungspflege bedeutet, dass ein Pflegedienst die Pflege vorübergehend übernimmt, wenn die sonst pflegende Person verhindert ist – etwa durch Krankheit, Termine oder eine Auszeit. Die Versorgung zu Hause läuft in dieser Zeit weiter, ohne dass die Familie eine Lücke überbrücken muss."
		}, {
			question: "Wer übernimmt die Kosten für die Verhinderungspflege?",
			answer: "Die Kosten können in der Regel über die Pflegeversicherung übernommen werden. Ob und in welchem Umfang das im Einzelfall gilt, hängt von den individuellen Voraussetzungen ab und sollte vorab geprüft werden. Wir unterstützen Sie dabei, die nötigen Schritte zu klären."
		}],
		related: [
			"pflegeberatung",
			"grundpflege",
			"betreuung"
		],
		ctaLabel: "Pflegeberatung anfragen"
	},
	{
		slug: "pflegeberatung",
		title: "Pflegeberatung",
		teaser: "Orientierung im Pflegealltag: Kostenübernahme nach SGB XI, Pflegegrad beantragen, § 37.3 Beratungseinsatz, § 45b Entlastungsbetrag und Hilfsmittel.",
		icon: "messageCircle",
		metaTitle: "Pflegeberatung in Hanau | § 37.3 SGB XI | Medicum Pflegedienst",
		metaDescription: "Pflegeberatung nach § 37 Abs. 3 SGB XI in Hanau: Medicum berät zu Pflegegraden (1–5), Entlastungsbetrag (§ 45b SGB XI, 125 €/Monat), Kostenübernahme und Hilfsmitteln – persönlich und mehrsprachig.",
		intro: ["Wenn Pflege plötzlich zum Thema wird, stellen sich viele Fragen auf einmal: Wer zahlt was? Welche Hilfsmittel gibt es? Wie beantragt man einen Pflegegrad? Was ist der § 37.3 Beratungseinsatz?", "Medicum ist als ambulanter Pflegedienst in Hanau berechtigt, die gesetzlich vorgeschriebene Pflegeberatung nach § 37 Abs. 3 SGB XI durchzuführen. Wir sortieren alle Fragen gemeinsam mit Ihnen – verständlich, in Ruhe und ohne Fachchinesisch."],
		sections: [
			{
				heading: "Pflegeberatungseinsatz nach § 37 Abs. 3 SGB XI",
				body: "Wenn Sie Pflegegeld beziehen (ab Pflegegrad 2), sind Sie gesetzlich verpflichtet, regelmäßig einen Beratungseinsatz bei einem zugelassenen Pflegedienst abzurufen. Diese Pflicht ergibt sich aus § 37 Abs. 3 des Sozialgesetzbuches XI (SGB XI). Medicum führt diese Beratungseinsätze in Hanau durch und rechnet sie direkt mit Ihrer Pflegekasse ab. Die Häufigkeit ist gesetzlich festgelegt: Pflegegrad 2 und 3 alle sechs Monate, Pflegegrad 4 und 5 alle drei Monate."
			},
			{
				heading: "Pflegegrade 1 bis 5 – Was steht Ihnen zu?",
				bullets: [
					"Pflegegrad 1: Geringe Beeinträchtigung – Entlastungsbetrag 125 €/Monat (§ 45b SGB XI)",
					"Pflegegrad 2: Erhebliche Beeinträchtigung – Pflegegeld 332 €/Monat, Sachleistungen bis 761 €/Monat",
					"Pflegegrad 3: Schwere Beeinträchtigung – Pflegegeld 572 €/Monat, Sachleistungen bis 1.432 €/Monat",
					"Pflegegrad 4: Schwerste Beeinträchtigung – Pflegegeld 764 €/Monat, Sachleistungen bis 1.778 €/Monat",
					"Pflegegrad 5: Schwerste Beeinträchtigung mit besonderem Bedarf – Pflegegeld 946 €/Monat, Sachleistungen bis 2.200 €/Monat"
				]
			},
			{
				heading: "Entlastungsbetrag nach § 45b SGB XI – 125 € pro Monat",
				body: "Menschen mit anerkanntem Pflegegrad haben Anspruch auf den Entlastungsbetrag in Höhe von 125 € pro Monat (§ 45b SGB XI). Dieser Betrag kann für Haushaltshilfe, Betreuung, Alltagsbegleitung und andere Entlastungsleistungen genutzt werden, die von anerkannten Pflegediensten wie Medicum erbracht werden. Nicht genutzter Betrag kann bis zu zwölf Monate übertragen werden."
			},
			{
				heading: "Worüber wir Sie beraten",
				bullets: [
					"§ 37.3 SGB XI Beratungseinsatz – gesetzliche Pflichtberatung bei Pflegegeldbezug",
					"Beantragung eines Pflegegrades (Pflegegrad 1 bis 5) bei der Pflegekasse",
					"Entlastungsbetrag § 45b SGB XI (125 €/Monat) – Abrechnung und Nutzung",
					"Häusliche Krankenpflege (HKP) nach SGB V – Verordnung Muster 12 durch Ihren Arzt",
					"Verhinderungspflege – Kostenübernahme bis zu 1.612 € pro Jahr",
					"Anpassung des Wohnraums an den Pflegebedarf (Zuschüsse bis 4.000 €)",
					"Geeignete Hilfsmittel für den Alltag – Antrag bei der Pflegekasse",
					"Rezept- und Medikamentenmanagement",
					"Vermittlung weiterer Unterstützungsangebote in Hanau und Umgebung"
				]
			},
			{
				heading: "Was wir nicht versprechen",
				body: "Über die Anerkennung eines Pflegegrades und über Kostenübernahmen entscheiden die Pflegekasse beziehungsweise die Krankenkasse. Wir können Sie bei der Beantragung unterstützen und die Abläufe erklären – eine Bewilligung können wir nicht zusichern."
			}
		],
		audience: "Für pflegebedürftige Menschen und ihre Angehörigen in Hanau, die Pflegegeld beziehen und den gesetzlich vorgeschriebenen Beratungseinsatz (§ 37.3 SGB XI) benötigen, oder die sich einen Überblick über Pflegeleistungen, Kostenübernahme und Pflegegrade verschaffen möchten.",
		faqs: [
			{
				question: "Was ist der Pflegeberatungseinsatz nach § 37 Abs. 3 SGB XI?",
				answer: "Der Pflegeberatungseinsatz nach § 37 Abs. 3 SGB XI ist ein gesetzlich vorgeschriebener Beratungsbesuch, den Personen mit Pflegegrad 2–5, die Pflegegeld beziehen, regelmäßig bei einem zugelassenen Pflegedienst abrufen müssen. Bei Pflegegrad 2 und 3 ist dieser Besuch alle sechs Monate Pflicht, bei Pflegegrad 4 und 5 alle drei Monate. Medicum führt diese Beratungseinsätze in Hanau durch und rechnet sie direkt mit der Pflegekasse ab."
			},
			{
				question: "Bietet Medicum Pflegeberatung nach § 37.3 SGB XI in Hanau an?",
				answer: "Ja. Medicum Pflegedienst Hanau ist berechtigt, Pflegeberatungseinsätze nach § 37 Abs. 3 SGB XI durchzuführen und direkt mit Ihrer Pflegekasse abzurechnen. Rufen Sie uns an unter 06181 49 84 570, um einen Beratungstermin zu vereinbaren."
			},
			{
				question: "Was ist der Entlastungsbetrag nach § 45b SGB XI?",
				answer: "Der Entlastungsbetrag nach § 45b SGB XI beträgt 125 € pro Monat und steht allen Personen mit anerkanntem Pflegegrad (1–5) zu. Er kann für Haushaltshilfe, Betreuung, Alltagsbegleitung und andere Entlastungsleistungen bei anerkannten Anbietern wie Medicum genutzt werden. Nicht genutzter Betrag kann bis zu zwölf Monate in das nächste Kalenderjahr übertragen werden."
			},
			{
				question: "Wie beantragt man einen Pflegegrad?",
				answer: "Den Antrag auf einen Pflegegrad stellen Sie bei Ihrer Pflegekasse (dem Pflegeanteil Ihrer Krankenkasse). Nach dem Antrag schickt der Medizinische Dienst (MD) eine Gutachterin oder einen Gutachter zur Begutachtung. Medicum unterstützt Sie bei der Vorbereitung auf diese Begutachtung und erklärt, welche Unterlagen sinnvoll sind."
			},
			{
				question: "Unterstützt Medicum bei der Beantragung eines Pflegegrades?",
				answer: "Ja. Wir unterstützen Sie bei der Beantragung eines Pflegegrades und erklären, welche Schritte und Unterlagen dafür nötig sind. Die Entscheidung über die Einstufung trifft die Pflegekasse nach einer Begutachtung durch den Medizinischen Dienst – eine Bewilligung können wir deshalb nicht zusichern."
			},
			{
				question: "Was kostet die Pflegeberatung bei Medicum?",
				answer: "Der gesetzlich vorgeschriebene Beratungseinsatz nach § 37.3 SGB XI wird direkt mit Ihrer Pflegekasse abgerechnet – für Sie entstehen in der Regel keine Kosten. Für weitere Beratungsleistungen sprechen Sie uns bitte direkt an. Wir klären das transparent mit Ihnen, bevor eine Leistung beginnt."
			}
		],
		related: [
			"verhinderungspflege",
			"behandlungspflege",
			"betreuung"
		],
		ctaLabel: "Pflegeberatung anfragen"
	},
	{
		slug: "sterbebegleitung",
		title: "Sterbebegleitung",
		teaser: "Begleitung in der letzten Lebensphase zu Hause – in Zusammenarbeit mit Ärzten, Krankenhäusern und Palliativmedizinern.",
		icon: "flower",
		metaTitle: "Sterbebegleitung zu Hause in Hanau | Medicum Pflegedienst",
		metaDescription: "Sterbebegleitung zu Hause in Hanau: würdevolle Begleitung in der letzten Lebensphase, in Zusammenarbeit mit Ärzten, Krankenhäusern, Palliativmedizinern und weiteren Einrichtungen.",
		intro: ["Viele Menschen möchten ihre letzte Lebenszeit dort verbringen, wo sie zu Hause sind. Wo es möglich ist, unterstützen wir diesen Wunsch.", "Wir begleiten pflegebedürftige Menschen in dieser Phase mit Ruhe und Respekt – und wir lassen Angehörige damit nicht allein."],
		sections: [{
			heading: "Wie wir begleiten",
			bullets: [
				"Pflegerische Versorgung in der letzten Lebensphase zu Hause",
				"Zusammenarbeit mit Ärztinnen und Ärzten",
				"Zusammenarbeit mit Krankenhäusern",
				"Zusammenarbeit mit Palliativmedizinerinnen und Palliativmedizinern",
				"Zusammenarbeit mit weiteren Einrichtungen",
				"Unterstützung und Zuwendung für Angehörige"
			]
		}, {
			heading: "Zeit für Angehörige",
			body: "Diese Zeit fordert Familien sehr. Wir nehmen uns Zeit für Gespräche, erklären, was geschieht, und unterstützen dabei, den Alltag weiter zu bewältigen. Wenn weitergehende Unterstützung sinnvoll ist, helfen wir bei der Vermittlung."
		}],
		audience: "Für Menschen, die ihre letzte Lebenszeit zu Hause verbringen möchten, und für ihre Angehörigen.",
		faqs: [{
			question: "Was bedeutet Sterbebegleitung zu Hause?",
			answer: "Sterbebegleitung zu Hause bedeutet, dass ein Mensch in der letzten Lebensphase in seiner gewohnten Umgebung gepflegt und begleitet wird. Medicum arbeitet dabei mit Ärztinnen und Ärzten, Krankenhäusern, Palliativmedizinern und weiteren Einrichtungen zusammen und unterstützt auch die Angehörigen."
		}],
		related: [
			"pflegeberatung",
			"grundpflege",
			"betreuung"
		],
		ctaLabel: "Gespräch anfragen",
		tone: "calm"
	}
];
var serviceBySlug = (slug) => services.find((s) => s.slug === slug);
/** Reihenfolge für die Übersicht auf der Startseite */
var featuredServiceSlugs = [
	"behandlungspflege",
	"grundpflege",
	"pflegeberatung",
	"haushaltshilfe",
	"betreuung",
	"verhinderungspflege"
];
var serviceIcons = {
	stethoscope: Stethoscope,
	handHeart: HandHeart,
	droplets: Droplets,
	utensils: Utensils,
	footprints: Footprints,
	home: House,
	users: Users,
	calendarClock: CalendarClock,
	messageCircle: MessageCircle,
	flower: Flower2
};
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-CUExU-96.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-PEciiEIT.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function Logo({ className, tone = "default" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/",
		className: cn("group inline-flex items-center gap-3", className),
		"aria-label": `${company.name} – Startseite`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			"aria-hidden": "true",
			className: cn("flex size-11 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105", tone === "inverted" ? "bg-primary-foreground/10" : "bg-primary"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: "0 0 24 24",
				className: "size-6",
				fill: "none",
				"aria-hidden": "true",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M12 20.5S3.5 15.6 3.5 9.8A4.8 4.8 0 0 1 12 6.8a4.8 4.8 0 0 1 8.5 3c0 5.8-8.5 10.7-8.5 10.7Z",
					className: tone === "inverted" ? "stroke-primary-foreground" : "stroke-accent",
					strokeWidth: "1.6",
					strokeLinejoin: "round"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M12 10.4v4.2M9.9 12.5h4.2",
					className: tone === "inverted" ? "stroke-primary-foreground" : "stroke-primary-foreground",
					strokeWidth: "1.6",
					strokeLinecap: "round"
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "leading-tight",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("block font-display text-xl font-extrabold tracking-tight", tone === "inverted" ? "text-primary-foreground" : "text-primary"),
				children: "MEDICUM"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("block text-[0.7rem] font-medium tracking-wide uppercase", tone === "inverted" ? "text-primary-foreground/70" : "text-muted-foreground"),
				children: company.tagline
			})]
		})]
	});
}
var DropdownMenu = Root2;
var DropdownMenuTrigger = Trigger;
var DropdownMenuSubTrigger = import_react.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SubTrigger2, {
	ref,
	className: cn("flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", inset && "pl-8", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "ml-auto" })]
}));
DropdownMenuSubTrigger.displayName = SubTrigger2.displayName;
var DropdownMenuSubContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SubContent2, {
	ref,
	className: cn("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)", className),
	...props
}));
DropdownMenuSubContent.displayName = SubContent2.displayName;
var DropdownMenuContent = import_react.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal2, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	sideOffset,
	className: cn("z-50 max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md", "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)", className),
	...props
}) }));
DropdownMenuContent.displayName = Content2.displayName;
var DropdownMenuItem = import_react.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item2, {
	ref,
	className: cn("relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0", inset && "pl-8", className),
	...props
}));
DropdownMenuItem.displayName = Item2.displayName;
var DropdownMenuCheckboxItem = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CheckboxItem2, {
	ref,
	className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemIndicator2, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }) })
	}), children]
}));
DropdownMenuCheckboxItem.displayName = CheckboxItem2.displayName;
var DropdownMenuRadioItem = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RadioItem2, {
	ref,
	className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemIndicator2, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Circle, { className: "h-2 w-2 fill-current" }) })
	}), children]
}));
DropdownMenuRadioItem.displayName = RadioItem2.displayName;
var DropdownMenuLabel = import_react.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label2, {
	ref,
	className: cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className),
	...props
}));
DropdownMenuLabel.displayName = Label2.displayName;
var DropdownMenuSeparator = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator2, {
	ref,
	className: cn("-mx-1 my-1 h-px bg-muted", className),
	...props
}));
DropdownMenuSeparator.displayName = Separator2.displayName;
var DropdownMenuShortcut = ({ className, ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("ml-auto text-xs tracking-widest opacity-60", className),
		...props
	});
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";
/**
* Mehrsprachige Architektur (Grundgerüst).
*
* Aktuell ist Deutsch die einzige vollständig gepflegte und für SEO kanonische
* Sprachfassung. Weitere Sprachen sind als Auswahl vorbereitet: Sobald echte
* Übersetzungen vorliegen, können sie hier als Wörterbücher ergänzt und über
* eigene URL-Präfixe (z. B. /en/...) ausgeliefert werden.
*
* Es wird bewusst NICHT maschinell übersetzt – stattdessen erhalten Nutzerinnen
* und Nutzer den Hinweis, dass eine persönliche Beratung in ihrer Sprache
* möglich ist (Sprachangebot laut Broschüre).
*/
var STORAGE_KEY = "medicum:preferred-language";
var LanguageContext = (0, import_react.createContext)(null);
function LanguageProvider({ children }) {
	const [language, setLanguageState] = (0, import_react.useState)("de");
	const [noticeVisible, setNoticeVisible] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const stored = window.localStorage.getItem(STORAGE_KEY);
		if (stored && languages.some((l) => l.code === stored)) setLanguageState(stored);
	}, []);
	const setLanguage = (0, import_react.useCallback)((code) => {
		setLanguageState(code);
		window.localStorage.setItem(STORAGE_KEY, code);
		setNoticeVisible(code !== "de");
	}, []);
	const value = (0, import_react.useMemo)(() => ({
		language,
		setLanguage,
		isTranslationPending: language !== "de",
		noticeVisible,
		dismissNotice: () => setNoticeVisible(false)
	}), [
		language,
		setLanguage,
		noticeVisible
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageContext.Provider, {
		value,
		children
	});
}
function useLanguage() {
	const ctx = (0, import_react.useContext)(LanguageContext);
	if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
	return ctx;
}
/** Hinweistexte in der jeweiligen Sprache – kurz, geprüft und bewusst knapp gehalten. */
var languageNotice = {
	de: "Diese Website ist auf Deutsch verfügbar.",
	en: "This website is currently available in German only. We speak several languages – please call us and we will advise you personally.",
	ru: "Сайт пока доступен только на немецком языке. Мы говорим на нескольких языках — позвоните нам, и мы проконсультируем вас лично.",
	ro: "Acest site este disponibil momentan doar în limba germană. Vorbim mai multe limbi – sunați-ne și vă consiliem personal.",
	ps: "دا ویب پاڼه اوس مهال یوازې په الماني ژبه شته. موږ په څو ژبو خبرې کوو – راته زنګ ووهئ، موږ به مو په خپله ژبه لارښوونه وکړو.",
	hi: "यह वेबसाइट फ़िलहाल केवल जर्मन में उपलब्ध है। हम कई भाषाएँ बोलते हैं – कृपया हमें कॉल करें, हम आपको व्यक्तिगत रूप से सलाह देंगे।",
	prs: "این وبسایت فعلاً تنها به زبان آلمانی در دسترس است. ما به چندین زبان صحبت می‌کنیم – لطفاً با ما تماس بگیرید تا شما را راهنمایی کنیم.",
	fa: "این وب‌سایت در حال حاضر تنها به زبان آلمانی در دسترس است. ما به چند زبان صحبت می‌کنیم – لطفاً با ما تماس بگیرید.",
	ur: "یہ ویب سائٹ فی الحال صرف جرمن زبان میں دستیاب ہے۔ ہم کئی زبانیں بولتے ہیں – براہِ کرم ہمیں کال کریں، ہم آپ کی ذاتی رہنمائی کریں گے۔"
};
function LanguageSwitcher({ className }) {
	const { language, setLanguage } = useLanguage();
	const current = languages.find((l) => l.code === language) ?? languages[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuTrigger, {
		className: cn("inline-flex min-h-11 items-center gap-2 rounded-full border border-border bg-card px-4 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-primary", className),
		"aria-label": `Sprache wählen – aktuell ${current.label}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, {
			className: "size-4 text-accent",
			"aria-hidden": "true"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: current.native })]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
		align: "end",
		className: "w-60",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuLabel, { children: "Sprache wählen" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
			languages.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
				onSelect: () => setLanguage(l.code),
				className: "flex items-center justify-between gap-3 py-2.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					dir: l.dir,
					className: "text-base",
					children: l.native
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "flex items-center gap-2 text-xs text-muted-foreground",
					children: [l.label, l.code === language && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
						className: "size-4 text-accent",
						"aria-hidden": "true"
					})]
				})]
			}, l.code))
		]
	})] });
}
var mainNav = [
	{
		label: "Startseite",
		to: "/"
	},
	{
		label: "Über uns",
		to: "/ueber-uns"
	},
	{
		label: "Leistungen",
		to: "/leistungen",
		hasMenu: true
	},
	{
		label: "Pflegeberatung",
		to: "/leistungen/$slug",
		params: { slug: "pflegeberatung" }
	},
	{
		label: "Kontakt",
		to: "/kontakt"
	}
];
var linkClass = "link-underline relative inline-flex min-h-11 items-center whitespace-nowrap rounded-md px-2.5 xl:px-3 text-[0.95rem] font-medium text-foreground transition-colors duration-300 hover:text-accent data-[status=active]:text-primary data-[status=active]:font-semibold";
function Header() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [mobileOpen, setMobileOpen] = (0, import_react.useState)(false);
	const [servicesOpen, setServicesOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 12);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = mobileOpen ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [mobileOpen]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("sticky top-0 z-50 border-b transition-all duration-300", scrolled ? "border-border bg-background/92 shadow-soft backdrop-blur-md" : "border-transparent bg-background"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page flex h-20 items-center justify-between gap-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					"aria-label": "Hauptnavigation",
					className: "hidden items-center gap-1 lg:flex",
					children: mainNav.map((item) => item.hasMenu ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						onMouseEnter: () => setServicesOpen(true),
						onMouseLeave: () => setServicesOpen(false),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: item.to,
							className: cn(linkClass, "gap-1"),
							"aria-expanded": servicesOpen,
							onFocus: () => setServicesOpen(true),
							children: [item.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
								className: cn("size-4 transition-transform duration-200", servicesOpen && "rotate-180"),
								"aria-hidden": "true"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: cn("absolute top-full left-1/2 w-[38rem] -translate-x-1/2 pt-3 transition-all duration-200", servicesOpen ? "visible opacity-100" : "pointer-events-none invisible translate-y-1 opacity-0"),
							onBlur: (e) => {
								if (!e.currentTarget.contains(e.relatedTarget)) setServicesOpen(false);
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "grid grid-cols-2 gap-1 rounded-2xl border border-border bg-popover p-3 shadow-lift",
								children: services.map((s) => {
									const Icon = serviceIcons[s.icon];
									return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/leistungen/$slug",
										params: { slug: s.slug },
										className: "flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-accent-soft",
										onClick: () => setServicesOpen(false),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
											className: "mt-0.5 size-5 shrink-0 text-accent",
											"aria-hidden": "true"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm font-medium text-primary",
											children: s.title
										})]
									}) }, s.slug);
								})
							})
						})]
					}, item.label) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						params: item.params,
						className: linkClass,
						activeOptions: { exact: item.to === "/" },
						children: item.label
					}, item.label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden items-center gap-3 lg:flex",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageSwitcher, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/kontakt",
						className: "inline-flex min-h-11 items-center whitespace-nowrap rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-soft btn-sheen",
						children: "Pflegeberatung anfragen"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 lg:hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: company.phoneHref,
						className: "inline-flex size-11 items-center justify-center rounded-full bg-accent text-accent-foreground",
						"aria-label": `Jetzt anrufen: ${company.phone}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
							className: "size-5",
							"aria-hidden": "true"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setMobileOpen((v) => !v),
						"aria-expanded": mobileOpen,
						"aria-controls": "mobile-menu",
						"aria-label": mobileOpen ? "Menü schließen" : "Menü öffnen",
						className: "inline-flex size-11 items-center justify-center rounded-full border border-border bg-card text-primary",
						children: mobileOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
							className: "size-5",
							"aria-hidden": "true"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {
							className: "size-5",
							"aria-hidden": "true"
						})
					})]
				})
			]
		}), mobileOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			id: "mobile-menu",
			className: "fixed inset-x-0 top-20 bottom-0 z-40 overflow-y-auto border-t border-border bg-background lg:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				"aria-label": "Mobile Navigation",
				className: "container-page py-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-1",
						children: mainNav.filter((i) => !i.hasMenu).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.to,
							params: item.params,
							onClick: () => setMobileOpen(false),
							activeOptions: { exact: item.to === "/" },
							className: "flex min-h-12 items-center rounded-xl px-3 text-lg font-medium text-foreground data-[status=active]:bg-primary-soft data-[status=active]:text-primary",
							children: item.label
						}) }, item.label))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 mb-2 px-3 text-xs font-semibold tracking-wide text-muted-foreground uppercase",
						children: "Unsere Leistungen"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "space-y-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/leistungen",
							onClick: () => setMobileOpen(false),
							className: "flex min-h-12 items-center rounded-xl px-3 text-base font-semibold text-primary",
							children: "Alle Leistungen im Überblick"
						}) }), services.map((s) => {
							const Icon = serviceIcons[s.icon];
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/leistungen/$slug",
								params: { slug: s.slug },
								onClick: () => setMobileOpen(false),
								className: "flex min-h-12 items-center gap-3 rounded-xl px-3 text-base text-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									className: "size-5 text-accent",
									"aria-hidden": "true"
								}), s.title]
							}) }, s.slug);
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 space-y-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/kontakt",
								onClick: () => setMobileOpen(false),
								className: "flex min-h-12 items-center justify-center rounded-full bg-primary px-6 font-semibold text-primary-foreground btn-sheen shadow-soft",
								children: "Pflegeberatung anfragen"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: company.phoneHref,
								className: "flex min-h-12 items-center justify-center gap-2 rounded-full border border-border bg-card px-6 font-semibold text-primary",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
									className: "size-4",
									"aria-hidden": "true"
								}), company.phone]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "pt-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageSwitcher, { className: "w-full justify-center" })
							})
						]
					})
				]
			})
		})]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "mt-24 border-t border-border bg-primary text-primary-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { tone: "inverted" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("address", {
						className: "space-y-3 text-sm not-italic text-primary-foreground/80",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "flex items-start gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
									className: "mt-0.5 size-4 shrink-0",
									"aria-hidden": "true"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									company.street,
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									company.postalCode,
									" ",
									company.city
								] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
									className: "size-4 shrink-0",
									"aria-hidden": "true"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: company.phoneHref,
									className: "hover:underline",
									children: company.phone
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, {
									className: "size-4 shrink-0",
									"aria-hidden": "true"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Fax: ", company.fax] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
									className: "size-4 shrink-0",
									"aria-hidden": "true"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: company.emailHref,
									className: "break-all hover:underline",
									children: company.email
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "flex items-start gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, {
									className: "mt-0.5 size-4 shrink-0",
									"aria-hidden": "true"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: company.officeHours })]
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					"aria-label": "Footer-Navigation",
					className: "space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-sm font-semibold tracking-wide text-primary-foreground uppercase",
						children: "Navigation"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "space-y-2.5 text-sm text-primary-foreground/80",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								className: "hover:text-primary-foreground hover:underline",
								children: "Startseite"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/ueber-uns",
								className: "hover:text-primary-foreground hover:underline",
								children: "Über uns"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/leistungen",
								className: "hover:text-primary-foreground hover:underline",
								children: "Leistungen"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/leistungen/$slug",
								params: { slug: "pflegeberatung" },
								className: "hover:text-primary-foreground hover:underline",
								children: "Pflegeberatung in Hanau"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/kontakt",
								className: "hover:text-primary-foreground hover:underline",
								children: "Kontakt"
							}) })
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					"aria-label": "Leistungen",
					className: "space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-sm font-semibold tracking-wide text-primary-foreground uppercase",
						children: "Leistungen"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-2.5 text-sm text-primary-foreground/80",
						children: services.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/leistungen/$slug",
							params: { slug: s.slug },
							className: "hover:text-primary-foreground hover:underline",
							children: s.title
						}) }, s.slug))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-sm font-semibold tracking-wide text-primary-foreground uppercase",
							children: "Sprache"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-primary-foreground/80",
							children: "Wir sprechen mehrere Sprachen. Rufen Sie uns gerne an – wir beraten Sie persönlich."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageSwitcher, { className: "border-primary-foreground/25 bg-primary-foreground/10 text-primary-foreground hover:border-primary-foreground/50 hover:text-primary-foreground" })
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-primary-foreground/15",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page flex flex-col gap-4 py-6 text-sm text-primary-foreground/70 sm:flex-row sm:items-center sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					company.name,
					" – ",
					company.tagline,
					", ",
					company.street,
					", ",
					company.postalCode,
					" ",
					company.city
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "flex flex-wrap gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/impressum",
						className: "hover:text-primary-foreground hover:underline",
						children: "Impressum"
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/datenschutz",
						className: "hover:text-primary-foreground hover:underline",
						children: "Datenschutz"
					}) })]
				})]
			})
		})]
	});
}
/** Feste Kontaktleiste auf kleinen Bildschirmen – kurze Wege zum Anruf. */
function MobileContactBar() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 backdrop-blur-md lg:hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-2 gap-2 px-3 py-2.5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: company.phoneHref,
				className: "inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-4 font-semibold text-primary-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
					className: "size-4",
					"aria-hidden": "true"
				}), "Anrufen"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/kontakt",
				className: "inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-border bg-card px-4 font-semibold text-primary",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, {
					className: "size-4",
					"aria-hidden": "true"
				}), "Beratung"]
			})]
		})
	});
}
/** Hinweis, wenn eine Sprache gewählt wurde, für die noch keine Übersetzung vorliegt. */
function LanguageNotice() {
	const { language, noticeVisible, dismissNotice } = useLanguage();
	if (!noticeVisible || language === "de") return null;
	const meta = languages.find((l) => l.code === language);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "bg-primary text-primary-foreground",
		role: "status",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page flex flex-wrap items-center gap-x-6 gap-y-3 py-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					dir: meta?.dir,
					className: "flex-1 text-sm leading-relaxed",
					children: languageNotice[language]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: company.phoneHref,
					className: "inline-flex min-h-11 items-center gap-2 rounded-full bg-primary-foreground/10 px-4 text-sm font-semibold underline-offset-4 hover:underline",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
						className: "size-4",
						"aria-hidden": "true"
					}), company.phone]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: dismissNotice,
					"aria-label": "Hinweis schließen",
					className: "inline-flex size-11 items-center justify-center rounded-full hover:bg-primary-foreground/10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
						className: "size-4",
						"aria-hidden": "true"
					})
				})
			]
		})
	});
}
/** Kanonische Domain. Bei Domainwechsel nur hier anpassen. */
var SITE_URL = "https://medicum-pflegedienst.de";
var absoluteUrl = (path) => `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
/** OG image used across all pages for social sharing */
var OG_IMAGE = absoluteUrl("/assets/team-medicum.jpg");
var OG_IMAGE_WIDTH = "1408";
var OG_IMAGE_HEIGHT = "1008";
var OG_IMAGE_ALT = "Das Pflegeteam von Medicum – ambulanter Pflegedienst in Hanau";
/** ISO 8601 date of the last meaningful site update */
var SITE_PUBLISHED = "2024-01-01T08:00:00+01:00";
var SITE_MODIFIED = "2026-08-10T08:00:00+02:00";
/** Erzeugt konsistente Meta-Tags und den Canonical-Link für eine Route. */
function buildHead({ title, description, path, type = "website", noindex, image }) {
	const url = absoluteUrl(path);
	const ogImage = image ?? OG_IMAGE;
	return {
		meta: [
			{ title },
			{
				name: "description",
				content: description
			},
			...noindex ? [{
				name: "robots",
				content: "noindex, follow"
			}] : [{
				name: "robots",
				content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
			}],
			{
				property: "og:title",
				content: title
			},
			{
				property: "og:description",
				content: description
			},
			{
				property: "og:type",
				content: type
			},
			{
				property: "og:url",
				content: url
			},
			{
				property: "og:locale",
				content: "de_DE"
			},
			{
				property: "og:site_name",
				content: `${company.name} – ${company.tagline}`
			},
			{
				property: "og:image",
				content: ogImage
			},
			{
				property: "og:image:width",
				content: OG_IMAGE_WIDTH
			},
			{
				property: "og:image:height",
				content: OG_IMAGE_HEIGHT
			},
			{
				property: "og:image:alt",
				content: OG_IMAGE_ALT
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: title
			},
			{
				name: "twitter:description",
				content: description
			},
			{
				name: "twitter:image",
				content: ogImage
			},
			{
				name: "twitter:image:alt",
				content: OG_IMAGE_ALT
			},
			{
				property: "article:published_time",
				content: SITE_PUBLISHED
			},
			{
				property: "article:modified_time",
				content: SITE_MODIFIED
			},
			{
				property: "article:author",
				content: `${company.name} Pflegedienst Hanau`
			}
		],
		links: [{
			rel: "canonical",
			href: url
		}]
	};
}
var postalAddress = {
	"@type": "PostalAddress",
	streetAddress: company.street,
	postalCode: company.postalCode,
	addressLocality: company.city,
	addressRegion: "Hessen",
	addressCountry: company.countryCode
};
/** Full Organization schema — includes every signal needed for Local SEO, AEO, GEO & Knowledge Panel */
var localBusinessSchema = {
	"@context": "https://schema.org",
	"@type": [
		"HomeHealthCare",
		"MedicalClinic",
		"MedicalBusiness",
		"LocalBusiness"
	],
	"@id": `${SITE_URL}/#organization`,
	name: company.name,
	legalName: company.legalName,
	alternateName: [
		"Medicum Pflegedienst",
		"Medicum Hanau",
		"Medicum Pflegedienst Hanau"
	],
	description: "Ambulanter Pflegedienst in Hanau: Medicum bietet kompetente medizinische Behandlungspflege (SGB V), Grundpflege (SGB XI), Haushaltshilfe, Betreuung, Verhinderungspflege, Pflegeberatung (§ 37.3 SGB XI) und Sterbebegleitung.",
	url: SITE_URL,
	logo: {
		"@type": "ImageObject",
		url: absoluteUrl("/favicon.ico"),
		width: 64,
		height: 64
	},
	image: [absoluteUrl("/assets/team-medicum.jpg"), absoluteUrl("/assets/hero-pflege.jpg")],
	telephone: company.phone,
	faxNumber: company.fax,
	email: company.email,
	address: postalAddress,
	geo: {
		"@type": "GeoCoordinates",
		latitude: 50.1339,
		longitude: 8.92
	},
	hasMap: `https://www.google.com/maps/search/?api=1&query=${company.mapsQuery}`,
	areaServed: [
		{
			"@type": "City",
			name: "Hanau",
			sameAs: "https://www.wikidata.org/wiki/Q1499"
		},
		{
			"@type": "AdministrativeArea",
			name: "Hanau-Mitte"
		},
		{
			"@type": "AdministrativeArea",
			name: "Kesselstadt"
		},
		{
			"@type": "AdministrativeArea",
			name: "Großauheim"
		},
		{
			"@type": "AdministrativeArea",
			name: "Klein-Auheim"
		},
		{
			"@type": "AdministrativeArea",
			name: "Steinheim"
		},
		{
			"@type": "AdministrativeArea",
			name: "Wolfgang"
		},
		{
			"@type": "AdministrativeArea",
			name: "Lamboy"
		},
		{
			"@type": "City",
			name: "Maintal"
		},
		{
			"@type": "City",
			name: "Bruchköbel"
		},
		{
			"@type": "City",
			name: "Erlensee"
		},
		{
			"@type": "City",
			name: "Rodenbach"
		}
	],
	sameAs: ["https://www.gelbeseiten.de/suche/pflegedienst/hanau", "https://www.wikidata.org/wiki/Q1499"],
	contactPoint: {
		"@type": "ContactPoint",
		telephone: company.phone,
		contactType: "customer service",
		areaServed: "Hanau",
		availableLanguage: [
			"German",
			"English",
			"Russian",
			"Romanian",
			"Pashto",
			"Hindi",
			"Dari",
			"Persian",
			"Urdu"
		]
	},
	openingHoursSpecification: [{
		"@type": "OpeningHoursSpecification",
		dayOfWeek: [
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday"
		],
		opens: "08:00",
		closes: "16:00"
	}],
	availableLanguage: [
		"Deutsch",
		"English",
		"Русский",
		"Română",
		"پښتو",
		"हिन्दी",
		"دری",
		"فارسی",
		"اردو"
	],
	makesOffer: services.map((s) => ({
		"@type": "Offer",
		itemOffered: {
			"@type": "Service",
			name: s.title,
			url: absoluteUrl(`/leistungen/${s.slug}`)
		}
	}))
};
/** WebSite schema with SearchAction for Google Sitelinks Searchbox */
var websiteSchema = {
	"@context": "https://schema.org",
	"@type": "WebSite",
	"@id": `${SITE_URL}/#website`,
	url: SITE_URL,
	name: `${company.name} – ${company.tagline}`,
	inLanguage: "de-DE",
	publisher: { "@id": `${SITE_URL}/#organization` },
	potentialAction: {
		"@type": "SearchAction",
		target: {
			"@type": "EntryPoint",
			urlTemplate: `${SITE_URL}/leistungen?s={search_term_string}`
		},
		"query-input": "required name=search_term_string"
	}
};
/** SpeakableSpecification — instructs voice assistants & Google Assistant which text to read aloud */
var speakableSchema = {
	"@context": "https://schema.org",
	"@type": "WebPage",
	name: `${company.name} – Pflegedienst Hanau`,
	speakable: {
		"@type": "SpeakableSpecification",
		cssSelector: [
			".hero-summary",
			".faq-answer",
			"#leitbild-heading"
		]
	}
};
/** ContactPage schema for /kontakt */
var contactPageSchema = {
	"@context": "https://schema.org",
	"@type": "ContactPage",
	name: `Kontakt – ${company.name} Pflegedienst Hanau`,
	url: absoluteUrl("/kontakt"),
	description: `Kontaktseite von Medicum Pflegedienst Hanau. Telefon: ${company.phone}. Bürozeiten: ${company.officeHours}.`,
	mainEntity: { "@id": `${SITE_URL}/#organization` }
};
var breadcrumbSchema = (items) => ({
	"@context": "https://schema.org",
	"@type": "BreadcrumbList",
	itemListElement: items.map((item, i) => ({
		"@type": "ListItem",
		position: i + 1,
		name: item.name,
		item: absoluteUrl(item.path)
	}))
});
var faqSchema = (faqs) => ({
	"@context": "https://schema.org",
	"@type": "FAQPage",
	mainEntity: faqs.map((f) => ({
		"@type": "Question",
		name: f.question,
		acceptedAnswer: {
			"@type": "Answer",
			text: f.answer
		}
	}))
});
var serviceSchema = (name, description, path) => ({
	"@context": "https://schema.org",
	"@type": "Service",
	name,
	description,
	url: absoluteUrl(path),
	serviceType: name,
	provider: {
		"@type": "MedicalBusiness",
		name: company.name,
		telephone: company.phone,
		address: postalAddress,
		"@id": `${SITE_URL}/#organization`
	},
	areaServed: [
		{
			"@type": "City",
			name: "Hanau"
		},
		{
			"@type": "City",
			name: "Maintal"
		},
		{
			"@type": "City",
			name: "Bruchköbel"
		}
	]
});
var jsonLd = (data) => ({
	type: "application/ld+json",
	children: JSON.stringify(data)
});
`${company.name}${fullAddress}`;
function BotpressChat() {
	(0, import_react.useEffect)(() => {
		const script1 = document.createElement("script");
		script1.src = "https://cdn.botpress.cloud/webchat/v5.0/inject.js";
		script1.async = true;
		script1.onload = () => {
			const script2 = document.createElement("script");
			script2.src = "https://files.bpcontent.cloud/2026/08/10/17/20260810173615-SF19BEOA.js";
			script2.defer = true;
			document.body.appendChild(script2);
		};
		document.body.appendChild(script1);
		return () => {};
	}, []);
	return null;
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-[70vh] items-center justify-center px-4 py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-lg text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-6xl font-extrabold text-accent",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-4 text-3xl font-bold",
					children: "Diese Seite wurde leider nicht gefunden."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-muted-foreground",
					children: "Möglicherweise wurde die Adresse geändert oder die Seite existiert nicht mehr. Über die Startseite oder unsere Leistungen finden Sie schnell weiter."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-col justify-center gap-3 sm:flex-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-7 font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5",
						children: "Zur Startseite"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/leistungen",
						className: "inline-flex min-h-12 items-center justify-center rounded-full border border-border bg-card px-7 font-semibold text-primary hover:border-accent",
						children: "Unsere Leistungen"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-8 text-sm text-muted-foreground",
					children: [
						"Sie erreichen uns auch telefonisch unter",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: company.phoneHref,
							className: "font-semibold text-primary hover:underline",
							children: company.phone
						}),
						" ",
						"(",
						company.officeHoursShort,
						")."
					]
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-[70vh] items-center justify-center px-4 py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl font-bold",
					children: "Diese Seite konnte nicht geladen werden"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 text-muted-foreground",
					children: [
						"Bitte versuchen Sie es erneut. Falls das Problem bestehen bleibt, erreichen Sie uns telefonisch unter ",
						company.phone,
						"."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-6 font-semibold text-primary-foreground",
						children: "Erneut versuchen"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex min-h-12 items-center justify-center rounded-full border border-border bg-card px-6 font-semibold text-primary",
						children: "Zur Startseite"
					})]
				})
			]
		})
	});
}
var Route$8 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Medicum – Ambulanter Pflegedienst in Hanau" },
			{
				name: "description",
				content: "Medicum ist ein ambulanter Pflegedienst in Hanau: Behandlungspflege, Grundpflege, Betreuung und Pflegeberatung – menschlich, individuell und mehrsprachig."
			},
			{
				name: "author",
				content: "Medicum – Ambulanter Pflegedienst Hanau"
			},
			{
				name: "theme-color",
				content: "#07B190"
			},
			{
				name: "robots",
				content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:site_name",
				content: "Medicum – Ambulanter Pflegedienst in Hanau"
			},
			{
				property: "og:locale",
				content: "de_DE"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "format-detection",
				content: "telephone=yes"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			},
			{
				rel: "alternate",
				hrefLang: "de",
				href: SITE_URL
			},
			{
				rel: "alternate",
				hrefLang: "x-default",
				href: SITE_URL
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Manrope:wght@600;700;800&display=swap"
			}
		],
		scripts: [
			jsonLd(localBusinessSchema),
			jsonLd(websiteSchema),
			jsonLd(speakableSchema)
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "de",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$8.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LanguageProvider, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#inhalt",
				className: "skip-link",
				children: "Zum Inhalt springen"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageNotice, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				id: "inhalt",
				className: "pb-20 lg:pb-0",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileContactBar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BotpressChat, {})
		] })
	});
}
var homeFaqs = [
	{
		question: "Was ist ein ambulanter Pflegedienst?",
		answer: "Ein ambulanter Pflegedienst versorgt pflegebedürftige Menschen in ihrem eigenen Zuhause. Pflegefachkräfte kommen zu festen Zeiten in die Wohnung und übernehmen dort pflegerische und medizinische Aufgaben. So können Menschen weiterhin in ihrer gewohnten Umgebung leben, statt in eine stationäre Einrichtung wechseln zu müssen."
	},
	{
		question: "Welche Leistungen bietet Medicum an?",
		answer: "Medicum bietet Behandlungspflege, Grundpflege mit Körperpflege, Ernährung und Mobilität, Haushaltshilfe, Betreuung im Alltag, Verhinderungspflege, Pflegeberatung sowie Sterbebegleitung an. Welche Leistungen im Einzelfall sinnvoll sind, klären wir gemeinsam in einem persönlichen Gespräch."
	},
	{
		question: "Wo befindet sich Medicum?",
		answer: `Medicum hat seinen Sitz in der ${company.street}, ${company.postalCode} ${company.city}. Von dort aus versorgen wir Menschen in Hanau in ihrer häuslichen Umgebung.`
	},
	{
		question: "Wie kann ich Medicum erreichen?",
		answer: `Sie erreichen uns telefonisch unter ${company.phone}, per Fax unter ${company.fax} oder per E-Mail an ${company.email}. Unsere Bürozeiten sind ${company.officeHours}. Alternativ können Sie das Kontaktformular auf dieser Website nutzen.`
	},
	{
		question: "Welche Sprachen werden bei Medicum gesprochen?",
		answer: "Medicum bietet Kommunikation in Deutsch, Englisch, Russisch, Rumänisch, Paschto, Hindi, Dari, Persisch und Urdu an. Welche Sprache im konkreten Einsatz möglich ist, stimmen wir bei Ihrer Anfrage ab."
	},
	{
		question: "Ist Medicum von den Krankenkassen zugelassen?",
		answer: "Ja. Medicum ist von allen Krankenkassen zugelassen. Welche Leistungen in Ihrem Fall abgerechnet werden können, hängt von der ärztlichen Verordnung beziehungsweise von Ihrem Pflegegrad ab. Wir erklären Ihnen die Möglichkeiten in unserer Pflegeberatung."
	}
];
var $$splitComponentImporter$6 = () => import("./routes-DFrnywas.mjs");
var Route$7 = createFileRoute("/")({
	head: () => ({
		...buildHead({
			title: "Medicum – Ambulanter Pflegedienst in Hanau & Umgebung",
			description: "Medicum ist Ihr professioneller ambulanter Pflegedienst in Hanau. Wir bieten zuverlässige Behandlungspflege, Grundpflege, Haushaltshilfe und Pflegeberatung.",
			path: "/"
		}),
		scripts: [jsonLd(faqSchema(homeFaqs))]
	}),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./datenschutz-CwAQp7LN.mjs");
var Route$6 = createFileRoute("/datenschutz")({
	head: () => ({ ...buildHead({
		title: "Datenschutz | Medicum Pflegedienst Hanau",
		description: "Informationen zum Datenschutz bei Medicum in Hanau: Umgang mit Kontaktanfragen, eingesetzte Dienste und Ihre Rechte nach der DSGVO.",
		path: "/datenschutz",
		noindex: true
	}) }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./impressum-DjtpdGH9.mjs");
var Route$5 = createFileRoute("/impressum")({
	head: () => ({ ...buildHead({
		title: "Impressum | Medicum Pflegedienst Hanau",
		description: `Impressum und Anbieterkennzeichnung von Medicum, ${fullAddress}. Telefon ${company.phone}, E-Mail ${company.email}.`,
		path: "/impressum",
		noindex: true
	}) }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var crumbs$2 = [{
	name: "Startseite",
	path: "/"
}, {
	name: "Kontakt",
	path: "/kontakt"
}];
var $$splitComponentImporter$3 = () => import("./kontakt-LSS9ZPqr.mjs");
var Route$4 = createFileRoute("/kontakt")({
	head: () => ({
		...buildHead({
			title: "Kontakt & Pflegeberatung anfragen | Medicum Pflegedienst Hanau",
			description: `Medicum Pflegedienst in ${company.city}. Telefon ${company.phone}, E-Mail ${company.email}. Bürozeiten ${company.officeHoursShort}. Jetzt kostenlose Pflegeberatung in Hanau anfragen.`,
			path: "/kontakt"
		}),
		scripts: [jsonLd(breadcrumbSchema(crumbs$2)), jsonLd(contactPageSchema)]
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
/**
* Dynamische Sitemap: Statische Seiten + alle Leistungsseiten aus src/data/services.ts.
* Neue Leistungen erscheinen automatisch. lastmod wird als Build-Datum gesetzt —
* kritisch für Crawler-Priorisierung und AI-Crawler-Scheduling.
*/
var BASE_URL = "https://medicum-pflegedienst.de";
var LAST_UPDATED = "2026-08-10";
var Route$3 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async () => {
	const xml = [
		`<?xml version="1.0" encoding="UTF-8"?>`,
		`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"`,
		`        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"`,
		`        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9`,
		`        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">`,
		...[
			{
				path: "/",
				changefreq: "monthly",
				priority: "1.0",
				lastmod: LAST_UPDATED
			},
			{
				path: "/leistungen",
				changefreq: "monthly",
				priority: "0.9",
				lastmod: LAST_UPDATED
			},
			...services.map((s) => ({
				path: `/leistungen/${s.slug}`,
				changefreq: "monthly",
				priority: s.slug === "pflegeberatung" ? "0.9" : "0.8",
				lastmod: LAST_UPDATED
			})),
			{
				path: "/ueber-uns",
				changefreq: "monthly",
				priority: "0.7",
				lastmod: LAST_UPDATED
			},
			{
				path: "/kontakt",
				changefreq: "monthly",
				priority: "0.9",
				lastmod: LAST_UPDATED
			}
		].map((e) => [
			`  <url>`,
			`    <loc>${BASE_URL}${e.path}</loc>`,
			e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
			e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
			e.priority ? `    <priority>${e.priority}</priority>` : null,
			`  </url>`
		].filter(Boolean).join("\n")),
		`</urlset>`
	].join("\n");
	return new Response(xml, { headers: {
		"Content-Type": "application/xml; charset=utf-8",
		"Cache-Control": "public, max-age=3600",
		"X-Robots-Tag": "noindex"
	} });
} } } });
var crumbs$1 = [{
	name: "Startseite",
	path: "/"
}, {
	name: "Über uns",
	path: "/ueber-uns"
}];
var $$splitComponentImporter$2 = () => import("./ueber-uns-0CUQ_5TS.mjs");
var Route$2 = createFileRoute("/ueber-uns")({
	head: () => ({
		...buildHead({
			title: "Über Medicum – Ihr ambulanter Pflegedienst in Hanau",
			description: "Erfahren Sie mehr über Medicum Hanau: Wir pflegen ganzheitlich mit Respekt vor persönlichen Gewohnheiten, Werten sowie kulturellen Prägungen. Lernen Sie unser Team kennen.",
			path: "/ueber-uns"
		}),
		scripts: [jsonLd(breadcrumbSchema(crumbs$1))]
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var crumbs = [{
	name: "Startseite",
	path: "/"
}, {
	name: "Leistungen",
	path: "/leistungen"
}];
var $$splitComponentImporter$1 = () => import("./leistungen.index-DZGQTFWh.mjs");
var Route$1 = createFileRoute("/leistungen/")({
	head: () => ({
		...buildHead({
			title: "Pflegeleistungen im Überblick | Medicum Pflegedienst Hanau",
			description: "Alle Leistungen des Medicum Pflegedienstes in Hanau: Behandlungspflege, Grundpflege, Körperpflege, Ernährung, Mobilität, Haushaltshilfe, Betreuung und Pflegeberatung.",
			path: "/leistungen"
		}),
		scripts: [jsonLd(breadcrumbSchema(crumbs))]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./leistungen._slug-BXN98yDL.mjs");
var Route = createFileRoute("/leistungen/$slug")({
	loader: ({ params }) => {
		const service = serviceBySlug(params.slug);
		if (!service) throw notFound();
		return { service };
	},
	head: ({ params, loaderData }) => {
		const service = loaderData?.service;
		if (!service) return { meta: [{ title: "Leistung nicht gefunden | Medicum" }, {
			name: "robots",
			content: "noindex"
		}] };
		const path = `/leistungen/${params.slug}`;
		return {
			...buildHead({
				title: service.metaTitle,
				description: service.metaDescription,
				path
			}),
			scripts: [
				jsonLd(breadcrumbSchema([
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
						path
					}
				])),
				jsonLd(serviceSchema(service.title, service.teaser, path)),
				...service.faqs.length ? [jsonLd(faqSchema(service.faqs))] : []
			]
		};
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$7.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$8
});
var DatenschutzRoute = Route$6.update({
	id: "/datenschutz",
	path: "/datenschutz",
	getParentRoute: () => Route$8
});
var ImpressumRoute = Route$5.update({
	id: "/impressum",
	path: "/impressum",
	getParentRoute: () => Route$8
});
var KontaktRoute = Route$4.update({
	id: "/kontakt",
	path: "/kontakt",
	getParentRoute: () => Route$8
});
var SitemapDotxmlRoute = Route$3.update({
	id: "/sitemap.xml",
	path: "/sitemap.xml",
	getParentRoute: () => Route$8
});
var UeberUnsRoute = Route$2.update({
	id: "/ueber-uns",
	path: "/ueber-uns",
	getParentRoute: () => Route$8
});
var LeistungenIndexRoute = Route$1.update({
	id: "/leistungen/",
	path: "/leistungen/",
	getParentRoute: () => Route$8
});
var rootRouteChildren = {
	IndexRoute,
	DatenschutzRoute,
	ImpressumRoute,
	KontaktRoute,
	SitemapDotxmlRoute,
	UeberUnsRoute,
	LeistungenSlugRoute: Route.update({
		id: "/leistungen/$slug",
		path: "/leistungen/$slug",
		getParentRoute: () => Route$8
	}),
	LeistungenIndexRoute
};
var routeTree = Route$8._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { crumbs$2 as a, featuredServiceSlugs as c, services as d, company as f, crumbs$1 as i, serviceBySlug as l, languages as m, Route as n, homeFaqs as o, fullAddress as p, crumbs as r, cn as s, router_exports as t, serviceIcons as u };

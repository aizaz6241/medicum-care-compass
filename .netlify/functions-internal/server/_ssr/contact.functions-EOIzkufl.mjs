import { r as createServerFn, t as TSS_SERVER_FUNCTION } from "./server-DodVHjpM2.mjs";
import { n as objectType, r as stringType, t as literalType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact.functions-EOIzkufl.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
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
var submitContactRequest_createServerFn_handler = createServerRpc({
	id: "fbaaeece99b2a6e0e7f784ac00cd87823d5155c1dc258d50c844c46fdfda3548",
	name: "submitContactRequest",
	filename: "src/lib/contact.functions.ts"
}, (opts) => submitContactRequest.__executeServer(opts));
var submitContactRequest = createServerFn({ method: "POST" }).inputValidator((data) => contactSchema.parse(data)).handler(submitContactRequest_createServerFn_handler, async ({ data }) => {
	if (data.website) return { ok: true };
	console.info("[Kontaktanfrage] eingegangen", {
		anliegen: data.anliegen,
		sprache: data.sprache || "Deutsch",
		hatTelefon: Boolean(data.telefon)
	});
	return { ok: true };
});
//#endregion
export { submitContactRequest_createServerFn_handler };

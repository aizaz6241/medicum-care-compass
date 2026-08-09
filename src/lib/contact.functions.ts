import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

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
export const contactSchema = z.object({
  vorname: z.string().trim().min(2, "Bitte geben Sie Ihren Vornamen an.").max(80),
  nachname: z.string().trim().min(2, "Bitte geben Sie Ihren Nachnamen an.").max(80),
  email: z
    .string()
    .trim()
    .min(1, "Bitte geben Sie eine E-Mail-Adresse an.")
    .email("Bitte prüfen Sie Ihre E-Mail-Adresse.")
    .max(160),
  telefon: z
    .string()
    .trim()
    .max(40)
    .regex(/^[0-9+()\/\s-]*$/, "Bitte geben Sie eine gültige Telefonnummer an.")
    .optional()
    .or(z.literal("")),
  anliegen: z.string().trim().min(1, "Bitte wählen Sie ein Anliegen aus.").max(80),
  sprache: z.string().trim().max(40).optional().or(z.literal("")),
  nachricht: z
    .string()
    .trim()
    .min(10, "Bitte beschreiben Sie Ihr Anliegen in wenigen Sätzen.")
    .max(2000, "Bitte fassen Sie sich etwas kürzer (maximal 2000 Zeichen)."),
  datenschutz: z.literal(true, {
    errorMap: () => ({ message: "Bitte bestätigen Sie die Datenschutzhinweise." }),
  }),
  /** Honeypot gegen automatisierte Spam-Einträge – muss leer bleiben. */
  website: z.string().max(0).optional().or(z.literal("")),
});

export type ContactInput = z.infer<typeof contactSchema>;

export const submitContactRequest = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    if (data.website) {
      return { ok: true as const };
    }
    console.info("[Kontaktanfrage] eingegangen", {
      anliegen: data.anliegen,
      sprache: data.sprache || "Deutsch",
      hatTelefon: Boolean(data.telefon),
    });
    return { ok: true as const };
  });

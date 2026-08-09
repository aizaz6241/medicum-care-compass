/**
 * Zentrale Unternehmensdaten (NAP).
 * Quelle: Medicum Firmenbroschüre, Stand Januar 2022.
 * Alle Angaben an EINER Stelle pflegen – sie werden in Header, Footer,
 * Kontaktseite, Impressum und im strukturierten Datenmarkup verwendet.
 */
export const company = {
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
  mapsQuery: "Medicum+Hirschstra%C3%9Fe+13+63450+Hanau",
} as const;

export const fullAddress = `${company.street}, ${company.postalCode} ${company.city}`;

/** Sprachangebot laut Broschüre. */
export const languages = [
  { code: "de", label: "Deutsch", native: "Deutsch", dir: "ltr" },
  { code: "en", label: "Englisch", native: "English", dir: "ltr" },
  { code: "ru", label: "Russisch", native: "Русский", dir: "ltr" },
  { code: "ro", label: "Rumänisch", native: "Română", dir: "ltr" },
  { code: "ps", label: "Paschto", native: "پښتو", dir: "rtl" },
  { code: "hi", label: "Hindi", native: "हिन्दी", dir: "ltr" },
  { code: "prs", label: "Dari", native: "دری", dir: "rtl" },
  { code: "fa", label: "Persisch", native: "فارسی", dir: "rtl" },
  { code: "ur", label: "Urdu", native: "اردو", dir: "rtl" },
] as const;

export type LanguageCode = (typeof languages)[number]["code"];

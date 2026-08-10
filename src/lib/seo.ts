import { company, fullAddress } from "@/data/company";
import { services, type Faq } from "@/data/services";

/** Kanonische Domain. Bei Domainwechsel nur hier anpassen. */
export const SITE_URL = "https://medicum-pflegedienst.de";

export const absoluteUrl = (path: string) =>
  `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;

/** OG image used across all pages for social sharing */
const OG_IMAGE = absoluteUrl("/assets/team-medicum.jpg");
const OG_IMAGE_WIDTH = "1408";
const OG_IMAGE_HEIGHT = "1008";
const OG_IMAGE_ALT = "Das Pflegeteam von Medicum – ambulanter Pflegedienst in Hanau";

/** ISO 8601 date of the last meaningful site update */
export const SITE_PUBLISHED = "2024-01-01T08:00:00+01:00";
export const SITE_MODIFIED = "2026-08-10T08:00:00+02:00";

interface MetaInput {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  noindex?: boolean;
  image?: string;
}

/** Erzeugt konsistente Meta-Tags und den Canonical-Link für eine Route. */
export function buildHead({ title, description, path, type = "website", noindex, image }: MetaInput) {
  const url = absoluteUrl(path);
  const ogImage = image ?? OG_IMAGE;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      // Crawl directives — max-snippet:-1 critical for AEO (Featured Snippets) & GEO (AI RAG)
      ...(noindex
        ? [{ name: "robots", content: "noindex, follow" }]
        : [{ name: "robots", content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" }]),
      // Open Graph
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: type },
      { property: "og:url", content: url },
      { property: "og:locale", content: "de_DE" },
      { property: "og:site_name", content: `${company.name} – ${company.tagline}` },
      { property: "og:image", content: ogImage },
      { property: "og:image:width", content: OG_IMAGE_WIDTH },
      { property: "og:image:height", content: OG_IMAGE_HEIGHT },
      { property: "og:image:alt", content: OG_IMAGE_ALT },
      // Twitter / X Cards
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: ogImage },
      { name: "twitter:image:alt", content: OG_IMAGE_ALT },
      // Content dating — critical for GEO (AI freshness signals)
      { property: "article:published_time", content: SITE_PUBLISHED },
      { property: "article:modified_time", content: SITE_MODIFIED },
      { property: "article:author", content: `${company.name} Pflegedienst Hanau` },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: company.street,
  postalCode: company.postalCode,
  addressLocality: company.city,
  addressRegion: "Hessen",
  addressCountry: company.countryCode,
};

/** Full Organization schema — includes every signal needed for Local SEO, AEO, GEO & Knowledge Panel */
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["HomeHealthCare", "MedicalClinic", "MedicalBusiness", "LocalBusiness"],
  "@id": `${SITE_URL}/#organization`,
  name: company.name,
  legalName: company.legalName,
  alternateName: ["Medicum Pflegedienst", "Medicum Hanau", "Medicum Pflegedienst Hanau"],
  description:
    "Ambulanter Pflegedienst in Hanau: Medicum bietet kompetente medizinische Behandlungspflege (SGB V), Grundpflege (SGB XI), Haushaltshilfe, Betreuung, Verhinderungspflege, Pflegeberatung (§ 37.3 SGB XI) und Sterbebegleitung.",
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: absoluteUrl("/favicon.ico"),
    width: 64,
    height: 64,
  },
  image: [
    absoluteUrl("/assets/team-medicum.jpg"),
    absoluteUrl("/assets/hero-pflege.jpg"),
  ],
  telephone: company.phone,
  faxNumber: company.fax,
  email: company.email,
  address: postalAddress,
  geo: {
    "@type": "GeoCoordinates",
    latitude: 50.1339,
    longitude: 8.92,
  },
  hasMap: `https://www.google.com/maps/search/?api=1&query=${company.mapsQuery}`,
  areaServed: [
    { "@type": "City", name: "Hanau", sameAs: "https://www.wikidata.org/wiki/Q1499" },
    { "@type": "AdministrativeArea", name: "Hanau-Mitte" },
    { "@type": "AdministrativeArea", name: "Kesselstadt" },
    { "@type": "AdministrativeArea", name: "Großauheim" },
    { "@type": "AdministrativeArea", name: "Klein-Auheim" },
    { "@type": "AdministrativeArea", name: "Steinheim" },
    { "@type": "AdministrativeArea", name: "Wolfgang" },
    { "@type": "AdministrativeArea", name: "Lamboy" },
    { "@type": "City", name: "Maintal" },
    { "@type": "City", name: "Bruchköbel" },
    { "@type": "City", name: "Erlensee" },
    { "@type": "City", name: "Rodenbach" },
  ],
  sameAs: [
    "https://www.gelbeseiten.de/suche/pflegedienst/hanau",
    "https://www.wikidata.org/wiki/Q1499",
  ],
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
      "Urdu",
    ],
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "16:00",
    },
  ],
  availableLanguage: [
    "Deutsch",
    "English",
    "Русский",
    "Română",
    "پښتو",
    "हिन्दी",
    "دری",
    "فارسی",
    "اردو",
  ],
  makesOffer: services.map((s) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: s.title,
      url: absoluteUrl(`/leistungen/${s.slug}`),
    },
  })),
};

/** WebSite schema with SearchAction for Google Sitelinks Searchbox */
export const websiteSchema = {
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
      urlTemplate: `${SITE_URL}/leistungen?s={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

/** SpeakableSpecification — instructs voice assistants & Google Assistant which text to read aloud */
export const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: `${company.name} – Pflegedienst Hanau`,
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: [".hero-summary", ".faq-answer", "#leitbild-heading"],
  },
};

/** ContactPage schema for /kontakt */
export const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: `Kontakt – ${company.name} Pflegedienst Hanau`,
  url: absoluteUrl("/kontakt"),
  description: `Kontaktseite von Medicum Pflegedienst Hanau. Telefon: ${company.phone}. Bürozeiten: ${company.officeHours}.`,
  mainEntity: { "@id": `${SITE_URL}/#organization` },
};

export const breadcrumbSchema = (items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: absoluteUrl(item.path),
  })),
});

export const faqSchema = (faqs: Faq[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
});

export const serviceSchema = (name: string, description: string, path: string) => ({
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
    "@id": `${SITE_URL}/#organization`,
  },
  areaServed: [
    { "@type": "City", name: "Hanau" },
    { "@type": "City", name: "Maintal" },
    { "@type": "City", name: "Bruchköbel" },
  ],
});

export const jsonLd = (data: unknown) => ({
  type: "application/ld+json" as const,
  children: JSON.stringify(data),
});

export const napText = `${company.name}, ${fullAddress}`;

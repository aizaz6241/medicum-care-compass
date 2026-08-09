import { company, fullAddress } from "@/data/company";
import { services, type Faq } from "@/data/services";

/** Kanonische Domain laut Broschüre. Bei Domainwechsel nur hier anpassen. */
export const SITE_URL = "https://medicum-pflegedienst.de";

export const absoluteUrl = (path: string) =>
  `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;

interface MetaInput {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  noindex?: boolean;
}

/** Erzeugt konsistente Meta-Tags und den Canonical-Link für eine Route. */
export function buildHead({ title, description, path, type = "website", noindex }: MetaInput) {
  const url = absoluteUrl(path);
  return {
    meta: [
      { title },
      { name: "description", content: description },
      ...(noindex ? [{ name: "robots", content: "noindex, follow" }] : []),
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: type },
      { property: "og:url", content: url },
      { property: "og:locale", content: "de_DE" },
      { property: "og:site_name", content: `${company.name} – ${company.tagline}` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: company.street,
  postalCode: company.postalCode,
  addressLocality: company.city,
  addressCountry: company.countryCode,
};

/** Organisation / lokaler Pflegedienst – nur belegte Angaben. */
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["MedicalBusiness", "HomeAndConstructionBusiness"],
  "@id": `${SITE_URL}/#organization`,
  name: company.name,
  alternateName: `${company.name} ${company.tagline}`,
  description:
    "Ambulanter Pflegedienst in Hanau: Behandlungspflege, Grundpflege, Haushaltshilfe, Betreuung, Verhinderungspflege, Pflegeberatung und Sterbebegleitung.",
  url: SITE_URL,
  telephone: company.phone,
  faxNumber: company.fax,
  email: company.email,
  address: postalAddress,
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
    itemOffered: { "@type": "Service", name: s.title, url: absoluteUrl(`/leistungen/${s.slug}`) },
  })),
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: `${company.name} – ${company.tagline}`,
  inLanguage: "de-DE",
  publisher: { "@id": `${SITE_URL}/#organization` },
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
  },
  areaServed: { "@type": "City", name: company.city },
});

export const jsonLd = (data: unknown) => ({
  type: "application/ld+json" as const,
  children: JSON.stringify(data),
});

export const napText = `${company.name}, ${fullAddress}`;

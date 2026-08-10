import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone, Printer, Navigation } from "lucide-react";
import { company, fullAddress } from "@/data/company";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { ContactForm } from "@/components/site/ContactForm";
import { Reveal } from "@/components/site/Reveal";
import { buildHead, breadcrumbSchema, jsonLd, contactPageSchema } from "@/lib/seo";

const crumbs = [
  { name: "Startseite", path: "/" },
  { name: "Kontakt", path: "/kontakt" },
];

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    ...buildHead({
      title: "Kontakt & Pflegeberatung anfragen | Medicum Pflegedienst Hanau",
      description: `Medicum Pflegedienst in ${company.city}. Telefon ${company.phone}, E-Mail ${company.email}. Bürozeiten ${company.officeHoursShort}. Jetzt kostenlose Pflegeberatung in Hanau anfragen.`,
      path: "/kontakt",
    }),
    scripts: [jsonLd(breadcrumbSchema(crumbs)), jsonLd(contactPageSchema)],
  }),
  component: KontaktPage,
});

function KontaktPage() {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${company.mapsQuery}`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${company.mapsQuery}`;

  return (
    <>
      <section className="bg-surface">
        <div className="container-page py-12 md:py-16">
          <Breadcrumbs items={crumbs} />
          <h1 className="mt-6 max-w-3xl text-4xl font-extrabold md:text-5xl">
            Kontakt aufnehmen – wir hören zu
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Ob erste Frage oder konkreter Pflegebedarf: Schreiben Sie uns oder rufen Sie an. Wir
            klären mit Ihnen in Ruhe, welche Unterstützung möglich ist.
          </p>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:items-start">
          <Reveal>
            <div className="rounded-3xl border border-border bg-card p-8 shadow-soft">
              <h2 className="font-display text-2xl font-bold">Medicum</h2>
              <p className="mt-1 text-sm text-muted-foreground">{company.tagline}</p>

              <address className="mt-7 space-y-5 not-italic">
                <p className="flex items-start gap-4">
                  <MapPin className="mt-1 size-5 shrink-0 text-accent" aria-hidden="true" />
                  <span>
                    <span className="block font-semibold text-primary">Adresse</span>
                    {company.street}
                    <br />
                    {company.postalCode} {company.city}
                  </span>
                </p>
                <p className="flex items-start gap-4">
                  <Phone className="mt-1 size-5 shrink-0 text-accent" aria-hidden="true" />
                  <span>
                    <span className="block font-semibold text-primary">Telefon</span>
                    <a href={company.phoneHref} className="text-lg hover:underline">
                      {company.phone}
                    </a>
                  </span>
                </p>
                <p className="flex items-start gap-4">
                  <Printer className="mt-1 size-5 shrink-0 text-accent" aria-hidden="true" />
                  <span>
                    <span className="block font-semibold text-primary">Fax</span>
                    {company.fax}
                  </span>
                </p>
                <p className="flex items-start gap-4">
                  <Mail className="mt-1 size-5 shrink-0 text-accent" aria-hidden="true" />
                  <span>
                    <span className="block font-semibold text-primary">E-Mail</span>
                    <a href={company.emailHref} className="break-all hover:underline">
                      {company.email}
                    </a>
                  </span>
                </p>
                <p className="flex items-start gap-4">
                  <Clock className="mt-1 size-5 shrink-0 text-accent" aria-hidden="true" />
                  <span>
                    <span className="block font-semibold text-primary">Bürozeiten</span>
                    {company.officeHours}
                  </span>
                </p>
              </address>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={company.phoneHref}
                  className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full bg-primary px-6 font-semibold text-primary-foreground btn-sheen shadow-soft"
                >
                  <Phone className="size-4" aria-hidden="true" />
                  Jetzt anrufen
                </a>
                <a
                  href={company.emailHref}
                  className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full border border-border px-6 font-semibold text-primary hover:border-accent"
                >
                  <Mail className="size-4" aria-hidden="true" />
                  E-Mail schreiben
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="rounded-3xl border border-border bg-card p-8 shadow-soft">
              <h2 className="font-display text-2xl font-bold">Anfrage senden</h2>
              <p className="mt-2 text-muted-foreground">
                Wir melden uns während unserer Bürozeiten bei Ihnen zurück.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="anfahrt-heading" className="section-y bg-surface">
        <div className="container-page">
          <h2 id="anfahrt-heading" className="text-3xl font-bold md:text-4xl">
            So finden Sie uns
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Unser Büro befindet sich in der {company.street} in {company.postalCode} {company.city}.
            Eine Beratung ist nach Absprache auch bei Ihnen zu Hause möglich.
          </p>

          <div className="mt-8 overflow-hidden rounded-3xl border border-border shadow-soft">
            <iframe
              title={`Karte mit dem Standort von Medicum, ${fullAddress}`}
              src={`https://www.openstreetmap.org/export/embed.html?bbox=8.905%2C50.126%2C8.935%2C50.142&layer=mapnik&marker=50.1339%2C8.9200`}
              className="h-[360px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center gap-2 rounded-full bg-primary px-6 font-semibold text-primary-foreground btn-sheen shadow-soft"
            >
              <Navigation className="size-4" aria-hidden="true" />
              Route planen
            </a>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center gap-2 rounded-full border border-border bg-card px-6 font-semibold text-primary hover:border-accent"
            >
              Standort in Karten öffnen
            </a>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Hinweis: Die Karte wird von OpenStreetMap geladen. Dabei wird Ihre IP-Adresse an den
            Kartendienst übertragen.
          </p>
        </div>
      </section>
      <div className="h-20" />
    </>
  );
}

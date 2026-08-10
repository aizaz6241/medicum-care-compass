import { createFileRoute } from "@tanstack/react-router";
import { services } from "@/data/services";
import { ServiceCard } from "@/components/site/ServiceCard";
import { Reveal } from "@/components/site/Reveal";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { CtaBand } from "@/components/site/CtaBand";
import { buildHead, breadcrumbSchema, jsonLd } from "@/lib/seo";

const crumbs = [
  { name: "Startseite", path: "/" },
  { name: "Leistungen", path: "/leistungen" },
];

export const Route = createFileRoute("/leistungen/")({
  head: () => ({
    ...buildHead({
      title: "Pflegeleistungen im Überblick | Medicum Pflegedienst Hanau",
      description:
        "Alle Leistungen des Medicum Pflegedienstes in Hanau: Behandlungspflege, Grundpflege, Körperpflege, Ernährung, Mobilität, Haushaltshilfe, Betreuung und Pflegeberatung.",
      path: "/leistungen",
    }),
    scripts: [jsonLd(breadcrumbSchema(crumbs))],
  }),
  component: LeistungenPage,
});

function LeistungenPage() {
  return (
    <>
      <section className="bg-surface">
        <div className="container-page py-12 md:py-16">
          <Breadcrumbs items={crumbs} />
          <h1 className="mt-6 max-w-3xl text-4xl font-extrabold md:text-5xl">
            Unsere Leistungen für die Pflege zu Hause in Hanau
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Pflege ist keine Standardlösung. Deshalb stellen wir unsere Leistungen so zusammen, wie
            es Ihre Situation erfordert – von einzelnen medizinischen Maßnahmen bis zur umfassenden
            Begleitung im Alltag.
          </p>
        </div>
      </section>

      <section aria-label="Alle Leistungen" className="section-y">
        <div className="container-page">
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Reveal as="li" key={service.slug} delay={(i % 3) * 60} className="h-full">
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        title="Sie sind unsicher, welche Leistung passt?"
        text="Das ist völlig normal. In einem Beratungsgespräch schauen wir gemeinsam auf Ihre Situation und erklären, welche Unterstützung möglich ist und wie die Kostenübernahme aussehen kann."
      />
      <div className="h-20" />
    </>
  );
}

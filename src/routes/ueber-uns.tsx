import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ShieldCheck } from "lucide-react";
import teamImage from "@/assets/team-medicum.jpg";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand } from "@/components/site/CtaBand";
import { LanguagesSection } from "@/components/site/LanguagesSection";
import { buildHead, breadcrumbSchema, jsonLd } from "@/lib/seo";

const crumbs = [
  { name: "Startseite", path: "/" },
  { name: "Über uns", path: "/ueber-uns" },
];

export const Route = createFileRoute("/ueber-uns")({
  head: () => ({
    ...buildHead({
      title: "Über Medicum – Ihr ambulanter Pflegedienst in Hanau",
      description:
        "Erfahren Sie mehr über Medicum Hanau: Wir pflegen ganzheitlich mit Respekt vor persönlichen Gewohnheiten, Werten sowie kulturellen Prägungen. Lernen Sie unser Team kennen.",
      path: "/ueber-uns",
    }),
    scripts: [jsonLd(breadcrumbSchema(crumbs))],
  }),
  component: UeberUnsPage,
});

const werte = [
  {
    title: "Individualität",
    text: "Wir richten die Pflege an dem Menschen aus, den wir begleiten – an seinen Gewohnheiten, seinem Tagesrhythmus und seinen Wünschen.",
  },
  {
    title: "Respekt und Würde",
    text: "Pflege berührt sehr persönliche Bereiche. Wir handeln aufmerksam, erklären, was wir tun, und wahren die Privatsphäre.",
  },
  {
    title: "Kulturelle Sensibilität",
    text: "Kulturelle und religiöse Prägungen gehören zum Menschen. Wir berücksichtigen sie im Pflegealltag, statt sie zu übergehen.",
  },
  {
    title: "Vorurteilsfreie Zuwendung",
    text: "Herkunft, Sprache, Religion oder Lebensgeschichte verändern nichts an unserer Haltung: Wir begegnen jedem Menschen offen.",
  },
  {
    title: "Fachliche Kompetenz",
    text: "Pflegerische und medizinische Aufgaben werden fachgerecht und nachvollziehbar dokumentiert erbracht.",
  },
  {
    title: "Verlässlichkeit",
    text: "Absprachen müssen tragen. Wer Pflege zu Hause organisiert, braucht Planbarkeit – für sich und für die Familie.",
  },
];

function UeberUnsPage() {
  return (
    <>
      <section className="bg-surface">
        <div className="container-page py-12 md:py-16">
          <Breadcrumbs items={crumbs} />
          <div className="mt-8 grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <div>
              <h1 className="text-4xl font-extrabold md:text-5xl">
                Pflege, die den ganzen Menschen sieht
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Medicum ist ein ambulanter Pflegedienst in Hanau. Wir unterstützen Menschen dabei,
                trotz Pflegebedarf weiterhin zu Hause zu leben – mit fachlicher Kompetenz und mit
                Respekt vor dem, was ihnen wichtig ist.
              </p>
              <p className="mt-4 text-lg text-muted-foreground">
                „Wir kümmern uns“ ist für uns kein Slogan, sondern die Beschreibung unserer
                täglichen Arbeit.
              </p>
            </div>
            <Reveal>
              <div className="overflow-hidden rounded-3xl shadow-lift">
                <img
                  src={teamImage}
                  width={1408}
                  height={1008}
                  loading="lazy"
                  decoding="async"
                  alt="Pflegekräfte von Medicum in einem Wohnungsflur im Gespräch miteinander"
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section aria-labelledby="leitbild-heading" className="section-y">
        <div className="container-page max-w-3xl">
          <Reveal>
            <h2 id="leitbild-heading" className="text-3xl font-bold md:text-4xl">
              Unser Leitbild
            </h2>
            <blockquote className="mt-6 border-l-4 border-accent pl-6 font-display text-2xl leading-snug font-bold text-primary">
              „Jeder Mensch ist eine individuelle Einheit aus Körper, Seele und Geist.“
            </blockquote>
            <p className="mt-6 text-lg leading-relaxed text-foreground/85">
              Aus diesem Verständnis heraus arbeiten wir ganzheitlich. Pflege bedeutet für uns mehr
              als die Erfüllung einzelner Verrichtungen: Sie berücksichtigt persönliche
              Gewohnheiten, individuelle Werte sowie kulturelle und religiöse Prägungen.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-foreground/85">
              Deshalb beginnt unsere Arbeit mit Zuhören. Erst wenn wir verstehen, wie jemand lebt,
              was ihm wichtig ist und wo er Unterstützung möchte, planen wir die Pflege – gemeinsam
              mit den Betroffenen und, wenn gewünscht, mit den Angehörigen.
            </p>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="werte-heading" className="section-y bg-surface">
        <div className="container-page">
          <Reveal className="max-w-2xl">
            <h2 id="werte-heading" className="text-3xl font-bold md:text-4xl">
              Worauf wir Wert legen
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Diese Grundsätze bestimmen, wie wir arbeiten – im Erstgespräch genauso wie im
              täglichen Einsatz.
            </p>
          </Reveal>
          <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {werte.map((w, i) => (
              <Reveal as="li" key={w.title} delay={(i % 3) * 60}>
                <div className="card-lift h-full rounded-2xl border border-border bg-card p-7 shadow-soft">
                  <Check className="size-5 text-accent" aria-hidden="true" />
                  <h3 className="mt-4 font-display text-lg font-bold">{w.title}</h3>
                  <p className="mt-2 text-[0.975rem] leading-relaxed text-muted-foreground">
                    {w.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="qualitaet-heading" className="section-y">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <h2 id="qualitaet-heading" className="text-3xl font-bold md:text-4xl">
              Qualität, die überprüft wird
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Die Qualität unserer Arbeit wird fortlaufend durch ein unabhängiges
              Qualitätssicherungssystem überwacht. So stellen wir sicher, dass unsere Standards
              nicht nur auf dem Papier stehen.
            </p>
            <p className="mt-4 text-muted-foreground">
              Medicum ist von allen Krankenkassen zugelassen. Welche Leistungen in Ihrem Fall
              abgerechnet werden können, hängt von der ärztlichen Verordnung beziehungsweise von
              Ihrem Pflegegrad ab – das klären wir vorab transparent mit Ihnen.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <div className="rounded-2xl border border-border bg-card p-7 shadow-soft">
              <ShieldCheck className="size-7 text-accent" aria-hidden="true" />
              <h3 className="mt-4 font-display text-lg font-bold">Hinweis zur Aktualität</h3>
              <p className="mt-3 text-[0.975rem] leading-relaxed text-muted-foreground">
                Die Angaben auf dieser Website beruhen auf den Unterlagen des Unternehmens. Angaben
                zu Leistungen, Sprachen und Zulassungen werden fortlaufend geprüft und aktualisiert.
                Für verbindliche Auskünfte zu Ihrem konkreten Fall sprechen Sie uns bitte direkt an.
              </p>
              <Link
                to="/kontakt"
                className="mt-6 inline-flex min-h-12 items-center rounded-full bg-primary px-6 font-semibold text-primary-foreground btn-sheen shadow-soft"
              >
                Kontakt aufnehmen
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <LanguagesSection />

      <div className="pt-16">
        <CtaBand />
      </div>
      <div className="h-20" />
    </>
  );
}

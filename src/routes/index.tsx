import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BadgeCheck, HeartHandshake, Languages, Phone, Check } from "lucide-react";
import heroImage from "@/assets/hero-pflege.jpg";
import teamImage from "@/assets/team-medicum.jpg";
import { company } from "@/data/company";
import { services, featuredServiceSlugs, serviceBySlug, type Faq } from "@/data/services";
import { ServiceCard } from "@/components/site/ServiceCard";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand } from "@/components/site/CtaBand";
import { FaqSection } from "@/components/site/FaqSection";
import { LanguagesSection } from "@/components/site/LanguagesSection";
import { Testimonials } from "@/components/site/Testimonials";
import { buildHead, faqSchema, jsonLd } from "@/lib/seo";

const homeFaqs: Faq[] = [
  {
    question: "Was ist ein ambulanter Pflegedienst?",
    answer:
      "Ein ambulanter Pflegedienst versorgt pflegebedürftige Menschen in ihrem eigenen Zuhause. Pflegefachkräfte kommen zu festen Zeiten in die Wohnung und übernehmen dort pflegerische und medizinische Aufgaben. So können Menschen weiterhin in ihrer gewohnten Umgebung leben, statt in eine stationäre Einrichtung wechseln zu müssen.",
  },
  {
    question: "Welche Leistungen bietet Medicum an?",
    answer:
      "Medicum bietet Behandlungspflege, Grundpflege mit Körperpflege, Ernährung und Mobilität, Haushaltshilfe, Betreuung im Alltag, Verhinderungspflege, Pflegeberatung sowie Sterbebegleitung an. Welche Leistungen im Einzelfall sinnvoll sind, klären wir gemeinsam in einem persönlichen Gespräch.",
  },
  {
    question: "Wo befindet sich Medicum?",
    answer: `Medicum hat seinen Sitz in der ${company.street}, ${company.postalCode} ${company.city}. Von dort aus versorgen wir Menschen in Hanau in ihrer häuslichen Umgebung.`,
  },
  {
    question: "Wie kann ich Medicum erreichen?",
    answer: `Sie erreichen uns telefonisch unter ${company.phone}, per Fax unter ${company.fax} oder per E-Mail an ${company.email}. Unsere Bürozeiten sind ${company.officeHours}. Alternativ können Sie das Kontaktformular auf dieser Website nutzen.`,
  },
  {
    question: "Welche Sprachen werden bei Medicum gesprochen?",
    answer:
      "Medicum bietet Kommunikation in Deutsch, Englisch, Russisch, Rumänisch, Paschto, Hindi, Dari, Persisch und Urdu an. Welche Sprache im konkreten Einsatz möglich ist, stimmen wir bei Ihrer Anfrage ab.",
  },
  {
    question: "Ist Medicum von den Krankenkassen zugelassen?",
    answer:
      "Ja. Medicum ist von allen Krankenkassen zugelassen. Welche Leistungen in Ihrem Fall abgerechnet werden können, hängt von der ärztlichen Verordnung beziehungsweise von Ihrem Pflegegrad ab. Wir erklären Ihnen die Möglichkeiten in unserer Pflegeberatung.",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    ...buildHead({
      title: "Ambulanter Pflegedienst in Hanau | Medicum",
      description:
        "Medicum ist Ihr ambulanter Pflegedienst in Hanau: Behandlungspflege, Grundpflege, Haushaltshilfe, Betreuung und Pflegeberatung – menschlich, individuell und mehrsprachig.",
      path: "/",
    }),
    scripts: [jsonLd(faqSchema(homeFaqs))],
  }),
  component: HomePage,
});

const trustItems = [
  { icon: HeartHandshake, label: "Individuelle Pflege", text: "Abgestimmt auf Gewohnheiten und Bedürfnisse" },
  { icon: Languages, label: "Mehrsprachige Betreuung", text: "Neun Sprachen im Angebot" },
  { icon: BadgeCheck, label: "Von allen Krankenkassen zugelassen", text: "Abrechnung nach Verordnung und Pflegegrad" },
];

const trustPoints = [
  "Ganzheitlicher Pflegeansatz – Körper, Seele und Geist",
  "Individuelle Betreuung nach persönlichen Gewohnheiten",
  "Mehrsprachiges Angebot",
  "Kulturell und religiös sensible Pflege",
  "Laufende, unabhängige Qualitätssicherung",
  "Von allen Krankenkassen zugelassen",
];

function HomePage() {
  const featured = featuredServiceSlugs
    .map((slug) => serviceBySlug(slug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-surface">
        <div className="container-page grid gap-12 py-14 md:py-20 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-16">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-primary shadow-soft">
              <span className="size-2 rounded-full bg-accent" aria-hidden="true" />
              Ambulanter Pflegedienst in {company.city}
            </p>
            <h1 className="mt-6 text-4xl leading-[1.08] font-extrabold sm:text-5xl lg:text-6xl">
              Professionelle Pflege.
              <br />
              Menschlich. Individuell.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground md:text-xl">
              Medicum unterstützt Menschen in {company.serviceAreaLabel} mit individueller Pflege,
              medizinischer Behandlungspflege und zuverlässiger Unterstützung im Alltag – zu Hause,
              in gewohnter Umgebung.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                to="/kontakt"
                className="inline-flex min-h-13 items-center justify-center rounded-full bg-primary px-8 py-3.5 font-semibold text-primary-foreground shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift"
              >
                Pflegeberatung anfragen
              </Link>
              <Link
                to="/leistungen"
                className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full border border-border bg-card px-8 py-3.5 font-semibold text-primary transition-colors hover:border-accent"
              >
                Unsere Leistungen
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>

            <a
              href={company.phoneHref}
              className="mt-7 inline-flex flex-wrap items-center gap-x-3 gap-y-1 text-lg font-semibold text-primary hover:text-accent"
            >
              <span className="flex size-11 items-center justify-center rounded-full bg-accent-soft text-accent">
                <Phone className="size-5" aria-hidden="true" />
              </span>
              <span className="whitespace-nowrap">{company.phone}</span>
              <span className="text-sm font-normal whitespace-nowrap text-muted-foreground">
                {company.officeHoursShort}
              </span>
            </a>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-lift">
              <img
                src={heroImage}
                width={1600}
                height={1200}
                fetchPriority="high"
                decoding="async"
                alt="Pflegefachkraft von Medicum im Gespräch mit einer älteren Frau in deren Wohnzimmer in Hanau"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-4 rounded-2xl border border-border bg-card p-5 shadow-soft sm:absolute sm:-bottom-8 sm:-left-6 sm:mt-0 sm:max-w-xs">
              <p className="font-display font-bold text-primary">Wir kümmern uns.</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Pflege, die sich an Ihrem Alltag orientiert – nicht umgekehrt.
              </p>
            </div>
          </div>
        </div>

        {/* Vertrauensleiste */}
        <div className="border-t border-border bg-background">
          <ul className="container-page grid gap-6 py-8 sm:grid-cols-3">
            {trustItems.map((item) => (
              <li key={item.label} className="flex items-start gap-3">
                <item.icon className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
                <span>
                  <span className="block font-semibold text-primary">{item.label}</span>
                  <span className="block text-sm text-muted-foreground">{item.text}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Leistungen */}
      <section aria-labelledby="leistungen-heading" className="section-y">
        <div className="container-page">
          <Reveal className="max-w-2xl">
            <h2 id="leistungen-heading" className="text-3xl font-bold md:text-4xl">
              Unsere Leistungen
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Von der medizinischen Behandlungspflege bis zur Unterstützung im Haushalt: Wir stellen
              die Leistungen so zusammen, wie Sie sie brauchen.
            </p>
          </Reveal>

          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((service, i) => (
              <Reveal as="li" key={service.slug} delay={i * 60} className="h-full">
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </ul>

          <Reveal className="mt-10">
            <Link
              to="/leistungen"
              className="inline-flex min-h-12 items-center gap-2 rounded-full border border-border bg-card px-7 font-semibold text-primary transition-colors hover:border-accent"
            >
              Alle {services.length} Leistungen ansehen
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Über uns / Vertrauen */}
      <section aria-labelledby="vertrauen-heading" className="section-y bg-surface">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="overflow-hidden rounded-3xl shadow-lift">
              <img
                src={teamImage}
                width={1408}
                height={1008}
                loading="lazy"
                decoding="async"
                alt="Drei Pflegekräfte von Medicum im Gespräch im Flur einer Wohnung"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h2 id="vertrauen-heading" className="text-3xl font-bold md:text-4xl">
              Warum Menschen sich für Medicum entscheiden
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Für uns ist jeder Mensch eine individuelle Einheit aus Körper, Seele und Geist. Diese
              Haltung prägt, wie wir pflegen: aufmerksam, respektvoll und ohne Vorurteile.
            </p>
            <ul className="mt-7 space-y-3">
              {trustPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <Check className="mt-1 size-5 shrink-0 text-accent" aria-hidden="true" />
                  <span className="text-foreground/90">{point}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/ueber-uns"
              className="mt-8 inline-flex min-h-12 items-center gap-2 font-semibold text-accent"
            >
              Mehr über unser Leitbild
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      <LanguagesSection />

      <Testimonials />

      <FaqSection
        faqs={homeFaqs}
        title="Häufige Fragen zur Pflege in Hanau"
        intro="Kurze Antworten auf die Fragen, die uns am häufigsten gestellt werden. Wenn Ihre Frage nicht dabei ist, rufen Sie uns gerne an."
      />

      <CtaBand />
      <div className="h-20" />
    </>
  );
}

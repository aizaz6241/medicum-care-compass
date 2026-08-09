import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check, Phone } from "lucide-react";
import { serviceBySlug, services, type Service } from "@/data/services";
import { company } from "@/data/company";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { Reveal } from "@/components/site/Reveal";
import { FaqSection } from "@/components/site/FaqSection";
import { CtaBand } from "@/components/site/CtaBand";
import { serviceIcons } from "@/components/site/service-icons";
import { buildHead, breadcrumbSchema, faqSchema, jsonLd, serviceSchema } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/leistungen/$slug")({
  loader: ({ params }): { service: Service } => {
    const service = serviceBySlug(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ params, loaderData }) => {
    const service = loaderData?.service;
    if (!service) {
      return {
        meta: [{ title: "Leistung nicht gefunden | Medicum" }, { name: "robots", content: "noindex" }],
      };
    }
    const path = `/leistungen/${params.slug}`;
    return {
      ...buildHead({
        title: service.metaTitle,
        description: service.metaDescription,
        path,
      }),
      scripts: [
        jsonLd(
          breadcrumbSchema([
            { name: "Startseite", path: "/" },
            { name: "Leistungen", path: "/leistungen" },
            { name: service.title, path },
          ]),
        ),
        jsonLd(serviceSchema(service.title, service.teaser, path)),
        ...(service.faqs.length ? [jsonLd(faqSchema(service.faqs))] : []),
      ],
    };
  },
  component: ServiceDetailPage,
});

function ServiceDetailPage() {
  const { service } = Route.useLoaderData() as { service: Service };
  const Icon = serviceIcons[service.icon];
  const related = service.related
    .map((slug) => services.find((s) => s.slug === slug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <>
      <section className={cn(service.tone === "calm" ? "bg-background" : "bg-surface")}>
        <div className="container-page py-12 md:py-16">
          <Breadcrumbs
            items={[
              { name: "Startseite", path: "/" },
              { name: "Leistungen", path: "/leistungen" },
              { name: service.title, path: `/leistungen/${service.slug}` },
            ]}
          />
          <div className="mt-8 grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-start">
            <div>
              <span
                aria-hidden="true"
                className="mb-6 flex size-14 items-center justify-center rounded-2xl bg-accent-soft text-accent"
              >
                <Icon className="size-7" />
              </span>
              <h1 className="text-4xl font-extrabold md:text-5xl">
                {service.title} in {company.city}
              </h1>
              {service.intro.map((p) => (
                <p key={p.slice(0, 24)} className="mt-5 text-lg text-muted-foreground">
                  {p}
                </p>
              ))}
            </div>

            <aside className="rounded-2xl border border-border bg-card p-7 shadow-soft">
              <h2 className="font-display text-lg font-bold">Für wen ist diese Leistung?</h2>
              <p className="mt-3 text-[0.975rem] leading-relaxed text-muted-foreground">
                {service.audience}
              </p>
              <div className="mt-6 space-y-3">
                <Link
                  to="/kontakt"
                  className="flex min-h-12 items-center justify-center rounded-full bg-primary px-6 font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
                >
                  {service.ctaLabel}
                </Link>
                <a
                  href={company.phoneHref}
                  className="flex min-h-12 items-center justify-center gap-2 rounded-full border border-border px-6 font-semibold text-primary hover:border-accent"
                >
                  <Phone className="size-4" aria-hidden="true" />
                  {company.phone}
                </a>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">{company.officeHoursShort}</p>
            </aside>
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page max-w-3xl space-y-12">
          {service.sections.map((section, i) => (
            <Reveal key={section.heading} delay={i * 60}>
              <h2 className="text-2xl font-bold md:text-3xl">{section.heading}</h2>
              {section.body && (
                <p className="mt-4 text-lg leading-relaxed text-foreground/85">{section.body}</p>
              )}
              {section.bullets && (
                <ul className="mt-5 space-y-3">
                  {section.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <Check className="mt-1 size-5 shrink-0 text-accent" aria-hidden="true" />
                      <span className="text-foreground/90">{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </Reveal>
          ))}

          <Reveal>
            <p className="rounded-2xl bg-surface p-6 text-[0.975rem] text-muted-foreground">
              Sie sind sich nicht sicher, ob diese Leistung die richtige ist? In unserer{" "}
              <Link
                to="/leistungen/$slug"
                params={{ slug: "pflegeberatung" }}
                className="font-semibold text-primary underline underline-offset-4"
              >
                Pflegeberatung
              </Link>{" "}
              klären wir gemeinsam Ihren Bedarf und die Frage der Kostenübernahme.
            </p>
          </Reveal>
        </div>
      </section>

      <FaqSection faqs={service.faqs} title={`Häufige Fragen zur ${service.title}`} />

      {related.length > 0 && (
        <section aria-labelledby="verwandt-heading" className="section-y bg-surface">
          <div className="container-page">
            <h2 id="verwandt-heading" className="text-2xl font-bold md:text-3xl">
              Weitere passende Leistungen
            </h2>
            <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => {
                const RelatedIcon = serviceIcons[r.icon];
                return (
                  <li key={r.slug}>
                    <Link
                      to="/leistungen/$slug"
                      params={{ slug: r.slug }}
                      className="card-lift group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft"
                    >
                      <RelatedIcon className="size-6 text-accent" aria-hidden="true" />
                      <h3 className="mt-4 font-display text-lg font-bold">{r.title}</h3>
                      <p className="mt-2 flex-1 text-sm text-muted-foreground">{r.teaser}</p>
                      <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent">
                        Zur Seite {r.title}
                        <ArrowRight
                          className="size-4 transition-transform group-hover:translate-x-1"
                          aria-hidden="true"
                        />
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      )}

      <div className="pt-16">
        <CtaBand
          primaryLabel={service.ctaLabel}
          tone={service.tone === "calm" ? "quiet" : "primary"}
          title={
            service.tone === "calm"
              ? "Sprechen Sie mit uns – in Ruhe"
              : "Sprechen wir über Ihre Situation"
          }
          text={
            service.tone === "calm"
              ? "Wenn Sie über eine Begleitung zu Hause nachdenken, nehmen wir uns Zeit für Ihre Fragen. Ohne Druck und in Ihrem Tempo."
              : "In einem persönlichen Gespräch klären wir in Ruhe, welche Unterstützung zu Ihnen passt – unverbindlich und verständlich."
          }
        />
      </div>
      <div className="h-20" />
    </>
  );
}

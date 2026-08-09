import { Quote } from "lucide-react";

/**
 * Platzhalter für echte Erfahrungsberichte.
 * Bewusst KEINE erfundenen Zitate oder Bewertungen. Sobald freigegebene
 * Rückmeldungen von Angehörigen oder Patientinnen und Patienten vorliegen,
 * können sie hier als Array eingesetzt werden.
 */
const testimonials: { quote: string; author: string }[] = [];

export function Testimonials() {
  return (
    <section aria-labelledby="stimmen-heading" className="section-y">
      <div className="container-page">
        <h2 id="stimmen-heading" className="text-3xl font-bold md:text-4xl">
          Stimmen von Angehörigen
        </h2>

        {testimonials.length === 0 ? (
          <div className="mt-8 max-w-3xl rounded-2xl border border-dashed border-border bg-surface p-8">
            <Quote className="size-7 text-accent" aria-hidden="true" />
            <p className="mt-4 text-lg text-foreground/85">
              An dieser Stelle veröffentlichen wir künftig Rückmeldungen von Menschen, die wir
              begleiten – ausschließlich mit ausdrücklicher Zustimmung der Betroffenen.
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              Wir verzichten bewusst auf Bewertungen oder Zitate, die wir nicht belegen können.
            </p>
          </div>
        ) : (
          <ul className="mt-8 grid gap-6 md:grid-cols-2">
            {testimonials.map((t) => (
              <li key={t.author} className="rounded-2xl border border-border bg-card p-7 shadow-soft">
                <Quote className="size-6 text-accent" aria-hidden="true" />
                <blockquote className="mt-4 text-lg text-foreground/90">„{t.quote}“</blockquote>
                <p className="mt-4 text-sm font-medium text-muted-foreground">{t.author}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

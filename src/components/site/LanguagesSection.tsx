import { languages } from "@/data/company";
import { Reveal } from "./Reveal";

/** Sprachangebot laut Broschüre – bewusst als Unternehmensangebot formuliert. */
export function LanguagesSection() {
  return (
    <section aria-labelledby="sprachen-heading" className="section-y bg-surface">
      <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <Reveal>
          <h2 id="sprachen-heading" className="text-3xl font-bold md:text-4xl">
            Wir sprechen Ihre Sprache.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Pflege beginnt mit Verständigung. Wenn über Beschwerden, Gewohnheiten und Wünsche in der
            eigenen Sprache gesprochen werden kann, entsteht Vertrauen – und Pflege wird persönlicher.
          </p>
          <p className="mt-4 text-muted-foreground">
            Medicum bietet Beratung und Betreuung in mehreren Sprachen an. Welche Kollegin oder
            welcher Kollege Ihre Sprache spricht, klären wir bei Ihrer Anfrage.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {languages.map((l) => (
              <li
                key={l.code}
                className="card-lift rounded-2xl border border-border bg-card px-4 py-5 text-center shadow-soft"
              >
                <span dir={l.dir} className="block font-display text-lg font-bold text-primary">
                  {l.native}
                </span>
                <span className="mt-1 block text-xs text-muted-foreground">{l.label}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

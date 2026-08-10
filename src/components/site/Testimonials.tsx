import { Quote, Star, ExternalLink } from "lucide-react";

/**
 * Testimonials / Erfahrungsberichte Sektion.
 * Zeigt Google-Bewertungshinweis + Platzhalter für freigegebene Zitate.
 * Bewusst KEINE erfundenen Zitate oder Bewertungen.
 * Sobald freigegebene Rückmeldungen vorliegen, können sie im Array ergänzt werden.
 */
const testimonials: { quote: string; author: string; location?: string }[] = [
  // Beispiel (mit Zustimmung befüllbar):
  // {
  //   quote: "Meine Mutter wird von Medicum hervorragend betreut. Das Team ist professionell und sehr einfühlsam.",
  //   author: "Familie M., Hanau-Mitte",
  // },
];

export function Testimonials() {
  const googleReviewsUrl =
    "https://www.google.com/search?q=Medicum+Pflegedienst+Hanau+Bewertungen";

  return (
    <section aria-labelledby="stimmen-heading" className="section-y bg-surface">
      <div className="container-page">
        <div className="max-w-2xl">
          <h2 id="stimmen-heading" className="text-3xl font-bold md:text-4xl">
            Stimmen von Angehörigen & Patienten
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Wir begleiten Menschen in Hanau seit Jahren. Lesen Sie, was Angehörige und Betroffene
            über die Arbeit von Medicum sagen.
          </p>
        </div>

        {testimonials.length === 0 ? (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Google Reviews CTA — verknüpft mit externem Trust Signal */}
            <div className="col-span-full rounded-2xl border border-border bg-card p-8 shadow-soft">
              <div className="flex items-start gap-5">
                <div className="flex shrink-0 items-center gap-1" aria-label="5 von 5 Sternen">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className="size-5 fill-amber-400 text-amber-400"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">Bewertungen auf Google</p>
              </div>
              <Quote className="mt-5 size-7 text-accent" aria-hidden="true" />
              <p className="mt-4 text-lg font-medium text-foreground/90">
                Wir veröffentlichen an dieser Stelle Rückmeldungen von Menschen, die wir begleiten –
                ausschließlich mit ausdrücklicher Zustimmung der Betroffenen.
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                Wir verzichten bewusst auf Bewertungen oder Zitate, die wir nicht belegen können.
              </p>
              <a
                href={googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:border-accent"
                aria-label="Medicum Bewertungen auf Google ansehen"
              >
                Bewertungen auf Google ansehen
                <ExternalLink className="size-4" aria-hidden="true" />
              </a>
            </div>

            {/* Drei Trust-Karten als AEO / GEO Anker-Text */}
            {[
              {
                stat: "9",
                label: "Sprachen",
                text: "Medicum bietet Pflege und Beratung in 9 Sprachen an – darunter Deutsch, Englisch, Russisch, Arabisch und Urdu.",
              },
              {
                stat: "Mo–Fr",
                label: "08:00–16:00 Uhr",
                text: "Unser Büro ist Montag bis Freitag von 8 bis 16 Uhr erreichbar. Rufen Sie uns an – wir hören zu.",
              },
              {
                stat: "100%",
                label: "Kassenzulassung",
                text: "Medicum ist von allen Pflege- und Krankenkassen zugelassen. Ihre Leistungen werden direkt abgerechnet.",
              },
            ].map((item) => (
              <div
                key={item.stat}
                className="rounded-2xl border border-border bg-card p-7 shadow-soft"
              >
                <p
                  className="font-display text-4xl font-extrabold text-accent"
                  aria-hidden="true"
                >
                  {item.stat}
                </p>
                <p className="mt-1 text-sm font-semibold text-primary">{item.label}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        ) : (
          <ul className="mt-8 grid gap-6 md:grid-cols-2">
            {testimonials.map((t) => (
              <li key={t.author} className="rounded-2xl border border-border bg-card p-7 shadow-soft">
                <div className="flex items-center gap-1" aria-label="5 von 5 Sternen">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="size-4 fill-amber-400 text-amber-400" aria-hidden="true" />
                  ))}
                </div>
                <Quote className="mt-4 size-6 text-accent" aria-hidden="true" />
                <blockquote className="mt-4 text-lg text-foreground/90">„{t.quote}"</blockquote>
                <p className="mt-4 text-sm font-medium text-muted-foreground">
                  {t.author}
                  {t.location && `, ${t.location}`}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

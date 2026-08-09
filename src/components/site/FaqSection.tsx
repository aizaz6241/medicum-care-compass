import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { Faq } from "@/data/services";
import { Reveal } from "./Reveal";

/** Wiederverwendbarer FAQ-Block – die Fragen dienen zugleich der Antwortoptimierung (AEO). */
export function FaqSection({
  faqs,
  title = "Häufige Fragen",
  intro,
  headingLevel = "h2",
}: {
  faqs: Faq[];
  title?: string;
  intro?: string;
  headingLevel?: "h2" | "h3";
}) {
  if (!faqs.length) return null;
  const Heading = headingLevel;

  return (
    <section aria-labelledby="faq-heading" className="section-y">
      <div className="container-page">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <Heading
              id="faq-heading"
              className="text-3xl font-bold md:text-4xl"
            >
              {title}
            </Heading>
            {intro && <p className="mt-4 text-muted-foreground">{intro}</p>}
          </Reveal>

          <Reveal delay={80}>
            <Accordion type="single" collapsible className="mt-8 space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={faq.question}
                  value={`faq-${i}`}
                  className="rounded-2xl border border-border bg-card px-5 shadow-soft transition-colors last:border-b data-[state=open]:border-accent"
                >
                  <AccordionTrigger className="py-5 text-left font-display text-lg font-semibold text-primary hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-base leading-relaxed text-foreground/85">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

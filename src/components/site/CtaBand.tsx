import { Link } from "@tanstack/react-router";
import { Mail, Phone } from "lucide-react";
import { company } from "@/data/company";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

/** Wiederverwendbarer Handlungsaufruf-Block. */
export function CtaBand({
  title = "Sprechen wir über Ihre Situation",
  text = "In einem persönlichen Gespräch klären wir in Ruhe, welche Unterstützung zu Ihnen passt – unverbindlich und verständlich.",
  primaryLabel = "Pflegeberatung anfragen",
  tone = "primary",
}: {
  title?: string;
  text?: string;
  primaryLabel?: string;
  tone?: "primary" | "quiet";
}) {
  const inverted = tone === "primary";
  return (
    <section className="container-page">
      <Reveal>
        <div
          className={cn(
            "overflow-hidden rounded-3xl px-7 py-12 shadow-soft md:px-14 md:py-16",
            inverted ? "bg-primary text-primary-foreground" : "bg-surface",
          )}
        >
          <div className="max-w-2xl">
            <h2
              className={cn(
                "font-display text-3xl font-bold md:text-4xl",
                inverted && "text-primary-foreground",
              )}
            >
              {title}
            </h2>
            <p className={cn("mt-4 text-lg", inverted ? "text-primary-foreground/85" : "text-muted-foreground")}>
              {text}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                to="/kontakt"
                className={cn(
                  "inline-flex min-h-12 items-center justify-center rounded-full px-7 font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift",
                  inverted
                    ? "bg-primary-foreground text-primary"
                    : "bg-primary text-primary-foreground",
                )}
              >
                {primaryLabel}
              </Link>
              <a
                href={company.phoneHref}
                className={cn(
                  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full border px-7 font-semibold transition-colors",
                  inverted
                    ? "border-primary-foreground/35 text-primary-foreground hover:bg-primary-foreground/10"
                    : "border-border bg-card text-primary hover:border-accent",
                )}
              >
                <Phone className="size-4" aria-hidden="true" />
                {company.phone}
              </a>
              <a
                href={company.emailHref}
                className={cn(
                  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-4 font-medium underline-offset-4 hover:underline",
                  inverted ? "text-primary-foreground/90" : "text-primary",
                )}
              >
                <Mail className="size-4" aria-hidden="true" />
                E-Mail schreiben
              </a>
            </div>
            <p
              className={cn(
                "mt-6 text-sm",
                inverted ? "text-primary-foreground/70" : "text-muted-foreground",
              )}
            >
              Bürozeiten: {company.officeHoursShort}
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

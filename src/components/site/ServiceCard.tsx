import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/data/services";
import { serviceIcons } from "./service-icons";

export function ServiceCard({ service }: { service: Service }) {
  const Icon = serviceIcons[service.icon];
  return (
    <article className="card-lift group flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-soft">
      <span
        aria-hidden="true"
        className="mb-5 flex size-12 items-center justify-center rounded-xl bg-accent-soft text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-foreground"
      >
        <Icon className="size-6" />
      </span>
      <h3 className="font-display text-xl font-bold">{service.title}</h3>
      <p className="mt-3 flex-1 text-[0.975rem] leading-relaxed text-muted-foreground">
        {service.teaser}
      </p>
      <Link
        to="/leistungen/$slug"
        params={{ slug: service.slug }}
        className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-accent"
      >
        Mehr erfahren
        <span className="sr-only"> über {service.title}</span>
        <ArrowRight
          className="size-4 transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden="true"
        />
      </Link>
    </article>
  );
}

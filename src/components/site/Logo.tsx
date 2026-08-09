import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { company } from "@/data/company";

export function Logo({
  className,
  tone = "default",
}: {
  className?: string;
  tone?: "default" | "inverted";
}) {
  return (
    <Link
      to="/"
      className={cn("group inline-flex items-center gap-3", className)}
      aria-label={`${company.name} – Startseite`}
    >
      <span
        aria-hidden="true"
        className={cn(
          "flex size-11 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105",
          tone === "inverted" ? "bg-primary-foreground/10" : "bg-primary",
        )}
      >
        <svg viewBox="0 0 24 24" className="size-6" fill="none" aria-hidden="true">
          <path
            d="M12 20.5S3.5 15.6 3.5 9.8A4.8 4.8 0 0 1 12 6.8a4.8 4.8 0 0 1 8.5 3c0 5.8-8.5 10.7-8.5 10.7Z"
            className={tone === "inverted" ? "stroke-primary-foreground" : "stroke-accent"}
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M12 10.4v4.2M9.9 12.5h4.2"
            className={
              tone === "inverted" ? "stroke-primary-foreground" : "stroke-primary-foreground"
            }
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span className="leading-tight">
        <span
          className={cn(
            "block font-display text-xl font-extrabold tracking-tight",
            tone === "inverted" ? "text-primary-foreground" : "text-primary",
          )}
        >
          MEDICUM
        </span>
        <span
          className={cn(
            "block text-[0.7rem] font-medium tracking-wide uppercase",
            tone === "inverted" ? "text-primary-foreground/70" : "text-muted-foreground",
          )}
        >
          {company.tagline}
        </span>
      </span>
    </Link>
  );
}

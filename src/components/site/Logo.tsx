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
      <img
        src="/logo.png"
        alt={`${company.name} Logo`}
        width={44}
        height={44}
        className={cn(
          "size-11 rounded-full object-contain shadow-xs transition-transform duration-300 group-hover:scale-105",
          tone === "inverted" && "ring-2 ring-primary-foreground/30 shadow-md bg-white/10",
        )}
      />
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

import { Phone, MessageSquare } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { company } from "@/data/company";

/** Feste Kontaktleiste auf kleinen Bildschirmen – kurze Wege zum Anruf. */
export function MobileContactBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 backdrop-blur-md lg:hidden">
      <div className="grid grid-cols-2 gap-2 px-3 py-2.5">
        <a
          href={company.phoneHref}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-4 font-semibold text-primary-foreground"
        >
          <Phone className="size-4" aria-hidden="true" />
          Anrufen
        </a>
        <Link
          to="/kontakt"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-border bg-card px-4 font-semibold text-primary"
        >
          <MessageSquare className="size-4" aria-hidden="true" />
          Beratung
        </Link>
      </div>
    </div>
  );
}

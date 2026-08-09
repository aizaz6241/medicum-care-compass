import { Link } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone, Printer } from "lucide-react";
import { Logo } from "./Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { company } from "@/data/company";
import { services } from "@/data/services";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-primary text-primary-foreground">
      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-5">
          <Logo tone="inverted" />
          <address className="space-y-3 text-sm not-italic text-primary-foreground/80">
            <p className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              <span>
                {company.street}
                <br />
                {company.postalCode} {company.city}
              </span>
            </p>
            <p className="flex items-center gap-3">
              <Phone className="size-4 shrink-0" aria-hidden="true" />
              <a href={company.phoneHref} className="hover:underline">
                {company.phone}
              </a>
            </p>
            <p className="flex items-center gap-3">
              <Printer className="size-4 shrink-0" aria-hidden="true" />
              <span>Fax: {company.fax}</span>
            </p>
            <p className="flex items-center gap-3">
              <Mail className="size-4 shrink-0" aria-hidden="true" />
              <a href={company.emailHref} className="break-all hover:underline">
                {company.email}
              </a>
            </p>
            <p className="flex items-start gap-3">
              <Clock className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              <span>{company.officeHours}</span>
            </p>
          </address>
        </div>

        <nav aria-label="Footer-Navigation" className="space-y-4">
          <h2 className="font-display text-sm font-semibold tracking-wide text-primary-foreground uppercase">
            Navigation
          </h2>
          <ul className="space-y-2.5 text-sm text-primary-foreground/80">
            <li>
              <Link to="/" className="hover:text-primary-foreground hover:underline">
                Startseite
              </Link>
            </li>
            <li>
              <Link to="/ueber-uns" className="hover:text-primary-foreground hover:underline">
                Über uns
              </Link>
            </li>
            <li>
              <Link to="/leistungen" className="hover:text-primary-foreground hover:underline">
                Leistungen
              </Link>
            </li>
            <li>
              <Link
                to="/leistungen/$slug"
                params={{ slug: "pflegeberatung" }}
                className="hover:text-primary-foreground hover:underline"
              >
                Pflegeberatung in Hanau
              </Link>
            </li>
            <li>
              <Link to="/kontakt" className="hover:text-primary-foreground hover:underline">
                Kontakt
              </Link>
            </li>
          </ul>
        </nav>

        <nav aria-label="Leistungen" className="space-y-4">
          <h2 className="font-display text-sm font-semibold tracking-wide text-primary-foreground uppercase">
            Leistungen
          </h2>
          <ul className="space-y-2.5 text-sm text-primary-foreground/80">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  to="/leistungen/$slug"
                  params={{ slug: s.slug }}
                  className="hover:text-primary-foreground hover:underline"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="space-y-5">
          <h2 className="font-display text-sm font-semibold tracking-wide text-primary-foreground uppercase">
            Sprache
          </h2>
          <p className="text-sm text-primary-foreground/80">
            Wir sprechen mehrere Sprachen. Rufen Sie uns gerne an – wir beraten Sie persönlich.
          </p>
          <LanguageSwitcher className="border-primary-foreground/25 bg-primary-foreground/10 text-primary-foreground hover:border-primary-foreground/50 hover:text-primary-foreground" />
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="container-page flex flex-col gap-4 py-6 text-sm text-primary-foreground/70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            {company.name} – {company.tagline}, {company.street}, {company.postalCode}{" "}
            {company.city}
          </p>
          <ul className="flex flex-wrap gap-6">
            <li>
              <Link to="/impressum" className="hover:text-primary-foreground hover:underline">
                Impressum
              </Link>
            </li>
            <li>
              <Link to="/datenschutz" className="hover:text-primary-foreground hover:underline">
                Datenschutz
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

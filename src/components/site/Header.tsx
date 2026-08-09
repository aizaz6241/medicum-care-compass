import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { Logo } from "./Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { company } from "@/data/company";
import { services } from "@/data/services";
import { serviceIcons } from "./service-icons";
import { cn } from "@/lib/utils";

const mainNav: {
  label: string;
  to: "/" | "/ueber-uns" | "/leistungen" | "/leistungen/pflegeberatung" | "/kontakt";
  hasMenu?: boolean;
}[] = [
  { label: "Startseite", to: "/" },
  { label: "Über uns", to: "/ueber-uns" },
  { label: "Leistungen", to: "/leistungen", hasMenu: true },
  { label: "Pflegeberatung", to: "/leistungen/pflegeberatung" },
  { label: "Kontakt", to: "/kontakt" },
];


const linkClass =
  "relative inline-flex min-h-11 items-center whitespace-nowrap rounded-md px-2.5 xl:px-3 text-[0.95rem] font-medium text-foreground transition-colors hover:text-accent data-[status=active]:text-primary data-[status=active]:font-semibold";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-all duration-300",
        scrolled
          ? "border-border bg-background/92 shadow-soft backdrop-blur-md"
          : "border-transparent bg-background",
      )}
    >
      <div className="container-page flex h-20 items-center justify-between gap-4">
        <Logo />

        <nav aria-label="Hauptnavigation" className="hidden items-center gap-1 lg:flex">
          {mainNav.map((item) =>
            item.hasMenu ? (
              <div
                key={item.to}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  to={item.to}
                  className={cn(linkClass, "gap-1")}
                  aria-expanded={servicesOpen}
                  onFocus={() => setServicesOpen(true)}
                >
                  {item.label}
                  <ChevronDown
                    className={cn(
                      "size-4 transition-transform duration-200",
                      servicesOpen && "rotate-180",
                    )}
                    aria-hidden="true"
                  />
                </Link>
                <div
                  className={cn(
                    "absolute top-full left-1/2 w-[38rem] -translate-x-1/2 pt-3 transition-all duration-200",
                    servicesOpen
                      ? "visible opacity-100"
                      : "pointer-events-none invisible translate-y-1 opacity-0",
                  )}
                  onBlur={(e) => {
                    if (!e.currentTarget.contains(e.relatedTarget as Node)) setServicesOpen(false);
                  }}
                >
                  <ul className="grid grid-cols-2 gap-1 rounded-2xl border border-border bg-popover p-3 shadow-lift">
                    {services.map((s) => {
                      const Icon = serviceIcons[s.icon];
                      return (
                        <li key={s.slug}>
                          <Link
                            to="/leistungen/$slug"
                            params={{ slug: s.slug }}
                            className="flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-accent-soft"
                            onClick={() => setServicesOpen(false)}
                          >
                            <Icon className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
                            <span className="text-sm font-medium text-primary">{s.title}</span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            ) : (
              <Link
                key={item.to}
                to={item.to}
                className={linkClass}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher />
          <Link
            to="/kontakt"
            className="inline-flex min-h-11 items-center whitespace-nowrap rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/92 hover:shadow-lift"
          >
            Pflegeberatung anfragen
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={company.phoneHref}
            className="inline-flex size-11 items-center justify-center rounded-full bg-accent text-accent-foreground"
            aria-label={`Jetzt anrufen: ${company.phone}`}
          >
            <Phone className="size-5" aria-hidden="true" />
          </a>
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
            className="inline-flex size-11 items-center justify-center rounded-full border border-border bg-card text-primary"
          >
            {mobileOpen ? (
              <X className="size-5" aria-hidden="true" />
            ) : (
              <Menu className="size-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 top-20 bottom-0 z-40 overflow-y-auto border-t border-border bg-background lg:hidden"
        >
          <nav aria-label="Mobile Navigation" className="container-page py-6">
            <ul className="space-y-1">
              {mainNav
                .filter((i) => !i.hasMenu)
                .map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      onClick={() => setMobileOpen(false)}
                      activeOptions={{ exact: item.to === "/" }}
                      className="flex min-h-12 items-center rounded-xl px-3 text-lg font-medium text-foreground data-[status=active]:bg-primary-soft data-[status=active]:text-primary"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
            </ul>

            <p className="mt-6 mb-2 px-3 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
              Unsere Leistungen
            </p>
            <ul className="space-y-1">
              <li>
                <Link
                  to="/leistungen"
                  onClick={() => setMobileOpen(false)}
                  className="flex min-h-12 items-center rounded-xl px-3 text-base font-semibold text-primary"
                >
                  Alle Leistungen im Überblick
                </Link>
              </li>
              {services.map((s) => {
                const Icon = serviceIcons[s.icon];
                return (
                  <li key={s.slug}>
                    <Link
                      to="/leistungen/$slug"
                      params={{ slug: s.slug }}
                      onClick={() => setMobileOpen(false)}
                      className="flex min-h-12 items-center gap-3 rounded-xl px-3 text-base text-foreground"
                    >
                      <Icon className="size-5 text-accent" aria-hidden="true" />
                      {s.title}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="mt-8 space-y-3">
              <Link
                to="/kontakt"
                onClick={() => setMobileOpen(false)}
                className="flex min-h-12 items-center justify-center rounded-full bg-primary px-6 font-semibold text-primary-foreground"
              >
                Pflegeberatung anfragen
              </Link>
              <a
                href={company.phoneHref}
                className="flex min-h-12 items-center justify-center gap-2 rounded-full border border-border bg-card px-6 font-semibold text-primary"
              >
                <Phone className="size-4" aria-hidden="true" />
                {company.phone}
              </a>
              <div className="pt-2">
                <LanguageSwitcher className="w-full justify-center" />
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

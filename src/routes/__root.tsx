import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { MobileContactBar } from "@/components/site/MobileContactBar";
import { LanguageNotice } from "@/components/site/LanguageNotice";
import { LanguageProvider } from "@/i18n/language-context";
import { company } from "@/data/company";
import { jsonLd, localBusinessSchema, websiteSchema } from "@/lib/seo";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4 py-24">
      <div className="max-w-lg text-center">
        <p className="font-display text-6xl font-extrabold text-accent">404</p>
        <h1 className="mt-4 text-3xl font-bold">Diese Seite wurde leider nicht gefunden.</h1>
        <p className="mt-4 text-muted-foreground">
          Möglicherweise wurde die Adresse geändert oder die Seite existiert nicht mehr. Über die
          Startseite oder unsere Leistungen finden Sie schnell weiter.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            to="/"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-7 font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Zur Startseite
          </Link>
          <Link
            to="/leistungen"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-border bg-card px-7 font-semibold text-primary hover:border-accent"
          >
            Unsere Leistungen
          </Link>
        </div>
        <p className="mt-8 text-sm text-muted-foreground">
          Sie erreichen uns auch telefonisch unter{" "}
          <a href={company.phoneHref} className="font-semibold text-primary hover:underline">
            {company.phone}
          </a>{" "}
          ({company.officeHoursShort}).
        </p>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4 py-24">
      <div className="max-w-md text-center">
        <h1 className="text-2xl font-bold">Diese Seite konnte nicht geladen werden</h1>
        <p className="mt-3 text-muted-foreground">
          Bitte versuchen Sie es erneut. Falls das Problem bestehen bleibt, erreichen Sie uns
          telefonisch unter {company.phone}.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-6 font-semibold text-primary-foreground"
          >
            Erneut versuchen
          </button>
          <a
            href="/"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-border bg-card px-6 font-semibold text-primary"
          >
            Zur Startseite
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Medicum – Ambulanter Pflegedienst in Hanau" },
      {
        name: "description",
        content:
          "Medicum ist ein ambulanter Pflegedienst in Hanau: Behandlungspflege, Grundpflege, Betreuung und Pflegeberatung – menschlich, individuell und mehrsprachig.",
      },
      { name: "author", content: "Medicum" },
      { name: "theme-color", content: "#1e3a5f" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Medicum – Ambulanter Pflegedienst in Hanau" },
      { property: "og:locale", content: "de_DE" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "format-detection", content: "telephone=yes" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Manrope:wght@600;700;800&display=swap",
      },
    ],
    scripts: [jsonLd(localBusinessSchema), jsonLd(websiteSchema)],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="de">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <a href="#inhalt" className="skip-link">
          Zum Inhalt springen
        </a>
        <LanguageNotice />
        <Header />
        <main id="inhalt" className="pb-20 lg:pb-0">
          <Outlet />
        </main>
        <Footer />
        <MobileContactBar />
      </LanguageProvider>
    </QueryClientProvider>
  );
}

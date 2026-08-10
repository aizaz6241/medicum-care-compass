import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { services } from "@/data/services";

/**
 * Dynamische Sitemap: Statische Seiten + alle Leistungsseiten aus src/data/services.ts.
 * Neue Leistungen erscheinen automatisch. lastmod wird als Build-Datum gesetzt —
 * kritisch für Crawler-Priorisierung und AI-Crawler-Scheduling.
 */
const BASE_URL = "https://medicum-pflegedienst.de";

// ISO 8601 date used as lastmod — update this whenever site content changes significantly
const LAST_UPDATED = "2026-08-10";

interface SitemapEntry {
  path: string;
  changefreq?: "daily" | "weekly" | "monthly" | "yearly";
  priority?: string;
  lastmod?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "monthly", priority: "1.0", lastmod: LAST_UPDATED },
          { path: "/leistungen", changefreq: "monthly", priority: "0.9", lastmod: LAST_UPDATED },
          ...services.map((s) => ({
            path: `/leistungen/${s.slug}`,
            changefreq: "monthly" as const,
            priority: s.slug === "pflegeberatung" ? "0.9" : "0.8",
            lastmod: LAST_UPDATED,
          })),
          { path: "/ueber-uns", changefreq: "monthly", priority: "0.7", lastmod: LAST_UPDATED },
          { path: "/kontakt", changefreq: "monthly", priority: "0.9", lastmod: LAST_UPDATED },
          // Legal pages excluded from sitemap — they are noindex
        ];

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"`,
          `        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"`,
          `        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9`,
          `        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
            "X-Robots-Tag": "noindex",
          },
        });
      },
    },
  },
});

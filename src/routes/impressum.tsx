import { createFileRoute } from "@tanstack/react-router";
import { company, fullAddress } from "@/data/company";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { buildHead } from "@/lib/seo";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    ...buildHead({
      title: "Impressum | Medicum Pflegedienst Hanau",
      description: `Impressum und Anbieterkennzeichnung von Medicum, ${fullAddress}. Telefon ${company.phone}, E-Mail ${company.email}.`,
      path: "/impressum",
    }),
  }),
  component: ImpressumPage,
});

function ImpressumPage() {
  return (
    <section className="section-y">
      <div className="container-page max-w-3xl">
        <Breadcrumbs
          items={[
            { name: "Startseite", path: "/" },
            { name: "Impressum", path: "/impressum" },
          ]}
        />
        <h1 className="mt-6 text-4xl font-extrabold">Impressum</h1>

        <div className="mt-8 rounded-2xl border border-dashed border-border bg-surface p-6 text-[0.975rem] text-muted-foreground">
          <strong className="block text-primary">
            Hinweis: Diese Seite ist noch nicht rechtsverbindlich vollständig.
          </strong>
          Die folgenden Kontaktdaten sind belegt. Ergänzt werden müssen vor der Veröffentlichung
          noch: Rechtsform und Vertretungsberechtigte, Registereintrag (falls vorhanden),
          Umsatzsteuer-Identifikationsnummer (falls vorhanden), zuständige Aufsichtsbehörde,
          Berufsbezeichnung und berufsrechtliche Regelungen sowie die verantwortliche Person nach
          § 18 Abs. 2 MStV.
        </div>

        <div className="mt-10 space-y-10 leading-relaxed">
          <div>
            <h2 className="text-2xl font-bold">Angaben gemäß § 5 DDG</h2>
            <address className="mt-4 not-italic">
              {company.name}
              <br />
              {company.street}
              <br />
              {company.postalCode} {company.city}
              <br />
              {company.country}
            </address>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Kontakt</h2>
            <p className="mt-4">
              Telefon:{" "}
              <a href={company.phoneHref} className="text-primary underline underline-offset-4">
                {company.phone}
              </a>
              <br />
              Fax: {company.fax}
              <br />
              E-Mail:{" "}
              <a href={company.emailHref} className="text-primary underline underline-offset-4">
                {company.email}
              </a>
            </p>
            <p className="mt-4">Bürozeiten: {company.officeHours}</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Haftung für Inhalte</h2>
            <p className="mt-4">
              Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach den allgemeinen
              Gesetzen verantwortlich. Wir sind jedoch nicht verpflichtet, übermittelte oder
              gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die
              auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder
              Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon
              unberührt.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Haftung für Links</h2>
            <p className="mt-4">
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
              Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
              oder Betreiber verantwortlich. Bei Bekanntwerden von Rechtsverletzungen entfernen wir
              derartige Links umgehend.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Urheberrecht</h2>
            <p className="mt-4">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
              unterliegen dem deutschen Urheberrecht. Beiträge Dritter sind als solche
              gekennzeichnet. Vervielfältigung, Bearbeitung und Verbreitung außerhalb der Grenzen
              des Urheberrechts bedürfen der schriftlichen Zustimmung.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Streitbeilegung</h2>
            <p className="mt-4">
              Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { company, fullAddress } from "@/data/company";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { buildHead } from "@/lib/seo";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    ...buildHead({
      title: "Datenschutz | Medicum Pflegedienst Hanau",
      description:
        "Informationen zum Datenschutz bei Medicum in Hanau: Umgang mit Kontaktanfragen, eingesetzte Dienste und Ihre Rechte nach der DSGVO.",
      path: "/datenschutz",
    }),
  }),
  component: DatenschutzPage,
});

function DatenschutzPage() {
  return (
    <section className="section-y">
      <div className="container-page max-w-3xl">
        <Breadcrumbs
          items={[
            { name: "Startseite", path: "/" },
            { name: "Datenschutz", path: "/datenschutz" },
          ]}
        />
        <h1 className="mt-6 text-4xl font-extrabold">Datenschutzerklärung</h1>

        <div className="mt-8 rounded-2xl border border-dashed border-border bg-surface p-6 text-[0.975rem] text-muted-foreground">
          <strong className="block text-primary">
            Hinweis: Dieser Text ist eine geprüfte Grundfassung, aber noch keine Rechtsberatung.
          </strong>
          Vor der Veröffentlichung sollten die Angaben zur verantwortlichen Stelle, zur
          Datenschutzbeauftragten oder zum Datenschutzbeauftragten sowie zu Hosting und
          Auftragsverarbeitung durch eine fachkundige Stelle geprüft und ergänzt werden.
        </div>

        <div className="mt-10 space-y-10 leading-relaxed">
          <div>
            <h2 className="text-2xl font-bold">1. Verantwortliche Stelle</h2>
            <address className="mt-4 not-italic">
              {company.name}
              <br />
              {fullAddress}
              <br />
              Telefon: {company.phone}
              <br />
              E-Mail: {company.email}
            </address>
          </div>

          <div>
            <h2 className="text-2xl font-bold">2. Grundsatz</h2>
            <p className="mt-4">
              Der Schutz Ihrer persönlichen Daten ist uns wichtig. Wir verarbeiten personenbezogene
              Daten ausschließlich auf Grundlage der gesetzlichen Bestimmungen, insbesondere der
              Datenschutz-Grundverordnung (DSGVO) und des Bundesdatenschutzgesetzes.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">3. Kontaktaufnahme und Kontaktformular</h2>
            <p className="mt-4">
              Wenn Sie uns über das Kontaktformular, per E-Mail oder telefonisch kontaktieren,
              verarbeiten wir die von Ihnen übermittelten Angaben ausschließlich zur Bearbeitung
              Ihrer Anfrage. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche
              Maßnahmen) beziehungsweise Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der
              Beantwortung Ihrer Anfrage).
            </p>
            <p className="mt-4">
              <strong className="text-primary">Wichtiger Hinweis zu Gesundheitsdaten:</strong> Bitte
              übermitteln Sie über das Kontaktformular oder per unverschlüsselter E-Mail keine
              Gesundheits- oder Diagnosedaten. Solche besonderen Kategorien personenbezogener Daten
              (Art. 9 DSGVO) besprechen wir mit Ihnen telefonisch oder im persönlichen Gespräch.
            </p>
            <p className="mt-4">
              Wir speichern Ihre Anfrage, bis sie abschließend bearbeitet ist, sofern keine
              gesetzlichen Aufbewahrungsfristen entgegenstehen.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">4. Server-Logfiles</h2>
            <p className="mt-4">
              Beim Aufruf dieser Website werden technisch notwendige Zugriffsdaten verarbeitet, etwa
              IP-Adresse, Datum und Uhrzeit des Zugriffs sowie die aufgerufene Seite. Diese
              Verarbeitung dient dem sicheren und stabilen Betrieb der Website (Art. 6 Abs. 1 lit. f
              DSGVO).
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">5. Cookies und Analyse</h2>
            <p className="mt-4">
              Diese Website setzt keine Cookies zu Analyse- oder Marketingzwecken ein und bindet
              keine Tracking-Dienste ein. Ihre Sprachauswahl wird ausschließlich lokal in Ihrem
              Browser gespeichert und nicht an uns übertragen. Sollten künftig
              einwilligungspflichtige Dienste eingesetzt werden, holen wir Ihre Einwilligung vorab
              über einen entsprechenden Hinweis ein.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">6. Kartendarstellung</h2>
            <p className="mt-4">
              Auf der Kontaktseite binden wir eine Karte von OpenStreetMap ein. Beim Laden der Karte
              wird Ihre IP-Adresse an den Kartendienst übertragen. Die Einbindung erfolgt auf
              Grundlage unseres berechtigten Interesses an einer leichten Auffindbarkeit unseres
              Standorts (Art. 6 Abs. 1 lit. f DSGVO).
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">7. Ihre Rechte</h2>
            <p className="mt-4">
              Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der
              Verarbeitung, Datenübertragbarkeit und Widerspruch. Wenden Sie sich dafür an die oben
              genannten Kontaktdaten. Außerdem steht Ihnen ein Beschwerderecht bei einer
              Datenschutzaufsichtsbehörde zu.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Zentrale Leistungsdaten.
 * Inhaltlich ausschließlich auf Basis der Medicum-Broschüre (Stand 01/2022).
 * Keine Leistungen ergänzen, die nicht belegt sind.
 *
 * Neue Leistung anlegen: Objekt ergänzen -> Route /leistungen/$slug,
 * Navigation, Sitemap und interne Verlinkung aktualisieren sich automatisch.
 */

export type IconKey =
  | "stethoscope"
  | "handHeart"
  | "droplets"
  | "utensils"
  | "footprints"
  | "home"
  | "users"
  | "calendarClock"
  | "messageCircle"
  | "flower";

export interface Faq {
  question: string;
  answer: string;
}

export interface ServiceSection {
  heading: string;
  body?: string;
  bullets?: string[];
}

export interface Service {
  slug: string;
  title: string;
  /** Kurzbeschreibung für Karten und Übersichten */
  teaser: string;
  icon: IconKey;
  metaTitle: string;
  metaDescription: string;
  /** Einleitung auf der Detailseite */
  intro: string[];
  sections: ServiceSection[];
  /** Für wen ist die Leistung gedacht */
  audience: string;
  faqs: Faq[];
  related: string[];
  /** Primärer Handlungsaufruf der Seite */
  ctaLabel: string;
  /** Ruhigere Gestaltung (z. B. Sterbebegleitung) */
  tone?: "calm";
}

export const services: Service[] = [
  {
    slug: "behandlungspflege",
    title: "Behandlungspflege",
    teaser:
      "Medizinische Pflegeleistungen nach ärztlicher Verordnung – von der Wundversorgung bis zur Medikamentengabe.",
    icon: "stethoscope",
    metaTitle: "Behandlungspflege in Hanau | Medicum Pflegedienst",
    metaDescription:
      "Medizinische Behandlungspflege in Hanau nach ärztlicher Verordnung: Wundversorgung, Verbandwechsel, Injektionen, Medikamentengabe, Blutdruck- und Blutzuckermessung.",
    intro: [
      "Die Behandlungspflege umfasst medizinische Pflegeleistungen, die auf ärztlicher Verordnung beruhen. Unsere Pflegefachkräfte führen diese Maßnahmen bei Ihnen zu Hause durch und unterstützen die behandelnden Ärztinnen und Ärzte bei der Therapie.",
      "So können viele Behandlungen im gewohnten Umfeld stattfinden – ohne dass Sie für jeden Handgriff die Praxis oder das Krankenhaus aufsuchen müssen.",
    ],
    sections: [
      {
        heading: "Welche Leistungen gehören zur Behandlungspflege?",
        bullets: [
          "Blutdruckmessung – regelmäßige Kontrolle und Dokumentation der Werte",
          "Blutzuckermessung – Kontrolle bei Diabetes und Weitergabe der Werte an die Arztpraxis",
          "Wundversorgung – fachgerechte Versorgung akuter und chronischer Wunden",
          "Verbandwechsel – sauberes, schonendes Wechseln von Verbänden",
          "Medikamentengabe – Stellen und Verabreichen verordneter Medikamente",
          "Injektionen – Verabreichung nach ärztlicher Anordnung",
        ],
      },
      {
        heading: "So arbeiten wir mit Ihrer Ärztin oder Ihrem Arzt zusammen",
        body: "Grundlage jeder Maßnahme ist die ärztliche Verordnung. Wir dokumentieren die durchgeführten Leistungen sorgfältig, achten auf Veränderungen und geben Beobachtungen an die behandelnde Praxis weiter. Wenn Fragen zur Verordnung oder zur Kostenübernahme auftauchen, unterstützen wir Sie im Rahmen unserer Pflegeberatung.",
      },
    ],
    audience:
      "Für Menschen, die nach einem Krankenhausaufenthalt, bei chronischen Erkrankungen oder bei einer Wunde regelmäßig medizinische Pflege benötigen – und diese zu Hause erhalten möchten.",
    faqs: [
      {
        question: "Was ist Behandlungspflege?",
        answer:
          "Behandlungspflege sind medizinische Pflegeleistungen, die Pflegefachkräfte auf Grundlage einer ärztlichen Verordnung erbringen. Dazu gehören bei Medicum unter anderem Wundversorgung, Verbandwechsel, Injektionen, die Gabe von Medikamenten sowie Blutdruck- und Blutzuckermessungen. Die Leistungen finden bei Ihnen zu Hause statt und unterstützen die ärztliche Behandlung.",
      },
      {
        question: "Welche Leistungen der Behandlungspflege bietet Medicum an?",
        answer:
          "Medicum übernimmt Blutdruckmessung, Blutzuckermessung, Wundversorgung, Verbandwechsel, Medikamentengabe und Injektionen. Welche dieser Leistungen in Ihrem Fall erbracht werden, ergibt sich aus der ärztlichen Verordnung. Gerne besprechen wir den konkreten Ablauf vorab mit Ihnen und Ihren Angehörigen.",
      },
      {
        question: "Brauche ich für die Behandlungspflege eine ärztliche Verordnung?",
        answer:
          "Ja. Leistungen der Behandlungspflege werden auf ärztliche Verordnung erbracht. Sprechen Sie dazu Ihre Hausärztin oder Ihren Hausarzt an. Wenn Sie unsicher sind, welche Schritte nötig sind, unterstützen wir Sie in einem persönlichen Beratungsgespräch.",
      },
    ],
    related: ["grundpflege", "pflegeberatung", "verhinderungspflege"],
    ctaLabel: "Pflegeberatung anfragen",
  },
  {
    slug: "grundpflege",
    title: "Grundpflege",
    teaser:
      "Unterstützung bei der täglichen Körperpflege, bei der Ernährung und bei der Mobilität – angepasst an Ihre Gewohnheiten.",
    icon: "handHeart",
    metaTitle: "Grundpflege in Hanau | Medicum Pflegedienst",
    metaDescription:
      "Grundpflege in Hanau: Unterstützung bei Körperpflege, Ernährung und Mobilität – individuell abgestimmt auf Wünsche, Gewohnheiten und den persönlichen Bedarf.",
    intro: [
      "Die Grundpflege umfasst die Unterstützung bei den alltäglichen, körperbezogenen Verrichtungen. Sie ist für viele Menschen die Grundlage dafür, weiterhin in den eigenen vier Wänden leben zu können.",
      "Wir richten unsere Unterstützung an Ihren Wünschen, Ihren Gewohnheiten und Ihrem individuellen Bedarf aus – nicht an einem starren Schema.",
    ],
    sections: [
      {
        heading: "Was gehört zur Grundpflege?",
        bullets: [
          "Körperpflege – Unterstützung bei Waschen, Duschen, Haut- und Mundpflege",
          "Ernährung – Hilfe bei der Nahrungsaufnahme und beim Zubereiten von Mahlzeiten",
          "Mobilität – Unterstützung beim Aufstehen, Gehen und bei Lagewechseln",
        ],
      },
      {
        heading: "Pflege, die sich an Ihrem Alltag orientiert",
        body: "Ob Sie morgens gerne früh aufstehen, welche Pflegeprodukte Sie gewohnt sind, welche Speisen Sie mögen: Solche Details sind für uns nicht nebensächlich. Sie prägen, wie Pflege sich anfühlt. Deshalb sprechen wir sie zu Beginn in Ruhe mit Ihnen und – wenn Sie es wünschen – mit Ihren Angehörigen ab.",
      },
    ],
    audience:
      "Für Menschen, die im Alltag körperliche Unterstützung benötigen und dabei so viel Selbstständigkeit wie möglich bewahren möchten.",
    faqs: [
      {
        question: "Was gehört zur Grundpflege?",
        answer:
          "Zur Grundpflege gehören bei Medicum die Körperpflege, die Unterstützung bei der Ernährung einschließlich der Zubereitung von Mahlzeiten sowie die Hilfe bei der Mobilität. Der Umfang wird individuell festgelegt: Wir unterstützen dort, wo Hilfe nötig ist, und lassen Ihnen so viel Eigenständigkeit wie möglich.",
      },
      {
        question: "Worin unterscheiden sich Grundpflege und Behandlungspflege?",
        answer:
          "Die Grundpflege umfasst die Unterstützung bei alltäglichen körperbezogenen Verrichtungen wie Körperpflege, Ernährung und Mobilität. Die Behandlungspflege umfasst medizinische Maßnahmen auf ärztliche Verordnung, etwa Wundversorgung oder Injektionen. Beide Bereiche lassen sich miteinander kombinieren.",
      },
    ],
    related: ["koerperpflege", "ernaehrung", "mobilitaet"],
    ctaLabel: "Pflegeberatung anfragen",
  },
  {
    slug: "koerperpflege",
    title: "Körperpflege",
    teaser:
      "Achtsame Unterstützung bei der täglichen Hygiene – mit Respekt für Ihre Vorlieben und Ihre Privatsphäre.",
    icon: "droplets",
    metaTitle: "Körperpflege zu Hause in Hanau | Medicum Pflegedienst",
    metaDescription:
      "Unterstützung bei der Körperpflege zu Hause in Hanau: Waschen, Duschen, Haut- und Mundpflege – achtsam, diskret und an Ihren persönlichen Gewohnheiten orientiert.",
    intro: [
      "Körperpflege ist ein sehr persönlicher Bereich. Genau deshalb gehen wir hier besonders achtsam vor: Wir arbeiten diskret, erklären, was wir tun, und respektieren Ihre Grenzen.",
      "Sie sollen sich wohlfühlen – und genau darauf richten wir unsere Unterstützung aus.",
    ],
    sections: [
      {
        heading: "Womit wir Sie unterstützen",
        bullets: [
          "Waschen, Duschen und Baden – mit der Unterstützung, die Sie brauchen",
          "Hautpflege mit den Produkten, die Sie gewohnt sind",
          "Mund-, Zahn- und Prothesenpflege",
          "Haar- und Nagelpflege im Rahmen der Grundpflege",
          "Hilfe beim An- und Auskleiden",
        ],
      },
      {
        heading: "Gewohnheiten zählen",
        body: "Ob morgens oder abends gewaschen wird, welche Seife verwendet wird, wie viel Hilfe gewünscht ist: Wir orientieren uns an Ihren Gewohnheiten und an Ihrem kulturellen und religiösen Hintergrund. Was für Sie selbstverständlich ist, bleibt es auch mit Pflegebedarf.",
      },
    ],
    audience:
      "Für Menschen, denen die tägliche Hygiene allein schwerfällt und die dabei würdevoll begleitet werden möchten.",
    faqs: [
      {
        question: "Was umfasst die Körperpflege durch einen Pflegedienst?",
        answer:
          "Die Körperpflege umfasst die Unterstützung beim Waschen, Duschen oder Baden, die Haut- und Mundpflege sowie Hilfe beim An- und Auskleiden. Bei Medicum richtet sich der Umfang nach Ihrem Bedarf und Ihren Gewohnheiten. Wir arbeiten diskret und beziehen Ihre persönlichen Wünsche in die Planung ein.",
      },
    ],
    related: ["grundpflege", "ernaehrung", "mobilitaet"],
    ctaLabel: "Unterstützung anfragen",
  },
  {
    slug: "ernaehrung",
    title: "Ernährung",
    teaser:
      "Hilfe beim Zubereiten von Mahlzeiten und bei der Nahrungsaufnahme – mit Blick auf Vorlieben und gewohnte Essgewohnheiten.",
    icon: "utensils",
    metaTitle: "Unterstützung bei der Ernährung in Hanau | Medicum Pflegedienst",
    metaDescription:
      "Unterstützung bei Ernährung und Mahlzeiten zu Hause in Hanau: Zubereiten von Mahlzeiten, Hilfe bei der Nahrungsaufnahme und Rücksicht auf persönliche Essgewohnheiten.",
    intro: [
      "Ernährung bedeutet mehr als nur Nahrungsaufnahme. Mahlzeiten geben dem Tag Struktur, sie sind Genuss, Erinnerung und oft auch ein Stück Heimat.",
      "Wir unterstützen Sie dabei, regelmäßig und gut zu essen – und behalten dabei im Blick, was Ihnen schmeckt und was Sie gewohnt sind.",
    ],
    sections: [
      {
        heading: "Unsere Unterstützung im Bereich Ernährung",
        bullets: [
          "Zubereiten von Mahlzeiten im gewohnten Umfeld",
          "Hilfe bei der Nahrungsaufnahme, wenn das Essen allein schwerfällt",
          "Berücksichtigung persönlicher Vorlieben und Abneigungen",
          "Rücksicht auf kulturelle und religiöse Essgewohnheiten",
          "Achten auf eine ausreichende Flüssigkeitsaufnahme",
        ],
      },
      {
        heading: "Essen als Teil der Lebensqualität",
        body: "Wir nehmen uns Zeit. Eine Mahlzeit soll nicht abgearbeitet werden, sondern ein angenehmer Moment im Tagesablauf sein. Wenn sich Appetit oder Gewicht spürbar verändern, sprechen wir Sie und – nach Absprache – Ihre Angehörigen darauf an.",
      },
    ],
    audience:
      "Für Menschen, die beim Kochen oder beim Essen Unterstützung brauchen oder denen regelmäßige Mahlzeiten schwerfallen.",
    faqs: [
      {
        question: "Bereitet Medicum auch Mahlzeiten zu?",
        answer:
          "Ja. Das Zubereiten von Mahlzeiten gehört zu unseren Leistungen. Wir richten uns dabei nach Ihren Vorlieben und Ihren gewohnten Essgewohnheiten, einschließlich kultureller und religiöser Aspekte. Wenn Sie Unterstützung bei der Nahrungsaufnahme benötigen, begleiten wir Sie auch dabei.",
      },
    ],
    related: ["grundpflege", "haushaltshilfe", "koerperpflege"],
    ctaLabel: "Unterstützung anfragen",
  },
  {
    slug: "mobilitaet",
    title: "Mobilität",
    teaser:
      "Unterstützung, die Beweglichkeit im Alltag erhält und fördert – für mehr Sicherheit und Selbstständigkeit.",
    icon: "footprints",
    metaTitle: "Unterstützung bei der Mobilität in Hanau | Medicum Pflegedienst",
    metaDescription:
      "Mobilität erhalten und fördern: Unterstützung beim Aufstehen, Gehen und bei Lagewechseln zu Hause in Hanau – für mehr Sicherheit und Selbstständigkeit im Alltag.",
    intro: [
      "Beweglich zu bleiben bedeutet, am eigenen Leben teilzuhaben: aufstehen, sich in der Wohnung bewegen, ans Fenster gehen, Besuch empfangen.",
      "Unsere Unterstützung ist darauf ausgerichtet, vorhandene Bewegungsfähigkeit zu erhalten und im Alltag zu fördern.",
    ],
    sections: [
      {
        heading: "Womit wir Sie unterstützen",
        bullets: [
          "Hilfe beim Aufstehen, Hinsetzen und Umsetzen",
          "Begleitung beim Gehen innerhalb der Wohnung",
          "Unterstützung bei Lagewechseln",
          "Sicherer Umgang mit vorhandenen Hilfsmitteln",
          "Anregung zu Bewegung im Rahmen des Tagesablaufs",
        ],
      },
      {
        heading: "Selbstständigkeit als Ziel",
        body: "Wir nehmen Ihnen nicht ab, was Sie selbst können. Stattdessen geben wir dort Sicherheit, wo sie fehlt. Wenn Hilfsmittel den Alltag erleichtern könnten, sprechen wir das im Rahmen unserer Pflegeberatung an.",
      },
    ],
    audience:
      "Für Menschen mit eingeschränkter Beweglichkeit, die sich zu Hause sicherer bewegen und ihre Selbstständigkeit bewahren möchten.",
    faqs: [
      {
        question: "Wie unterstützt Medicum bei eingeschränkter Mobilität?",
        answer:
          "Wir helfen beim Aufstehen, Hinsetzen und Umsetzen, begleiten beim Gehen in der Wohnung und unterstützen bei Lagewechseln. Ziel ist es, vorhandene Beweglichkeit zu erhalten und zu fördern. Zu passenden Hilfsmitteln beraten wir Sie im Rahmen unserer Pflegeberatung.",
      },
    ],
    related: ["grundpflege", "pflegeberatung", "betreuung"],
    ctaLabel: "Unterstützung anfragen",
  },
  {
    slug: "haushaltshilfe",
    title: "Haushaltshilfe",
    teaser:
      "Unterstützung im Haushalt: Reinigung der Wohnräume, Wäsche, Einkauf des täglichen Bedarfs und Gartenpflege.",
    icon: "home",
    metaTitle: "Haushaltshilfe in Hanau | Medicum Pflegedienst",
    metaDescription:
      "Haushaltshilfe in Hanau: Reinigung der Wohnräume, Wäsche, Einkauf des täglichen Bedarfs und Gartenpflege – individuell nach Bedarf und Umfang organisiert.",
    intro: [
      "Ein gepflegtes Zuhause trägt viel zum Wohlbefinden bei. Wenn Hausarbeit zur Belastung wird, übernehmen wir die Aufgaben, die Ihnen schwerfallen.",
      "Art und Umfang der Unterstützung stimmen wir individuell mit Ihnen ab – von einzelnen Aufgaben bis zur regelmäßigen Begleitung.",
    ],
    sections: [
      {
        heading: "Womit wir Sie im Haushalt unterstützen",
        bullets: [
          "Reinigung der Wohnräume",
          "Wäsche waschen, trocknen und versorgen",
          "Einkauf des täglichen Bedarfs",
          "Gartenpflege",
        ],
      },
      {
        heading: "Nach Ihrem Bedarf organisiert",
        body: "Wir besprechen zu Beginn, welche Aufgaben übernommen werden sollen und in welchem Rhythmus. So entsteht eine verlässliche Unterstützung, die zu Ihrem Alltag passt – und die sich anpassen lässt, wenn sich Ihre Situation verändert.",
      },
    ],
    audience:
      "Für Menschen, die zu Hause leben und bei der Hausarbeit, beim Einkaufen oder im Garten Entlastung brauchen.",
    faqs: [
      {
        question: "Welche Unterstützung bietet Medicum im Haushalt?",
        answer:
          "Medicum unterstützt bei der Reinigung der Wohnräume, bei der Wäsche, beim Einkauf des täglichen Bedarfs und bei der Gartenpflege. Welche Aufgaben übernommen werden und in welchem Umfang, legen wir gemeinsam mit Ihnen fest – orientiert an Ihrem tatsächlichen Bedarf.",
      },
    ],
    related: ["betreuung", "ernaehrung", "pflegeberatung"],
    ctaLabel: "Unterstützung anfragen",
  },
  {
    slug: "betreuung",
    title: "Betreuung",
    teaser:
      "Begleitung im Alltag: Tagesstruktur, Beschäftigung, soziale Kontakte und Hilfe bei alltäglichen Aufgaben.",
    icon: "users",
    metaTitle: "Betreuung im Alltag in Hanau | Medicum Pflegedienst",
    metaDescription:
      "Alltagsbegleitung und Betreuung in Hanau: Unterstützung bei Tagesstruktur, Beschäftigung, sozialen Kontakten und alltäglichen Aufgaben – zugewandt und verlässlich.",
    intro: [
      "Nicht jede Unterstützung ist körperlich. Manchmal geht es darum, dem Tag eine Struktur zu geben, in Kontakt zu bleiben und Aufgaben zu bewältigen, die allein schwerfallen.",
      "Unsere Betreuung setzt genau hier an: zugewandt, verlässlich und ohne Eile.",
    ],
    sections: [
      {
        heading: "Was Betreuung bei Medicum bedeutet",
        bullets: [
          "Unterstützung beim Aufbau einer verlässlichen Tagesstruktur",
          "Gespräche und Zuwendung – Zeit für den Menschen",
          "Anregung zu Beschäftigung und Aktivitäten",
          "Erhalt sozialer Kontakte",
          "Hilfe bei alltäglichen Aufgaben und Wegen",
        ],
      },
      {
        heading: "Entlastung für Angehörige",
        body: "Betreuung entlastet nicht nur die pflegebedürftige Person, sondern auch die Familie. Wenn Angehörige wissen, dass jemand verlässlich da ist, entsteht Raum zum Durchatmen.",
      },
    ],
    audience:
      "Für Menschen, die Begleitung im Alltag brauchen, und für Angehörige, die Entlastung suchen.",
    faqs: [
      {
        question: "Was umfasst die Betreuung durch Medicum?",
        answer:
          "Die Betreuung unterstützt Menschen dabei, ihren Alltag zu strukturieren und zu bewältigen. Dazu gehören eine verlässliche Tagesstruktur, Anregung zu Beschäftigung, der Erhalt sozialer Kontakte und Hilfe bei alltäglichen Aufgaben. Umfang und Rhythmus stimmen wir individuell ab.",
      },
    ],
    related: ["haushaltshilfe", "verhinderungspflege", "pflegeberatung"],
    ctaLabel: "Unterstützung anfragen",
  },
  {
    slug: "verhinderungspflege",
    title: "Verhinderungspflege",
    teaser:
      "Wenn pflegende Angehörige ausfallen oder eine Auszeit brauchen, übernehmen wir die Pflege vorübergehend.",
    icon: "calendarClock",
    metaTitle: "Verhinderungspflege in Hanau | Medicum Pflegedienst",
    metaDescription:
      "Verhinderungspflege in Hanau: Vorübergehende Pflege, wenn pflegende Angehörige erkranken oder eine Auszeit brauchen. Kosten können in der Regel die Pflegeversicherung übernehmen.",
    intro: [
      "Angehörige, die zu Hause pflegen, leisten viel. Doch auch sie werden krank, haben Termine oder brauchen einmal einige Tage für sich.",
      "In solchen Situationen übernimmt Medicum die Pflege vorübergehend – damit die Versorgung zu Hause verlässlich weiterläuft.",
    ],
    sections: [
      {
        heading: "Wann Verhinderungspflege sinnvoll ist",
        bullets: [
          "Wenn die pflegende Angehörige oder der pflegende Angehörige erkrankt",
          "Bei eigenen Arzt-, Kur- oder Krankenhausterminen",
          "Wenn eine Auszeit oder ein Urlaub ansteht",
          "Bei kurzfristigen beruflichen oder familiären Verpflichtungen",
        ],
      },
      {
        heading: "Kostenübernahme",
        body: "Die Kosten können in der Regel über die Pflegeversicherung übernommen werden. Die individuellen Voraussetzungen sollten im Einzelfall geprüft werden. Wir erklären Ihnen gerne, welche Unterlagen benötigt werden und an wen Sie sich wenden können.",
      },
    ],
    audience:
      "Für pflegende Angehörige, die vorübergehend ausfallen, und für pflegebedürftige Menschen, deren Versorgung in dieser Zeit gesichert sein muss.",
    faqs: [
      {
        question: "Was ist Verhinderungspflege?",
        answer:
          "Verhinderungspflege bedeutet, dass ein Pflegedienst die Pflege vorübergehend übernimmt, wenn die sonst pflegende Person verhindert ist – etwa durch Krankheit, Termine oder eine Auszeit. Die Versorgung zu Hause läuft in dieser Zeit weiter, ohne dass die Familie eine Lücke überbrücken muss.",
      },
      {
        question: "Wer übernimmt die Kosten für die Verhinderungspflege?",
        answer:
          "Die Kosten können in der Regel über die Pflegeversicherung übernommen werden. Ob und in welchem Umfang das im Einzelfall gilt, hängt von den individuellen Voraussetzungen ab und sollte vorab geprüft werden. Wir unterstützen Sie dabei, die nötigen Schritte zu klären.",
      },
    ],
    related: ["pflegeberatung", "grundpflege", "betreuung"],
    ctaLabel: "Pflegeberatung anfragen",
  },
  {
    slug: "pflegeberatung",
    title: "Pflegeberatung",
    teaser:
      "Orientierung im Pflegealltag: Kostenübernahme nach SGB XI, Pflegegrad beantragen, § 37.3 Beratungseinsatz, § 45b Entlastungsbetrag und Hilfsmittel.",
    icon: "messageCircle",
    metaTitle: "Pflegeberatung in Hanau | § 37.3 SGB XI | Medicum Pflegedienst",
    metaDescription:
      "Pflegeberatung nach § 37 Abs. 3 SGB XI in Hanau: Medicum berät zu Pflegegraden (1–5), Entlastungsbetrag (§ 45b SGB XI, 125 €/Monat), Kostenübernahme und Hilfsmitteln – persönlich und mehrsprachig.",
    intro: [
      "Wenn Pflege plötzlich zum Thema wird, stellen sich viele Fragen auf einmal: Wer zahlt was? Welche Hilfsmittel gibt es? Wie beantragt man einen Pflegegrad? Was ist der § 37.3 Beratungseinsatz?",
      "Medicum ist als ambulanter Pflegedienst in Hanau berechtigt, die gesetzlich vorgeschriebene Pflegeberatung nach § 37 Abs. 3 SGB XI durchzuführen. Wir sortieren alle Fragen gemeinsam mit Ihnen – verständlich, in Ruhe und ohne Fachchinesisch.",
    ],
    sections: [
      {
        heading: "Pflegeberatungseinsatz nach § 37 Abs. 3 SGB XI",
        body: "Wenn Sie Pflegegeld beziehen (ab Pflegegrad 2), sind Sie gesetzlich verpflichtet, regelmäßig einen Beratungseinsatz bei einem zugelassenen Pflegedienst abzurufen. Diese Pflicht ergibt sich aus § 37 Abs. 3 des Sozialgesetzbuches XI (SGB XI). Medicum führt diese Beratungseinsätze in Hanau durch und rechnet sie direkt mit Ihrer Pflegekasse ab. Die Häufigkeit ist gesetzlich festgelegt: Pflegegrad 2 und 3 alle sechs Monate, Pflegegrad 4 und 5 alle drei Monate.",
      },
      {
        heading: "Pflegegrade 1 bis 5 – Was steht Ihnen zu?",
        bullets: [
          "Pflegegrad 1: Geringe Beeinträchtigung – Entlastungsbetrag 125 €/Monat (§ 45b SGB XI)",
          "Pflegegrad 2: Erhebliche Beeinträchtigung – Pflegegeld 332 €/Monat, Sachleistungen bis 761 €/Monat",
          "Pflegegrad 3: Schwere Beeinträchtigung – Pflegegeld 572 €/Monat, Sachleistungen bis 1.432 €/Monat",
          "Pflegegrad 4: Schwerste Beeinträchtigung – Pflegegeld 764 €/Monat, Sachleistungen bis 1.778 €/Monat",
          "Pflegegrad 5: Schwerste Beeinträchtigung mit besonderem Bedarf – Pflegegeld 946 €/Monat, Sachleistungen bis 2.200 €/Monat",
        ],
      },
      {
        heading: "Entlastungsbetrag nach § 45b SGB XI – 125 € pro Monat",
        body: "Menschen mit anerkanntem Pflegegrad haben Anspruch auf den Entlastungsbetrag in Höhe von 125 € pro Monat (§ 45b SGB XI). Dieser Betrag kann für Haushaltshilfe, Betreuung, Alltagsbegleitung und andere Entlastungsleistungen genutzt werden, die von anerkannten Pflegediensten wie Medicum erbracht werden. Nicht genutzter Betrag kann bis zu zwölf Monate übertragen werden.",
      },
      {
        heading: "Worüber wir Sie beraten",
        bullets: [
          "§ 37.3 SGB XI Beratungseinsatz – gesetzliche Pflichtberatung bei Pflegegeldbezug",
          "Beantragung eines Pflegegrades (Pflegegrad 1 bis 5) bei der Pflegekasse",
          "Entlastungsbetrag § 45b SGB XI (125 €/Monat) – Abrechnung und Nutzung",
          "Häusliche Krankenpflege (HKP) nach SGB V – Verordnung Muster 12 durch Ihren Arzt",
          "Verhinderungspflege – Kostenübernahme bis zu 1.612 € pro Jahr",
          "Anpassung des Wohnraums an den Pflegebedarf (Zuschüsse bis 4.000 €)",
          "Geeignete Hilfsmittel für den Alltag – Antrag bei der Pflegekasse",
          "Rezept- und Medikamentenmanagement",
          "Vermittlung weiterer Unterstützungsangebote in Hanau und Umgebung",
        ],
      },
      {
        heading: "Was wir nicht versprechen",
        body: "Über die Anerkennung eines Pflegegrades und über Kostenübernahmen entscheiden die Pflegekasse beziehungsweise die Krankenkasse. Wir können Sie bei der Beantragung unterstützen und die Abläufe erklären – eine Bewilligung können wir nicht zusichern.",
      },
    ],
    audience:
      "Für pflegebedürftige Menschen und ihre Angehörigen in Hanau, die Pflegegeld beziehen und den gesetzlich vorgeschriebenen Beratungseinsatz (§ 37.3 SGB XI) benötigen, oder die sich einen Überblick über Pflegeleistungen, Kostenübernahme und Pflegegrade verschaffen möchten.",
    faqs: [
      {
        question: "Was ist der Pflegeberatungseinsatz nach § 37 Abs. 3 SGB XI?",
        answer:
          "Der Pflegeberatungseinsatz nach § 37 Abs. 3 SGB XI ist ein gesetzlich vorgeschriebener Beratungsbesuch, den Personen mit Pflegegrad 2–5, die Pflegegeld beziehen, regelmäßig bei einem zugelassenen Pflegedienst abrufen müssen. Bei Pflegegrad 2 und 3 ist dieser Besuch alle sechs Monate Pflicht, bei Pflegegrad 4 und 5 alle drei Monate. Medicum führt diese Beratungseinsätze in Hanau durch und rechnet sie direkt mit der Pflegekasse ab.",
      },
      {
        question: "Bietet Medicum Pflegeberatung nach § 37.3 SGB XI in Hanau an?",
        answer:
          "Ja. Medicum Pflegedienst Hanau ist berechtigt, Pflegeberatungseinsätze nach § 37 Abs. 3 SGB XI durchzuführen und direkt mit Ihrer Pflegekasse abzurechnen. Rufen Sie uns an unter 06181 49 84 570, um einen Beratungstermin zu vereinbaren.",
      },
      {
        question: "Was ist der Entlastungsbetrag nach § 45b SGB XI?",
        answer:
          "Der Entlastungsbetrag nach § 45b SGB XI beträgt 125 € pro Monat und steht allen Personen mit anerkanntem Pflegegrad (1–5) zu. Er kann für Haushaltshilfe, Betreuung, Alltagsbegleitung und andere Entlastungsleistungen bei anerkannten Anbietern wie Medicum genutzt werden. Nicht genutzter Betrag kann bis zu zwölf Monate in das nächste Kalenderjahr übertragen werden.",
      },
      {
        question: "Wie beantragt man einen Pflegegrad?",
        answer:
          "Den Antrag auf einen Pflegegrad stellen Sie bei Ihrer Pflegekasse (dem Pflegeanteil Ihrer Krankenkasse). Nach dem Antrag schickt der Medizinische Dienst (MD) eine Gutachterin oder einen Gutachter zur Begutachtung. Medicum unterstützt Sie bei der Vorbereitung auf diese Begutachtung und erklärt, welche Unterlagen sinnvoll sind.",
      },
      {
        question: "Unterstützt Medicum bei der Beantragung eines Pflegegrades?",
        answer:
          "Ja. Wir unterstützen Sie bei der Beantragung eines Pflegegrades und erklären, welche Schritte und Unterlagen dafür nötig sind. Die Entscheidung über die Einstufung trifft die Pflegekasse nach einer Begutachtung durch den Medizinischen Dienst – eine Bewilligung können wir deshalb nicht zusichern.",
      },
      {
        question: "Was kostet die Pflegeberatung bei Medicum?",
        answer:
          "Der gesetzlich vorgeschriebene Beratungseinsatz nach § 37.3 SGB XI wird direkt mit Ihrer Pflegekasse abgerechnet – für Sie entstehen in der Regel keine Kosten. Für weitere Beratungsleistungen sprechen Sie uns bitte direkt an. Wir klären das transparent mit Ihnen, bevor eine Leistung beginnt.",
      },
    ],
    related: ["verhinderungspflege", "behandlungspflege", "betreuung"],
    ctaLabel: "Pflegeberatung anfragen",
  },
  {
    slug: "sterbebegleitung",
    title: "Sterbebegleitung",
    teaser:
      "Begleitung in der letzten Lebensphase zu Hause – in Zusammenarbeit mit Ärzten, Krankenhäusern und Palliativmedizinern.",
    icon: "flower",
    metaTitle: "Sterbebegleitung zu Hause in Hanau | Medicum Pflegedienst",
    metaDescription:
      "Sterbebegleitung zu Hause in Hanau: würdevolle Begleitung in der letzten Lebensphase, in Zusammenarbeit mit Ärzten, Krankenhäusern, Palliativmedizinern und weiteren Einrichtungen.",
    intro: [
      "Viele Menschen möchten ihre letzte Lebenszeit dort verbringen, wo sie zu Hause sind. Wo es möglich ist, unterstützen wir diesen Wunsch.",
      "Wir begleiten pflegebedürftige Menschen in dieser Phase mit Ruhe und Respekt – und wir lassen Angehörige damit nicht allein.",
    ],
    sections: [
      {
        heading: "Wie wir begleiten",
        bullets: [
          "Pflegerische Versorgung in der letzten Lebensphase zu Hause",
          "Zusammenarbeit mit Ärztinnen und Ärzten",
          "Zusammenarbeit mit Krankenhäusern",
          "Zusammenarbeit mit Palliativmedizinerinnen und Palliativmedizinern",
          "Zusammenarbeit mit weiteren Einrichtungen",
          "Unterstützung und Zuwendung für Angehörige",
        ],
      },
      {
        heading: "Zeit für Angehörige",
        body: "Diese Zeit fordert Familien sehr. Wir nehmen uns Zeit für Gespräche, erklären, was geschieht, und unterstützen dabei, den Alltag weiter zu bewältigen. Wenn weitergehende Unterstützung sinnvoll ist, helfen wir bei der Vermittlung.",
      },
    ],
    audience:
      "Für Menschen, die ihre letzte Lebenszeit zu Hause verbringen möchten, und für ihre Angehörigen.",
    faqs: [
      {
        question: "Was bedeutet Sterbebegleitung zu Hause?",
        answer:
          "Sterbebegleitung zu Hause bedeutet, dass ein Mensch in der letzten Lebensphase in seiner gewohnten Umgebung gepflegt und begleitet wird. Medicum arbeitet dabei mit Ärztinnen und Ärzten, Krankenhäusern, Palliativmedizinern und weiteren Einrichtungen zusammen und unterstützt auch die Angehörigen.",
      },
    ],
    related: ["pflegeberatung", "grundpflege", "betreuung"],
    ctaLabel: "Gespräch anfragen",
    tone: "calm",
  },
];

export const serviceBySlug = (slug: string): Service | undefined =>
  services.find((s) => s.slug === slug);

/** Reihenfolge für die Übersicht auf der Startseite */
export const featuredServiceSlugs = [
  "behandlungspflege",
  "grundpflege",
  "pflegeberatung",
  "haushaltshilfe",
  "betreuung",
  "verhinderungspflege",
];

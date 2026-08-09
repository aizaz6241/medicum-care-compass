import { X, Phone } from "lucide-react";
import { languages } from "@/data/company";
import { company } from "@/data/company";
import { languageNotice, useLanguage } from "@/i18n/language-context";

/** Hinweis, wenn eine Sprache gewählt wurde, für die noch keine Übersetzung vorliegt. */
export function LanguageNotice() {
  const { language, noticeVisible, dismissNotice } = useLanguage();
  if (!noticeVisible || language === "de") return null;
  const meta = languages.find((l) => l.code === language);

  return (
    <div className="bg-primary text-primary-foreground" role="status">
      <div className="container-page flex flex-wrap items-center gap-x-6 gap-y-3 py-3">
        <p dir={meta?.dir} className="flex-1 text-sm leading-relaxed">
          {languageNotice[language]}
        </p>
        <a
          href={company.phoneHref}
          className="inline-flex min-h-11 items-center gap-2 rounded-full bg-primary-foreground/10 px-4 text-sm font-semibold underline-offset-4 hover:underline"
        >
          <Phone className="size-4" aria-hidden="true" />
          {company.phone}
        </a>
        <button
          type="button"
          onClick={dismissNotice}
          aria-label="Hinweis schließen"
          className="inline-flex size-11 items-center justify-center rounded-full hover:bg-primary-foreground/10"
        >
          <X className="size-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { languages, type LanguageCode } from "@/data/company";

/**
 * Mehrsprachige Architektur (Grundgerüst).
 *
 * Aktuell ist Deutsch die einzige vollständig gepflegte und für SEO kanonische
 * Sprachfassung. Weitere Sprachen sind als Auswahl vorbereitet: Sobald echte
 * Übersetzungen vorliegen, können sie hier als Wörterbücher ergänzt und über
 * eigene URL-Präfixe (z. B. /en/...) ausgeliefert werden.
 *
 * Es wird bewusst NICHT maschinell übersetzt – stattdessen erhalten Nutzerinnen
 * und Nutzer den Hinweis, dass eine persönliche Beratung in ihrer Sprache
 * möglich ist (Sprachangebot laut Broschüre).
 */

const STORAGE_KEY = "medicum:preferred-language";

interface LanguageContextValue {
  language: LanguageCode;
  setLanguage: (code: LanguageCode) => void;
  /** true, wenn für die gewählte Sprache noch keine Übersetzung vorliegt */
  isTranslationPending: boolean;
  dismissNotice: () => void;
  noticeVisible: boolean;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<LanguageCode>("de");
  const [noticeVisible, setNoticeVisible] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as LanguageCode | null;
    if (stored && languages.some((l) => l.code === stored)) {
      setLanguageState(stored);
    }
  }, []);

  const setLanguage = useCallback((code: LanguageCode) => {
    setLanguageState(code);
    window.localStorage.setItem(STORAGE_KEY, code);
    setNoticeVisible(code !== "de");
  }, []);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      isTranslationPending: language !== "de",
      noticeVisible,
      dismissNotice: () => setNoticeVisible(false),
    }),
    [language, setLanguage, noticeVisible],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}

/** Hinweistexte in der jeweiligen Sprache – kurz, geprüft und bewusst knapp gehalten. */
export const languageNotice: Record<LanguageCode, string> = {
  de: "Diese Website ist auf Deutsch verfügbar.",
  en: "This website is currently available in German only. We speak several languages – please call us and we will advise you personally.",
  ru: "Сайт пока доступен только на немецком языке. Мы говорим на нескольких языках — позвоните нам, и мы проконсультируем вас лично.",
  ro: "Acest site este disponibil momentan doar în limba germană. Vorbim mai multe limbi – sunați-ne și vă consiliem personal.",
  ps: "دا ویب پاڼه اوس مهال یوازې په الماني ژبه شته. موږ په څو ژبو خبرې کوو – راته زنګ ووهئ، موږ به مو په خپله ژبه لارښوونه وکړو.",
  hi: "यह वेबसाइट फ़िलहाल केवल जर्मन में उपलब्ध है। हम कई भाषाएँ बोलते हैं – कृपया हमें कॉल करें, हम आपको व्यक्तिगत रूप से सलाह देंगे।",
  prs: "این وبسایت فعلاً تنها به زبان آلمانی در دسترس است. ما به چندین زبان صحبت می‌کنیم – لطفاً با ما تماس بگیرید تا شما را راهنمایی کنیم.",
  fa: "این وب‌سایت در حال حاضر تنها به زبان آلمانی در دسترس است. ما به چند زبان صحبت می‌کنیم – لطفاً با ما تماس بگیرید.",
  ur: "یہ ویب سائٹ فی الحال صرف جرمن زبان میں دستیاب ہے۔ ہم کئی زبانیں بولتے ہیں – براہِ کرم ہمیں کال کریں، ہم آپ کی ذاتی رہنمائی کریں گے۔",
};

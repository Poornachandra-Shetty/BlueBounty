import { useEffect, useMemo, useState } from "react";
import { LanguageContext } from "./LanguageContext.js";
import { translations, getTranslation } from "../i18n.js";

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    if (typeof window === "undefined") {
      return "en";
    }

    const stored = localStorage.getItem("bb_language");
    return stored && translations[stored] ? stored : "en";
  });

  useEffect(() => {
    localStorage.setItem("bb_language", language);
  }, [language]);

  const t = useMemo(
    () => (key) => getTranslation(language, key),
    [language]
  );

  const languages = translations[language]?.languages || translations.en.languages;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, languages }}>
      {children}
    </LanguageContext.Provider>
  );
}

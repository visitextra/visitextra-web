import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
  useCallback,
} from "react";
import { translations, TranslationKey } from "./translations";

export type Language = "en" | "tr" | "ar";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
  dir: "ltr" | "rtl";
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

const getInitialLanguage = (): Language => {
  if (typeof window !== "undefined") {
    const storedLang = localStorage.getItem("visitextra_language");
    if (storedLang === "en" || storedLang === "tr" || storedLang === "ar") {
      return storedLang;
    }
  }
  return "tr"; // Default language Turkish
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    localStorage.setItem("visitextra_language", language);
    document.documentElement.lang = language;
    const direction = language === "ar" ? "rtl" : "ltr";
    document.documentElement.dir = direction;
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = useCallback(
    (key: TranslationKey): string => {
      const keys = key.split(".");
      let result: any = translations[language];

      for (const k of keys) {
        result = result?.[k];
        if (result === undefined) {
          console.warn(
            `Translation key not found: "${key}" for language "${language}"`
          );
          return key; // Return the key as a fallback
        }
      }

      if (typeof result !== "string") {
        console.warn(
          `Translation key "${key}" did not resolve to a string for language "${language}"`
        );
        return key;
      }

      return result;
    },
    [language]
  );

  const dir = language === "ar" ? "rtl" : "ltr";

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

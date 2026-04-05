/*
 * LanguageContext.jsx
 *
 * Provides { lang, setLang } to the entire app.
 *
 *  - lang:    "en" | "es"
 *  - setLang: persists the choice to localStorage so it survives page reloads
 *
 * On first visit, detectLanguage() auto-selects the language based on:
 *   1. Saved localStorage preference
 *   2. IP geolocation
 *   3. Browser language
 *   4. Fallback: English
 */

import { createContext, useContext, useState, useEffect } from "react";
import { detectLanguage } from "../i18n/detectLanguage";

const LanguageContext = createContext({
  lang:    "en",
  setLang: () => {},
});

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState("en"); // default while detection runs

  // Auto-detect on first mount
  useEffect(() => {
    detectLanguage().then(setLangState);
  }, []);

  // Persist manual changes to localStorage
  function setLang(newLang) {
    localStorage.setItem("portfolio-lang", newLang);
    setLangState(newLang);
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Convenience hook — import this in every component that needs translations
export function useLanguage() {
  return useContext(LanguageContext);
}

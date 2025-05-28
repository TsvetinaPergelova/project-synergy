// filepath: locales/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { en } from "./en";
import { bg } from "./bg";

const resources = {
  en: {
    translation: en,
  },
  bg: {
    translation: bg,
  },
};

i18n
  .use(LanguageDetector) // Detects language from browser settings, path, etc.
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: "bg",
    supportedLngs: ["en", "bg"], // Default language if a translation is missing
    // lng: 'bg', // Initial language, LanguageDetector will override this
    debug: process.env.NODE_ENV === "development",
    interpolation: {
      escapeValue: false, // React already protects from XSS
    },
    detection: {
      // Order and from where user language should be detected
      order: [
        "querystring",
        "sessionstorage",
        "localStorage",
        "navigator",
        "htmlTag",
      ],
      // For Next.js, language is usually the first segment in the path
      // e.g. /en/dashboard or /bg/dashboard
      // The 'path' detector looks at window.location.pathname.
      // By default, it checks the first segment (index 0).
      caches: ["localStorage", "sessionStorage"], // Cache the detected language
    },
  });

export default i18n;

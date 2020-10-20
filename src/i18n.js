import i18n from "i18next";
import { initReactI18next } from "react-i18next/hooks";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  // load translation using http -> see /public/locales
  .use(Backend)
  // detect user language
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  .init({
    debug: true,
    whitelist: ["es", "en"],
    backend: {
      // for all available options read the backend's repository readme file
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
  });

export default i18n;

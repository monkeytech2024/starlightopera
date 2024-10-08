import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import intervalPlural from "i18next-intervalplural-postprocessor";
import translationEN from "../assets/languages/EN/global.json";
import translationZH from "../assets/languages/CN/global.json";
import I18NextHttpBackend from "i18next-http-backend";

const resources = {
  en: {
    translation: translationEN,
  },
  zh: {
    translation: translationZH,
  },
};

i18n.use(initReactI18next).use(I18NextHttpBackend).use(LanguageDetector).init({
  resources,
  lng: "zh",
  fallbackLng: "en",

  supportedLngs: ['en', 'zh'],

});
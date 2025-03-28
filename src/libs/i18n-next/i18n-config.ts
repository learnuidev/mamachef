import type { FormatFunction } from "i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import myelinConfig from "../../../myelin.config.json";

export const languagesList = {
  en: "English (UK)",
  "en-US": "English (US)",
  zh: "Chinese (Mainland)",
  "zh-TW": "Chinese (Taiwan)",
  es: "Spanish",
  fr: "French",
  ko: "Korean",
  ro: "Romanian",
  ur: "Urdu",
  hi: "Hindi",
  fa: "Farsi",
  ar: "Arabic",
  ru: "Russian",
  ja: "Japanese",

  // Add your supported locales here
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
} as const;

const displayLanguages = Object.fromEntries(
  Object.entries(languagesList)?.filter((item) => {
    const langId = item[0];
    return (
      langId === myelinConfig.locale.sourceLanguage ||
      myelinConfig.locale.targetLanguages?.includes(langId)
    );
  }),
);

export type Language = keyof typeof languagesList;

export const i18nConfig = {
  cookieName: "I18N_COOKIE",
  fallbackLanguage: localStorage.getItem("locale") || "en",
  defaultNamespace: "banner",
  languages: Object.keys(displayLanguages) as Language[],
};

const customFormat: FormatFunction = (value, format) => {
  if (format === "capitalize") {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
  return value;
};

export const i18nOptions = {
  // debug: true,
  supportedLngs: i18nConfig.languages,
  fallbackLng: i18nConfig.fallbackLanguage,
  lng: i18nConfig.fallbackLanguage,
  fallbackNS: i18nConfig.defaultNamespace,
  defaultNS: i18nConfig.defaultNamespace,
  ns: [i18nConfig.defaultNamespace],
  interpolation: {
    escapeValue: false, // React already does escaping
    format: customFormat,
    skipOnVariables: false,
  },

  backend: {
    backends: [
      resourcesToBackend((lng: string, ns: string) => {
        console.log("LANGUAGE", lng);
        return import(`/src/locales/${lng}/${ns}.json`);
      }),
    ],
    backendOptions: [],
  },
};

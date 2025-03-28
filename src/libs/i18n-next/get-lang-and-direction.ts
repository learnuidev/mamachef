// import { getCookie } from "./cookies";

import { getCookie } from "./cookie-utils";
import { i18nConfig } from "./i18n-config";

const langDirections = {
  en: "ltr",
  ar: "rtl", // Add more languages as needed
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
} as any;

export const getLangAndDirection = () => {
  // const lang = (await getCookie()) || "en";
  const lang =
    localStorage.getItem("locale") || getCookie(i18nConfig.cookieName) || "en";

  const direction = langDirections[lang] || "ltr"; // Default to ltr if not found

  return {
    lang: lang,
    direction: "ltr",
  };
};

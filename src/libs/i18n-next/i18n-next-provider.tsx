"use client";

import React, { type ReactNode, useEffect } from "react";
import { I18nextProvider } from "react-i18next";

import { getCookie } from "./cookie-utils";
import { i18nConfig } from "./i18n-config";
import i18nInstance from "./init";

export function I18NextProvider({ children }: { children: ReactNode }) {
  const locale =
    localStorage.getItem("locale") || getCookie(i18nConfig.cookieName);

  useEffect(() => {
    if (i18nInstance.isInitialized) {
      i18nInstance.changeLanguage(locale);
    }
  }, [locale]);
  return <I18nextProvider i18n={i18nInstance}>{children}</I18nextProvider>;
}

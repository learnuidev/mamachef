import React, { type ReactNode } from "react";
import { getLangAndDirection } from "./get-lang-and-direction";
import { I18NextProvider } from "./i18n-next-provider";

export function I18NextHtmlProvider({
  children,
}: {
  children: ReactNode;
}) {
  const { lang, direction } = getLangAndDirection();

  return (
    <I18NextProvider>
      <html suppressHydrationWarning lang={lang} dir={direction}>
        {children}
      </html>
    </I18NextProvider>
  );
}

"use client";

// import { useRouter } from "next/navigation";
import { useState } from "react";

// import { Button } from "@/components/ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";

import { useRouter } from "@tanstack/react-router";
import myelinConfig from "../../../myelin.config.json";
import { getCookie, setCookie } from "./cookie-utils";
import { type Language, i18nConfig, languagesList } from "./i18n-config";
import { useTranslation } from "./use-translation";

export function LanguageSwitcher() {
  const locale = getCookie(i18nConfig.cookieName) as Language;
  const [selectedItem, setSelectedItem] = useState<Language>(
    locale || i18nConfig.fallbackLanguage,
  );
  const router = useRouter();
  const { i18n } = useTranslation();
  const handleChange = async (value: Language) => {
    const newLocale = value;
    setSelectedItem(newLocale);
    localStorage.setItem("locale", newLocale);
    // set cookie for next-i18n-router
    await i18n.changeLanguage(newLocale, () => {
      setCookie(i18nConfig.cookieName, newLocale);
    });
  };

  const srcLang = myelinConfig.locale.sourceLanguage;

  //yoo

  return (
    <div>
      <select
        onChange={(event) => {
          handleChange(event.target.value as Language);
        }}
        name="languages"
        id="languages"
        value={localStorage.getItem("locale") || srcLang}
      >
        <option value={srcLang}> {languagesList?.[srcLang as Language]}</option>
        {Object.entries(languagesList)
          .filter((val) => {
            return myelinConfig.locale.targetLanguages.includes(val[0]);
          })
          .map((item) => {
            return (
              <option key={item?.[0]} value={item?.[0]}>
                {" "}
                {item?.[1]}
              </option>
            );
          })}
      </select>
    </div>
  );

  // running into performance problems
  // return (
  //   <DropdownMenu>
  //     <DropdownMenuTrigger asChild>
  //       <Button variant="ghost" className="rounded-full">
  //         <div className="">{languagesList[selectedItem]}</div>
  //       </Button>
  //     </DropdownMenuTrigger>
  //     <DropdownMenuContent className="w-fit">
  //       {i18nConfig.languages.map((item) => {
  //         return (
  //           <DropdownMenuItem
  //             key={item}
  //             className="flex items-center gap-2"
  //             onClick={() => handleChange(item)}
  //           >
  //             <p>{languagesList[item]}</p>
  //           </DropdownMenuItem>
  //         );
  //       })}
  //     </DropdownMenuContent>
  //   </DropdownMenu>
  // );
}

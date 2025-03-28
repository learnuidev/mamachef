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

  return (
    <div className="flex gap-4 items-center justify-center my-4 text-xs">
      <button
        type="button"
        onClick={() => {
          handleChange("en");
        }}
      >
        {languagesList.en}
      </button>
      <button
        type="button"
        onClick={() => {
          handleChange("fr");
        }}
      >
        {languagesList.fr}
      </button>
      <button
        type="button"
        onClick={() => {
          handleChange("es");
        }}
      >
        {languagesList.es}
      </button>
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

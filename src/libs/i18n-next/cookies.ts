// app/utils/cookies.ts
import { createServerFn } from "@tanstack/start";
import { getWebRequest, setCookie } from "@tanstack/start/server";

export const getCookie = createServerFn({ method: "GET" }).handler(async () => {
  const request = getWebRequest();
  if (!request) return null;

  const cookie = request.headers.get("cookie");
  const cookieValue = cookie?.split("; ").find((row: string) => row.startsWith("language="));
  return cookieValue?.split("=")[1];
});

export const setCookieLanguage = createServerFn({ method: "POST" })
  .validator((data: { locale: string }) => data)
  .handler(async ({ data: { locale } }) => {
    setCookie("language", locale);
  });
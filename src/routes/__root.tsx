import { I18NextHtmlProvider } from "@/libs/i18n-next/i18n-next-html-provider";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import { ThemeProvider } from "@/components/theme-provider";
import appCss from "@/styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "TanStack Start Starter",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  component: () => (
    <I18NextHtmlProvider>
      <body>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <Outlet />
          <TanStackRouterDevtools />
        </ThemeProvider>
      </body>
    </I18NextHtmlProvider>
  ),
});

import { LanguageSwitcher } from "@/libs/i18n-next/language-switcher";
import { useTranslation } from "@/libs/i18n-next/use-translation";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  const { t } = useTranslation(["banner", "common"]);
  return (
    <div>
      <LanguageSwitcher />
      <section className="flex justify-center items-center flex-col mt-32">
        <h1 className="text-7xl font-bold lg:text-9xl">{t("banner:title")}</h1>
        <p className="mt-4 text-3xl font-light lowercase">
          {t("banner:description")}
        </p>

        <button
          type="button"
          className="cursor-pointer mt-8 border-1 border-gray-200 rounded-full px-2 py-1 hover:shadow-sm"
          onClick={() => {
            alert("todo");
          }}
        >
          {t("common:get.started")}
        </button>
      </section>
    </div>
  );
}

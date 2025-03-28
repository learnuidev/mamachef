import { i18nOptions } from "@/libs/i18n-next/i18n-config";

import banner from "@/src/locales/en/banner.json";
import common from "@/src/locales/en/common.json";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: typeof i18nOptions.defaultNS;
    resources: {
      banner: typeof banner;
      common: typeof common;
    };
  }
}


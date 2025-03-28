import type { Namespace } from "i18next";
import {
	type UseTranslationOptions,
	useTranslation as useReactI18nTranslation,
} from "react-i18next";
import type { _DefaultNamespace } from "react-i18next/TransWithoutContext";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
function useCustomTranslation<Ns extends Namespace = _DefaultNamespace>(
	namespace?: Ns,
	options?: UseTranslationOptions<undefined>,
) {
	const translationResult = useReactI18nTranslation(namespace, options);

	return translationResult;
}

export { useCustomTranslation as useTranslation };

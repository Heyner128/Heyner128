import type { Descriptions } from "@/contents/descriptions/type";
import type { Titles } from "@/contents/titles/type";
import { use } from "react";

import { locales, defaultLocale } from "../../locales.config.mjs";

function getCookie(name: string) {
    const cookieValue = document.cookie
        .split('; ')
        .find(row => row.startsWith(name + '='))
        ?.split('=')[1];
    return cookieValue || '';
}

export function usePreferredLanguage() {
    const lang = getCookie('preferredLocale') || navigator.language || defaultLocale;
    return lang;
}

export function useTranslatedContent() {

    const translationData = import.meta.glob<{data: Record<string, any>}>(
      "../contents/**/*.ts",
      { eager: true }
    );

    const lang = usePreferredLanguage();

    const importSuffix = lang != defaultLocale && locales.includes(lang) ? "." + lang : "";

    const descriptionsFilepath = `../contents/descriptions/descriptions${importSuffix}.ts`;

    const titlesFilepath = `../contents/titles/titles${importSuffix}.ts`;

    return {
      descriptions: translationData[descriptionsFilepath].data as Descriptions,
      titles: translationData[titlesFilepath].data as Titles,
    };
        

}
import type { Descriptions } from "@/contents/descriptions/type";
import type { Titles } from "@/contents/titles/type";
import { use } from "react";

import { locales, defaultLocale } from "../../locales.config.mjs";

export function usePreferredLanguage() {
    const url = new URL(window.location.href);
    const lang = url.searchParams.get("lang") ?? defaultLocale;

    return lang;
}

export function useTranslatedContent() {
    const lang = usePreferredLanguage();

    const importSuffix = lang != defaultLocale && locales.includes(lang) ? "." + lang : "";

    const descriptionsFilepath = `../contents/descriptions/descriptions${importSuffix}.ts`;

    const titlesFilepath = `../contents/titles/titles${importSuffix}.ts`;

    return {
        descriptions : use(import(descriptionsFilepath)).data as Descriptions,
        titles: use(import(titlesFilepath)).data as Titles,
    }
}
import type { Descriptions } from "@/contents/descriptions/type";
import type { Titles } from "@/contents/titles/type";
import { use } from "react";


export function usePreferredLanguage() {
    const url = new URL(window.location.href);
    const lang = url.searchParams.get("lang") ?? "en";

    return lang;
}

export function useTranslatedContent() {
    const lang = usePreferredLanguage();

    const descriptionsFilepath = `../contents/descriptions/descriptions${
        lang != "en"?"." + lang:""
    }.ts`;

    const titlesFilepath = `../contents/titles/titles${
        lang != "en"?"." + lang:""
    }.ts`;

    return {
        descriptions : use(import(descriptionsFilepath)).data as Descriptions,
        titles: use(import(titlesFilepath)).data as Titles,
    }
}
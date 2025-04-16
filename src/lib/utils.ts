import type { Descriptions } from "@/contents/descriptions/type";
import type { Titles } from "@/contents/titles/type";
import { clsx, type ClassValue } from "clsx"
import { ALLOWED_LOCALES, DEFAULT_LOCALE } from "locales.config.mjs";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function getPreferredColorScheme() {
  const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;


  return isDark ? "dark" : "light";
}

export function getCookie(name: string, rawValues: string | null | undefined = document.cookie) {
  const cookieValue = rawValues
    ?.split("; ")
    .find((row) => row.startsWith(name + "="))
    ?.split("=")[1];
  return cookieValue ?? "";
}

export function setCookie(name: string, value: string) {
  document.cookie = `${name}=${value}; path=/; SameSite=Lax`;
}


export function getTranslation(locale: string | undefined) {
  const translationData = import.meta.glob<{data: Record<string, any>}>(
    "../contents/**/*.ts",
    { eager: true }
  );

  const lang = locale && ALLOWED_LOCALES.includes(locale) ? locale : DEFAULT_LOCALE;

  const importSuffix = lang != DEFAULT_LOCALE ? "." + lang : "";

  const descriptionsFilepath = `../contents/descriptions/descriptions${importSuffix}.ts`;

  const titlesFilepath = `../contents/titles/titles${importSuffix}.ts`;

  return {
    descriptions: translationData[descriptionsFilepath].data as Descriptions,
    titles: translationData[titlesFilepath].data as Titles,
  };
}
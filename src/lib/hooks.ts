import { useLayoutEffect, useState } from "react";
import { DEFAULT_LOCALE } from "../../locales.config.mjs";
import { getCookie, setCookie } from "./cookies";
import { getTranslatedPageTexts } from "./translations";
import { changeDocumentColorScheme, getPreferredColorScheme } from "./color-scheme";

export function useLocale(): Readonly<[string, (newLocale: string) => void]> {
    const [locale, setLocale] = useState<string>(getCookie("preferredLocale") || DEFAULT_LOCALE);

    const setPreferredLocale = (newLocale: string) => {
        setCookie("preferredLocale", newLocale);
        setLocale(newLocale);
        window.location.reload();
    };

    return [ locale, setPreferredLocale ];
}

export function useTranslatedContent() {
    const [locale, _] = useLocale();

    return getTranslatedPageTexts(locale);
}

export function useTheme() {
  const [theme, setTheme] = useState<"light" | "dark">(
    getPreferredColorScheme
  );

  useLayoutEffect(() => {
    changeDocumentColorScheme(theme);
  }, [theme]);
    
  const toggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return [theme, toggle] as const;
}
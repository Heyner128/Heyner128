import { useLayoutEffect, useState } from "react";
import { DEFAULT_LOCALE } from "../../locales.config.mjs";
import { getCookie, getPreferredColorScheme, getTranslation, setCookie } from "./utils";


export function useLocale(): Readonly<[string, (newLocale: string) => void]> {
    const [locale, setLocale] = useState<string>(getCookie("preferredLocale") || navigator.language || DEFAULT_LOCALE);

    const setPreferredLocale = (newLocale: string) => {
        setCookie("preferredLocale", newLocale);
        setLocale(newLocale);
        window.location.reload();
    };

    return [ locale, setPreferredLocale ];
}

export function useTranslatedContent() {
    const [locale, _] = useLocale();

    return getTranslation(locale);
}

export function useTheme() {
  const [theme, setTheme] = useState<"light" | "dark">(
    getPreferredColorScheme
  );

  useLayoutEffect(() => {
    if(theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
    
  const toggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return [theme, toggle] as const;
}
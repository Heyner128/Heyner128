import { useLayoutEffect, useState } from "react";
import { DEFAULT_LOCALE } from "../../locales.config.mjs";
import { getCookie, getPreferredColorScheme, getTranslation } from "./utils";


export function useTranslatedContent() {
    const locale = getCookie("preferredLocale") || navigator.language || DEFAULT_LOCALE;

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
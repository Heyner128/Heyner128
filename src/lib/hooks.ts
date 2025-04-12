import { useEffect, useState } from "react";
import { DEFAULT_LOCALE } from "../../locales.config.mjs";
import { getCookie, getPreferredColorScheme, getTranslation } from "./utils";


export function useTranslatedContent() {
    const locale = getCookie("preferredLocale") || navigator.language || DEFAULT_LOCALE;

    return getTranslation(locale);
}

export function useTheme() {
  const [theme, setTheme] = useState<"light" | "dark">(
    getPreferredColorScheme()
  );

  useEffect(() => {
    document.documentElement.classList.toggle(theme);
  }, [theme]);
    
  const toggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return [theme, toggle] as const;
}
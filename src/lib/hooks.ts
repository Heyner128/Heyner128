import { useLayoutEffect, useState } from "react";
import { getPreferredLocale, getTranslatedPageTexts, setPreferredLocale } from "./translations";
import { getPreferredColorScheme, setPreferredColorScheme } from "./color-scheme";

export function useLocale(): Readonly<[string, (newLocale: string) => void]> {
    const [locale] = useState<string>(getPreferredLocale);

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
    setPreferredColorScheme(theme);
  }, [theme]);

  const toggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return [theme, toggle] as const;
}
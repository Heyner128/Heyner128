import type { Descriptions } from "@/contents/descriptions/type";
import type { Titles } from "@/contents/titles/type";
import { ALLOWED_LOCALES, DEFAULT_LOCALE } from "locales.config.mjs";


export function getTranslatedPageTexts(requestedLocale: string | undefined) {
  const translationFiles = loadTranslationFiles();

  const { descriptionsFilePath, titlesFilePath } = composeFilePaths(
    requestedLocale
  );

  const descriptionsFile = translationFiles[descriptionsFilePath];
  const titlesFile = translationFiles[titlesFilePath];

  return {
    descriptions: descriptionsFile as Descriptions,
    titles: titlesFile as Titles,
  };
}

function loadTranslationFiles() {
  return import.meta.glob<Descriptions | Titles>(
    "../contents/(descriptions|titles)/(descriptions|titles)*.ts",
    { eager: true }
  );
}

function composeFilePaths(requestedLocale: string | undefined) {
  const importSuffix = composeImportSuffix(requestedLocale);
  const descriptionsFilePath = `../contents/descriptions/descriptions${importSuffix}.ts`;
  const titlesFilePath = `../contents/titles/titles${importSuffix}.ts`;

  return {
    descriptionsFilePath,
    titlesFilePath,
  };
}

function composeImportSuffix(requestedLocale: string | undefined) {
  const locale = getAvailableLocale(requestedLocale);
  return locale != DEFAULT_LOCALE ? `.${locale}` : "";
}

function getAvailableLocale(requestedLocale: string | undefined) {
  if (requestedLocale && ALLOWED_LOCALES.includes(requestedLocale)) {
    return requestedLocale;
  } else {
    return DEFAULT_LOCALE;
  }
}




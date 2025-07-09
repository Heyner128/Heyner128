// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

import { ALLOWED_LOCALES, DEFAULT_LOCALE } from "./locales.config.mjs"

// https://astro.build/config
export default defineConfig({
  vite: {
    // @ts-ignore
      plugins: [tailwindcss()],
  },

  site: "https://heyner.me",

  output: 'static',

  i18n: {
    locales: ALLOWED_LOCALES,
    defaultLocale: DEFAULT_LOCALE,
    routing: "manual"
  },

  integrations: [react()],
});
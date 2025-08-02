// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

import node from "@astrojs/node";

import { ALLOWED_LOCALES, DEFAULT_LOCALE } from "./locales.config.mjs"

import sitemap from "@astrojs/sitemap";

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  vite: {
    // @ts-ignore
    plugins: [tailwindcss()],
  },

  site: "https://heyner.me",

  output: 'server',

  i18n: {
    locales: ALLOWED_LOCALES,
    defaultLocale: DEFAULT_LOCALE,
    routing: "manual"
  },

  integrations: [react(), sitemap(), robotsTxt()],

  adapter: node({
    mode: "standalone"
  }),
});
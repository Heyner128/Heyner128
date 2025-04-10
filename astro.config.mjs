// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

import node from "@astrojs/node";

import { locales, defaultLocale } from "./locales.config.mjs"

// https://astro.build/config
export default defineConfig({
  vite: {
      plugins: [tailwindcss()],
  },

  site: "https://heyner.me",

  output: 'server',

  i18n: {
    locales: locales,
    defaultLocale: defaultLocale,
    routing: "manual"
  },

  integrations: [react()],

  adapter: node({
    mode: "standalone"
  })
});
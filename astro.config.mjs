// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

import node from "@astrojs/node";

import { ALLOWED_LOCALES, DEFAULT_LOCALE } from "./locales.config.mjs"

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  site: "https://heyner.me",

  redirects: {
    "/files/[...name]": "https://portfolio-public-resources-1.s3.eu-west-3.amazonaws.com/[...name]",
  },

  output: 'server',

  i18n: {
    locales: ALLOWED_LOCALES,
    defaultLocale: DEFAULT_LOCALE,
    routing: "manual"
  },

  integrations: [react()],

  adapter: node({
    mode: "standalone"
  }),
});
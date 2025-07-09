// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

import node from "@astrojs/node";

import { ALLOWED_LOCALES, DEFAULT_LOCALE } from "./locales.config.mjs"
import awsAmplify from "astro-aws-amplify";

// https://astro.build/config
export default defineConfig({
  vite: {
      plugins: [tailwindcss()],
  },

  site: "https://heyner.me",

  output: 'server',

  i18n: {
    locales: ALLOWED_LOCALES,
    defaultLocale: DEFAULT_LOCALE,
    routing: "manual"
  },

  integrations: [react()],

  adapter: awsAmplify(),
});
// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

import node from "@astrojs/node";

import { ALLOWED_LOCALES, DEFAULT_LOCALE } from "./locales.config.mjs"

import sitemap from "@astrojs/sitemap";

import robotsTxt from "astro-robots-txt";
import * as path from "node:path";
import * as fs from "node:fs";

const SITE_DEPLOY_URL = "https://heyner.me"

const blogSlugs = fs.readdirSync(path.join(process.cwd(), "src/contents/blogs"))
    .map(file => file.replace(/\.md$/, ""));

// https://astro.build/config
export default defineConfig({
  vite: {
    // @ts-ignore
    plugins: [tailwindcss()],
  },

  site: SITE_DEPLOY_URL,

  output: 'server',

  i18n: {
    locales: ALLOWED_LOCALES,
    defaultLocale: DEFAULT_LOCALE,
    routing: "manual"
  },

  integrations: [react(), sitemap({
    customPages: [...blogSlugs.map(slug => {
      return `${SITE_DEPLOY_URL}/blog/${slug}`
    })],
  }), robotsTxt()],

  adapter: node({
    mode: "standalone"
  }),
});
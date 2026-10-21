// @ts-check
import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

import { readFileSync } from "node:fs";

// Project pages used to live at /projects/<id>/ and now use readable slugs
// (/projects/nba-expansion-gm/). Redirect every old URL to its new one.
const projects = JSON.parse(readFileSync("./src/projectInfo.json", "utf8"));
const oldProjectUrls = Object.fromEntries(
  projects.map((p) => [`/projects/${p.id}`, `/projects/${p.slug}/`])
);

// https://astro.build/config
export default defineConfig({
  site: "https://davidabundis.com",
  integrations: [preact(), sitemap()],

  // The landing page moved to "/" and the projects list to "/projects/".
  // Keep old links (and anything Google already found) working.
  redirects: {
    "/landing": "/",
    ...oldProjectUrls,
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
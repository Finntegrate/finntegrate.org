import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://finntegrate.org",
  integrations: [
    sitemap(),
    starlight({
      title: "Finntegrate Docs",
      description:
        "Practical, evidence-informed documentation for navigating life in Finland.",
      disable404Route: true,
      sidebar: [
        {
          label: "Start here",
          items: ["docs", "docs/glossary", "docs/topics"],
        },
        {
          label: "Editorial planning",
          items: ["docs/document-collections"],
        },
      ],
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});

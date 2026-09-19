import { defineCollection } from "astro:content";
import { docsLoader, i18nLoader } from "@astrojs/starlight/loaders";
import { docsSchema, i18nSchema } from "@astrojs/starlight/schema";
import { z } from "astro/zod";

const documentCollections = [
  "living-in-finland",
  "understanding-systems",
  "research-and-evidence",
  "service-improvement",
  "voices-and-participation",
  "shared-reference-layer",
] as const;

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: z.object({
        description: z.string().min(1),
        collection: z.enum(documentCollections),
        topics: z.array(z.string().min(1)).min(1),
        contentType: z.string().optional(),
        audiences: z.array(z.string().min(1)).optional(),
        jurisdictions: z.array(z.string().min(1)).optional(),
        authorities: z.array(z.string().min(1)).optional(),
        language: z.string().min(1).optional(),
        steward: z.string().min(1).optional(),
        published: z.iso.date().optional(),
        sources: z
          .array(
            z.object({
              title: z.string().min(1),
              link: z.url(),
              date: z.iso.date().optional(),
            }),
          )
          .optional(),
        status: z.enum(["draft", "published", "needs-update"]).optional(),
        supersededBy: z.url().optional(),
        aliases: z.array(z.string().min(1)).optional(),
      }),
    }),
  }),
  i18n: defineCollection({
    loader: i18nLoader(),
    schema: i18nSchema(),
  }),
};

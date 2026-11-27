import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// One Markdown file per project in src/content/projects/.
// The frontmatter fills the card and the popup's links; the Markdown body is the popup text.
const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(), // one line shown on the card
    year: z.number().int(),
    tags: z.array(z.string()).default([]),
    order: z.number().default(100), // lower numbers appear first
    thumbnail: z.string().optional(), // path under /public, e.g. "/images/bill-splitter.png"
    visual: z.string().optional(), // interactive demo under /public, e.g. "/visuals/bill-splitter/index.html"
    visualHeight: z.number().default(360), // demo height in pixels
    github: z.url().optional(),
    demo: z.url().optional(), // live app, e.g. a Claude artifact link
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects };

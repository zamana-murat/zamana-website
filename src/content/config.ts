import { defineCollection, z } from 'astro:content';

const wiki = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    seoTitle: z.string().optional(),
    description: z.string().optional(),
    tags: z.array(z.string()).optional(),
    notInNav: z.boolean().optional(),
    lastUpdated: z.string().optional(),
  }),
});

const haberler = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    seoTitle: z.string().optional(),
    description: z.string(),
    date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'date must be YYYY-MM-DD'),
    source: z.string().url(),
    sourceTitle: z.string(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

// Shared by the "Claude" (/claude/) and "Kurumsal" (/kurumsal/) product sections.
const productPageSchema = z.object({
  title: z.string(),
  seoTitle: z.string().optional(),
  description: z.string(),
  eyebrow: z.string(),
  lead: z.string(),
  heroImage: z.string().optional(),
  heroVideo: z.string().optional(),
  heroAnimation: z.string().optional(), // file name in src/components/<section>-anim/ (without .astro)
  heroAlt: z.string().optional(),
  availability: z.string(),
  sourceUrl: z.string().url(),
  sourceTitle: z.string(),
  related: z.array(z.object({ label: z.string(), href: z.string() })).optional().default([]),
  order: z.number(),
  lastUpdated: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'lastUpdated must be YYYY-MM-DD'),
});

const claude = defineCollection({ type: 'content', schema: productPageSchema });
const kurumsal = defineCollection({ type: 'content', schema: productPageSchema });

export const collections = { wiki, haberler, claude, kurumsal };

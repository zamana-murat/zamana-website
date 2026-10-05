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

export const collections = { wiki, haberler };

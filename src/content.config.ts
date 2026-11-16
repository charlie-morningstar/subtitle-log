import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const research = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/research' }),
  schema: z.object({
    title: z.string(),
    summary: z.string().default(''),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
    category: z.enum(['Kernel','CVE','Reversing','Tooling','Notes']).default('Notes'),
  }),
});

const analysis = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/analysis' }),
  schema: z.object({
    title: z.string(),
    summary: z.string().default(''),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
    category: z.enum(['Kernel','CVE','Reversing','Tooling','Notes']).default('Notes'),
  }),
});

export const collections = { research, analysis };

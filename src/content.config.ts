import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Research: 직접 수행한 연구 활동 (두루마리로 표시)
const research = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/research' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
  }),
});

// Analysis: 분석 글 블로그 (목록으로 표시)
const analysis = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/analysis' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
  }),
});

export const collections = { research, analysis };

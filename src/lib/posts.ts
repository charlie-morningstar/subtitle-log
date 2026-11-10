import { getCollection } from 'astro:content';

export const CATEGORIES = ['Kernel', 'CVE', 'Reversing', 'Tooling', 'Notes'] as const;
export type Category = (typeof CATEGORIES)[number];

const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export interface Post {
  title: string;
  summary: string;
  date: Date;
  tags: string[];
  category: Category;
  featured: boolean;
  kind: 'Research' | 'Analysis';
  href: string;
}

export async function getAllPosts(): Promise<Post[]> {
  const research = await getCollection('research', ({ data }) => !data.draft);
  const analysis = await getCollection('analysis', ({ data }) => !data.draft);
  const map = (coll: any[], kind: 'Research' | 'Analysis', dir: string): Post[] =>
    coll.map((e) => ({
      title: e.data.title,
      summary: e.data.summary,
      date: e.data.date,
      tags: e.data.tags,
      category: e.data.category,
      featured: e.data.featured,
      kind,
      href: `${base}/${dir}/${e.id}/`,
    }));
  return [...map(research, 'Research', 'research'), ...map(analysis, 'Analysis', 'analysis')]
    .sort((a, b) => b.date.valueOf() - a.date.valueOf());
}

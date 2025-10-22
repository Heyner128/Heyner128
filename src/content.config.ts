import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blogs = defineCollection({
  loader: glob({pattern: '**/*.md', base: './src/contents/blogs'}),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publicationDate: z.coerce.date(),
  })
});

export type Blog ={
  title: string;
  description: string;
  publicationDate: Date;
};

export const collections = { blogs };
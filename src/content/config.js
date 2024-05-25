import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
	type: 'content',
	schema: z.object({
		tags: z.array(z.string()),
		date: z.date(),
		excerpt: z.string(),
		thumbnail: z.object({
			src: z.string(),
			alt: z.string().optional(),
		}),
		title: z.string(),
	}),
});

export const collections = {
	blog: blogCollection,
};

import { defineCollection, z } from 'astro:content';

function removeDupsAndLowerCase(array: string[]) {
	if (!array.length) return array;
	const lowercaseItems = array.map((str) => str.toLowerCase());
	const distinctItems = new Set(lowercaseItems);
	return Array.from(distinctItems);
}

const blogs = defineCollection({
	type: 'content',
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			publishDate: z
				.string()
				.or(z.date())
				.transform((val) => new Date(val)),
			updatedDate: z
				.string()
				.optional()
				.transform((str) => (str ? new Date(str) : undefined)),
			coverImage: z.object({ src: image(), alt: z.string() }).optional(),
			draft: z.boolean().default(false),
			tags: z.array(z.string()).default([]).transform(removeDupsAndLowerCase),
			ogImage: z.string().optional()
		})
});

const projects = defineCollection({
	type: 'content',
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			type: z.string().optional(),
			description: z.string(),
			technologies: z.array(z.string()).default([]),
			logoImage: z.object({ src: z.string(), alt: z.string() }).optional(),
			coverImage: z.object({ src: image(), alt: z.string() }).optional(),
			links: z.array(z.object({ label: z.string(), link: z.string() })).default([]),
			draft: z.boolean().default(false),
			ogImage: z.string().optional(),
			featured: z.boolean().default(false),
			priority: z.number().optional()
		})
});

export const collections = { blogs, projects };

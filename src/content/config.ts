import { defineCollection, z, type CollectionEntry } from "astro:content";

export const collections = {
    projects: defineCollection({
        schema: z.object({
            title: z.string(),
            description: z.string(),
            publishDate: z.coerce.date(),
            type: z.string(),
            domain: z.string(),
            technologies: z.array(z.string()),
            img: z.string().optional(),
            img_link: z.string().optional(),
            img_alt: z.string().optional(),
            links: z.record(z.string(), z.string()),
            rank: z.number(),
            draft: z.boolean(),
        }),
    }),
    blogs: defineCollection({
        schema: z.object({
            title: z.string(),
            description: z.string(),
            publishDate: z.coerce.date(),
            tags: z.array(z.string()),
            img: z.string(),
            img_alt: z.string().optional(),
        }),
    }),
};

export type TProject = CollectionEntry<"projects">;

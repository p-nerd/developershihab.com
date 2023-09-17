import { defineCollection, z } from "astro:content";

const projectCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        publishDate: z.coerce.date(),
        tags: z.array(z.string()),
        img: z.string(),
        img_alt: z.string().optional(),
    }),
});

const blogCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        publishDate: z.coerce.date(),
        tags: z.array(z.string()),
        img: z.string(),
        img_alt: z.string().optional(),
    }),
});

export const collections = {
    projects: projectCollection,
    blogs: blogCollection,
};

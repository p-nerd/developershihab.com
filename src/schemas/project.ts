import { defineCollection, z } from "astro:content";

export const projectCollectionSchema = z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    tags: z.array(z.string()),
    img: z.string(),
    img_alt: z.string().optional(),
});
export const projectCollection = defineCollection({
    schema: projectCollectionSchema,
});

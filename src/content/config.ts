import type { CollectionEntry } from "astro:content";
import { defineCollection, z } from "astro:content";

export const PROJECTS = "projects";
export const BLOGS = "blogs";

export const collections = {
    [PROJECTS]: defineCollection({
        schema: z.object({
            title: z.string(),
            description: z.string(),
            start_date: z.coerce.date(),
            end_date: z.coerce.date().nullable(),
            type: z.string(),
            domain: z.string(),
            technologies: z.array(z.string()),
            img: z.string().optional(),
            img_link: z.string().optional(),
            img_alt: z.string().optional(),
            links: z.record(z.string(), z.string()),
            rank: z.number(),
            draft: z.boolean().optional(),
        }),
    }),
    [BLOGS]: defineCollection({
        schema: z.object({
            title: z.string(),
            description: z.string(),
            publish_date: z.coerce.date(),
            tags: z.array(z.string()),
            img: z.string(),
            img_alt: z.string().optional(),
            draft: z.boolean().optional(),
        }),
    }),
};

export type TProject = CollectionEntry<"projects">;
export type TBlog = CollectionEntry<"blogs">;

import type { CollectionEntry } from "astro:content";
import type { TTag } from "./types";

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const generate_tags = (blogs: CollectionEntry<"blogs">[]) => {
    let tags: TTag[] = [];

    blogs.forEach(blog => {
        blog.data.tags.forEach(tag => {
            const count = (tags.find(t => t.label === tag)?.count || 0) + 1;

            if (count === 1) {
                tags.push({ label: tag, count: count });
            }

            tags = tags.map(t =>
                t.label === tag ? { ...t, count: count } : t,
            );
        });
    });

    tags = tags.sort((a, b) => {
        const diff = b.count - a.count;

        if (diff == 0) {
            return a.label > b.label ? 1 : -1;
        }

        return diff;
    });

    return tags;
};

export const slugify = (text: string): string => {
    const cleanedInput = text.trim().toLowerCase();
    const slug = cleanedInput.replace(/[^a-zA-Z0-9-]+/g, "-");
    return slug.replace(/^-+|-+$/g, "");
};

export const deslugify = (slug?: string): string => {
    if (!slug) return "";
    const text = slug.replace(/-/g, " ");
    return text.replace(/(?:^|\s)\S/g, match => match.toUpperCase());
};

export const cn = (
    ...inputs: (undefined | string | Record<string, boolean>)[]
) => {
    return twMerge(clsx(inputs));
};

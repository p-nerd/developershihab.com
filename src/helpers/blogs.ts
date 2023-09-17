import type { CollectionEntry } from "astro:content";
export type Tag = { label: string; count: number };

export const generateTags = (blogs: CollectionEntry<"blogs">[]) => {
    let tags: Tag[] = [];

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

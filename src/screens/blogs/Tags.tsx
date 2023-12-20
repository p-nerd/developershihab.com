import type { TTag } from "@/helpers/types";

import { slugify } from "@/helpers/etc";
import { mergeProps } from "solid-js";

const Tags = (props: {
    tags: TTag[];
    blogsCount: number;
    tagSlug?: string;
}) => {
    const p = mergeProps({ tagSlug: "all" }, props);
    const tags = [{ label: "All", count: p.blogsCount }, ...p.tags];

    return (
        <section class="flex flex-wrap justify-center gap-3">
            {tags.map(tag => (
                <a
                    class={`flex cursor-pointer flex-col items-center rounded-xl border  px-4 py-2  dark:border-[#283043] ${
                        p.tagSlug === slugify(tag.label)
                            ? "bg-[#7611a6] text-white"
                            : "bg-[#F4F5F7] text-black dark:bg-[#131823] dark:text-white"
                    }`}
                    href={
                        tag.label === "All"
                            ? "/blogs/1"
                            : `/blogs/${slugify(tag.label)}`
                    }
                >
                    {tag.label} ({tag.count})
                </a>
            ))}
        </section>
    );
};

export default Tags;

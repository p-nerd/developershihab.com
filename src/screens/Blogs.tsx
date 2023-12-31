import type { JSXElement } from "solid-js";
import type { TTag } from "@/helpers/types";
import type { TBlog } from "@/content/config";

import { format_date_to_month_day_year } from "@/helpers/time";
import { slugify } from "@/helpers/etc";
import { For, mergeProps } from "solid-js";

import ContactCTA from "@/components/ContactCTA";
import Hero from "@/components/Hero";
import PreviewText from "@/components/PreviewText";
import PreviewImg from "@/components/PreviewImg";

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

const Preview = (p: {
    slug: string;
    img: string;
    img_alt: string;
    publish_date: Date;
    title: string;
    description: string;
    tags: string[];
}) => {
    return (
        <a
            class="flex h-max flex-col gap-2 overflow-hidden rounded-xl border border-solid border-xx-gray-800 bg-[#f5f6f9] px-3 py-4 font-xx-font-brand text-xl shadow-sm transition-shadow duration-[0.2s] ease-in-out hover:shadow-md lg:rounded-3xl lg:px-7 lg:py-11 dark:bg-[#111621]"
            href={`/blogs/${p.slug}`}
        >
            <PreviewText>
                <time datetime="2023-06-19">
                    {format_date_to_month_day_year(p.publish_date)}
                </time>
            </PreviewText>
            <PreviewImg src={p.img} alt={p.img_alt || ""} />
            <PreviewText tag="h1" class="text-3xl">
                {p.title}
            </PreviewText>
            <PreviewText tag="p">{p.description}</PreviewText>
            <div class="flex flex-wrap gap-2">
                {p.tags.map(tag => (
                    <PreviewText
                        tag="span"
                        class="rounded-md bg-xx-gray-999 px-2 py-1 text-xx-gray-200 lg:rounded-2xl lg:px-4 lg:py-2"
                    >
                        {tag}
                    </PreviewText>
                ))}
            </div>
        </a>
    );
};

const List = (p: { blogs: TBlog[] }) => {
    return (
        <ul class="grid list-none auto-rows-auto gap-4 p-0 lg:grid-cols-2 lg:gap-16">
            <For each={p.blogs}>
                {blog => (
                    <li>
                        <Preview
                            slug={blog.slug}
                            publish_date={blog.data.publish_date}
                            img_alt={blog.data.img_alt || ""}
                            img={blog.data.img}
                            title={blog.data.title}
                            description={blog.data.description}
                            tags={blog.data.tags}
                        />
                    </li>
                )}
            </For>
        </ul>
    );
};

const Blogs = (p: {
    tags: TTag[];
    blogs: TBlog[];
    blogsCount: number;
    title: string;
    tagline?: string;
    align?: "start" | "center" | "end";
    alignHero?: "start" | "center" | "end";
    children?: JSXElement;
    slug?: string;
}) => {
    return (
        <div class="flex flex-col gap-20">
            <main class="wrapper flex flex-col gap-20">
                <Hero title={p.title} tagline={p.tagline} />
                <Tags
                    tags={p.tags}
                    blogsCount={p.blogsCount}
                    tagSlug={p.slug}
                />
                <List blogs={p.blogs} />
                {p.children}
            </main>
            <ContactCTA />
        </div>
    );
};

export default Blogs;

import type { TBlog } from "@/content/config";
import type { JSXElement } from "solid-js";

import { format_date_to_month_day_year } from "@/helpers/time";

import ContactCTA from "@/components/ContactCTA.tsx";
import ArrowLeftIcon from "@/icons/ArrowLeft.tsx";
import Hero from "@/components/Hero.tsx";
import Pill from "@/components/Pill.tsx";

const Header = (p: {
    tags: string[];
    description: string;
    title: string;
    publish_date: Date;
}) => {
    return (
        <header class="w-auto border-b-[1px] border-solid border-[#e3e6ee] pb-[2.5rem] dark:border-[#283044]">
            <div
                class="flex w-full max-w-[83rem] flex-col gap-2"
                style="margin-inline: auto; padding-inline: 1.5rem;"
            >
                <div class="flex justify-between">
                    <a
                        class="hidden self-start underline decoration-transparent decoration-solid decoration-1 underline-offset-[0.25rem] hover:decoration-current focus:decoration-current lg:block"
                        href="/blogs/1"
                    >
                        <ArrowLeftIcon />
                        <span>Blogs</span>
                    </a>
                    <p>{format_date_to_month_day_year(p.publish_date)}</p>
                </div>
                <Hero title={p.title} class="text-start">
                    <div class="flex flex-col items-center justify-between gap-[1.5rem] p-[0.5rem] lg:flex-row lg:gap-[2.5rem]">
                        <div class="flex w-full flex-wrap gap-[0.5rem]">
                            {p.tags.map(t => (
                                <Pill slug={`/blogs/${t.toLowerCase()}`}>
                                    {t}
                                </Pill>
                            ))}
                        </div>
                        <p class="max-w-[54ch] text-[1.25rem]">
                            {p.description}
                        </p>
                    </div>
                </Hero>
            </div>
        </header>
    );
};

const Content = (p: { img: string; img_alt: string; children: JSXElement }) => {
    return (
        <main class="m-auto w-full p-5">
            <div class="m-auto w-full gap-[2.5rem] rounded-lg border-2 border-[#e3e6ee] shadow-2xl lg:max-w-[100ch] dark:border-[#283044] dark:shadow-gray-600">
                {p.img && (
                    <img
                        src={p.img}
                        alt={p.img_alt || ""}
                        class="w-full rounded-lg "
                    />
                )}
                <article class="prose prose-neutral w-full max-w-none p-[0.5rem] text-justify lg:prose-xl dark:prose-invert lg:p-[1.5rem]">
                    {p.children}
                </article>
            </div>
        </main>
    );
};

const Blog = (p: { blog: TBlog; children: JSXElement }) => {
    return (
        <div class="flex flex-col gap-[5rem]">
            <div class="flex flex-col gap-[3.75rem]">
                <Header
                    title={p.blog.data.title}
                    description={p.blog.data.description}
                    tags={p.blog.data.tags}
                    publish_date={p.blog.data.publish_date}
                />
                <Content
                    img={p.blog.data.img}
                    img_alt={p.blog.data.img_alt || ""}
                >
                    {p.children}
                </Content>
            </div>
            <ContactCTA />
        </div>
    );
};

export default Blog;

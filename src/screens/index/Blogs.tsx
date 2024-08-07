import { For } from "solid-js";
import { H2, A, Section } from "~/components/ui2/section";
import { person } from "~/lib/config";
import { formatDate } from "~/lib/utils";
import { createAsync, cache } from "@solidjs/router";

type TBlog = {
    id: number;
    title: string;
    description: string;
    url: string;
    published_at: string;
    tags: string[];
};

const getBlogs = cache(async () => {
    "use server";
    return (async (): Promise<TBlog[]> => {
        const url = "https://dev.to/api/articles?username=p-nerd";
        const response = await fetch(url);
        const articles = (await response.json()) as any;
        const blogs: TBlog[] = articles.map((article: any) => {
            const blog: TBlog = {
                id: article.id,
                title: article.title,
                description: article.description,
                url: article.url,
                published_at: article.published_at,
                tags: article.tag_list,
            };
            return blog;
        });
        return blogs;
    })();
}, "blogs");

export const route = {
    load: () => getBlogs(),
};

const Blogs = () => {
    const blogs = createAsync(() => getBlogs());

    return (
        <Section id="blogs" class="mb-28 scroll-mt-28 sm:mb-40">
            <H2>My blogs</H2>
            <div class="relative sm:ml-[calc(2rem+1px)] sm:pb-12 lg:ml-[max(calc(14.5rem+1px),calc(100%-48rem))]">
                <div class="absolute bottom-0 right-full top-3 mr-7 hidden w-px bg-slate-200 dark:bg-slate-800 sm:block lg:mr-[3.25rem]" />
                <div class="space-y-16">
                    <For each={blogs()}>
                        {blog => (
                            <article class="group relative max-w-2xl">
                                <div class="absolute -inset-x-4 -inset-y-2.5 group-hover:bg-slate-50/70 dark:group-hover:bg-slate-800/50 sm:rounded-2xl lg:-inset-x-6 lg:-inset-y-4" />
                                <svg
                                    viewBox="0 0 9 9"
                                    class="absolute right-full top-2 mr-6 hidden h-[calc(0.5rem+1px)] w-[calc(0.5rem+1px)] overflow-visible text-slate-200 dark:text-slate-600 sm:block lg:mr-12"
                                >
                                    <circle
                                        cx="4.5"
                                        cy="4.5"
                                        r="4.5"
                                        stroke="currentColor"
                                        class="fill-white dark:fill-slate-900"
                                        stroke-width={2}
                                    />
                                </svg>
                                <div class="relative">
                                    <h3 class="mb-2 pt-8 text-base font-semibold tracking-tight text-gray-600 dark:text-gray-50 lg:pt-0">
                                        {blog.title}
                                    </h3>
                                    <div class="mb-2 line-clamp-2">{blog.description}</div>
                                    <dl class="absolute left-0 top-0 lg:left-auto lg:right-full lg:mr-[calc(6.5rem+1px)]">
                                        <dt class="sr-only">Date</dt>
                                        <dd class="whitespace-nowrap text-sm leading-6">
                                            <time dateTime={blog.published_at}>
                                                {formatDate(blog.published_at)}
                                            </time>
                                        </dd>
                                    </dl>
                                    <A href={blog.url} target="_blank">
                                        <span class="absolute -inset-x-4 -inset-y-2.5 sm:rounded-2xl lg:-inset-x-6 lg:-inset-y-4" />
                                        <span class="relative">Read more</span>
                                    </A>
                                </div>
                            </article>
                        )}
                    </For>
                </div>
            </div>
            <div class="mt-5 flex justify-center">
                <A
                    href={person.dev_to}
                    target="_blank"
                    class="text-lg underline underline-offset-2"
                >
                    All blogs on dev.to
                </A>
            </div>
        </Section>
    );
};

export default Blogs;

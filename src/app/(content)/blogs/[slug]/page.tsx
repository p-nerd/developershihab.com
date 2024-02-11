import type { Metadata } from "next";
import type { TBlog } from "@/lib/content";

import { format_date } from "@/lib/utils";
import { get_blog, get_blogs, render_markdown } from "@/lib/content";

import portrait from "@/assets/home/portrait.jpg";

import Image from "next/image";
import Link from "next/link";
import person from "@/conf/person";

const GoBack = () => {
    return (
        <div className="max-w-8xl mx-auto">
            <div className="flex px-4 pb-10 pt-8 lg:px-8">
                <Link
                    className="group flex text-sm font-semibold leading-6 text-slate-700 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white"
                    href="/blogs"
                >
                    <svg
                        viewBox="0 -9 3 24"
                        className="mr-3 h-6 w-auto overflow-visible text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300"
                    >
                        <path
                            d="M3 0L0 3L3 6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    Go back
                </Link>
            </div>
        </div>
    );
};

const Writer = () => {
    return (
        <div className="mt-6">
            <ul className="-mx-5 -mt-6 flex flex-wrap text-sm leading-6">
                <li className="mt-6 flex items-center justify-center whitespace-nowrap px-5 font-medium">
                    <Image
                        src={portrait}
                        alt="Shihab Mahamud"
                        width="120"
                        height="120"
                        quality="95"
                        priority={true}
                        className="mr-3 h-11 w-11 rounded-full object-cover shadow-xl"
                    />
                    <div className="text-sm leading-4">
                        <div className="text-slate-900 dark:text-slate-200">Shihab Mahamud</div>
                        <div className="mt-1">
                            <a
                                href={person.twitter}
                                className="text-sky-500 hover:text-sky-600 dark:text-sky-400"
                                target="_blank"
                            >
                                @p_nerd2
                            </a>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
};

const Blog = (p: { blog: TBlog }) => {
    return (
        <div className="mb-20 overflow-hidden">
            <GoBack />
            <div className="px-4 sm:px-6 md:px-8">
                <div className="mx-auto max-w-3xl">
                    <main>
                        <article className="relative pt-10">
                            <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-slate-200 md:text-3xl ">
                                {p.blog.title}
                            </h1>
                            <div className="text-sm leading-6">
                                <dl>
                                    <dt className="sr-only">Date</dt>
                                    <dd className="absolute inset-x-0 top-0 text-slate-700 dark:text-slate-400">
                                        <time dateTime={p.blog.date}>
                                            {format_date(p.blog.date)}
                                        </time>
                                    </dd>
                                </dl>
                            </div>
                            <Writer />
                            <div className="not-prose relative mt-12 overflow-hidden rounded-2xl first:mt-0 last:mb-0 [a:not(:first-child)>&]:mt-12 [a:not(:last-child)>&]:mb-12 [figure>&]:my-0">
                                <Image
                                    src={p.blog.img}
                                    alt={p.blog.title}
                                    width={1000}
                                    height={1000}
                                    className="object-contain"
                                />
                            </div>
                            <div
                                className="prose prose-slate mt-5 max-w-none dark:prose-invert"
                                dangerouslySetInnerHTML={{
                                    __html: render_markdown(p.blog.body),
                                }}
                            ></div>
                        </article>
                    </main>
                </div>
            </div>
        </div>
    );
};

export const generateStaticParams = () => {
    return get_blogs().map(blog => ({
        slug: blog.slug,
    }));
};

type TProps = { params: { slug: string } };

export const generateMetadata = async ({ params }: TProps): Promise<Metadata> => {
    const blog = get_blog(params.slug);
    return {
        title: `${blog.title} - Shihab Mahamud`,
        description: blog.excerpt,
    };
};

const Page = ({ params }: TProps) => {
    const blog = get_blog(params.slug);
    return <Blog blog={blog} />;
};

export default Page;

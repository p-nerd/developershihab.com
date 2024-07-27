"use client";

import "react-vertical-timeline-component/style.min.css";

import { person } from "@/site.config";
import { format_date } from "@/lib/utils";

import useSectionInView from "@/hooks/useSectionInView";

import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

export type TBlog = {
    id: number;
    title: string;
    description: string;
    url: string;
    published_at: string;
    tag_list: string[];
};

const Blogs = ({ blogs }: { blogs: TBlog[] }) => {
    const { ref } = useSectionInView("Blogs", 0.5);

    return (
        <section id="blogs" ref={ref} className="mb-28 scroll-mt-28 sm:mb-40">
            <SectionHeading>My blogs</SectionHeading>
            <div className="relative sm:ml-[calc(2rem+1px)] sm:pb-12 lg:ml-[max(calc(14.5rem+1px),calc(100%-48rem))]">
                <div className="absolute bottom-0 right-full top-3 mr-7 hidden w-px bg-slate-200 dark:bg-slate-800 sm:block lg:mr-[3.25rem]" />
                <div className="space-y-16">
                    {blogs.map(blog => (
                        <article key={blog.id} className="group relative max-w-2xl">
                            <div className="absolute -inset-x-4 -inset-y-2.5 group-hover:bg-slate-50/70 dark:group-hover:bg-slate-800/50 sm:rounded-2xl lg:-inset-x-6 lg:-inset-y-4" />
                            <svg
                                viewBox="0 0 9 9"
                                className="absolute right-full top-2 mr-6 hidden h-[calc(0.5rem+1px)] w-[calc(0.5rem+1px)] overflow-visible text-slate-200 dark:text-slate-600 sm:block lg:mr-12"
                            >
                                <circle
                                    cx="4.5"
                                    cy="4.5"
                                    r="4.5"
                                    stroke="currentColor"
                                    className="fill-white dark:fill-slate-900"
                                    strokeWidth={2}
                                />
                            </svg>
                            <div className="relative">
                                <h3 className="mb-2 pt-8 text-base font-semibold tracking-tight text-slate-900 dark:text-slate-200 lg:pt-0">
                                    {blog.title}
                                </h3>
                                <div className="mb-2 line-clamp-2 text-slate-800 dark:text-slate-300">
                                    {blog.description}
                                </div>
                                <dl className="absolute left-0 top-0 lg:left-auto lg:right-full lg:mr-[calc(6.5rem+1px)]">
                                    <dt className="sr-only">Date</dt>
                                    <dd className="whitespace-nowrap text-sm leading-6 dark:text-slate-400">
                                        <time dateTime={blog.published_at}>
                                            {format_date(blog.published_at)}
                                        </time>
                                    </dd>
                                </dl>
                                <div className="mb-2 flex space-x-4 text-slate-500 dark:text-slate-400">
                                    {blog.tag_list.map(tag => (
                                        <div key={tag}>{tag}</div>
                                    ))}
                                </div>
                            </div>
                            <Link
                                className="flex items-center text-sm font-medium text-sky-500"
                                href={blog.url}
                                target="_blank"
                            >
                                <span className="absolute -inset-x-4 -inset-y-2.5 sm:rounded-2xl lg:-inset-x-6 lg:-inset-y-4" />
                                <span className="relative">Read more</span>
                                <svg
                                    className="relative ml-2.5 mt-px overflow-visible text-sky-500 dark:text-sky-700"
                                    width={3}
                                    height={6}
                                    viewBox="0 0 3 6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M0 0L3 3L0 6" />
                                </svg>
                            </Link>
                        </article>
                    ))}
                </div>
            </div>
            <div className="mt-5 flex justify-center">
                <Link
                    href={person.dev_to}
                    target="_blank"
                    className="text-lg underline underline-offset-2"
                >
                    All blogs on dev.to
                </Link>
            </div>
        </section>
    );
};

export default Blogs;

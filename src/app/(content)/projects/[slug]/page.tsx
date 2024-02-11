import type { Metadata } from "next";
import type { TProject } from "@/lib/types";

import { get_project, get_projects } from "@/lib/content";

import Image from "next/image";
import Markdown from "@/components/Markdown";
import GoBack from "@/components/GoBack";
import Anchor from "@/components/Anchor";

const Project = (p: { project: TProject }) => {
    return (
        <div className="mb-20 overflow-hidden">
            <GoBack href="/projects" />
            <div className="px-4 sm:px-6 md:px-8">
                <div className="mx-auto max-w-3xl">
                    <main>
                        <article className="relative flex flex-col gap-5 pt-10">
                            <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-slate-200 md:text-3xl ">
                                {p.project.title}
                            </h1>
                            <p>{p.project.description}</p>
                            <div className="flex justify-between gap-5">
                                <ul className="mt-4 flex w-1/2 flex-wrap gap-2 sm:mt-auto">
                                    {p.project.tags.map((tag, index) => (
                                        <li
                                            className="rounded-full bg-black/[0.7] px-3 py-1 text-[0.7rem] tracking-wider text-white dark:text-white/70"
                                            key={index}
                                        >
                                            {tag}
                                        </li>
                                    ))}
                                </ul>
                                {!!p.project.links && (
                                    <ul className="mt-4 flex w-1/2 flex-col gap-1 sm:mt-auto">
                                        {p.project.links.map((link, index) => (
                                            <li key={index} className="w-full text-center">
                                                <Anchor
                                                    href={link.link}
                                                    className="block w-full rounded-full bg-black/[0.7] px-3 py-1 text-[0.8rem] tracking-wider text-white dark:text-white/70"
                                                >
                                                    {link.label}
                                                </Anchor>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                            <div className="not-prose relative mt-7 overflow-hidden rounded-2xl first:mt-0 last:mb-0 [a:not(:first-child)>&]:mt-12 [a:not(:last-child)>&]:mb-12 [figure>&]:my-0">
                                <Image
                                    src={p.project.imageUrl}
                                    alt={p.project.title}
                                    width={1000}
                                    height={1000}
                                    className="object-contain"
                                />
                            </div>
                            <Markdown content={p.project.body} />
                        </article>
                    </main>
                </div>
            </div>
        </div>
    );
};

export const generateStaticParams = () => {
    return get_projects().map(blog => ({
        slug: blog.slug,
    }));
};

type TProps = { params: { slug: string } };

export const generateMetadata = async ({ params }: TProps): Promise<Metadata> => {
    const project = get_project(params.slug);
    return {
        title: `${project.title} - Shihab Mahamud`,
        description: project.description,
    };
};

const Page = ({ params }: TProps) => {
    const project = get_project(params.slug);
    return <Project project={project} />;
};

export default Page;

import type { TProject } from "@/content/config";
import type { JSX } from "solid-js";

import { For } from "solid-js";
import {
    show_project_end_date,
    show_project_start_date,
} from "@/helpers/time.ts";

import ContactCTA from "@/components/ContactCTA.tsx";
import Hero from "@/components/Hero.tsx";
import TechnologyLink from "@/components/TechnologyLink";

const Link = (p: { slug: string; children: JSX.Element; class?: string }) => {
    return (
        <a href={`/projects/${p.slug}`} class={p.class}>
            {p.children}
        </a>
    );
};

const Technologies = (p: { technologies: string[] }) => {
    return (
        <div class="flex flex-wrap  gap-2 px-2 py-1 lg:px-4 lg:py-2">
            <For each={p.technologies}>
                {technology => (
                    <TechnologyLink
                        technology={technology}
                        class="rounded-md bg-sx-gray-999 px-2 py-1 text-sx-gray-200 lg:py-2 em50:rounded-2xl em50:px-4"
                    />
                )}
            </For>
        </div>
    );
};

const Links = (p: { links: Record<string, string> }) => {
    return (
        <div class="l flex h-max flex-col gap-1 lg:p-5">
            {[...Object.keys(p.links)].map(key => (
                <a
                    class="text-sx-link-color h-max w-full overflow-hidden  rounded-xl border border-solid border-sx-gray-800 bg-sx-gray-999 py-3 text-center shadow-sx-shadow-sm transition-shadow  duration-[0.2s] ease-in-out hover:text-sx-gradient-subtle hover:shadow-sx-shadow-md lg:rounded-3xl"
                    href={p.links[key]}
                    target="_blank"
                >
                    {key}
                </a>
            ))}
        </div>
    );
};

const FeaturedImage = (p: { slug: string; src: string; alt?: string }) => {
    return (
        <Link
            slug={p.slug}
            class="flex h-[40%] flex-col px-2 py-1 lg:px-4 lg:py-2 em50:h-max em50:w-[40%]"
        >
            <img
                src={p.src}
                alt={p.alt || ""}
                loading="lazy"
                decoding="async"
                class="h-full w-full rounded-xl object-fill"
            />
        </Link>
    );
};

const Preview = (p: { project: TProject }) => {
    return (
        <li class="flex h-full w-full flex-col items-center justify-center gap-2 overflow-hidden rounded-xl border border-solid border-sx-gray-800 bg-[#f5f6f9] px-1 py-4 font-sx-font-brand text-xl shadow-sx-shadow-sm transition-shadow duration-[0.2s] ease-in-out hover:shadow-sx-shadow-md lg:flex-row lg:rounded-3xl lg:p-5 lg:py-10 dark:bg-[#111621] ">
            <FeaturedImage
                slug={p.project.slug}
                src={p.project.data.img}
                alt={p.project.data.img_alt}
            />
            <div class="h-[60%] em50:h-full em50:w-[60%]">
                <div class="flex justify-between text-base lg:px-2">
                    <span class="m-2 rounded-md bg-sx-gray-999 px-2 py-1 text-sx-gray-200 lg:rounded-2xl lg:px-4 lg:py-2">
                        {show_project_start_date(p.project.data.start_date)} -{" "}
                        {show_project_end_date(p.project.data.end_date)}
                    </span>
                    <span class="m-2 rounded-md bg-sx-gray-999 px-2 py-1 text-sx-gray-200 lg:rounded-2xl lg:px-4 lg:py-2">
                        {p.project.data.domain} - {p.project.data.type}
                    </span>
                </div>
                <div class="lg:px-2 lg:py-1">
                    <h2 class="m-2 rounded-md bg-sx-gray-999 px-2 py-1 text-4xl text-sx-gray-200 lg:rounded-2xl lg:px-4 lg:py-2">
                        {p.project.data.title}
                    </h2>
                </div>
                <div class="lg:px-2 lg:py-1">
                    <p class="m-2 rounded-md bg-sx-gray-999 px-2 py-1 text-sx-gray-200 lg:rounded-2xl lg:px-4 lg:py-2">
                        {p.project.data.description}
                        <Link slug={p.project.slug}>
                            {" "}
                            <span class="text">Read more...</span>
                        </Link>
                    </p>
                </div>
                <Technologies technologies={p.project.data.technologies} />
                <Links links={p.project.data.links} />
            </div>
        </li>
    );
};

const Projects = (p: { projects: TProject[] }) => {
    return (
        <div class="flex flex-col gap-20">
            <main class="wrapper flex flex-col gap-20">
                <Hero
                    title="My Projects"
                    tagline="See my most recent projects below to get an idea of my past experience."
                    align="start"
                    alignHero="end"
                />
                <ul class="flex flex-col gap-20">
                    <For each={p.projects}>
                        {project => <Preview project={project} />}
                    </For>
                </ul>
            </main>
            <ContactCTA />
        </div>
    );
};

export default Projects;

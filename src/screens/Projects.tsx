import {
    show_project_end_date,
    show_project_start_date,
} from "@/helpers/time.ts";
import type { TProject } from "@/content/config";
import type { JSX } from "solid-js";
import { For } from "solid-js";
import { cn } from "@/helpers/etc";
import ContactCTA from "@/components/ContactCTA.tsx";
import Hero from "@/components/Hero.tsx";
import TechnologyLink from "@/components/TechnologyLink.tsx";

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
                        class="bg-xx-gray-999 text-xx-gray-200 rounded-md px-2 py-1 lg:rounded-2xl lg:px-4 lg:py-2"
                    />
                )}
            </For>
        </div>
    );
};

const Links = (p: { links: Record<string, string> }) => (
    <div class="l flex h-max flex-col gap-1 lg:p-5">
        {[...Object.keys(p.links)].map(key => (
            <a
                class="border-xx-gray-800 bg-xx-gray-999 hover:text-xx-gradient-subtle h-max w-full overflow-hidden rounded-3xl border py-3 text-center shadow-sm transition-shadow duration-[0.2s] ease-in-out hover:shadow-md"
                href={p.links[key]}
                target="_blank"
            >
                {key}
            </a>
        ))}
    </div>
);

const FeaturedImage = (p: { slug: string; src: string; alt?: string }) => {
    return (
        <Link
            slug={p.slug}
            class="flex h-[40%] flex-col px-2 py-1 lg:h-max lg:w-[40%] lg:px-4 lg:py-2"
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
        <li
            id={p.project.slug}
            class="border-xx-gray-800 flex h-full w-full flex-col items-center justify-center gap-2 overflow-hidden rounded-xl border border-solid bg-[#f5f6f9] px-1 py-4 font-sx-font-brand text-xl shadow-sm transition-shadow duration-[0.2s] ease-in-out hover:shadow-md lg:flex-row lg:rounded-3xl lg:p-5 lg:py-10 dark:bg-[#111621] "
        >
            <FeaturedImage
                slug={p.project.slug}
                src={p.project.data.img}
                alt={p.project.data.img_alt}
            />
            <div class="h-[60%] lg:h-full lg:w-[60%]">
                <div class="flex justify-between text-base lg:px-2">
                    <span class="bg-xx-gray-999 text-xx-gray-200 m-2 rounded-md px-2 py-1 lg:rounded-2xl lg:px-4 lg:py-2">
                        {show_project_start_date(p.project.data.start_date)} -{" "}
                        {show_project_end_date(p.project.data.end_date)}
                    </span>
                    <span class="bg-xx-gray-999 text-xx-gray-200 m-2 rounded-md px-2 py-1 lg:rounded-2xl lg:px-4 lg:py-2">
                        {p.project.data.domain} - {p.project.data.type}
                    </span>
                </div>
                <div class="lg:px-2 lg:py-1">
                    <h2 class="bg-xx-gray-999 text-xx-gray-200 m-2 rounded-md px-2 py-1 text-4xl lg:rounded-2xl lg:px-4 lg:py-2">
                        {p.project.data.title}
                    </h2>
                </div>
                <div class="lg:px-2 lg:py-1">
                    <p class="bg-xx-gray-999 text-xx-gray-200 m-2 rounded-md px-2 py-1 lg:rounded-2xl lg:px-4 lg:py-2">
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

const QuickProjectsList = (p: { projects: TProject[]; class?: string }) => {
    return (
        <div class={cn("text-xx-gray-200 flex w-max flex-col gap-1", p.class)}>
            <div class="pl-10 text-sm">Projects Quick List</div>
            <div class="flex flex-col text-base">
                <For each={p.projects}>
                    {(project, index) => (
                        <a
                            class="flex gap-2 leading-5"
                            href={`#${project.slug}`}
                        >
                            <div class="w-8 text-end">
                                {index() <= 9 ? "0" : ""}
                                {index() + 1}.{" "}
                            </div>
                            <div class="border-b-xx-gray-200 w-max border-b">
                                {project.data.title}
                            </div>
                        </a>
                    )}
                </For>
            </div>
        </div>
    );
};

const Projects = (p: { projects: TProject[] }) => {
    return (
        <div class="flex flex-col gap-20">
            <main class="wrapper flex flex-col gap-20">
                <div class="flex w-full justify-between gap-5">
                    <QuickProjectsList projects={p.projects} />
                    <Hero
                        title="My Projects"
                        tagline="See my most recent projects below to get an idea of my past experience."
                        align="end"
                        alignHero="end"
                    />
                </div>
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

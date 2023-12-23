import {
    show_project_end_date,
    show_project_start_date,
} from "@/helpers/time.ts";
import type { TProject } from "@/content/config";
import type { JSXElement } from "solid-js";
import { For } from "solid-js";
import { cn } from "@/helpers/etc";
import ContactCTA from "@/components/ContactCTA.tsx";
import Hero from "@/components/Hero.tsx";
import TechnologyLink from "@/components/TechnologyLink.tsx";

const Link = (p: { slug: string; children: JSXElement; class?: string }) => {
    return (
        <a href={`/projects/${p.slug}`} class={p.class}>
            {p.children}
        </a>
    );
};

const FeaturedImage = (p: { slug: string; src: string; alt?: string }) => (
    <Link
        slug={p.slug}
        class="flex h-[400px] flex-col px-2 py-1 lg:h-max lg:w-[40%] lg:px-4 lg:py-2"
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

const Text = (p: { children: string | JSXElement; class?: string }) => (
    <div
        class={cn(
            "rounded-3xl bg-xx-gray-999 px-4 py-2.5 text-xx-gray-200",
            p.class,
        )}
    >
        {p.children}
    </div>
);

const Links = (p: { links: Record<string, string> }) => (
    <div class="flex h-max flex-col gap-1">
        {[...Object.keys(p.links)].map(key => (
            <a
                class="h-max w-full overflow-hidden rounded-3xl border border-xx-gray-800 bg-xx-gray-999 py-3 text-center shadow-sm transition-shadow duration-[0.2s] ease-in-out hover:text-xx-gradient-subtle hover:shadow-md"
                href={p.links[key]}
                target="_blank"
            >
                {key}
            </a>
        ))}
    </div>
);

const ProjectInfo = (p: {
    domain: string;
    type: string;
    description: string;
    slug: string;
    startDate: Date;
    endDate: Date;
    technologies: string[];
    links: Record<string, string>;
}) => (
    <div class="flex h-full flex-col gap-3 lg:w-[60%]">
        <div class="flex justify-between text-base">
            <Text>
                {show_project_start_date(p.startDate)} -{" "}
                {show_project_end_date(p.endDate)}
            </Text>
            <Text>
                {p.domain} - {p.type}
            </Text>
        </div>
        <Text class="w-full text-4xl">{p.title}</Text>
        <Text>
            {p.description}{" "}
            <Link slug={p.slug}>
                <span class="border-b-2">Read more...</span>
            </Link>
        </Text>
        <div class="flex flex-wrap gap-2">
            <For each={p.technologies}>
                {technology => (
                    <TechnologyLink
                        technology={technology}
                        class="rounded-2xl bg-xx-gray-999 px-4 py-2 text-xx-gray-200"
                    />
                )}
            </For>
        </div>
        <Links links={p.links} />
    </div>
);

const Preview = (p: { project: TProject }) => {
    return (
        <li
            id={p.project.slug}
            class="flex h-full w-full flex-col items-center justify-center gap-2 overflow-hidden rounded-3xl border border-xx-gray-800 bg-[#f5f6f9] px-6 py-10 font-xx-font-brand text-xl shadow-sm transition-shadow duration-[0.2s] ease-in-out hover:shadow-md lg:flex-row dark:bg-[#111621]"
        >
            <FeaturedImage
                slug={p.project.slug}
                src={p.project.data.img}
                alt={p.project.data.img_alt}
            />
            <ProjectInfo
                domain={p.project.data.domain}
                type={p.project.data.type}
                title={p.project.data.title}
                description={p.project.data.description}
                slug={p.project.data.slug}
                startDate={p.project.data.start_date}
                endDate={p.project.data.end_date}
                technologies={p.project.data.technologies}
                links={p.project.data.links}
            />
        </li>
    );
};

const QuickProjectsList = (p: { projects: TProject[]; class?: string }) => {
    return (
        <div class={cn("flex w-max flex-col gap-1 text-xx-gray-200", p.class)}>
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
                            <div class="w-max border-b border-b-xx-gray-200">
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

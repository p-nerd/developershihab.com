import {
    show_project_end_date,
    show_project_start_date,
} from "@/helpers/time.ts";
import type { TProject } from "@/content/config";
import { For } from "solid-js";
import ContactCTA from "@/components/ContactCTA.tsx";
import Hero from "@/components/Hero.tsx";
import TechnologyProjectLink from "@/components/TechnologyLink.tsx";
import PreviewImg from "@/components/PreviewImg";
import PreviewText from "@/components/PreviewText";
import ProjectLink from "@/components/ProjectLink";

const MetaInfo = (p: {
    domain: string;
    type: string;
    startDate: Date;
    endDate?: Date | null;
}) => {
    return (
        <div class="flex flex-col justify-between gap-3 text-base lg:flex-row">
            <PreviewText>
                {show_project_start_date(p.startDate)} -{" "}
                {show_project_end_date(p.endDate)}
            </PreviewText>
            <PreviewText>
                {p.domain} - {p.type}
            </PreviewText>
        </div>
    );
};

const ProjectInfo = (p: {
    domain: string;
    type: string;
    description: string;
    slug: string;
    startDate: Date;
    endDate?: Date | null;
    technologies: string[];
    links: Record<string, string>;
    title: string;
}) => (
    <div class="flex h-full flex-col gap-2 lg:w-[60%]">
        <div class="hidden lg:block">
            <MetaInfo
                domain={p.domain}
                type={p.type}
                startDate={p.startDate}
                endDate={p.endDate}
            />
        </div>
        <ProjectLink slug={p.slug}>
            <PreviewText tag="h1" class="text-4xl">
                {p.title}
            </PreviewText>
        </ProjectLink>
        <PreviewText>
            {p.description}{" "}
            <ProjectLink slug={p.slug}>
                <span class="border-b-2"> Read more...</span>
            </ProjectLink>
        </PreviewText>
        <div class="flex flex-wrap gap-2">
            <For each={p.technologies}>
                {technology => (
                    <TechnologyProjectLink technology={technology}>
                        <PreviewText>{technology}</PreviewText>
                    </TechnologyProjectLink>
                )}
            </For>
        </div>
        <div class="flex h-max flex-col gap-1">
            {[...Object.keys(p.links)].map(key => (
                <a
                    class="h-max w-full overflow-hidden rounded-md border border-xx-gray-800 bg-xx-gray-999 py-3 text-center shadow-sm transition-shadow duration-[0.2s] ease-in-out hover:text-xx-gradient-subtle hover:shadow-md lg:rounded-3xl"
                    href={p.links[key]}
                    target="_blank"
                >
                    {key}
                </a>
            ))}
        </div>
    </div>
);

const Preview = (p: { project: TProject }) => {
    return (
        <li
            id={p.project.slug}
            class="flex h-full w-full flex-col items-center justify-center gap-2 overflow-hidden rounded-md border border-xx-gray-800 bg-[#f5f6f9] px-3 py-4 font-xx-font-brand text-xl shadow-sm transition-shadow duration-[0.2s] ease-in-out hover:shadow-md lg:flex-row lg:rounded-3xl lg:px-6 lg:py-10 dark:bg-[#111621]"
        >
            <div class="w-full lg:hidden">
                <MetaInfo
                    domain={p.project.data.domain}
                    type={p.project.data.type}
                    startDate={p.project.data.start_date}
                    endDate={p.project.data.end_date}
                />
            </div>
            <ProjectLink
                slug={p.project.slug}
                class="flex flex-col px-2 py-1 lg:h-max lg:w-[40%] lg:px-4 lg:py-2"
            >
                <PreviewImg
                    src={p.project.data.img}
                    alt={p.project.data.img_alt || ""}
                />
            </ProjectLink>
            <ProjectInfo
                domain={p.project.data.domain}
                type={p.project.data.type}
                title={p.project.data.title}
                description={p.project.data.description}
                slug={p.project.slug}
                startDate={p.project.data.start_date}
                endDate={p.project.data.end_date}
                technologies={p.project.data.technologies}
                links={p.project.data.links}
            />
        </li>
    );
};

const QuickProjectsList = (p: { projects: TProject[] }) => {
    return (
        <div class="flex w-max flex-col gap-1 text-xx-gray-200">
            <div class="pl-8 text-sm">Projects Quick List</div>
            <div class="flex flex-col text-base">
                <For each={p.projects}>
                    {(project, index) => (
                        <a
                            class="flex gap-2 leading-5"
                            href={`#${project.slug}`}
                        >
                            <div class="w-6 text-end">
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
            <main class="wrapper flex flex-col gap-10 lg:gap-20">
                <div class="flex w-full flex-col-reverse justify-between gap-10 lg:flex-row">
                    <QuickProjectsList projects={p.projects} />
                    <Hero
                        title="My Projects"
                        tagline="See my most recent projects below to get an idea of my past experience."
                        class="text-start lg:text-end"
                    />
                </div>
                <ul class="flex flex-col gap-4 lg:gap-16">
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

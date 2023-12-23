import type { TProject } from "@/content/config";
import type { JSXElement } from "solid-js";

import { show_project_end_date, show_project_start_date } from "@/helpers/time";

import ContactCTA from "@/components/ContactCTA.tsx";
import Hero from "@/components/Hero.tsx";
import ArrowLeft from "@/icons/ArrowLeft.tsx";
import TechnologyLink from "@/components/TechnologyLink";

const Content = (p: {
    img?: string;
    imgAlt?: string;
    children: JSXElement;
}) => {
    return (
        <main class="m-auto w-full p-5">
            <div class="m-auto flex w-full flex-col gap-10 lg:max-w-[90ch]">
                {p.img && (
                    <div class="w-full rounded-lg border-2 border-[#e3e6ee] shadow-2xl dark:border-[#283044] dark:shadow-gray-600">
                        <img
                            src={p.img}
                            alt={p.imgAlt || ""}
                            class="w-full rounded-lg "
                        />
                    </div>
                )}
                <div class="w-full rounded-lg border-2 border-[#e3e6ee] shadow-2xl dark:border-[#283044] dark:shadow-gray-600">
                    <article class="prose prose-neutral w-full max-w-none p-[0.5rem] text-justify lg:prose-xl dark:prose-invert lg:p-[1.5rem]">
                        {p.children}
                    </article>
                </div>
            </div>
        </main>
    );
};

const Header = (p: { project: TProject }) => {
    return (
        <header class="w-auto border-b-[1px] border-solid border-[#e3e6ee] pb-[2.5rem] dark:border-[#283044]">
            <div
                class="flex w-full max-w-[83rem] flex-col gap-2"
                style="margin-inline: auto; padding-inline: 1.5rem;"
            >
                <div class="flex justify-between">
                    <a
                        class="hidden self-start underline decoration-transparent decoration-solid decoration-1 underline-offset-[0.25rem] hover:decoration-current focus:decoration-current lg:block"
                        href="/projects"
                    >
                        <ArrowLeft />
                        <span>Projects</span>
                    </a>
                    <p class="flex flex-col text-end text-2xl font-bold">
                        <span>
                            {p.project.data.domain} - {p.project.data.type}
                        </span>
                        <span>
                            {show_project_start_date(p.project.data.start_date)}{" "}
                            - {show_project_end_date(p.project.data.end_date)}
                        </span>
                    </p>
                </div>
                <Hero title={p.project.data.title} align="start">
                    <div class="flex flex-col items-center justify-between gap-[1.5rem] p-[0.5rem] lg:flex-row lg:gap-[2.5rem]">
                        <p class="max-w-[50%] text-[1.25rem]">
                            {p.project.data.description}
                        </p>
                        <div class="flex max-w-[50%] flex-wrap justify-end gap-[0.5rem]">
                            {p.project.data.technologies.map(technology => (
                                <TechnologyLink
                                    technology={technology}
                                    class="bg-xx-gray-999 flex gap-2 whitespace-nowrap rounded-full border border-solid border-purple-700 px-4 py-2 text-lg font-bold leading-[1.35] text-purple-700"
                                />
                            ))}
                        </div>
                    </div>
                </Hero>
            </div>
        </header>
    );
};

const Project = (p: { project: TProject; children: JSXElement }) => {
    return (
        <div class="flex flex-col gap-[5rem]">
            <div class="flex flex-col gap-[3.75rem]">
                <Header project={p.project} />
                <Content
                    img={p.project.data.img}
                    imgAlt={p.project.data.img_alt || ""}
                >
                    {p.children}
                </Content>
            </div>
            <ContactCTA />
        </div>
    );
};

export default Project;

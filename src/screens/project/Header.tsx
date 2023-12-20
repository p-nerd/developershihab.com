import Hero from "@/components/Hero";
import ArrowLeftIcon from "@/icons/ArrowLeftIcon.tsx";
import { show_project_end_date, show_project_start_date } from "@/helpers/time";
import type { TProject } from "@/content/config.ts";
import type { JSX } from "solid-js";

const ProjectPill = (p: { children: JSX.Element }) => {
    return (
        <div class="flex gap-2 whitespace-nowrap rounded-full border border-solid border-purple-700 bg-sx-gray-999 px-4 py-2 text-lg font-bold leading-[1.35] text-purple-700">
            {p.children}
        </div>
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
                        <ArrowLeftIcon />
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
                            {p.project.data.technologies.map(t => (
                                <ProjectPill>{t}</ProjectPill>
                            ))}
                        </div>
                    </div>
                </Hero>
            </div>
        </header>
    );
};

export default Header;

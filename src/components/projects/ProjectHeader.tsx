import Icon from "@components/pure/Icon.astro";
import ProjectPill from "./ProjectPill.tsx";
import Hero from "@components/pure/Hero.tsx";
import ArrowLeftIcon from "@components/icons/ArrowLeftIcon.tsx";

const ProjectHeader = (p: {
    technologies: string[];
    description: string;
    title: string;
    type: string;
    domain: string;
}) => {
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
                        <span>{p.type}</span>
                        <span>{p.domain}</span>
                    </p>
                </div>
                <Hero title={p.title} align="start">
                    <div class="flex flex-col items-center justify-between gap-[1.5rem] p-[0.5rem] lg:flex-row lg:gap-[2.5rem]">
                        <p class="max-w-[50%] text-[1.25rem]">
                            {p.description}
                        </p>
                        <div class="flex max-w-[50%] flex-wrap justify-end gap-[0.5rem]">
                            {p.technologies.map(t => (
                                <ProjectPill>{t}</ProjectPill>
                            ))}
                        </div>
                    </div>
                </Hero>
            </div>
        </header>
    );
};

export default ProjectHeader;

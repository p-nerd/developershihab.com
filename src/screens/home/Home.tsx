import type { TProject } from "@/content/config";
import { For } from "solid-js";

export const FeaturedProjects = (p: { projects: TProject[] }) => {
    return (
        <For each={p.projects}>
            {project => (
                <li>
                    <a
                        style="grid-template: auto 1fr / auto 1fr; background: var(--gradient-subtle); font-family: var(--font-brand); transition: box-shadow var(--theme-transition);"
                        class="grid h-44 overflow-hidden rounded-xl border border-xx-gray-800 text-lg font-medium decoration-0 shadow-sm hover:shadow-md lg:h-[22rem] lg:rounded-3xl"
                        href={`/projects/${project.slug}`}
                    >
                        <span
                            style="grid-area: 1 / 1 / 2 / 2;"
                            class="z-[1] m-2 rounded-md bg-xx-gray-999 px-4 py-2 text-xx-gray-200 lg:rounded-[0.9375rem]"
                        >
                            {project.data.title}
                        </span>
                        <img
                            src={project.data.img}
                            alt={project.data.img_alt || ""}
                            loading="lazy"
                            decoding="async"
                            style="grid-area: 1 / 1 / 3 / 3;"
                            class="h-full w-full object-contain"
                        />
                    </a>
                </li>
            )}
        </For>
    );
};

import type { TProject } from "@content/config";

const ProjectPreview = (p: { project: TProject }) => {
    return (
        <li class="flex flex-col gap-1 font-sx-font-brand">
            <a
                class="flex h-max flex-col gap-2 overflow-hidden rounded-xl border border-solid border-sx-gray-800 px-1 py-4 text-[1.25rem] text-sx-gradient-subtle shadow-sx-shadow-sm transition-shadow duration-[0.2s] ease-in-out hover:shadow-sx-shadow-md lg:rounded-3xl lg:p-5 lg:py-10"
                href={`/projects/${p.project.slug}`}
            >
                <div class="flex justify-between lg:px-2 lg:py-1">
                    <span class="m-2 rounded-md bg-sx-gray-999 px-2 py-1 text-sx-gray-200 lg:rounded-2xl lg:px-4 lg:py-2">
                        {p.project.data.type}
                    </span>
                    <span class="m-2 rounded-md bg-sx-gray-999 px-2 py-1 text-sx-gray-200 lg:rounded-2xl lg:px-4 lg:py-2">
                        {p.project.data.domain}
                    </span>
                </div>
                <div class="px-2 py-1 lg:px-4 lg:py-2">
                    <img
                        src={p.project.data.img}
                        alt={p.project.data.img_alt || ""}
                        loading="lazy"
                        decoding="async"
                        class="h-full w-full rounded-xl object-contain"
                    />
                </div>
                <div class="lg:px-2 lg:py-1">
                    <h2 class="m-2 rounded-md bg-sx-gray-999 px-2 py-1 text-5xl text-sx-gray-200 lg:rounded-2xl lg:px-4 lg:py-2">
                        {p.project.data.title}
                    </h2>
                </div>
                <div class="lg:px-2 lg:py-1">
                    <p class="m-2 rounded-md bg-sx-gray-999 px-2 py-1 text-sx-gray-200 lg:rounded-2xl lg:px-4 lg:py-2">
                        {p.project.data.description}
                    </p>
                </div>
                <div class="flex flex-wrap gap-2 px-2 py-1 lg:px-4 lg:py-2">
                    {p.project.data.technologies.map(tag => (
                        <span class="rounded-md bg-sx-gray-999 px-2 py-1 text-sx-gray-200 lg:rounded-2xl lg:px-4 lg:py-2">
                            {tag}
                        </span>
                    ))}
                </div>
            </a>
            <div class="l flex h-max gap-1 text-[1.25rem]">
                {[...Object.keys(p.project.data.links)].map(key => (
                    <a
                        class="h-max w-full overflow-hidden rounded-xl border border-solid border-sx-gray-800 py-3 text-center text-sx-gradient-subtle shadow-sx-shadow-sm transition-shadow duration-[0.2s] ease-in-out hover:shadow-sx-shadow-md lg:rounded-3xl"
                        href={p.project.data.links[key]}
                    >
                        {key}
                    </a>
                ))}
            </div>
        </li>
    );
};

export default ProjectPreview;

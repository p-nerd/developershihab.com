import type { TChildren } from "@/helpers/types";

const ProjectLink = (p: {
    slug: string;
    children: TChildren;
    class?: string;
}) => {
    return (
        <a href={`/projects/${p.slug}`} class={p.class}>
            {p.children}
        </a>
    );
};

export default ProjectLink;

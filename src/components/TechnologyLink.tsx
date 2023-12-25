import type { TChildren } from "@/helpers/types";
import { technogies_links } from "site.config.ts";

const TechnologyLink = (p: {
    technology: string;
    class?: string;
    children?: TChildren;
}) => (
    <a
        href={
            technogies_links[p.technology] ||
            `https://www.google.com/search?q=${p.technology}`
        }
        target="_blank"
        class={p.class}
    >
        {p.children || p.technology}
    </a>
);

export default TechnologyLink;

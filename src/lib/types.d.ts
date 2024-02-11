import type { StaticImageData } from "next/image";

import nav_links from "./nav_links";

export type SectionName = (typeof nav_links)[number]["name"];

export type TBlog = {
    slug: string;
    title: string;
    desc: string;
    date: string;
    excerpt: string;
    img: string;
    draft?: boolean;
    priority?: number;
    body: string;
};

export type TPoem = {
    name: string;
    draft?: boolean;
    priority?: number;
    body: string;
};

export type TProject = {
    slug: string;
    title: string;
    description: string;
    tags: string[];
    imageUrl: string;
    links?: { label: string; link: string }[];
    draft?: boolean;
    priority?: number;
    featured?: boolean;
    body: string;
};

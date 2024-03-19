import type { StaticImageData } from "next/image";
import type { IconType } from "react-icons";

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

export type TExperience = {
    title: string;
    location: string;
    location_link?: string;
    description: string;
    icon: IconType;
    date: string;
    projects?: string[];
    technologies?: string[][];
};

export type TSkill = {
    category: string;
    technologies: string[];
};

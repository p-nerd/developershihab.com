import type { StaticImageData } from "next/image";
import type { IconType } from "react-icons";

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
    location: string;
    location_link?: string;
    icon: IconType;
    date: string;
    positions: {
        title: string;
        description: string;
        date: string;
        projects?: string[];
        technologies?: string[][];
    }[];
};

export type TSkill = {
    category?: string;
    technologies: string[];
};

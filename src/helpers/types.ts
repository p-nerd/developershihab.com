import type { iconPaths } from "./IconPaths";

export type TTextLink = {
    label: string;
    href: string;
};

export type TSocialLink = {
    label: string;
    href: string;
    icon: keyof typeof iconPaths;
};

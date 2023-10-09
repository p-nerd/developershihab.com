import type { JSXElement } from "solid-js";
import type { iconPaths } from "./IconPaths";

export type TNavLink = {
    label: string;
    href: string;
};

export type TSocialLink = {
    label: string;
    href: string;
    icon: keyof typeof iconPaths;
};

export type TIconComponent = (p: { class?: string }) => JSXElement;

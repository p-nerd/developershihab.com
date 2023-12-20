import type { JSXElement } from "solid-js";

import icon_paths from "./icon_paths";

export type TNavLink = {
    label: string;
    href: string;
};

export type TSocialLink = {
    label: string;
    href: string;
    icon: keyof typeof icon_paths;
};

export type TIconComponent = (p: { class?: string }) => JSXElement;

export type TTag = { label: string; count: number };

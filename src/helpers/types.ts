import type { JSXElement } from "solid-js";
import icon_paths from "./icon_paths";

export type TIcon = (p: { class?: string }) => JSXElement;
export type TChildren = JSXElement | string | number | boolean;
export type TTag = { label: string; count: number };
export type TNavLink = { label: string; href: string };
export type TIconPath = keyof typeof icon_paths;

export type TSocialLink = {
    label: string;
    href: string;
    icon?: TIconPath;
    icon_x?: TIcon;
};

export type TTestimonial = {
    title: string;
    subtitle: string;
    src: string;
};

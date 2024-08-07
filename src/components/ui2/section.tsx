import { type JSXElement } from "solid-js";
import { A as RA } from "@solidjs/router";
import { cn } from "~/lib/utils";

export const Divider = () => {
    return (
        <div class="my-24 hidden h-16 w-1 rounded-full bg-gray-200 dark:bg-opacity-20 sm:block" />
    );
};

export const Section = (p: { children: JSXElement; id: string; class?: string }) => {
    return (
        <section
            id={p.id}
            class={cn("flex flex-col gap-3 leading-8 text-gray-500 dark:text-gray-300", p.class)}
        >
            {p.children}
        </section>
    );
};

export const H2 = (p: { children: JSXElement }) => {
    return (
        <h2 class="mb-8 text-center text-3xl font-bold capitalize text-gray-600 dark:text-gray-50">
            {p.children}
        </h2>
    );
};

export const A = (p: { href: string; children: JSXElement; target?: "_blank"; class?: string }) => {
    return (
        <RA
            class={cn(
                "inline-flex font-semibold text-gray-600 transition-colors duration-300 hover:text-green-500 dark:text-gray-50 dark:hover:text-green-500",
                p.class,
            )}
            href={p.href}
            target={p.target}
        >
            {p.children}
        </RA>
    );
};

export const B = (p: { children: JSXElement; class?: string }) => {
    return (
        <span class={cn("inline-flex font-semibold text-gray-600 dark:text-gray-50", p.class)}>
            {p.children}
        </span>
    );
};

export const I = (p: { children: JSXElement; class?: string }) => {
    return (
        <span
            class={cn("inline-flex font-semibold italic text-gray-600 dark:text-gray-50", p.class)}
        >
            {p.children}
        </span>
    );
};

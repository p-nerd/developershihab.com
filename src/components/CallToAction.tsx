import type { JSXElement } from "solid-js";

const CallToAction = (p: { href: string; children: JSXElement }) => {
    return (
        <a
            href={p.href}
            class="bg-sx-gr text-xx-accent-text-over group relative flex items-center gap-2 overflow-hidden whitespace-nowrap rounded-full px-8 py-2 text-center leading-[1.1] shadow-md lg:px-10 lg:py-[1.125rem] lg:text-[1.625rem]"
            style="text-decoration: none; background: var(--gradient-accent-orange);"
        >
            {p.children}
            <span class="transition-bg pointer-events-none absolute inset-0 bg-opacity-30 mix-blend-overlay group-hover:bg-opacity-100"></span>
        </a>
    );
};

export default CallToAction;

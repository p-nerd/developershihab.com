import type { JSXElement } from "solid-js";

const Link = (p: { href: string; children: JSXElement }) => {
    return (
        <a class="hover:border-b-2 hover:border-b-[#c561f6]" href={p.href}>
            {p.children}
        </a>
    );
};

export default Link;

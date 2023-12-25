import { cn } from "@/helpers/etc";
import type { JSXElement } from "solid-js";

const Pill = (p: { slug?: string; children: JSXElement }) => {
    const _class =
        "pill flex gap-2 whitespace-nowrap rounded-full border border-solid border-purple-700 bg-purple-700 px-4 py-2 text-lg leading-[1.35] text-white";

    return (
        <>
            {p.slug ? (
                <a href={p.slug} class={_class}>
                    {p.children}
                </a>
            ) : (
                <div class={cn(_class, "cursor-auto")}>{p.children}</div>
            )}
        </>
    );
};

export default Pill;

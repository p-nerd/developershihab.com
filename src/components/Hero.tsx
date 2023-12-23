import type { JSXElement } from "solid-js";
import { cn } from "@/helpers/etc";

const Hero = (p: {
    title: string;
    tagline?: string;
    children?: JSXElement;
    class?: string;
}) => (
    <header
        class={cn(
            "flex flex-col gap-4 text-center text-[1.25rem] lg:text-[1.625rem]",
            p.class,
        )}
    >
        <div class="flex flex-col gap-2">
            <h1 class="text-[2.625rem] text-xx-gray-0 lg:text-[4.5rem]">
                {p.title}
            </h1>
            {p.tagline && <p>{p.tagline}</p>}
        </div>
        {p.children}
    </header>
);

export default Hero;

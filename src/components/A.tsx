import type { TChildren } from "@/helpers/types";
import { cn } from "@/helpers/etc";

const A = (p: { href: string; class?: string; children: TChildren }) => {
    return (
        <a
            href={p.href}
            class={cn(
                "underline decoration-1 underline-offset-[0.25em] transition",
                p.class,
            )}
        >
            {p.children}
        </a>
    );
};

export default A;

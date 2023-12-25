import { cn } from "@/helpers/etc";
import type { TChildren } from "@/helpers/types";
import { Match, Switch } from "solid-js";

const PreviewText = (p: {
    tag?: "h1" | "p" | "div" | "span";
    children: TChildren;
    class?: string;
}) => {
    const _class = cn(
        "rounded-md bg-xx-gray-999 px-2 py-1 text-xx-gray-200 lg:rounded-2xl lg:px-4 lg:py-2",
        p.class,
    );

    return (
        <Switch fallback={<div class={_class}>{p.children}</div>}>
            <Match when={p.tag === "h1"}>
                <h1 class={_class}>{p.children}</h1>
            </Match>
            <Match when={p.tag === "p"}>
                <h1 class={_class}>{p.children}</h1>
            </Match>
            <Match when={p.tag === "span"}>
                <div class={_class}>{p.children}</div>
            </Match>
        </Switch>
    );
};

export default PreviewText;

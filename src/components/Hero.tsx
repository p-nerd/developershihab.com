import { mergeProps, type JSXElement } from "solid-js";

const Hero = (props: {
    title: string;
    tagline?: string;
    align?: "start" | "center" | "end";
    alignHero?: "start" | "center" | "end";
    children?: JSXElement;
}) => {
    const p = mergeProps(
        {
            align: "center",
            alignHero: "start",
            children: "",
        },
        props,
    );

    return (
        <header
            style={`text-align: ${p.align};`}
            class={`hero flex flex-col gap-4 text-center text-[1.25rem] lg:text-[1.625rem]`}
        >
            <div
                style={`text-align: ${p.alignHero};`}
                class="flex flex-col gap-2"
            >
                <h1 class="text-[2.625rem] text-sx-gray-0 lg:text-[4.5rem]">
                    {p.title}
                </h1>
                {p.tagline && (
                    <p style={`text-align: ${p.alignHero}`}>{p.tagline}</p>
                )}
            </div>
            {p.children}
        </header>
    );
};

export default Hero;

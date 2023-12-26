import { get_current_year } from "@/helpers/time";
import { social_links } from "site.config.ts";
import { For } from "solid-js";

import A from "@/components/A";

const Footer = () => {
    return (
        <footer class="mt-auto flex flex-col gap-6 px-8 py-12 text-center text-[0.875rem] text-[#6474a2] lg:flex-row lg:justify-between lg:gap-12 lg:px-[5rem] lg:py-[2.5rem] dark:text-[#8490b5]">
            <div class="flex flex-col gap-2 lg:flex-row lg:flex-wrap lg:gap-2">
                <p>
                    Designed inspired from{" "}
                    <A href="https://astro.build/themes/details/portfolio/">
                        Portfolio
                    </A>{" "}
                    Template by <A href="https://astro.build/">Astro</A> &copy;
                    2021 - <span>{get_current_year()}</span> Shihab Mahamud
                </p>
            </div>
            <p class="socials flex flex-wrap justify-center gap-4 lg:justify-end">
                <For each={social_links}>
                    {social_link => (
                        <A href={social_link.href}>{social_link.label}</A>
                    )}
                </For>
            </p>
        </footer>
    );
};

export default Footer;

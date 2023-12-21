import { get_current_year } from "@/helpers/time";
import { social_links } from "site.config.ts";
import { For } from "solid-js";

import Link from "@/components/Link";

const Footer = () => {
    return (
        <footer class="mt-auto flex flex-col gap-12 px-8 py-12 text-center text-[0.875rem] text-[#6474a2] lg:flex-row lg:justify-between lg:px-[5rem] lg:py-[2.5rem] dark:text-[#8490b5]">
            <div class="flex flex-col gap-2 lg:flex-row lg:flex-wrap lg:gap-2">
                <p>
                    Designed inspired from{" "}
                    <Link href="https://astro.build/themes/details/portfolio/">
                        Portfolio
                    </Link>{" "}
                    Template by <Link href="https://astro.build/">Astro</Link>
                </p>
                <p>
                    &copy; 2021 - <span>{get_current_year()}</span> Shihab
                    Mahamud
                </p>
            </div>
            <p class="socials flex flex-wrap justify-center gap-4 lg:justify-end">
                <For each={social_links}>
                    {social_link => (
                        <Link href={social_link.href}>{social_link.label}</Link>
                    )}
                </For>
            </p>
        </footer>
    );
};

export default Footer;

import { A } from "@solidjs/router";
import { cn } from "~/lib/utils";

export const sections = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "Blogs",
        hash: "#blogs",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export type TSectionName = (typeof sections)[number]["name"];

const Header = () => {
    return (
        <header class="relative z-[999]">
            <div class="fixed left-1/2 top-0 h-[4.5rem] w-full -translate-x-1/2 rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] dark:border-black/40 dark:bg-gray-950 dark:bg-opacity-75 sm:top-6 sm:h-[3.25rem] sm:w-[41rem] sm:rounded-full" />

            <nav class="fixed left-1/2 top-[0.15rem] flex h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
                <ul class="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
                    {sections.map(link => (
                        <li class="relative flex h-3/4 items-center justify-center">
                            <A
                                class={cn(
                                    "flex w-full items-center justify-center px-3 py-3 transition hover:text-gray-950 dark:text-gray-500 dark:hover:text-gray-300",
                                    {
                                        "text-gray-950 dark:text-gray-200": false,
                                    },
                                )}
                                href={link.hash}
                            >
                                {link.name}
                                {false && (
                                    <span class="absolute inset-0 -z-10 rounded-full bg-gray-100 dark:bg-gray-800"></span>
                                )}
                            </A>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;

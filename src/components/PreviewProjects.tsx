"use client";

import type { TProject } from "@/lib/types";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import projects from "@/conf/projects";

import Image from "next/image";
import Link from "next/link";
import Anchor from "./Anchor";

const Project = ({ title, description, tags, imageUrl, more, links }: TProject) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    });
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

    return (
        <motion.div
            ref={ref}
            style={{
                scale: scaleProgress,
                opacity: opacityProgress,
            }}
            className="group mb-3 last:mb-0 sm:mb-8"
        >
            <section className="relative  overflow-hidden rounded-lg border border-black/5 bg-gray-100 transition hover:bg-gray-200 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 sm:h-[25rem] sm:pr-8 sm:group-even:pl-8">
                <div className="flex h-full flex-col justify-between px-5 pb-7 pt-4 sm:max-w-[55%] sm:pl-10 sm:pr-2 sm:pt-10 sm:group-even:ml-[18rem]">
                    <div className="flex flex-col gap-2">
                        <h3 className="text-2xl font-semibold">{title}</h3>
                        <p className="leading-relaxed text-gray-700 dark:text-white/70">
                            {description}{" "}
                            {!!more && (
                                <Link href={more} className="underline">
                                    Read more
                                </Link>
                            )}
                        </p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <ul className="mt-4 flex flex-wrap gap-2 sm:mt-auto">
                            {tags.map((tag, index) => (
                                <li
                                    className="rounded-full bg-black/[0.7] px-3 py-1 text-[0.7rem] tracking-wider text-white dark:text-white/70"
                                    key={index}
                                >
                                    {tag}
                                </li>
                            ))}
                        </ul>
                        {!!links && (
                            <ul className="mt-4 flex flex-col gap-1 sm:mt-auto">
                                {links.map((link, index) => (
                                    <li key={index} className="w-full text-center">
                                        <Anchor
                                            href={link.link}
                                            className="block w-full rounded-full bg-black/[0.7] px-3 py-1 text-[0.8rem] tracking-wider text-white dark:text-white/70"
                                        >
                                            {link.label}
                                        </Anchor>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>

                <Image
                    src={imageUrl}
                    alt="Project I worked on"
                    quality={95}
                    className="absolute -right-40 top-8 hidden w-[28.25rem] rounded-t-lg shadow-2xl transition
        group-even:-left-40 
        group-even:right-[initial]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-hover:scale-[1.04]
        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3

        group-even:group-hover:rotate-2 sm:block"
                />
            </section>
        </motion.div>
    );
};

const PreviewProjects = (p: { projects: TProject[] }) => {
    return (
        <div>
            {p.projects.map((project, index) => (
                <Project {...project} key={index} />
            ))}
        </div>
    );
};

export default PreviewProjects;

"use client";

import type { ReactNode } from "react";

import { motion } from "framer-motion";
import { person } from "@/site.config";
import { useActiveSectionContext } from "@/context/active-section-context";

import { HiDownload } from "react-icons/hi";
import { FaDev, FaGithubSquare } from "react-icons/fa";
import { BsArrowRight, BsFacebook, BsLinkedin, BsTwitterX } from "react-icons/bs";

import portrait from "@/assets/home/portrait.jpg";
import useSectionInView from "@/hooks/useSectionInView";

import Link from "next/link";
import Image from "next/image";
import Anchor from "@/components/Anchor";

const SocialLink = (p: { href: string; icon: ReactNode; ariaLabel: string }) => {
    return (
        <Anchor
            ariaLabel={p.ariaLabel}
            className="borderBlack flex cursor-pointer items-center gap-1 rounded-full bg-white p-2 text-[1rem] text-gray-700 transition hover:scale-[1.15] hover:text-gray-950 focus:scale-[1.15] active:scale-105 dark:bg-white/10 dark:text-white/60 lg:gap-2 lg:p-4 lg:text-[1.35rem]"
            href={p.href}
        >
            {p.icon}
        </Anchor>
    );
};

const Intro = () => {
    const { ref } = useSectionInView("Home", 0.5);
    const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

    return (
        <section
            ref={ref}
            id="home"
            className="mb-28 max-w-[55rem] scroll-mt-[100rem] text-center sm:mb-0"
        >
            <div className="flex flex-col items-center justify-center space-y-3">
                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "tween",
                            duration: 0.2,
                        }}
                    >
                        <Image
                            src={portrait}
                            alt="Shihab Mahamud"
                            width="192"
                            height="192"
                            quality="95"
                            priority={true}
                            className="h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl"
                        />
                    </motion.div>

                    <motion.span
                        className="absolute bottom-0 right-0 text-4xl"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 125,
                            delay: 0.1,
                            duration: 0.7,
                        }}
                    >
                        👋
                    </motion.span>
                </div>
                <div className="text-[0.6rem] lg:text-base">
                    Programmer | Problem Solver | Full-stack Developer
                </div>
            </div>

            <motion.h1
                className="mb-8 mt-5 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl lg:mb-10 lg:mt-7"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <span className="font-bold">Hello, I'm Shihab.</span> I'm a{" "}
                <span className="font-bold">full-stack developer</span> with{" "}
                <span className="font-bold">3 years</span> of experience, and I enjoy building for{" "}
                <span className="italic">the web</span>. My focus is{" "}
                <span className="underline">JS/TS & PHP</span>.
            </motion.h1>

            <motion.div
                className="flex flex-col items-center justify-center gap-2 px-4 text-sm font-medium lg:text-lg"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.1,
                }}
            >
                <div className="flex gap-1.5 sm:flex-row lg:gap-3">
                    <Link
                        href="#contact"
                        className="group flex items-center gap-1 rounded-full bg-gray-900 px-4  py-2.5 text-white outline-none transition hover:scale-110 hover:bg-gray-950 focus:scale-110 active:scale-105 lg:gap-2 lg:px-7 lg:py-3"
                        onClick={() => {
                            setActiveSection("Contact");
                            setTimeOfLastClick(Date.now());
                        }}
                    >
                        Contact me here{" "}
                        <BsArrowRight className="opacity-70 transition group-hover:translate-x-1" />
                    </Link>

                    <a
                        className="borderBlack group flex cursor-pointer items-center gap-1 rounded-full bg-white px-4 py-2.5 outline-none transition hover:scale-110 focus:scale-110 active:scale-105 dark:bg-white/10 lg:gap-2 lg:px-7 lg:py-3"
                        href="/shihab-mahamud-cv.pdf"
                        download
                    >
                        Download CV{" "}
                        <HiDownload className="opacity-60 transition group-hover:translate-y-1" />
                    </a>
                </div>
                <div className="flex items-center justify-center gap-1 lg:gap-2">
                    <SocialLink
                        ariaLabel="Facebook Link"
                        href={person.facebook}
                        icon={<BsFacebook />}
                    />
                    <SocialLink
                        ariaLabel="Linkedin Link"
                        href={person.linkedin}
                        icon={<BsLinkedin />}
                    />
                    <SocialLink
                        ariaLabel="Twitter Link"
                        href={person.twitter}
                        icon={<BsTwitterX />}
                    />
                    <SocialLink
                        ariaLabel="Github Link"
                        href={person.github}
                        icon={<FaGithubSquare />}
                    />
                    <SocialLink ariaLabel="Dev.to Link" href={person.dev_to} icon={<FaDev />} />
                </div>
            </motion.div>
        </section>
    );
};

export default Intro;

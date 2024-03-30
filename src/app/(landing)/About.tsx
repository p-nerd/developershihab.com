"use client";

import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

import useSectionInView from "@/hooks/useSectionInView";

import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

const Anchor = (p: {
    className?: string;
    href: string;
    children: ReactNode;
    target?: "_blank";
}) => {
    return (
        <Link
            className={cn("underline underline-offset-2", p.className)}
            href={p.href}
            target={p.target}
        >
            {p.children}
        </Link>
    );
};

const Highlight = (p: { children: ReactNode }) => {
    return <span className="font-medium">{p.children}</span>;
};

const About = () => {
    const { ref } = useSectionInView("About");

    return (
        <motion.section
            ref={ref}
            className="mb-28 flex max-w-[45rem] scroll-mt-28 flex-col gap-3 text-center leading-8 sm:mb-40"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="about"
        >
            <SectionHeading>About me</SectionHeading>
            <p>
                After graduating from <span className="font-medium">high school</span>, I was
                introduced to programming through the internet. I began learning programming with
                the C language, using Tamim Shahriar Subeen's book "Computer Programming".
                Subsequently, I engaged in problem-solving on various Competitive Programming
                platforms using C/C++. Over a period of 1.5 years, I solved over{" "}
                <Anchor href="https://github.com/p-nerd/online_judges" target="_blank">
                    1100+ problems
                </Anchor>
                . During problem-solving, I also learned{" "}
                <Anchor href="https://github.com/p-nerd/dsa_library" target="_blank">
                    Data Structure And Algorithms
                </Anchor>
            </p>
            <p>
                My interest then shifted towards Web application development, prompting me to
                initially delve into backend development with Node.js, followed by frontend
                development with React.js. Over the past year, I have been engaged in contract-based
                work with a company called Finnext.co, where I have contributed to several notable
                projects. Currently, my focus lies on <Highlight>JavaScript/TypeScript</Highlight>{" "}
                (React.js/Next.js, Solid.js), <Highlight>PHP</Highlight> (Laravel, Wordpress)
                stacks. I am also enthusiastic about the Go programming language. I am deeply
                passionate about continuously expanding my skill set and am actively seeking a{" "}
                <Highlight>full-time position</Highlight> as a software developer. Also I am
                currently a 4th year diploma student at Faridpur Polytechnic Institute studying
                Computer Science.
            </p>
            <p>
                <span className="italic">When I'm not coding</span>, I enjoy walking on street,
                watching movies, and chat with friends and family. I also enjoy{" "}
                <span className="font-medium">learning new things</span>. I am currently learning
                about <span className="font-medium">Business & Entrepreneurship</span>. Sometime I
                also write some <Anchor href="/poems">bangla poems</Anchor>.
            </p>
        </motion.section>
    );
};

export default About;

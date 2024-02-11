"use client";

import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

import SectionHeading from "@/components/SectionHeading";
import Link from "next/link";

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
                platforms using C/C++. Over a period of 1.5 years, I successfully solved over 1100+
                problems.
            </p>
            <p>
                My interest then shifted towards Web application development, prompting me to
                initially delve into backend development with Node.js, followed by frontend
                development with React.js. Over the past year, I have been engaged in contract-based
                work with a company called Finnext.co, where I have contributed to several notable
                projects. Currently, my focus lies on JavaScript/TypeScript (React.js/Next.js,
                Solid.js), PHP (Laravel, Wordpress), and Elixir (Phoenix) stacks. I am deeply
                passionate about continuously expanding my skill set and am actively seeking a{" "}
                <span className="font-medium">full-time position</span> as a software developer.
                Also I am currently a 4th year diploma student at Faridpur Polytechnic Institute
                studying Computer Science.
            </p>
            <p>
                <span className="italic">When I'm not coding</span>, I enjoy walking on street,
                watching movies, and chat with friends and family. I also enjoy{" "}
                <span className="font-medium">learning new things</span>. I am currently learning
                about <span className="font-medium">Islam and Philosophy</span>. Sometime I also
                write some{" "}
                <Link className="underline underline-offset-2" href="/poems">
                    bangla poems
                </Link>
                .
            </p>
        </motion.section>
    );
};

export default About;

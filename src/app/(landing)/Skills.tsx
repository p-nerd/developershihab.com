"use client";

import type { TSkill } from "@/lib/types";

import { motion } from "framer-motion";
import { skills } from "@/site.config";

import useSectionInView from "@/hooks/useSectionInView";

import SectionHeading from "@/components/SectionHeading";
import Technology from "@/components/Technology";

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index,
        },
    }),
};

const Skills = () => {
    const { ref } = useSectionInView("Skills");

    return (
        <section
            id="skills"
            ref={ref}
            className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
        >
            <SectionHeading>My skills</SectionHeading>
            <div className="flex flex-col gap-4 lg:gap-5">
                {skills.map((skill: TSkill, index) => (
                    <div key={index} className="flex flex-col gap-2">
                        <h3 className="text-base lg:text-lg">{skill.category}</h3>
                        <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
                            {skill.technologies.map((technology, jndex) => (
                                <motion.li
                                    className="borderBlack rounded-xl bg-white px-4 py-2 text-base dark:bg-white/10 dark:text-white/80 lg:px-5 lg:py-3 lg:text-lg"
                                    key={jndex}
                                    variants={fadeInAnimationVariants}
                                    initial="initial"
                                    whileInView="animate"
                                    viewport={{
                                        once: true,
                                    }}
                                    custom={index}
                                >
                                    <Technology technology={technology} />
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;

"use client";

import "react-vertical-timeline-component/style.min.css";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import { experiences } from "../../../site.config";

const Experience = (p: { projects: Record<string, string> }) => {
    const { ref } = useSectionInView("Experience");
    const { theme } = useTheme();

    return (
        <section id="experience" ref={ref} className="mb-28 scroll-mt-28 sm:mb-40">
            <SectionHeading>My experience</SectionHeading>
            <VerticalTimeline lineColor="">
                {experiences.map((item, index) => (
                    <VerticalTimelineElement
                        visible={true}
                        key={index}
                        contentStyle={{
                            background: theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                            boxShadow: "none",
                            border: "1px solid rgba(0, 0, 0, 0.05)",
                            textAlign: "left",
                            padding: "1.1rem 1.4rem",
                        }}
                        contentArrowStyle={{
                            borderRight:
                                theme === "light"
                                    ? "0.4rem solid #9ca3af"
                                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
                        }}
                        date={item.date}
                        icon={<item.icon />}
                        iconStyle={{
                            background: theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                            fontSize: "1.5rem",
                        }}
                    >
                        <div className="lg:px-2 lg:py-1.5">
                            <div className="flex flex-wrap gap-x-2">
                                <h3 className="font-bold">{item.title}</h3>
                                <p className="!mt-0 font-normal">
                                    @
                                    {item.location_link ? (
                                        <Link
                                            href={item.location_link}
                                            className="underline underline-offset-2"
                                        >
                                            {item.location}
                                        </Link>
                                    ) : (
                                        item.location
                                    )}
                                </p>
                            </div>
                            <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                                {item.description}
                            </p>
                            {!!item.projects && (
                                <div className="mt-3 flex flex-col gap-1 text-sm text-gray-700 dark:text-white/75">
                                    <h3 className="font-semibold">Projects did/doing here:</h3>
                                    <ul className="flex flex-col pl-5">
                                        {item.projects.map((project, index) => (
                                            <li key={project} className="flex">
                                                <span className="w-5">{index + 1}.</span>
                                                <Link
                                                    href={`/projects/${project}?back=#experience`}
                                                    className="underline underline-offset-2"
                                                >
                                                    {p.projects[project]}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            {!!item.technologies && (
                                <div className="mt-2 flex flex-col flex-wrap gap-1 text-sm text-gray-700 dark:text-white/75">
                                    <h3 className="font-semibold">Technologies used here:</h3>
                                    <ul className="flex flex-col flex-wrap pl-5">
                                        {item.technologies.map((technologies, index) => (
                                            <li key={index} className="flex">
                                                <span className="w-5">{index + 1}.</span>
                                                <div className="flex flex-wrap gap-1">
                                                    {technologies.map((technology, jndex) => (
                                                        <span key={technology}>
                                                            {technology}
                                                            {jndex !== technologies?.length - 1 &&
                                                                ", "}
                                                        </span>
                                                    ))}
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </section>
    );
};

export default Experience;

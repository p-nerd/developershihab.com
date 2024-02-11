"use client";

import { useSectionInView } from "@/lib/hooks";

import projects from "@/conf/projects";

import SectionHeading from "@/components/SectionHeading";
import PreviewProjects from "@/components/PreviewProjects";
import Link from "next/link";

const Projects = () => {
    const { ref } = useSectionInView("Projects", 0.5);

    return (
        <section ref={ref} id="projects" className="mb-28 max-w-[45rem] scroll-mt-28">
            <SectionHeading>My projects</SectionHeading>
            <PreviewProjects projects={projects} />
            <div className="mt-5 flex justify-center">
                <Link href="/projects" className="text-center text-lg underline underline-offset-2">
                    All Projects
                </Link>
            </div>
        </section>
    );
};

export default Projects;

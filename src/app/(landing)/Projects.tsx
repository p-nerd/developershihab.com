"use client";

import { useSectionInView } from "@/lib/hooks";

import projects from "@/conf/projects";

import SectionHeading from "@/components/SectionHeading";
import PreviewProjects from "@/components/PreviewProjects";

const Projects = () => {
    const { ref } = useSectionInView("Projects", 0.5);

    return (
        <section ref={ref} id="projects" className="mb-28 scroll-mt-28">
            <SectionHeading>My projects</SectionHeading>
            <PreviewProjects projects={projects} />
        </section>
    );
};

export default Projects;

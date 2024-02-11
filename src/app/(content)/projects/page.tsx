import type { Metadata } from "next";

import person from "@/conf/person";

import BreadCrumb from "@/components/BreadCrumb";
import PreviewProjects from "@/components/PreviewProjects";
import projects from "@/conf/projects";

const topsLinks = [
    {
        label: "Home",
        href: "/#projects",
    },
    {
        label: "Projects",
        href: "/projects",
    },
];

const metadata: Metadata = {
    title: `Projects by ${person.name}`,
};

const Poems = () => {
    return (
        <div className="mx-auto flex max-w-4xl flex-col gap-10 p-5 md:p-10">
            <BreadCrumb links={topsLinks} />
            <PreviewProjects projects={projects} />
        </div>
    );
};

export { metadata };
export default Poems;

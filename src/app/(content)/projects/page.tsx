import type { Metadata } from "next";

import { person } from "@/site.config";
import { get_projects } from "@/lib/content";

import BreadCrumb from "@/components/BreadCrumb";
import PreviewProjects from "@/components/PreviewProjects";

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
        <div className="mx-auto flex max-w-4xl flex-col gap-10 p-5 lg:p-10">
            <BreadCrumb links={topsLinks} />
            <h1 className="text-center text-3xl font-bold">All Projects</h1>
            <div className="flex  items-center justify-center">
                <div className="max-w-[45rem]">
                    <PreviewProjects projects={get_projects()} />
                </div>
            </div>
        </div>
    );
};

export { metadata };
export default Poems;

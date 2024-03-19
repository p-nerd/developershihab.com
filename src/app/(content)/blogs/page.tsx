import type { Metadata } from "next";

import { get_blogs } from "@/lib/content";
import { person } from "@/site.config";

import PreviewBlogs from "@/components/PreviewBlogs";
import BreadCrumb from "@/components/BreadCrumb";

const topsLinks = [
    {
        label: "Home",
        href: "/#blogs",
    },
    {
        label: "Blogs",
        href: "/blogs",
    },
];

const metadata: Metadata = {
    title: `Blogs written by ${person.name}`,
};

const Blogs = () => {
    return (
        <div className="mx-auto flex max-w-4xl flex-col gap-10 p-5 lg:p-10">
            <BreadCrumb links={topsLinks} />
            <PreviewBlogs blogs={get_blogs()} />
        </div>
    );
};

export { metadata };
export default Blogs;

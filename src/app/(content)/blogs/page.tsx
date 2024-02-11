import type { Metadata } from "next";

import { get_blogs } from "@/lib/content";

import PreviewBlogs from "@/components/PreviewBlogs";
import BreadCrumb from "@/components/BreadCrumb";

import person from "@/conf/person";

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
        <div className="mx-auto flex max-w-4xl flex-col gap-10 p-5 md:p-10">
            <BreadCrumb links={topsLinks} />
            <PreviewBlogs blogs={get_blogs()} />
        </div>
    );
};

export { metadata };
export default Blogs;

"use client";

import "react-vertical-timeline-component/style.min.css";

import type { TBlog } from "@/lib/types";

import useSectionInView from "@/hooks/useSectionInView";

import Link from "next/link";
import PreviewBlogs from "@/components/PreviewBlogs";
import SectionHeading from "@/components/SectionHeading";

const Blogs = (p: { blogs: TBlog[] }) => {
    const { ref } = useSectionInView("Blogs", 0.5);

    return (
        <section id="blogs" ref={ref} className="mb-28 scroll-mt-28 sm:mb-40">
            <SectionHeading>My blogs</SectionHeading>
            <PreviewBlogs blogs={p.blogs} />
            <div className="mt-5 flex justify-center">
                <Link href="/blogs" className="text-lg underline underline-offset-2">
                    All Blogs
                </Link>
            </div>
        </section>
    );
};

export default Blogs;

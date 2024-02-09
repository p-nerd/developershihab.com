"use client";

import "react-vertical-timeline-component/style.min.css";
import SectionHeading from "@/components/SectionHeading";
import PreviewBlogs from "@/components/PreviewBlogs";

import { useSectionInView } from "@/lib/hooks";
import Link from "next/link";

const Blogs = () => {
    const { ref } = useSectionInView("Blogs");
    return (
        <section id="blogs" ref={ref} className="mb-28 scroll-mt-28 sm:mb-40">
            <SectionHeading>My blogs</SectionHeading>
            <PreviewBlogs />
            <div className="mt-5 flex justify-center">
                <Link href="/blogs" className="text-lg underline">
                    Read all blogs
                </Link>
            </div>
        </section>
    );
};

export default Blogs;

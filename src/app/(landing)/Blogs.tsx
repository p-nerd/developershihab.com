import "react-vertical-timeline-component/style.min.css";
import SectionHeading from "@/components/SectionHeading";
import PreviewBlogs from "@/components/PreviewBlogs";

import Link from "next/link";
import { get_blogs } from "@/lib/content";

const Blogs = () => {
    return (
        <section id="blogs" className="mb-28 scroll-mt-28 sm:mb-40">
            <SectionHeading>My blogs</SectionHeading>
            <PreviewBlogs blogs={get_blogs().slice(0, 5)} />
            <div className="mt-5 flex justify-center">
                <Link href="/blogs" className="text-lg underline underline-offset-2">
                    Open all blogs
                </Link>
            </div>
        </section>
    );
};

export default Blogs;

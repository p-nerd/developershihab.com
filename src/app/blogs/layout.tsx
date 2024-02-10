import type { ReactNode } from "react";
import type { Metadata } from "next";

import person from "@/conf/person";

const metadata: Metadata = {
    title: `Blogs written by ${person.name}`,
};

const BlogsLayout = (p: { children: ReactNode }) => {
    return <>{p.children}</>;
};

export { metadata };
export default BlogsLayout;

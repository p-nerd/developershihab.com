import type {ReactNode} from "react";

const BlogsLayout = (p: {children: ReactNode}) => {
    return <div>blogs layout {p.children}</div>;
};

export default BlogsLayout;

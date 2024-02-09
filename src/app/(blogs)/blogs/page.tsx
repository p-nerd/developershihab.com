import PreviewBlogs from "@/components/PreviewBlogs";
import Header from "./Header";

const Blogs = () => {
    return (
        <div className="mx-auto flex max-w-4xl flex-col gap-10 p-5 md:p-10">
            <Header />
            <PreviewBlogs />
        </div>
    );
};

export default Blogs;

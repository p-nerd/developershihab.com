import PreviewBlogs from "@/components/PreviewBlogs";
import BreadCrumb from "@/components/BreadCrumb";

const topsLinks = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "Blogs",
        href: "/blogs",
    },
];

const Blogs = () => {
    return (
        <div className="mx-auto flex max-w-4xl flex-col gap-10 p-5 md:p-10">
            <BreadCrumb links={topsLinks} />
            <PreviewBlogs />
        </div>
    );
};

export default Blogs;

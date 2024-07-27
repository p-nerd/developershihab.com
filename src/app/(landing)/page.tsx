import { get_featured_projects, get_projects } from "@/lib/content";

import About from "./About";
import Intro from "./Intro";
import Blogs, { type TBlog } from "./Blogs";
import Skills from "./Skills";
import Contact from "./Contact";
import Projects from "./Projects";
import Experience from "./Experience";
import SectionDivider from "@/components/SectionDivider";

const blogs = async (): Promise<TBlog[]> => {
    const url = "https://dev.to/api/articles?username=p-nerd";
    const response = await fetch(url, { cache: "no-store" });
    const articles = (await response.json()) as any;
    const blogs: TBlog[] = articles.map((article: any) => ({
        id: article.id,
        title: article.title,
        description: article.description,
        url: article.url,
        published_at: article.published_at,
        tag_list: article.tag_list,
    }));
    return blogs;
};

const Home = async () => {
    const _blogs = await blogs();

    console.log(_blogs);
    return (
        <main className="flex flex-col items-center px-4">
            <Intro />
            <SectionDivider />
            <About />
            <Projects projects={get_featured_projects()} />
            <Skills />
            <Experience
                projects={get_projects().reduce((p, c) => ({ ...p, [c.slug]: c.title }), {})}
            />
            <Blogs blogs={_blogs} />
            <Contact />
        </main>
    );
};

export default Home;

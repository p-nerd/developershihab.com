import { get_featured_blogs, get_featured_projects, get_projects } from "@/lib/content";

import About from "./About";
import Intro from "./Intro";
import Blogs from "./Blogs";
import Skills from "./Skills";
import Contact from "./Contact";
import Projects from "./Projects";
import Experience from "./Experience";
import SectionDivider from "@/components/SectionDivider";

const Home = () => (
    <main className="flex flex-col items-center px-4">
        <Intro />
        <SectionDivider />
        <About />
        <Projects projects={get_featured_projects()} />
        <Skills />
        <Experience projects={get_projects().reduce((p, c) => ({ ...p, [c.slug]: c.title }), {})} />
        <Blogs blogs={get_featured_blogs()} />
        <Contact />
    </main>
);

export default Home;

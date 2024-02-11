import { get_featured_blogs, get_featured_projects } from "@/lib/content";

import SectionDivider from "@/components/SectionDivider";
import Intro from "./Intro";
import Contact from "./Contact";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Experience from "./Experience";
import Blogs from "./Blogs";

const Home = () => (
    <main className="flex flex-col items-center px-4">
        <Intro />
        <SectionDivider />
        <About />
        <Projects projects={get_featured_projects()} />
        <Skills />
        <Experience />
        <Blogs blogs={get_featured_blogs()} />
        <Contact />
    </main>
);

export default Home;

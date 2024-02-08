import Experience from "@/components/experience";
import Projects from "@/components/projects";
import SectionDivider from "@/components/SectionDivider";

import Intro from "./Intro";
import Contact from "./Contact";
import About from "./About";
import Skills from "./Skills";

const Home = () => (
    <main className="flex flex-col items-center px-4">
        <Intro />
        <SectionDivider />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
    </main>
);

export default Home;

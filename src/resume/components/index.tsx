import { Certification } from "./certification";
import { Education } from "./education";
import { Experience } from "./experience";
import { Header } from "./header";
import { OpenSourceWorks } from "./open-source-works";
import { Projects, type TProject } from "./projects";
import { Skills } from "./skills";
import { Summary } from "./summary";

const Resume = ({ projects, image }: { projects: TProject[]; image?: boolean }) => {
    return (
        <div className="leading-5 text-sm space-y-4 w-full mx-auto p-8 bg-white">
            <Header image={image} />
            <div className="flex">
                <div className="w-[70%] pr-6 space-y-4">
                    <Summary />
                    <Experience />
                    <Projects projects={projects} />
                </div>
                <div className="w-[30%] space-y-4">
                    <Skills />
                    <OpenSourceWorks />
                    <Education />
                    <Certification />
                </div>
            </div>
        </div>
    );
};

export { Resume };

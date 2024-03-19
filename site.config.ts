import { TExperience } from "@/lib/types";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";

export const experiences: TExperience[] = [
    {
        title: "Full-stack Developer",
        location: "Finnext.co",
        location_link: "https://finnext.co",
        description:
            "I am working with Finnext.co as a Full-stack Developer, primarily focusing on their contract-based projects, predominantly with American clients. My responsibilities include both building and maintaining these applications. I have successfully completed several projects and continue to oversee their maintenance.",
        icon: CgWorkAlt,
        date: "May 2023 - Present",
        projects: ["paystubhero"],
        technologies: [
            ["TypeScript", "JavaScript", "React.js"],
            ["PHP", "Wordpress", "mPDF"],
            ["TailwindCSS"],
        ],
    },
    {
        title: "Teacher's Assistant",
        location: "Tecognize Training",
        description:
            "I volunteered with this company, contributing by writing engaging blog posts and assisting in the organization of their live courses.",
        icon: LuGraduationCap,
        date: "February 2022 - January 2023 (1 year)",
    },
] as const;

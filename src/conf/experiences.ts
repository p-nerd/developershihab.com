import { createElement } from "react";
import { CgWorkAlt } from "react-icons/cg";
// import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

const experiences = [
    {
        title: "Full-Stack Developer",
        location: "Finnext.co",
        description:
            "I'm now a full-stack developer working as a freelancer. My stack includes React, JavaScript, TypeScript, Tailwind, PHP, Wordpress, Laravel. Here I build some interesting successful projects",
        icon: createElement(CgWorkAlt),
        date: "May 2023 - Present",
    },
    {
        title: "Teacher's Assistant",
        location: "Tecognize Training",
        description:
            "I did some volenteary work on this company. Where I write some blog for them And help them to organiging there live courses",
        icon: createElement(LuGraduationCap),
        date: "February 2022 - January 2023",
    },
] as const;

export default experiences;

import type { TExperience, TSkill } from "@/lib/types";

import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";

export const intro = {
    resume: "/shihab-mahamud-cv-2.pdf",
};

export const person: Record<string, string> = {
    name: "Shihab Mahamud",
    facebook: "https://facebook.com/shihab.mahamud2",
    twitter: "https://twitter.com/@p_nerdx",
    linkedin: "https://linkedin.com/in/shihab-mahamud",
    github: "https://github.com/p-nerd",
    dev_to: "https://dev.to/p-nerd",
    email: "shihab4t@gmail.com",
};

export const skills: TSkill[] = [
    {
        category: "Programming Languages",
        technologies: ["JavaScript/TypeScript", "PHP", "Go", "C/C++"],
    },
    {
        category: "Backend Technologies",
        technologies: ["WordPress", "Laravel", "Node.js", "PostgreSQL", "MySQL"],
    },
    {
        category: "Frontend Technologies",
        technologies: ["React", "Next.js", "Solid.js", "Redux", "TailwindCSS"],
    },
    {
        category: "Productivity & Tools",
        technologies: ["Git", "Neovim", "Linux", "Docker"],
    },
] as const;

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
            ["JavaScript", "TypeScript", "React"],
            ["PHP", "WordPress", "mPDF"],
            ["Stripe", "TailwindCSS"],
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

export const technologies: Record<string, string> = {
    "JavaScript/TypeScript": "https://www.typescriptlang.org",
    PHP: "https://www.php.net",
    Go: "https://go.dev",
    "C/C++": "https://en.wikipedia.org/wiki/C%2B%2B",
    WordPress: "https://wordpress.org",
    Laravel: "https://laravel.com",
    "Node.js": "https://nodejs.org",
    PostgreSQL: "https://www.postgresql.org",
    MySQL: "https://www.mysql.com",
    React: "https://react.dev",
    "Next.js": "https://nextjs.org",
    "Solid.js": "https://solidjs.com",
    Redux: "https://redux.js.org",
    TailwindCSS: "https://tailwindcss.com",
    Git: "https://git-scm.com",
    Neovim: "https://neovim.io",
    Linux: "https://ubuntu.com",
    Docker: "https://www.docker.com",
    JavaScript: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    TypeScript: "https://www.typescriptlang.org",
    mPDF: "https://mpdf.github.io",
    Stripe: "https://stripe.com",
} as const;

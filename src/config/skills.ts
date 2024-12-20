export type TSkill = {
    title: string;
    tools: string[];
};

const skills: TSkill[] = [
    {
        title: "Languages",
        tools: ["C/C++", "JavaScript/TypeScript", "PHP", "Lua"]
    },
    {
        title: "Backend",
        tools: ["Laravel", "WordPress", "MySQL", "SQLite"]
    },
    {
        title: "Frontend",
        tools: ["React", "TailwindCSS", "shadcn/ui"]
    },
    {
        title: "Others",
        tools: ["Git", "Neovim", "Linux", "Docker"]
    }
];

export default skills;

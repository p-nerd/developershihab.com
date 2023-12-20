import type { TSocialLink, TNavLink } from "./src/helpers/types";

export const name = "Shihab Mahamud";
export const email = "shihab4t@gmail.com";

export const titles = {
    "/": `Portfolio of ${name}`,
    "/about": `Know About ${name}`,
    "/projects": `Projects by ${name}`,
    "/blogs": `Blogs by ${name}`,
    "/contact": `Make Contact with ${name}`,
};

export const descriptions = {
    "/": `The personal site of ${name}`,
    "/about": `About ${name}`,
    "/projects": `Learn about ${name}'s most recent projects`,
    "/blogs": `Learn about ${name}'s most recent blogs`,
    "/contact": `Make Contact with ${name}. Retch out to ${name}`,
};

export const nav_links: TNavLink[] = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Blogs", href: "/blogs" },
    { label: "Contact", href: "/contact" },
];

export const social_links: TSocialLink[] = [
    {
        label: "GitHub",
        href: "https://github.com/p-nerd",
        icon: "github-logo",
    },
    {
        label: "LinkedIn",
        href: "https://linkedin.com/in/p-nerd",
        icon: "linkedin-logo",
    },
    {
        label: "Facebook",
        href: "https://facebook.com/shihab4t",
        icon: "facebook-logo",
    },
    {
        label: "Twitter",
        href: "https://twitter.com/p_nerd2",
        icon: "twitter-logo",
    },
    {
        label: "Email",
        href: `mailto:${email}`,
        icon: "email-logo",
    },
];

export const total_number_blogs_on_blogs_page = 10;

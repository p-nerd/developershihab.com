import type { TSocialLink, TNavLink } from "./src/helpers/types";

export const titles = {
    "/": "Portfolio of Shihab Mahamud",
    "/about": "Know About Shihab Mahamud",
    "/projects": "Projects by Shihab Mahamud",
    "/blogs": "Blogs by Shihab Mahamud",
    "/contact": "Make Contact with Shihab Mahamud",
};

export const descriptions = {
    "/": "The personal site of Shihab Mahamud",
    "/about": "About Shihab Mahamud Lorem Ipsum",
    "/projects": "Learn about Shihab Mahamud's most recent projects",
    "/blogs": "Learn about Shihab Mahamud's most recent blogs",
    "/contact": "Make Contact with Shihab Mahamud. Retch out to Shihab Mahamud",
};

export const nav_links: TNavLink[] = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Blogs", href: "/blogs" },
    { label: "Contact", href: "/contact" },
];

export const email = "shihab4t@gmail.com";

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

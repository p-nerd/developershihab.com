import type { TSocialLink, TNavLink } from "./src/helpers/types";

import Github from "@/icons/Github";
import LinkedIn from "@/icons/LinkedIn";
import Facebook from "@/icons/Facebook";
import Twitter from "@/icons/Twitter";
import Email from "@/icons/Email";

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
        label: "Email",
        href: `mailto:${email}`,
        icon: "email-logo",
        icon_x: Email,
    },
    {
        label: "GitHub",
        href: "https://github.com/p-nerd",
        icon: "github-logo",
        icon_x: Github,
    },
    {
        label: "LinkedIn",
        href: "https://linkedin.com/in/p-nerd",
        icon: "linkedin-logo",
        icon_x: LinkedIn,
    },
    {
        label: "Facebook",
        href: "https://facebook.com/shihab4t",
        icon: "facebook-logo",
        icon_x: Facebook,
    },
    {
        label: "Twitter",
        href: "https://twitter.com/p_nerd2",
        icon: "twitter-logo",
        icon_x: Twitter,
    },
];

export const total_number_blogs_on_blogs_page = 10;

export const technogies_links: Record<string, string> = {
    JavaScript: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    TypeScript: "https://www.typescriptlang.org/",
    "React.js": "https://react.dev",
    SolidJS: "https://solidjs.com/",
    Astro: "https://astro.build/",
    Redux: "https://redux.js.org/",
    TailwindCSS: "https://tailwindcss.com/",
    WordPress: "https://wordpress.org/",
    PHP: "https://www.php.net/",
    mPDF: "https://mpdf.github.io/",
    Stripe: "https://stripe.com/docs",
    PayPal: "https://developer.paypal.com/docs",
    "Github Pages": "https://pages.github.com",
    Go: "https://go.dev",
};

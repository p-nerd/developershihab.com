import type { TProject } from "@/lib/types";

import paystubhero_image from "@/assets/projects/paystubhero.jpg";
import developershihab_image from "@/assets/projects/developershihab.jpg";
import x_image from "@/assets/projects/x.jpg";

const projects: TProject[] = [
    {
        title: "PaystubHero",
        description:
            "WordPress plugin and React frontend for paystubhero.com. The React app is integrated via WordPress shortcode. Additionally, I built a custom WordPress REST API plugin for backend functionality.",
        tags: ["React.js", "JS", "PHP", "Wordpress", "Tailwind", "mPDF", "Stripe"],
        imageUrl: paystubhero_image,
        // more: "/projects/paystubhero",
        links: [
            {
                label: "Live Link",
                link: "https://www.paystubhero.com/generate-pay-stubs",
            },
        ],
    },
    {
        title: "developershihab.com",
        description: "I developer my portfolio website with Modern And cutting edges technologies",
        tags: ["React.js", "TypeScript", "Next.js", "Tailwind", "Framer Motion"],
        imageUrl: developershihab_image,
        links: [
            {
                label: "Source Code",
                link: "https://github.com/p-nerd/developershihab.com",
            },
            {
                label: "Live Link",
                link: "https://developershihab.com",
            },
        ],
    },
    {
        title: "X",
        description: "Execute any script from anywhere on the path",
        tags: ["Go"],
        imageUrl: x_image,
        links: [
            {
                label: "Source Code",
                link: "https://github.com/p-nerd/x",
            },
        ],
    },
];

export default projects;

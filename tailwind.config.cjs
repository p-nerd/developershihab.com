/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            screens: {
                em50: "50em",
            },
            colors: {
                "a-gray-800": "var(--gray-800)",
                "secondary-color": "var(--secondary-color)",
                "sx-link-color": "var(--link-color)",
                "sx-gradient-subtle": "var(--gradient-subtle)",
                "sx-gray-800": "var(--gray-800)",
                "sx-gray-999": "var(--gray-999)",
                "sx-gray-200": "var(--gray-200)",
            },
            boxShadow: {
                "sx-shadow-sm": "var(--shadow-sm)",
                "sx-shadow-md": "var(--shadow-md)",
            },
            fontFamily: {
                "sx-font-brand": "var(--font-brand)",
            },
            transition: {
                "sx-theme-transition": "box-shadow var(--theme-transition)",
            },
        },
    },
    plugins: [
        require("@tailwindcss/forms"),
        require("@tailwindcss/typography"),
    ],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            colors: {
                x: {
                    gray: {
                        0: "var(--gray-0)",
                        50: "var(--gray-50)",
                        100: "var(--gray-100)",
                        200: "var(--gray-200)",
                        300: "var(--gray-300)",
                        400: "var(--gray-400)",
                        500: "var(--gray-500)",
                        600: "var(--gray-600)",
                        700: "var(--gray-700)",
                        800: "var(--gray-800)",
                        900: "var(--gray-900)",
                        999: "var(--gray-999)",
                        "999-40": "var(--gray-999-40)",
                    },
                    accent: {
                        light: "var(--accent-light)",
                        regular: "var(--accent-regular)",
                        dark: "var(--accent-dark)",
                        overlay: "var(--accent-overlay)",
                        "subtle-overlay": "var(--accent-subtle-overlay)",
                        "text-over": "var(--accent-text-over)",
                    },
                },
                "a-gray-800": "var(--gray-800)",
                "secondary-color": "var(--secondary-color)",
                "sx-gradient-subtle": "var(--gradient-subtle)",
                "sx-gray-800": "var(--gray-800)",
                "sx-gray-999": "var(--gray-999)",
                "sx-gray-200": "var(--gray-200)",
                "sx-gray-0": "var(--gray-0)",
                "sx-accent-text-over": "var(--accent-text-over)",
                "sx-gradient-accent-orange": "var(--gradient-accent-orange)",
                "sx-gray-999_40": "var(--gray-999-40)",
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

/** @type {import("prettier").Config} */
module.exports = {
    tabWidth: 4,
    arrowParens: "avoid",
    tailwindConfig: "./tailwind.config.cjs",
    plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
    overrides: [
        {
            files: "*.astro",
            options: {
                parser: "astro",
            },
        },
    ],
};

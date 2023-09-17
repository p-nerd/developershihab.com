import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
    site: "https://p-nerd.github.io",
    integrations: [react(), tailwind(), sitemap()],
    compilerOptions: {
        strictNullChecks: true,
    },
    redirects: {
        "/blogs": "/blogs/1",
        "/tags/all": "/blogs/1",
    },
});

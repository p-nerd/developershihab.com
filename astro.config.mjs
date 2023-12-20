import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import solid from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
    site: "https://developershihab.com",
    integrations: [tailwind(), sitemap(), solid()],
    compilerOptions: {
        strictNullChecks: true,
    },
    redirects: {
        "/blogs": "/blogs/1",
    },
});

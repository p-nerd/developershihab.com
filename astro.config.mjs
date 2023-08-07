import {defineConfig} from 'astro/config';
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
    site: 'https://p-nerd.github.io',
    integrations: [react(), tailwind()],
    "compilerOptions": {
        "strictNullChecks": true
    }
});
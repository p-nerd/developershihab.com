import { defineConfig } from "@solidjs/start/config";
import dotenv from "dotenv";

export default defineConfig({
    vite: () => {
        dotenv.config();
        return {};
    },
});

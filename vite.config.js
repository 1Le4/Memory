// demo vue , react or svelte
import { defineConfig } from "vite";
import inspect from "vite-plugin-inspect";
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig({
    base:"/Memory/",
    plugins: [inspect(), ViteImageOptimizer({
        "jpg": {
            quality: 50,
        }
    })]
});


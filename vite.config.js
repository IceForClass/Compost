import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";

export default defineConfig({
    plugins: [
        laravel({
            input: [
                "resources/css/app.css",
                "resources/js/app.js",
                "resources/images/logo.png",
                "resources/images/empty.png",
                "resources/images/full.png",
                "resources/js/mode.js",
                "resources/js/consulta.js",
                "resources/js/composteras.js",
            ],
            refresh: true,
        }),
    ],
    build: {
        target: "esnext",
    },
});

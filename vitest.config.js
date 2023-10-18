import vue from "@vitejs/plugin-vue";
import path from "path";

export default {
    plugins: [vue()],
    test: {
        // enable jest-like global test APIs or
        // If you're using Vitest and want to cleanup after each test, you need to enable globals through its configuration file.
        globals: true,
        // simulate DOM with happy-dom
        // (requires installing happy-dom as a peer dependency)
        environment: "happy-dom",
        // Coverage
        coverage: {
            provider: "v8", // or 'istanbul'
        },
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
};

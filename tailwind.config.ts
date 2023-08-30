import type { Config } from "tailwindcss";

const config: Config = {
    important: true,
    content: [
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        container: {
            center: true,
            screens: {
                "2xl": "1280px",
            },
        },
        extend: {
            colors: {
                darkGreen: "#32788b",
            },
        },
    },
    plugins: [],
};
export default config;

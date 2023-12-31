import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#c8e6c9",
        "green-800": "#2e7d32",
        "black-87": "rgba(0, 0, 0, 0.87)",
        card: "#f5f5f5",
        "white-87": "rgba(255, 255, 255, 0.87)",
        "white-60": "rgba(255, 255, 255, 0.6)",
      },
    },
  },
  plugins: [],
};
export default config;

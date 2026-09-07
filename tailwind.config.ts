import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: { maroon: "#641c2b", cream: "#faf5eb", gold: "#c39343" },
      fontFamily: { display: ["var(--font-display)"], sans: ["var(--font-sans)"] }
    }
  },
  plugins: []
};

export default config;

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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#01524B",
        p_green: "#28443F",
        p_black: "#1E1E1E",
        bg_gray: "#E5EFEF",
        secondary: "#0C221E",
      },
    },
  },
  plugins: [],
};
export default config;

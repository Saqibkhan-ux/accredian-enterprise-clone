import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          900: "#0B1220",
          700: "#1E2A3F",
          500: "#34405A",
        },
        paper: {
          50: "#F7F6F2",
          100: "#EFEDE6",
        },
        slate: {
          400: "#8892A6",
          500: "#5B6478",
          600: "#454E62",
        },
        gold: {
          400: "#D9B872",
          500: "#C89B3C",
          600: "#A97F2A",
        },
        teal: {
          600: "#2F6F5E",
          700: "#255A4C",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: {
        "8xl": "90rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;

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
        forest: {
          950: "#030712",
          900: "#061a12",
          800: "#063726",
          700: "#044e36",
          600: "#059669",
          500: "#10b981",
          400: "#34d399",
          300: "#6ee7b7",
        },
        accent: {
          gold: "#fbbf24",
          amber: "#f59e0b",
          crimson: "#ef4444",
          violet: "#a855f7",
          cyan: "#06b6d4",
        },
      },
      fontFamily: {
        sans: ["var(--font-outfit)", "Inter", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      boxShadow: {
        glow: "0 0 25px -5px rgba(16, 185, 129, 0.4)",
        "glow-lg": "0 0 40px -10px rgba(16, 185, 129, 0.6)",
        "glow-gold": "0 0 25px -5px rgba(245, 158, 11, 0.4)",
        "glow-red": "0 0 25px -5px rgba(239, 68, 68, 0.4)",
      },
    },
  },
  plugins: [],
};
export default config;


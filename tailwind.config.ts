import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* ── Semantic tokens — HSL var driven ── */
        accent:          "hsl(var(--accent))",
        "accent-light":  "hsl(var(--accent-light))",
        "accent-dim":    "hsl(var(--accent-dim))",
        "bg-base":       "hsl(var(--background))",
        "bg-card":       "hsl(var(--card))",
        "bg-elevated":   "hsl(var(--secondary))",
        "text-primary":  "hsl(var(--foreground))",
        "text-secondary":"hsl(var(--muted-foreground))",
        "border-subtle": "hsl(var(--border))",

        /* shadcn tokens */
        background:  "hsl(var(--background))",
        foreground:  "hsl(var(--foreground))",
        card: {
          DEFAULT:    "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        primary: {
          DEFAULT:    "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT:    "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT:    "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        destructive: {
          DEFAULT:    "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input:  "hsl(var(--input))",
        ring:   "hsl(var(--ring))",
      },
      fontFamily: {
        display: ["var(--font-syne)", "sans-serif"],
        body:    ["var(--font-syne)", "sans-serif"],
        serif:   ["var(--font-dm-serif)", "serif"],
        mono:    ["var(--font-jetbrains)", "monospace"],
      },
      animation: {
        "mesh-drift":   "meshDrift 14s ease-in-out infinite alternate",
        "mesh-drift-2": "meshDrift2 18s ease-in-out infinite alternate",
        "scroll-bounce":"scrollBounce 2s ease-in-out infinite",
        "dot-pulse":    "dotPulse 2.5s ease-in-out infinite",
        "marquee":      "marquee 30s linear infinite",
      },
      keyframes: {
        meshDrift: {
          "0%":   { transform: "translate(0%,0%) scale(1)" },
          "50%":  { transform: "translate(4%,-4%) scale(1.04)" },
          "100%": { transform: "translate(-2%,3%) scale(0.98)" },
        },
        meshDrift2: {
          "0%":   { transform: "translate(0%,0%) scale(1.08)" },
          "50%":  { transform: "translate(-5%,3%) scale(1)" },
          "100%": { transform: "translate(3%,-2%) scale(1.06)" },
        },
        scrollBounce: {
          "0%, 100%": { transform: "translateY(0px)", opacity: "1" },
          "50%":      { transform: "translateY(6px)", opacity: "0.4" },
        },
        dotPulse: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%":      { opacity: "0.3", transform: "scale(0.8)" },
        },
        marquee: {
          "0%":   { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;

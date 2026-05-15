import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* ── Paleta monocromática clara ── */
        accent:       "#000000",
        "accent-light": "#1F2937",
        "accent-dim": "#6B7280",
        "bg-base":    "#FFFFFF",
        "bg-card":    "#F5F5F5",
        "bg-elevated":"#EBEBEB",
        "text-primary": "#000000",
        "text-secondary": "#6B7280",
        "border-subtle": "#E5E7EB",

        /* shadcn tokens */
        background:   "var(--background)",
        foreground:   "var(--foreground)",
        card: { DEFAULT: "var(--card)", foreground: "var(--card-foreground)" },
        primary: { DEFAULT: "var(--primary)", foreground: "var(--primary-foreground)" },
        secondary: { DEFAULT: "var(--secondary)", foreground: "var(--secondary-foreground)" },
        muted: { DEFAULT: "var(--muted)", foreground: "var(--muted-foreground)" },
        destructive: { DEFAULT: "var(--destructive)", foreground: "var(--destructive-foreground)" },
        border: "var(--border)",
        input:  "var(--input)",
        ring:   "var(--ring)",
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

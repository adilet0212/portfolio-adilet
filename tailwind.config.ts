import type { Config } from "tailwindcss";

export default {
  // Control dark mode with a .dark class (set by next-themes)
  darkMode: "class",

  theme: {
    // Optional container defaults (nice for layouts)
    container: {
      center: true,
      padding: "1rem",
      screens: { "2xl": "1400px" },
    },
    extend: {
      // shadcn/ui uses a CSS var for radius; I expose helper sizes
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(0,0,0,0.25)",
        ring: "0 0 0 1px hsl(var(--ring)) inset",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },

  // In Tailwind v4, most plugins are added via CSS `@plugin`.
  plugins: [],
} satisfies Config;
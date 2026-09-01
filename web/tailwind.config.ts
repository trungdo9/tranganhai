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
        brand: {
          slate: "#1E293B",     // 60% Base Charcoal
          blue: "#4F46E5",      // 30% Brand Accent (Soft Iris / AI Blue)
          teal: "#0D9488",      // 10% CTA & Growth Accent (Sage Teal)
          amber: "#F59E0B",     // Alert / Highlight (Warm Amber)
          mist: "#F8FAFC",      // Light Background (Soft Mist White)
          border: "#E2E8F0",    // Subtle Border Slate
          darkCard: "#0F172A",  // Deep Background for Contrast
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        subtle: "0 4px 20px -2px rgba(15, 23, 42, 0.05)",
        brand: "0 10px 30px -5px rgba(79, 70, 229, 0.15)",
        teal: "0 10px 25px -5px rgba(13, 148, 136, 0.25)",
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        heroImage: "url('/bg-hero.png')",
        benefitHome: "url(/bg-hero-2.png)",
      },
    },
  },
  plugins: [],
} satisfies Config;

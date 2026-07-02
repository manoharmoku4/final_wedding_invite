import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#F5EBE0",
        cream: "#FFF8F0",
        gold: "#C9A961",
        maroon: "#7A2E2E",
        darktext: "#3D2817",
        lighttext: "#FFF8F0",
      },
      fontFamily: {
        display: ["var(--font-playfair)"],
        script: ["var(--font-dancing)"],
        body: ["var(--font-montserrat)"],
      },
      height: {
        dvh: "100dvh",
      },
    },
  },
  plugins: [],
};

export default config;

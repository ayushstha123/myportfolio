import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        bgScroll: {
          '0%': { backgroundPosition: '200% 0, 0 0' },
          '100%': { backgroundPosition: '-100% 0, 0 0' },
        },
      },
      animation: {
        bgScroll: 'bgScroll 4.5s infinite 7s', // 8s delay, infinite loop
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;

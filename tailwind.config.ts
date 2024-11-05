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
        primary: {
          100: '#E2E8F0', // Light shade, replace with your desired color
          900: '#525252', // Dark shade, replace with your desired color
        },
        secondary: {
          100: '#faaf46', // Light shade, replace with your desired color
          900: '#525252', // Dark shade, replace with your desired color
        },
      },
      keyframes: {
        bgScroll: {
          '0%': { backgroundPosition: '200% 0, 0 0' },
          '100%': { backgroundPosition: '-100% 0, 0 0' },
        },
        shine: {
          '0%': { backgroundPosition: '200% 0%' },
          '100%': { backgroundPosition: '-200% 0%' },
        },
       'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        bgScroll: 'bgScroll 4.5s infinite 7s', // 8s delay, infinite loop
        'spin-slow': 'spin-slow 5s linear infinite',
        shine: 'shine 3s linear infinite',
      },
    },
  },
  plugins: [],
};
export default config;

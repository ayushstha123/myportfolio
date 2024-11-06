import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
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
  				'100': '#faaf46',
  				'900': '#525252',
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		keyframes: {
  			bgScroll: {
  				'0%': {
  					backgroundPosition: '200% 0, 0 0'
  				},
  				'100%': {
  					backgroundPosition: '-100% 0, 0 0'
  				}
  			},
  			shine: {
  				'0%': {
  					backgroundPosition: '200% 0%'
  				},
  				'100%': {
  					backgroundPosition: '-200% 0%'
  				}
  			},
  			'spin-slow': {
  				from: {
  					transform: 'rotate(0deg)'
  				},
  				to: {
  					transform: 'rotate(360deg)'
  				}
  			},
			'spin-diff': {
  				from: {
  					transform: 'rotate(360deg)'
  				},
  				to: {
  					transform: 'rotate(0deg)'
  				}
  			},
  		},
  		animation: {
  			bgScroll: 'bgScroll 4.5s infinite 7s',
  			'spin-slow': 'spin-slow 4.5s linear infinite',
			'spin-diff': 'spin-diff 5s ease-in infinite',
  			shine: 'shine 3s linear infinite'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;

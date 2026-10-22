import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f6fb',
          100: '#ebedf6',
          200: '#d3d7eb',
          300: '#acb4db',
          400: '#7f8bc7',
          500: '#5f6db5',
          600: '#4d56a3',
          700: '#3d4d82',
          800: '#36426d',
          900: '#2f385b',
        },
        secondary: {
          400: '#9d90d6',
          500: '#5B4E8B',
        },
      },
      backgroundColor: {
        'background': 'var(--bg)',
        'background-alt': 'var(--bg-alt)',
      },
      // Entrance animation for above-the-fold content. Plain CSS (not Framer
      // Motion) so it runs from the server HTML: a JS-driven opacity:0 start
      // holds the LCP text back until hydration (~1-2s extra on mobile).
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'none' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.55s cubic-bezier(0.22, 1, 0.36, 1) both',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config

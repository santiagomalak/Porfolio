import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
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
          500: '#5B4E8B',
        },
      },
      backgroundColor: {
        'background': '#FAFBFC',
        'background-alt': '#F3F4F6',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config

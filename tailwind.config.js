/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['class'],
  theme: {
    colors: {
      primary: '#13947f',
      secondary: '#a09fa7ff',
      white: '#fff',
      black: '#000',
      orange: '#FB774A',
      themeColor: '#121212ff',
      lightgrey: '#a1a1a15e',
      danger: '#f23645',
    },
    screens: {
      mobile: '340px',
      tablet: '768px',
      laptop: '1024px',
      desktop: '1280px',
      special: '1920px',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}

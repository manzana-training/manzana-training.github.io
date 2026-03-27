/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        manzana: {
          black: '#0d1a35',
          dark: '#112250',
          gray: '#3C507D',
          mid: '#D9CBC2',
          light: '#F5F0E9',
          white: '#F5F0E9',
          accent: '#E0C58F',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      }
    },
  },
  plugins: [],
}

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
          black: '#0c1117',
          dark: '#131a24',
          gray: '#1c2430',
          mid: '#7b8a9e',
          light: '#e0e4ea',
          white: '#f0f2f5',
          accent: '#c8ff00',
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

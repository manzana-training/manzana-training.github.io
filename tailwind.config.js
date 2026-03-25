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
          black: '#0a0a0a',
          dark: '#141414',
          gray: '#1a1a1a',
          mid: '#888888',
          light: '#e5e5e5',
          white: '#fafafa',
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

/** @type {import('tailwindcss').Config} */
// import colors from 'tailwindcss/colors'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./.storybook/**/*.html"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  darkMode: ["class"]
}
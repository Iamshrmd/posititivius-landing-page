/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        grotesk: ["Space Grotesk", ...defaultTheme.fontFamily.sans]
      },
      transitionProperty: {
        'max-height': 'max-height'
      }
    },
  },
  plugins: [],
}
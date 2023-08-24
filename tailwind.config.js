/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'dm': ["DM Serif Display", "serif"],
      'archivo': ["Archivo", "sans-serif"],
      'error': ["-apple-system", "BlinkMacSystemFont", "Roboto", "Segoe UI", "Fira Sans", "Avenir", "Helvetica Neue", "Lucida Grande", "sans-serif  "],
      'nato': ["Noto Sans Display", "sans-serif"]
    }
  },
  plugins: [],
}


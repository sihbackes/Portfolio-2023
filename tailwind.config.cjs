/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      nunito:["Nunito", "sans-serif"],
      roboto:["roboto", "sans-serif"]
    }
  },
  plugins: [],
}
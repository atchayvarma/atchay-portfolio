/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 5px 50px -0px rgba(0, 0, 0, 0.1)',
        'lg': '0 3px 50px -20px rgba(0.5, 0.5, 0.5, 0.5)',
      },
      colors:{
        "green":"#88FFBF",
        "white":"#FFFFFF",
        "grey":"#6B6B6B",
        "black":"#111111"
      }
    }
  },
  plugins: [],
}

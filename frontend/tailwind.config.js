/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    fontFamily: {
      mplus: ['M PLUS 1', 'sans-serif'],
      playFair: ['Playfair Display', 'serif']
    },
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms")
  ],
}


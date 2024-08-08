/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkGray: '#222222',
        white: '#FFFFFF',
        blue: '#1C5D99',
        lightBlue: '#639FAB',
        paleBlue: '#BBCDE5',
      },
    },
  },
  plugins: [],
}

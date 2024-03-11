/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}',],
  theme: {
    extend: {
      colors: {
        'dungeon': '#003554',
        'dungeon-dark': '#051923',
        'dungeon-light': '#006494',
        'dungeon-super-light': '#0582CA'
      }
    },
  },
  plugins: [],
}


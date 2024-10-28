/** @type {import('tailwindcss').Config} */

// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#fde02f',
        secondary: '#4ecdc4',
        dark: '#2d3436',
        light: '#f9f9f9',
      },
      fontFamily: {
        satisfy: ['Satisfy', 'cursive'],
        barlow: ['Barlow Condensed', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
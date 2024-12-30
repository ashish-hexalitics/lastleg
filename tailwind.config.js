/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: true, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'custom-purple': '#837CDB', // Replace with your desired color
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};


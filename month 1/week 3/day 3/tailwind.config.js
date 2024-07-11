/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/*.html'],
  theme: {
    extend: {
      screens:{
        'sm' : '420px',
        'md' : '650px',
      }
    },
  },
  plugins: [],
}


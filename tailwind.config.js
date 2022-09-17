/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors:{
        hulu:{
          500:'#171C1C',
          400:'#1E2424',
          300:'#2A3333',
          200:'#5D7070',
          100:'#92B0B0'
          

        }
      }
    },
  },
  plugins: [require('@tailwindcss/forms'),],
}

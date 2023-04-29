/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        gugi: [ 'Gugi', 'cursive'],
      },
      colors:{
        landing_title:'#ecfced',
        paragraph:'#ecfced',
        btn:"#ff6663"
      },
    },
  },
  plugins: [],
}
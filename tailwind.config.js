/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "color-primary": "#01051E",
        "color-primary-light": "#020726",
        "color-primary-dark": "#010417",
        "color-secondary": "#BA224F",
        "color-gray"  : "#333",
        "color-white" : "#fff",
        "color-blob": "#A427DF",
      }
    },
    container: {
      center: true,
      padding: {
        default: '20px',
        md: "50px"
      }
    },
  },
  plugins: [],
}


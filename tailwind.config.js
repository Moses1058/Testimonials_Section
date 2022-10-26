/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        main: ['Barlow Semi Condensed']
      },
      colors: {
        first_bg: 'hsl(263, 55%, 52%)',
        sec_bg: 'hsl(217, 19%, 35%)',
        fourth_bg: 'hsl(219, 29%, 14%)',
        bg: 'hsl(0, 0%, 81%)',
        text_color: 'hsl(210, 46%, 95%)',
      }
    },
  },
  plugins: [],
}

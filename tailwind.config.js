/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./Views/**/*.{cshtml,html,js}",
    "./wwwroot/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#008744',
        'primary-dark': '#006a35',
        'primary-light': '#00a85c',
        secondary: '#1a1a2e',
        accent: '#e94560',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

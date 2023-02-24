/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppinsRegular: ['Poppins Regular'],
        poppinsMedium: ['Poppins Medium'],
        poppinsBold: ['Poppins Bold'],
        poppinsBlack: ['Poppins Black'],
      },

      colors: {
        retroPink: '#FF2E93',
        retroCyan: '#00E6B3',
      },
    },
  },
  plugins: [],
}

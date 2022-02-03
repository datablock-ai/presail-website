  const colors = require('tailwindcss/colors')

  module.exports = {
   purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'media',
    theme: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        gray: colors.gray,
        indigo: colors.indigo,
        yellow: colors.yellow,
        cyan: colors.cyan,
      }
    },
    plugins: [
      require('@tailwindcss/aspect-ratio'),
    ],
  }
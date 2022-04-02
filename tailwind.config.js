  const colors = require('tailwindcss/colors')

  module.exports = {
   purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'media',
    theme: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        slate: colors.slate,
        white: colors.white,
        gray: colors.gray,
        yellow: colors.yellow,
        cyan: colors.cyan,
        teal: colors.teal,
        green: colors.green,
        blue: colors.blue,
        indigo: {
          400: '#00D8FF'
        },
        background: '#0a2440',
        deepbackground: '#081C33'
      }
    },
    plugins: [
      require('@tailwindcss/aspect-ratio')
    ],
  }
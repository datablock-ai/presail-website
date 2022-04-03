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
        main: '#0F20E9',
        deep: '#081065',
        subgray: '#6B70A3',
        secondary: '#E7E9FD'
      },
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        DEFAULT: '0.25rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'full': '9999px',
        'large': '10px'
      }
    },
    plugins: [
      require('@tailwindcss/aspect-ratio')
    ],
  }
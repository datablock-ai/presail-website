  module.exports = {
   purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'media',
    theme: {
    },
    variants: {
      extend: {},
    },
    plugins: [require('@tailwindcss/aspect-ratio')],
  }
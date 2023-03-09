const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './src/pages/**/*.{vue,js,ts,jsx,tsx}',
    './src/layouts/**/*.{vue,js,ts,jsx,tsx}',
    './src/components/**/*.{vue,js,ts,jsx,tsx}',
    './src/composables/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        gray: colors.neutral,
        primary: colors.emerald,
      },

      fontFamily: {
        sans: ['Switzer', 'system-ui', 'sans-serif'],
        display: ['Rajdhani', 'system-ui', 'sans-serif'],
      },

      aspectRatio: {
        '3-2': '3 / 2',
        '2-3': '2 / 3',
        '4-3': '4 / 3',
        '3-4': '3 / 4',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

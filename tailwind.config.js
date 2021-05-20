/** @typedef { import('tailwindcss/defaultConfig')} DefaultConfig */
/** @typedef { import('tailwindcss/defaultTheme')} DefaultTheme */
/** @typedef { DefaultConfig & {theme:{extend:DefaultTheme}}} TailwindConfig */
const defaultTheme = require('tailwindcss/defaultTheme');

const sizes = {
  15: '3.75rem',
  17: '4.25rem',
  18: '4.5rem',
  68: '17rem',
  75: '18.75rem',
  79: '19.75rem',
  86: '21.5rem',
  100: '25rem',
  112: '28rem',
  128: '32rem',
  144: '36rem',
  160: '40rem',
  192: '48rem',
};

/** @type {TailwindConfig} */
module.exports = {
  // mode: 'jit',
  presets: [require('tailwindcss/defaultConfig')],
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#1AAE94',
        'review-yellow': '#FFAA00',
        'private-blue': '#184D7B',
        gray: {
          50: '#F5F5F5',
          100: '#EEEEEE',
          200: '#DDDDDD',
          230: '#D8D8D8',
          300: '#CCCCCC',
          400: '#999999',
          500: '#666666',
          700: '#333333',
        },
      },
      flexGrow: {
        2: 2,
      },
      fontFamily: {
        sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        xxs: ['.65rem', { lineHeight: '0.75rem' }],
      },
      height: sizes,
      maxHeight: sizes,
      outline: {
        primary: '2px solid #1AAE94',
      },
    },
  },
  plugins: [],
};

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

// // I also tried
// module.exports = {
//   plugins: ['tailwindcss', 'autoprefixer'],
// };

// // and
// module.exports = {
//   plugins: [
//     require('tailwindcss'),
//     require('autoprefixer'),
//   ]
// };
// // as indicated in tailwind css documentation
// // but produces an error:
// // Error: A PostCSS Plugin was passed as a function using require(), but it must be provided as a string.

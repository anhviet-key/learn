module.exports = {
  darkMode: 'class',

  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      poppins: ['Poppins', 'sans - serif'],
      great: ['Great Vibes', 'cursive'],
      special: ['Special Elite', 'cursive'],
    },
    // screens: {
    //   tl: '640px',
    //   // => @media (min-width: 640px) { ... }
    //   lt: '1024px',
    //   // => @media (min-width: 1024px) { ... }
    //   dt: '1280px',
    //   // // => @media (min-width: 1280px) { ... }
    //   // xdt: '1440px',
    //   // // => @media (min-width: 1440px) {... }
    //   // x2dt: '1600px',
    //   // // => @media (min-width: 1600px) {... }
    //   // x3dt: '1880px',
    //   // // => @media (min-width: 1600px) {... }
    // },
  },

  plugins: [],
};

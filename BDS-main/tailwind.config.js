/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        robotoo: ["Roboto", "sans-serif"],
        godman: ["Goldman", "cursive"],
      },
    },
  },
  plugins: [],
};

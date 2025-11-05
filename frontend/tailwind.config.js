// tailwind.config.js
const {heroui} = require("@heroui/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/@heroui/theme/dist/components/(accordion|modal|divider).js"
],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [heroui(), require('tailwind-scrollbar')({ nocompatible: true })],
};
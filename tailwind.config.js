/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#edd9a3",

          "secondary": "#72eaaa",

          "accent": "#3a94af",

          "neutral": "#2B313B",

          "base-100": "#302C59",

          "info": "#11B0EE",

          "success": "#71EA9D",

          "warning": "#F3C65E",

          "error": "#E72623",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
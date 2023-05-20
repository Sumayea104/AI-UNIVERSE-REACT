/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  themes: [
    {
      mytheme: {
      
"primary": "#9b3518",
      
"secondary": "#f98ebb",
      
"accent": "#ffafbe",
      
"neutral": "#261C26",
      
"base-100": "#EDEEF2",
      
"info": "#A2C1EB",
      
"success": "#19664B",
      
"warning": "#F8C12A",
      
"error": "#ED212B",
      },
    },
  ],
};
plugins: [require("daisyui")
];


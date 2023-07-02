/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    './src/**/*.html',                         // HTML files
    './src/**/*.js',                           // JavaScript files
    './src/scenes/global/CartMenu/**/*.js',     // CartMenu component files
    './src/scenes/global/Navbar/**/*.js',       // Navbar component files
  ],
  
  theme: {
    extend: {},
  },
  plugins: [],
}


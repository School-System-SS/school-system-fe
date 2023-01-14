/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{html,js}",
  ],
  darkMode: 'class',
  theme: {
    colors: {
      'main': '#333456',
      'lighter': '#5c5d9a',
      'darker': '#292944'
    },
    extend: {},
  },
  plugins: [],
};

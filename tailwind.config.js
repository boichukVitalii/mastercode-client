/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nav-blue': '#050c29',
        'main-blue': '#081444',
        'command-blue': '#030717'
      },
      height: {
        'nav': 'calc(100vh - 3.5rem)'
      }
    },
  },
  plugins: [],
};

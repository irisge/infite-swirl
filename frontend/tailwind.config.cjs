/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./assets/hero.svg')",
      },
      colors: {
        'light-green': '#D5EFDB',
        green: '#4C9A74',
      },
      dropShadow: {
        nav: '0px 4px 4px #F5F5F5',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        courgette: ['Courgette', 'cursive'],
        open: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

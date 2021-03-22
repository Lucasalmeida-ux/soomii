module.exports = {
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
      'bg-hero': "url('/hero.png')",
     }),
  },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

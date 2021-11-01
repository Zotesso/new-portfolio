module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'display': ['Poppins']
    },
    textColor: {
      'primary': '#c4c4c4',
      'dark': '#2f2e41',
      "blue": "#6c63ff"
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

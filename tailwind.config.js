module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  theme: {
    textColor: theme => theme('colors'),
    textColor: {
      'primary': '#008FAE',
      'secondary': '#8B8B8B',
      'white' : '#fff',
      'success': '#00B512',
    },
    backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#008FAE',
        'secondary': '#F6F6F6',
        'warning': '#BE7E01',
        'dark': '#212121',
        'success': '#00B512',
        'danger': '#C30101',

    }),
    variants: {
      textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    },
  }
}

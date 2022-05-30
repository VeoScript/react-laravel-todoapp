const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
    './storage/framework/views/*.php',
    './resources/views/**/*.blade.php',
    './resources/js/**/*.jsx',
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'default': '#E9EDF9',
        'info': '#D9E9FB',
        'success': '#DFF5F3',
        'failure': '#FBE4E4',
        'headings': '#2C384C',
        'body': '#8798AC',
        'unselected-nav': '#B0BAC9',
        'selected-nav': '#1A4689',
        'mypurple': '#8D54FF'
      }
    },
  },

  plugins: [require('@tailwindcss/forms')],
};

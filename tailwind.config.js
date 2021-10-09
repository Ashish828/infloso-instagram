const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },

    extend: {
      width: {
        "1/7": "14.2857143%",
        "2/7": "22.5714286%",
        "3/7": "48.8571429%",
        "4/7": "57.1428571%",
        "5/7": "71.4285714%",
        "6/7": "85.7142857%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mainColor: "#FDF5F0",
        darkGold: "#D1A670",
        lightGold: "#F6ECE0",
        darkGrey: "#27282B"
      },
      fontFamily: {
        "ttBold" : "TTBold",
        "montserratBold" : "MontserratBold",
        "ttRegular" : "TTRegular",
        "montserratRegular" : "MontserratRegular",
        "montserratMedium" : "MontserratMedium",
      },
      
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}


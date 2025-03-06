/** @type {import('tailwindcss').Config} */
import colors from "./src/settings";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        huge: "52px",
        bigger: "48px",
        big: "40px",
        med: "32px",
        small: "20px",
        smaller: "16px",
        tiny: "12px",
      },

      fontFamily: {
        regular: "MonRegular",
        medium: "MonMedium",
        light: "MonLight",
        semibold: "MonSemiBold",
      },

      colors: {
        primary: colors.primary,
        secondary: colors.secondary,
        third: colors.third,
        fourth: colors.fourth,
        fifth: colors.fifth,
      },
      backgroundImage: {},
      backgroundColor: {},
      transitionProperty: {
        height: "height",
        spacing: "margin, padding",
      },
    },
  },
  plugins: [],
};

module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        proxima: ["proxima", "sans-serif"],
        lulo: ["lulo", "sans-serif"],
      },
      fontSize: {
        base: "16px",
        lg: "18px",
        xl: "20px",
        "2xl": "24px",
        xxl: "26px",
        "3xl": "34px",
        "4xl": "36px",
        "6xl": "64px",
      },
      colors: {
        greenish: "#0BB89D",
        lightGreenish: "#022620",
        burnham: "#062923",
        burnhamDark: "#02251F",
        lightBlack: "#050505",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

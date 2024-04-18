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
        greenBlue: "#15AEA6",
        bluePurple: "#7D4EFF",
        pastalGray: "#CCCCCC",
        iridium: "#3D3D3D",
        noble: "#B2B2B2",
        nickel: "#C3C3C3",
        vampire: "#525252",
        articlick: "#00FFD7",
        almost: "#011210",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

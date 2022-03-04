module.exports = {
  content: ["./src/*.html"],
  theme: {
    screens: {
      "3xl": { max: "1920px" },
      "2xl": { max: "1700px" },
      xl: { max: "1500px" },
      lg: { max: "1300px" },
      xm: { max: "1100px" },
      md: { max: "900px" },
      s: { max: "700px" },
      xs: { max: "500px" },
      "2xs": { max: "400px" },
    },

    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        horange: "#e68400",
        white: "#FFFFFF",
        black: "#000000",
        orange: "#FF9300",
        yellow: "#FFC107",
        "mix-gb": {
          100: "#EBEFF7",
          200: "#DFE3EB",
          300: "#939FB8",
        },
        gray: {
          100: "#00000029",
          200: "#CCCCCC",
          300: "#9C9C9C",
          400: "#656565",
          500: "#4B4B4B",
          600: "#231F20",
        },
      },
    },
    fontFamily: {
      o: ["Oswald", "sans-serif"],
      r: ["Roboto", "sans-serif"],
    },
    fontSize: {
      tiny: "0.75rem",
      xs: "1rem",
      s: "1.125rem",
      m: "1.5rem",
      l: "1.75rem",
      xl: "2.25rem",
      "2xl": "3.125rem",
      "3xl": "4rem",
    },
  },
  plugins: [],
};

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      "indigo-1000": "#12031E",
    }),
    gradientColorStops: (theme) => ({
      ...theme("colors"),
      "indigo-1000": "#12031E",
      "indigo-1000x": "#1a0b25",
      "indigo-1100": "#2a1c35",
      "indigo-1100x": "#3e2b4d",
      "indigo-950": "#1e1444",
    }),
    extend: {
      dropShadow: {
        "white-xs": "0 0 3px #FFF",
        "white-sm": "0 0 8px #FFF",
        white: "0 0 15px #FFF",
        "medium-purple": "0 0 5px #291c34",
        yellow: "0 0 5px #ffdf8d",
        "gray-sm": "0 0 3px #797c91",
      },
      transitionProperty: {
        width: "width",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

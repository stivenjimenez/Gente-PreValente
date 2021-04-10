module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},

    screens: {
      tablet: "640px",
      // => @media (min-width: 640px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }

      sm: "370px",
      md: "768px",
      lg: "1262px",
      xl: "1280px",
    },

    colors: {
      gray: {
        GrayNavBarGDM: "#2F3337",
        grayGDM: "#E5E7EB",
        soft: "#727171",
      },
      blue: {
        BlueGDM: "#26B4FF",
      },
      white: "#ffffff",
      red: "#ff0000",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

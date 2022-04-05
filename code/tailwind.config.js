module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      transitionProperty: {
        left: "left",
      },
    },
    fontFamily: {
      mr: ["MR-R","sans-serif"],
      jb: ["JB-Reg","monospace"],
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        xl: "1200px",
        "2xl": "1400px",
      },
    },
  },
  plugins: [
    require("tailwind-nord"),
    require('prettier-plugin-tailwindcss'),
  ]
};

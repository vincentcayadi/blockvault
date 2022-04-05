module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      transitionProperty: {
        left: "left",
      },
      textUnderlineOffset: {
        15: '15px',
      }

    },
    fontFamily: {
      sans: ["Helvetica", "Arial", "sans-serif"],
      serif: ["Georgia", "serif"],
      mono: [
        "Menlo",
        "Monaco",
        "Consolas",
        "Liberation Mono",
        "Courier New",
        "monospace",
      ],
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

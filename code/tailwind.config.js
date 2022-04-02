module.exports = {
  darkMode: false,
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Inter var", "sans-serif"],
      serif: ["Georgia", "serif"],
    },
    container:{
      center: true,
      padding: '1rem',
      screens :{
        lg: '1124px',
        xl: '1124px',
        "2xl": '1124px',
      }
    },
  },
  plugins: [
    require('tailwind-nord'),
  ],
}
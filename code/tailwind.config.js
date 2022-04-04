module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['Helvetica', 'Arial', 'sans-serif'],
      'serif': ["Georgia", "serif"],
      'mono': ["Menlo", "Monaco", "Consolas", "Liberation Mono", "Courier New", "monospace"],
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

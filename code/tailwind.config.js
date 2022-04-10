module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: { max: '1023px' },
      md: '768px',
      lg: '1024px',
    },
    extend: {
      transitionProperty: {
        left: 'left',
      },
      textUnderlineOffset: {
        15: '15px',
      },
    },
    fontFamily: {
      manrope: ['Manrope', 'sans-serif'],
      'jb-mono': ['JetBrains Mono', 'monospace'],
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        xl: '1200px',
        '2xl': '1400px',
      },
    },
  },
  plugins: [require('tailwind-nord')],
};

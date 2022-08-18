module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './node_modules/flowbite/**/*.js  '],
  theme: {
    extend: {
      transitionProperty: {
        left: 'left',
      },
      textUnderlineOffset: {
        15: '15px',
      },
      colors: {
        'black-rgba': 'rgba(0,0,0,0.4)',
      },
    },
    fontFamily: {
      manrope: ['Manrope', 'sans-serif'],
      'jb-mono': ['JetBrains Mono', 'monospace'],
    },
    container: {
      center: true,
      screens: {
        xl: '1200px',
        '2xl': '1400px',
      },
    },
  },
  plugins: [require('tailwind-nord'), require('flowbite/plugin')],
};

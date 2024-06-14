/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
      'spring-wood': {
        '50': '#f6f2eb',
        '100': '#f2ece2',
        '200': '#e4d8c4',
        '300': '#d2bd9f',
        '400': '#c09e77',
        '500': '#b3875c',
        '600': '#a57551',
        '700': '#8a5f44',
        '800': '#704d3c',
        '900': '#5b4033',
        '950': '#30211a',
      },
      'chardonnay': {
        '50': '#fff8ed',
        '100': '#ffeed5',
        '200': '#ffdaa9',
        '300': '#fec887',
        '400': '#fc993b',
        '500': '#fa7b15',
        '600': '#eb600b',
        '700': '#c3470b',
        '800': '#9b3911',
        '900': '#7d3111',
        '950': '#431607',
      },
      }
    },
  },
  plugins: [],
};

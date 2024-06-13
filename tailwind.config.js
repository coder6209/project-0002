/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'dodger-blue': {
          '50': '#eff8ff',
          '100': '#def0ff',
          '200': '#b6e2ff',
          '300': '#75ccff',
          '400': '#2cb3ff',
          '500': '#0aa1ff',
          '600': '#0078d4',
          '700': '#005fab',
          '800': '#00518d',
          '900': '#064474',
          '950': '#042b4d',
        },
        'radical-red': {
          '50': '#fff1f2',
          '100': '#ffe4e6',
          '200': '#ffccd3',
          '300': '#fea3ae',
          '400': '#fd6f83',
          '500': '#f63757',
          '600': '#e31b46',
          '700': '#c0103a',
          '800': '#a11037',
          '900': '#891236',
          '950': '#4d0419',
        },
        'electric-violet': {
          '50': '#faf5ff',
          '100': '#f3e7ff',
          '200': '#e9d3ff',
          '300': '#d7b0ff',
          '400': '#bf7eff',
          '500': '#9c38ff',
          '600': '#912af3',
          '700': '#7d1ad6',
          '800': '#6b1aaf',
          '900': '#58178c',
          '950': '#3b0269',
        },
      }
    },
  },
  plugins: [],
};

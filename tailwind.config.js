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
      }
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Barstukai', 'sans-serif'],
        secondary: ['Touillette', 'sans-serif'],
        paragraph: ['Gidolinya', 'serif'],
      },
      colors: {
        accents: {
          light: '#4440ff',
          regular: '#2824ed',
          dark: '#1916ab',
        },
        paper: {
          light: '#eef2e6',
          regular: '#D1D8C5',
          dark: '#afb5a5',
        },
        type: {
          light: '#4E4E4E',
          regular: '#3D3D3D',
          dark: '#232323',
        },
      },
      keyframes: {
        infiniteScroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(0px - 50%))' },
        },
      },
      animation: {
        infiniteScroll: 'infiniteScroll 10s linear infinite',
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Roboto',
      },
      boxShadow: {
        image: '0px 0px 10px 0px #00000012, 0px 20px 25px -5px #0000001A',
      },
    },
  },
  plugins: [daisyui],
};

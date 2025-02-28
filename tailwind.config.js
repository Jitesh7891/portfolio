/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mycolor: "#f92424", // Use hex instead of `rgb()`
      },
    },
  },
  plugins: [],
};


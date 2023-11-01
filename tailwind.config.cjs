/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{jsx,js}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        inter: ["roboto", "serif"],
      },
      backgroundColor: {
        primary: "#060515",
      },
    },
  },
  plugins: [],
};

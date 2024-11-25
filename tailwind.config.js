/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      primary: ["serif", "Roboto"],
    },
    extend: {
      colors: {
        brand: "#9ABF80",
        primary: "#E5E3D4",
        second: "#1C325B",
        third: "#6A669D",
      },
    },
  },
  plugins: [],
};

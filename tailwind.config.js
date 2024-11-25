/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      primary: ["serif", "Roboto"],
    },
    extend: {
      colors: {
        primary: "#222222",
        secondary: "#7A7A7A",
        brand: "#32375C",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#e7e9ea",
        third: "#1d9bf0",
        fourth: "#2f3336",
      },
    },
  },
  plugins: [],
};

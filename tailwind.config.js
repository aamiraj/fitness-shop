/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#ea3a3a",
        secondary: "#e1811f",
        brandYellow: "#ffc800",
        brandGreen: "#69fc65",
        brandBlue: "#4758d6",
        brandWhite: "#eeeded",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
    },
  },
  plugins: [],
};

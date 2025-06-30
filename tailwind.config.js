/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        anton: ["Anton", "sans-serif"],
        josefin: ["Josefin Sans", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        textPrimary: "#0D47A1", // Example dark gray
        textSecondary: "#718096", // Example lighter gray
        brandRed: "#e53e3e", // Custom red color
        brandBlue: "#3182ce", // Custom blue color
      },
    },
  },
  plugins: [],
};

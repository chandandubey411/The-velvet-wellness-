/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0fdf4",
          100: "#dcfce7",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
        },
        secondary: {
          50: "#fafaf9",
          100: "#f5f5f4",
          200: "#e7e5e4",
        },
        accent: {
          500: "#c9a24d", // gold
          600: "#b08a3e",
        },
        dark: {
          800: "#1c1c1c",
          900: "#0f0f0f",
        },
      },
    },
  },
  plugins: [],
};

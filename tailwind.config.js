/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f7f2fa",
          100: "#efe5f5",
          500: "#7b3fa1", // velvet purple
          600: "#6a338c",
          700: "#55286f",
        },
        secondary: {
          50: "#fdfcfb", // ivory
          100: "#f6f4f1",
          200: "#ebe7e1",
        },
        accent: {
          500: "#d4af37", // champagne gold
          600: "#b8962e",
        },
        dark: {
          800: "#1e1b22",
          900: "#120f16",
        },
      },
    },
  },
  plugins: [],
};

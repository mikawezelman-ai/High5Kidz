/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0F6B68",
          dark: "#064E4E",
        },
        mint: {
          DEFAULT: "#63D0C3",
          light: "#E6F7F4",
        },
        background: "#FFF8E7",
        cta: "#FF8A3D",
        success: "#7ACB59",
        warning: "#FFD166",
        neutral: "#E8E7E0",
        body: "#193337",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
      fontFamily: {
        sans: ["Baloo 2", "Nunito", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

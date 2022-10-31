/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: "graphik",
        semi: "graphik-semi",
        medium: "graphik-medium",
      },
      padding: {
        "6.5xl": "1.563rem",
        "xl-md": "1.375rem",
        "23px": "23px",
        "34px": "2.125rem",
        "39px": "2.438rem",
      },
      spacing: {
        "10px": "0.625rem",
      },
      colors: {
        primary: {
          100: "#676767",
          200: "#3F4246",
        },
        gradient: {
          100: "#9092fb",
          200: "#86b5ef",
          300: "#7bdde2",
        },
      },
      fontSize: {
        "32px": "2rem",
      },
      backgroundImage: {
        "hero-background-left":
          "radial-gradient(50% 50% at 50% 50%, #dde0fc 0,rgba(127,208,231,0) 100%)",
        "hero-background-right":
          "radial-gradient(50% 50% at 50% 50%, #dde0fc 0,rgba(127,208,231,0) 100%)",
      },
    },
  },
  plugins: [],
};

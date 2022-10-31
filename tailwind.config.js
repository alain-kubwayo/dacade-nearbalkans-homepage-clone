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
        dev: {
          100: "#E9FAFB",
          200: "#effcfc",
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
        "green-grad":
          "radial-gradient(50% 50% at 50% 50%,#7bdde2 0,rgba(123,221,226,0) 100%)",
        "violet-grad":
          "radial-gradient(50% 50% at 50% 50%,#8e9af9 0,rgba(127,208,231,0) 100%)",
      },
      width: {
        "480px": "30rem",
      },
      height: {
        "480px": "30rem",
        "hero-bar": "18.75rem",
      },
      margin: {
        "182px": "11.375rem",
      },
    },
  },
  plugins: [],
};

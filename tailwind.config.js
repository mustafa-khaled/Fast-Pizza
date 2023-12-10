/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "'Roboto Mono', monospace",
    },
    extend: {
      height: {
        screen: "100dvh",
      },
      colors: {
        primary: "#d2401e",
      },
    },
  },
  plugins: [],
};

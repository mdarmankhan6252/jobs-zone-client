/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        euclid: ["__euclid_9a30be", "__euclid_Fallback_9a30be"],
      },
      colors: {
        primary: {
          50: "#FAF5FF",
          100: "#F5EBFF",
          500: "#9F7AEA",
          600: "#805AD5",
          700: "#6B46C1",
          800: "#553C9A",
        },
      }
    },
  },
  plugins: [],
}


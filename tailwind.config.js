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
    },
  },
  plugins: [],
}
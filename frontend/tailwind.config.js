/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        integral: ['"Integral CF"', 'sans-serif'], // Add Integral CF with a fallback
      },
    },
  },
  plugins: [],
}


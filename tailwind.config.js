/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode:'selector', // Aquí es donde agregas darkMode
  theme: {
    extend: {},
  },
  plugins: ["prettier-plugin-tailwindcss"],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'morador-azul': '#451bee',
        'morado-blanco': '#6F5CE4',
        'gris-blanco': '#D9D9D9',
      }
    },
  },
  plugins: [],
}
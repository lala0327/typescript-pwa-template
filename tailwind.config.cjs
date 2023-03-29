/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    colors: {
      primary: '#ffffff',
      secondary: '#353535',
      tertiary: '#d9d9d9',
      green: '#22c55e',
      blue: '#284b63',
      err: "#e0162b",
      orange: "#fdba74",
      yellow: "#facc15"
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0px 0px 3px black',
        'custom-dark': 'inset 0px 0px 3px rgb(140, 122, 122)',
      }
    },
  },
  plugins: []
}


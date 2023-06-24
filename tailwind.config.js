/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        mainPurple: "#441ade",
        bright0: "#fff",
        dark0: "#181818",
      }
    },
  },
  plugins: [],
}

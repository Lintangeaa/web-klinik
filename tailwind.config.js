/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin")

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#007bff",
        secondary: "#0079b2",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const utilities = {
        ".bg-content1": {
          "background-image":
            "url(https://skyethemes.com/html/2022/medicoz/images/icons/pattern-1.png)",
        },
        ".bg-content2": {
          "background-image":
            "url(https://skyethemes.com/html/2022/medicoz/images/icons/pattern-2.png)",
        },
      }
      addUtilities(utilities)
    }),
  ],
}

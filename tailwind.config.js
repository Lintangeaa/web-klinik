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
        primary: "#118480",
        secondary: "#13BFB3",
        third: "#c7fffd",
        lp: "#CFD0D2",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
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
        ".bg-content3": {
          "background-image":
            "url(https://skyethemes.com/html/2022/medicoz/images/icons/pattern-3.png)",
        },
        ".bg-about": {
          "background-image": "url(/images/about-us-banner.png)",
        },
        ".bg-appointment": {
          "background-image": "url(/images/appointment-doctor.jpg)",
        },
        ".bg-contact": {
          "background-image": "url(/images/contactImage.png)",
        },
      }
      addUtilities(utilities)
    }),
  ],
}

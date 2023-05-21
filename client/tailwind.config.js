/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "purple-gradient":
          "linear-gradient(to bottom, #a18cd1 0%, #fbc2eb 100%)",
      },
      fontFamily: {
        main: ["Inter"],
      },
      colors: {
        lavender: "#C5A2DC",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
  darkMode: "class"
};

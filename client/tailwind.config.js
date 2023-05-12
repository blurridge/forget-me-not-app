/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "purple-gradient":
          "linear-gradient(to bottom, #a18cd1 0%, #fbc2eb 100%)",
      },
      fontFamily: {
        main: ["Inter"],
      },
    },
  },
  plugins: [],
};

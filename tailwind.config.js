/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "red-500-blogr": "hsl(356, 100%, 66%)",
        "red-400-blogr": "hsl(355, 100%, 74%)",
        "blue-900-blogr": "hsl(208, 49%, 24%)",
        "gray-600-blogr": "hsl(207, 13%, 34%)",
        "gray-900-blogr": "hsl(240, 10%, 16%)",
        "purple-950-blogr": "hsl(237, 17%, 21%)",
        "purple-900-blogr": "hsl(237, 23%, 31%)",
      },
      fontFamily: {
        overpass: ["Overpass", "sans-serif"],
        ubuntu: ["Ubuntu", "sans-serif"],
      },
      keyframes: {
        "loading-bar": {
          "0%":   { width: "0%", marginLeft: "0%" },
          "50%":  { width: "100%", marginLeft: "0%" },
          "100%": { width: "0%", marginLeft: "100%" },
        },
      },
      animation: {
        "loading-bar": "loading-bar 1.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

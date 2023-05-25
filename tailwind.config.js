/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lbg: "#fafafd",
        lpbg: "#f0f0f6",
      },
    },
  },
  plugins: [],
};

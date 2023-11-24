/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "extended-teal": "#64CCC5",
      },
    },
  },
  daisyui: {
    themes: ["light"],
  },

  plugins: [require("daisyui")],
};

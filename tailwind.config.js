/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      zIndex: {
        "most-front": 99999,
      },
    },
  },
  plugins: [],
};

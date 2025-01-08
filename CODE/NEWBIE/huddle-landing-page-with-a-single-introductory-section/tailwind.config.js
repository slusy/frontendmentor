/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-violet": "hsl(257, 40%, 49%)",
        "primary-soft-magenta": "hsl(300, 69%, 71%)",
      },
      fontFamily: {
        heading: ["Poppins", "serif"],
        paragraph: ["Open Sans", "serif"],
      },
    },
  },
  plugins: [],
};

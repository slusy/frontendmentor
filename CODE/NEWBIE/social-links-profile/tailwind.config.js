/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "custom-font": ["Inter", "serif"],
      },
      colors: {
        "custom-green": "hsl(75, 94%, 57%)",
        "background-grey": "hsl(0, 0%, 8%)",
        "card-grey": "hsl(0, 0%, 12%)",
      },
    },
  },
  plugins: [],
};

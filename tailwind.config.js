/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Antonio", "sans-serif"],
        spartan: ["League Spartan", "sans-serif"],
      },
      filter: {
        "custom-filter":
          "invert(99%) sepia(100%) saturate(0%) hue-rotate(317deg) brightness(111%) contrast(101%)",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("tailwindcss-filters")],
};

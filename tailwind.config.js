/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,scss}"],
  theme: {
    extend: {
      colors: {
        "five-primary": "#014d4e",
        "five-secondary": "#ff9408",
        "five-secondary-m": "#ff94088e",
        "five-tertiary": "#017374",
        "five-tertiary-m": "#01727498",
      },
    },
  },
  plugins: [],
};

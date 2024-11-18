/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["poppins", "serif"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#608BC1",
          secondary: "#133E87",
          accent: "#CBDCEB",
          neutral: "#F3F3E0",
          "base-100": "#ffffff",
          "base-200": "#EEEEEE",
        },
      },
    ],
  },
};

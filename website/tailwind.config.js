/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "slide-right": "slideRight 1.5s linear infinite",
        "slide-down": "slideDown 1.5s linear infinite",
        "slide-left": "slideLeft 1.5s linear infinite",
        "slide-up": "slideUp 1.5s linear infinite",
        "marquee-top": "marquee-top 2s linear infinite",
        "marquee-right": "marquee-right 2s linear infinite",
        "marquee-bottom": "marquee-bottom 2s linear infinite",
        "marquee-left": "marquee-left 2s linear infinite",
      },
      keyframes: {
        slideRight: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(1000%)" },
        },
        slideDown: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(1000%)" },
        },
        slideLeft: {
          "0%": { transform: "translateX(1000%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        slideUp: {
          "0%": { transform: "translateY(1000%)" },
          "100%": { transform: "translateY(-100%)" },
        },
        "marquee-top": {
          "0%": { transform: "translateX(-100%)" },
          "25%": { transform: "translateX(0%)" },
          "25.01%, 100%": { transform: "translateX(100%)" },
        },
        "marquee-right": {
          "0%, 25%": { transform: "translateY(-100%)" },
          "50%": { transform: "translateY(0%)" },
          "50.01%, 100%": { transform: "translateY(100%)" },
        },
        "marquee-bottom": {
          "0%, 50%": { transform: "translateX(100%)" },
          "75%": { transform: "translateX(0%)" },
          "75.01%, 100%": { transform: "translateX(-100%)" },
        },
        "marquee-left": {
          "0%, 75%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0%)" },
        },
      },
    },
  },
  plugins: [],
};

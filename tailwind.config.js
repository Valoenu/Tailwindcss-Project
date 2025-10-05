module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        black: "hsl(0, 0%, 0%)",
        pureWhite: "hsl(0, 0%, 100%)",
        offWhite: "hsl(0, 0%, 96%)", // softer background
        lightGray: "hsl(0, 0%, 80%)",
        mediumGray: "hsl(0, 0%, 60%)",
        darkGray: "hsl(0, 0%, 30%)",
        charcoal: "hsl(0, 0%, 15%)",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        heading: ["Playfair Display", "serif"], // for titles/headings
        body: ["Montserrat", "sans-serif"],
      },
      spacing: {
        180: "32rem",
        140: "28rem",
        75: "12rem",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};

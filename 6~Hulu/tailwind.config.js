/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      backgroundImage: {
        linear: "linear-gradient(135deg,#231437,#2c385e 50%,#336e6b)",
      },
      boxShadow: {
        home: "inset 0px 70px 100px #000000",
        cards:
          "inset 10px 10px 100px #000000, inset -10px 10px 100px rgba(0,0,0,.1)",
        billboard: "inset 0px 10px 100px #000000",
      },
      keyframes: {
        bouncing: {
          "0%": {
            transform: "translateY(0px)",
          },

          "50%": {
            transform: "translateY(12px)",
          },

          "100%": {
            transform: "translateY(0)",
          },
        },
        fadeInUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "bouncing-arrow": "bouncing 2s ease-in-out infinite",
        "fade-in-up": "fadeInUp 1s ease-in-out",
      },
      fontFamily: {
        GRAPHIK: "GRAPHIK",
        "GRAPHIK-BOLD": "GRAPHIK-BOLD",
      },
    },
  },
  plugins: [],
};

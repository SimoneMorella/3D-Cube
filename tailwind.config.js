/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        cubeRotate: "cubeRotate 10s linear infinite", 
      },
      keyframes: {
        cubeRotate: {
          '0%' : { transform: "rotateY(0deg) rotateX(720deg) rotateZ(0deg)" },
          '100%' : {transform: "rotateY(360deg) rotateX(0deg) rotateZ(360deg)"}
        }
      }
    },
  },
  plugins: [require("tailwindcss-3d")],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    fontFamily: { manrope: "'Manrope', sans-serif" },
    colors: {
      btnColor: "#FF4240",
      para: "rgba(19, 19, 24, 0.60)",
      real: "#131318",
      borderBgm: "rgba(19, 19, 24, 0.20)",
      imgBg: "rgba(19, 19, 24, 0.50)",
      card_1_Bg: "rgba(188, 237, 109, 0.10)",
      card_2_Bg: "rgba(253, 221, 95, 0.10)",
      card_3_Bg: "rgba(98, 156, 243, 0.10)",
      input_Bg: "rgba(19, 19, 24, 0.03)",
      footClr:"rgba(255, 255, 255, 0.60)"
    },
    rotate: {
      rotateCircle: "transform: rotate(180deg)",
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};


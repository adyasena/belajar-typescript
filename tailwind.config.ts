import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: "var(--font-inter)",
        serif: "var(--font-lora)",
      },
      colors: {
        green: "#41644a",
        "green-dark": "#263a29",
        orange: "#e86a33",
        cream: "#f2e3db",
        blue: "#114477",
        yellow: "#ffcc33",
        red: "#D91C1C",
        black: "#151515",
        grey: "#CCCCCC",
        white: "#F9FAFB",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      gridTemplateColumns: {
        auto: "repeat(auto-fit, minmax(480px, auto))",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      addCommonColors: true,
    }),
  ],
};
export default config;

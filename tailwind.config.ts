import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "480px",
      },
      fontFamily: {
        alatsi: ["Alatsi"],
        jakarta: ["Plus Jakarta Sans"],
      },
    },
    colors: {
      primary: "#FEEFC6",
      secondary: "#1B1D26",
      white: "#FFFFFF",
      grey: "#D9D9D9",
      red: "#D04736",
    },
  },
  plugins: [],
};
export default config;

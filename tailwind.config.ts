import colors from "tailwindcss/colors";

const config = {
  mode: "jit",
  purge: ["./public/**/*.html", "./packages/*/**/*.{js,jsx,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        blue: colors.blue,
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("./packages/core")({
      colors: ["blue"],
      cssBase: true,
    }),
  ],
};
export default config;

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,css,md,mdx,html,json,scss}",
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("daisyui"),
  ],
  // daisyUI config (optional)
  // for full config docs: https://daisyui.com/docs/config/
  daisyui: {
    styled: true,
    // for theme customization: https://daisyui.com/docs/themes/
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
};

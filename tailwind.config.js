/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/services/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: "#1E6BFF", dark: "#0044cc", light: "#e8f0ff" },
      },
      fontFamily: { poppins: ["Poppins", "sans-serif"] },
      animation: {
        "scroll-left":   "scrollLeft 30s linear infinite",
        "scroll-left-f": "scrollLeftF 30s linear infinite",
        "scroll-left-r": "scrollLeftR 30s linear infinite",
        "scroll-up":     "scrollUp 22s linear infinite",
        "scroll-up-slow":"scrollUp 28s linear infinite",
        "scroll-down":   "scrollDown 24s linear infinite",
        "pulse2":        "pulse2 2s infinite",
      },
      keyframes: {
        scrollLeft:  { from:{ transform:"translateX(0)" },    to:{ transform:"translateX(-50%)" } },
        scrollLeftF: { from:{ transform:"translateX(0)" },    to:{ transform:"translateX(-33.33%)" } },
        scrollLeftR: { from:{ transform:"translateX(-33.33%)" }, to:{ transform:"translateX(0)" } },
        scrollUp:    { from:{ transform:"translateY(0)" },    to:{ transform:"translateY(-50%)" } },
        scrollDown:  { from:{ transform:"translateY(-50%)" }, to:{ transform:"translateY(0)" } },
        pulse2:      { "0%,100%":{ opacity:"1", transform:"scale(1)" }, "50%":{ opacity:"0.5", transform:"scale(1.3)" } },
      },
    },
  },
  plugins: [],
};

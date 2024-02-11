/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        platinum: "#e5e4e2",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "custom-gradient":
          "linear-gradient(to bottom right, rgba(21, 95, 192, 0.582), #000)",
        "custom-gradient2":
          "linear-gradient(1deg,rgba(21, 95, 192, 0.582),#01011d)",
        "metallic-silver":
          "linear-gradient(to right, #e6e7e9, #cacccd, #e6e7e9)",
      },
      gridTemplateColumns: {
        "auto-1fr-auto": "auto 1fr auto",
      },
      fontSize: {
        "8xl": "6rem",
        "9xl": "7rem",
        "10xl": "8rem",
      },
      screens: {
        "2xl": "1536px", // Keeping the existing size for consistency
        "3xl": "1600px",
        "4xl": "1800px",
        "5xl": "2000px", // Custom screen size for widths wider than 1600px
        // Define custom screens for phone widths
        xs: "320px",
        xs2: "340px",
        xs3: "360px",
        xs4: "370px",
        xs5: "380px",
        xs6: "390px",
        xs7: "400px",
        xs8: "410px",
      },
    },
  },
  plugins: [],
};

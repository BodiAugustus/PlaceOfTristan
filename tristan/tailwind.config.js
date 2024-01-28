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
      },
      gridTemplateColumns: {
        "auto-1fr-auto": "auto 1fr auto",
      },
      fontSize: {
        "8xl": "6rem",
        "9xl": "7rem",
        "10xl": "8rem",
      },
    },
  },
  plugins: [],
};

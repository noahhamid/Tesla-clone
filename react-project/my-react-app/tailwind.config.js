/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlack: "#171A20",
        customGray: "#393C41",
        customGrayLight: "#585C61",
        white: "#FFFFFF",
        customWhite: "#F4F4F4",
        customLightBlack: "#111111",
        customCyber: "rgba(30, 30, 30, 0.85)",
        customHoverBlack: "#1A3636",
        customHoverWhite: "#F8EDED",
        customDarkGray: "#A2A3A5",
        customButtonColor: "rgb(92, 94, 98)",
        customDivider: "rgb(226, 227, 227)",
      },
      fontSize: {
        "12px": "12px",
        "40px": "40px",
      },

      padding: {
        "4px": "10px", // Custom padding of 5px
        "24px": "48px", // Custom padding of 30px
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  variants: {},
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F5F5F5",  // Light background
        secondary: {
          DEFAULT: "#FF9C01",  // Keeping your secondary orange palette
          100: "#FF9001",
          200: "#FF8E01",
          300: "#FF7F00", 
        },
        black: {
          DEFAULT: "#333333",  // Darker text color for light background
          100: "#4A4A4A",
          200: "#666666",
        },
        gray: {
          100: "#F0F0F0",  // Light gray for subtle elements
          200: "#E5E7EB",  // Even lighter gray for background
          300: "#D1D5DB",  // Middle gray for text
        },
        white: "#FFFFFF",  // White for pure backgrounds if needed
      },
    },
  },
  plugins: [],
}
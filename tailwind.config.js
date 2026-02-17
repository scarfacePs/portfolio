export default {
  darkMode: 'class', // Dark mode via class
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#7c3aed', // purple-500
          700: '#6b21a8', // purple-700
        },
        secondary: {
          light: '#f9fafb', // gray-50
          dark: '#1f2937',  // gray-800
        },
        accent: '#ec4899',  // pink-500
      },
    },
  },
  plugins: [],
}

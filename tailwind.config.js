/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-blue': '#0066FF',
        'neon-green': '#00FF88',
        'dark-bg': '#0C0C0F',
      },
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        'neon-blue': '0 0 15px rgba(0, 102, 255, 0.8), 0 0 5px rgba(0, 102, 255, 1)',
        'neon-green': '0 0 15px rgba(0, 255, 136, 0.8), 0 0 5px rgba(0, 255, 136, 1)',
      }
    },
  },
  plugins: [],
}

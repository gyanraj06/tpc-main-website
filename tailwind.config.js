/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'heading': ['Beatrice', 'sans-serif'],
        'hero': ['Beatrice', 'sans-serif'],
        'body': ['Beatrice', 'sans-serif'],
        'ui': ['Inter', 'sans-serif'],
        'display': ['Beatrice', 'sans-serif'],
      },
      colors: {
        'primary': '#14140F',
        'accent-green': '#BEFF50',
        'accent-bright': '#50FF7D',
        'neutral-beige': '#F5F5EB',
        'neutral-gray': '#D2D2C8',
        'background-primary': '#f4f2ee',
        'gradient-blue': '#D9EFFF',
        'gradient-peach': '#FFE5D9',
        'gradient-lavender': '#E6E6FA',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [],
}
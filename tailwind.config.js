/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'newsreader': ['Newsreader', 'serif'],
        'bebas': ['Bebas Neue', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'mono': ['IBM Plex Mono', 'monospace'],
      },
      colors: {
        'broke': {
          50: '#fef7f0',
          100: '#fdecd8',
          200: '#fbd5b0',
          300: '#f8b87d',
          400: '#f59347',
          500: '#f2751f',
          600: '#e35d14',
          700: '#bc4512',
          800: '#963816',
          900: '#7a3015',
        },
        'paper': '#E4DACD', // Updated to user's requested color
        'charcoal': '#2C2C2C',
        'dust': '#8B8B8B',
        'warning': '#F59E0B', // For warning elements
      },
      animation: {
        'cry': 'cry 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'shake': 'shake 0.5s ease-in-out infinite',
      },
      keyframes: {
        cry: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(5deg)' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-2px)' },
          '75%': { transform: 'translateX(2px)' },
        },
      },
    },
  },
  plugins: [],
} 
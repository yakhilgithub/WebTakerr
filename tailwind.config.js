/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend:{
      colors: {
        
        dark: {
          50: '#f1f5f9',
          100: '#e2e8f0',
          200: '#cbd5e1',
          300: '#a3b8cc',
          400: '#7b97b8',
          500: '#4e6ea5',
          600: '#455b91',
          700: '#364e7a',
          800: '#2c3e62',
          900: '#1e2d4b',
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['dark', 'dark:hover', 'dark:focus'],
      textColor: ['dark', 'dark:hover', 'dark:focus'],
      borderColor: ['dark', 'dark:hover', 'dark:focus'],
    },
  },
  plugins: [],
}


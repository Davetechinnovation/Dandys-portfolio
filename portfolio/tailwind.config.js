/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       screens: {
        'lg-custom': { min: '560px', max: '1023px' },
        'lg-customm': { min: '560px', max: '886px' },
        'lg-custommm': { min:'1024px'},
        'sm-custom': { min:'700px' },
       
      },

      fontFamily: {
        sans: [
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Noto Color Emoji"',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
}


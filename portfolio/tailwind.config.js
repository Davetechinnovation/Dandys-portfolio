/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       screens: {
        'lg-custom': { min: '560px', max: '1024px' },
        'lg-customm': { min: '560px', max: '886px' },
       
      },
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-black': '#0B0B0B',
        'brand-off-white': '#F5F5F2',
        'brand-charcoal': '#2A2A2A',
        'brand-beige': '#D4C5B9',
        'brand-sage': '#9CAF88',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


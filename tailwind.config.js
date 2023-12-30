/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx,html,css}'],
  theme: {
    extend: {
      colors: {
        'light-square': '#EEF0EB',
        'dark-square': '#4B8F8C',
        'bright-emerald': '#25F892',
        'active-square': 'rgba(var(--color-active), 0.6)',
      },
    },
  },
  plugins: [],
}

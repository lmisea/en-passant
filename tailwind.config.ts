import { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,jsx,ts,tsx,html,css}'],
  theme: {
    extend: {
      colors: {
        'light-square': '#EEF0EB',
        'dark-square': '#4B8F8C',
        'bright-emerald': '#25F892',
        'active-square': 'rgba(var(--color-active), 0.6)',
      },
      fontFamily: {
        'noto-sans': ['"Noto Sans Mono"', 'monospace'],
      },
      height: {
        18: '4.5rem',
      },
      width: {
        18: '4.5rem',
      },
    },
  },
  plugins: [],
}

export default config

import { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,jsx,ts,tsx,html,css}'],
  theme: {
    extend: {
      colors: {
        'light-square': '#EEF0EB',
        'dark-square': '#4B8F8C',
        emerald: 'rgb(37, 248, 146) !important',
        'bright-emerald': 'rgb(57, 249, 156)',
        'active-square': 'rgba(var(--color-active), 0.6)',
        'selected-square': 'rgba(var(--color-selected), 0.8)',
        folly: 'rgb(255, 31, 90) !important',
      },
      fontFamily: {
        'noto-sans': ['"Noto Sans Mono"', 'monospace'],
      },
      height: {
        18: '4.5rem',
      },
      scale: {
        120: '1.2',
        135: '1.35',
        148: '1.48',
      },
      width: {
        18: '4.5rem',
      },
    },
  },
  plugins: [],
}

export default config

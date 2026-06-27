import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0F2A4A',
        primary: {
          DEFAULT: '#1D4E89',
          light: '#4FA8D8',
          dark: '#143A66',
        },
        accent: {
          DEFAULT: '#E8A33D',
          dark: '#C9831F',
        },
        rule: '#C1443C',
        paper: '#FAFBFD',
        slate: {
          DEFAULT: '#5B6B7D',
        },
        line: '#E2E8F0',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        bengali: ['"Noto Sans Bengali"', 'sans-serif'],
      },
      boxShadow: {
        glass: '0 8px 32px rgba(15, 42, 74, 0.08)',
        card: '0 4px 24px rgba(15, 42, 74, 0.06)',
      },
      backgroundImage: {
        'rule-lines':
          'repeating-linear-gradient(to bottom, transparent, transparent 35px, #BFD4E8 36px)',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.7s ease-out forwards',
        floatSlow: 'floatSlow 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;

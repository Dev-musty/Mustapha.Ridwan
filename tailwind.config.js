/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enable class-based dark mode
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        display: ['Space Grotesk', 'sans-serif'], 
      },
      colors: {
        // Using CSS variables for dynamic theming
        'blueprint': {
          bg: 'var(--bg-color)',
          grid: 'var(--grid-color)', 
          border: 'var(--border-color)', 
          text: 'var(--text-color)',
          muted: 'var(--muted-color)',
          accent: 'var(--accent-color)',
          card: 'var(--card-bg)',
        }
      },
      animation: {
        'blink': 'blink 1s step-end infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        }
      }
    },
  },
  plugins: [],
}

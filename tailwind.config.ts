import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        forge: {
          black: '#0A0A0A',
          dark: '#0F0F0F',
          card: '#141414',
          border: '#1E1E1E',
          deep: '#050505',
        },
        'rose-gold': {
          DEFAULT: '#C9A84C',
          light: '#D4B86A',
          dark: '#B09028',
          muted: 'rgba(201, 168, 76, 0.12)',
        },
      },
      fontFamily: {
        playfair: ['var(--font-playfair)', 'Georgia', 'serif'],
        inter: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) forwards',
        'fade-in': 'fadeIn 0.7s ease forwards',
        float: 'float 7s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        pulse: 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-22px) rotate(3deg)' },
        },
      },
      backgroundImage: {
        'grid-rose': `linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px)`,
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      backgroundSize: {
        grid: '64px 64px',
      },
    },
  },
  plugins: [],
}
export default config

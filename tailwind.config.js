/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#070a12',
          alt: '#0d1322',
          card: 'rgba(16, 23, 38, 0.65)',
        },
        gold: {
          50: '#fdfbf0',
          100: '#faf5d7',
          200: '#f5eaae',
          300: '#eed97d',
          400: '#e5c44f',
          DEFAULT: '#d4af37',
          600: '#b89228',
          700: '#926f21',
          800: '#775720',
          900: '#64471e',
          light: '#f7e39a',
          hover: '#f5cb42',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Cinzel', 'Playfair Display', 'serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 30px rgba(212, 175, 55, 0.25)',
        'gold-glow-lg': '0 0 50px rgba(212, 175, 55, 0.4)',
        'card-glass': '0 20px 40px -15px rgba(0, 0, 0, 0.7)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gold-gradient': 'linear-gradient(135deg, #fff2b2 0%, #d4af37 50%, #997819 100%)',
        'gold-shimmer': 'linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.4), transparent)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
}


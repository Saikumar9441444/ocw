/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ocw: {
          red: '#C41E3A',
          'red-light': '#E63950',
          'red-dark': '#8B0000',
          black: '#0A0A0A',
          charcoal: '#1A1A1A',
          'charcoal-light': '#2A2A2A',
          white: '#F5F5F0',
          'white-dim': '#C8C8C0',
          gray: '#6B6B6B',
        }
      },
      fontFamily: {
        cinematic: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Courier New', 'monospace'],
      },
      fontSize: {
        'hero': ['clamp(3rem, 8vw, 9rem)', { lineHeight: '0.9', letterSpacing: '-0.02em' }],
        'display': ['clamp(2rem, 5vw, 5rem)', { lineHeight: '1', letterSpacing: '-0.02em' }],
        'section': ['clamp(1.5rem, 3vw, 3rem)', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
      },
      animation: {
        'grain': 'grain 8s steps(10) infinite',
        'dust': 'dust 20s linear infinite',
        'fade-up': 'fadeUp 0.8s ease forwards',
        'line-grow': 'lineGrow 0.6s ease forwards',
        'marquee': 'marquee 30s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'counter': 'counter 2s ease-out forwards',
      },
      keyframes: {
        grain: {
          '0%, 100%': { backgroundPosition: '0% 0%' },
          '10%': { backgroundPosition: '-5% -10%' },
          '30%': { backgroundPosition: '-15% 5%' },
          '50%': { backgroundPosition: '7% -25%' },
          '70%': { backgroundPosition: '20% 10%' },
          '90%': { backgroundPosition: '-10% 20%' },
        },
        dust: {
          '0%': { transform: 'translateY(100vh) translateX(-50px)', opacity: '0' },
          '10%': { opacity: '0.6' },
          '90%': { opacity: '0.6' },
          '100%': { transform: 'translateY(-100px) translateX(50px)', opacity: '0' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        lineGrow: {
          from: { width: '0' },
          to: { width: '100%' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'vignette': 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.85) 100%)',
        'vignette-strong': 'radial-gradient(ellipse at center, transparent 20%, rgba(0,0,0,0.95) 100%)',
      },
      transitionTimingFunction: {
        'cinematic': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
    },
  },
  plugins: [],
}

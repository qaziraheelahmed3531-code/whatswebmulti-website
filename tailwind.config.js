/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        wa: {
          green:  '#00A884',
          lime:   '#00E676',
          dark:   '#0A0E17',
          darker: '#050709',
          card:   '#0F1520',
          border: '#1A2535',
          text:   '#8899A6',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float':      'float 6s ease-in-out infinite',
        'glow':       'glow 2s ease-in-out infinite alternate',
        'slide-up':   'slideUp 0.6s ease-out',
        'fade-in':    'fadeIn 0.8s ease-out',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4,0,0.6,1) infinite',
        'bounce-slow':'bounce 3s infinite',
        'spin-slow':  'spin 8s linear infinite',
      },
      keyframes: {
        float:   { '0%,100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-20px)' } },
        glow:    { from: { boxShadow: '0 0 20px rgba(0,168,132,0.3)' }, to: { boxShadow: '0 0 60px rgba(0,168,132,0.6)' } },
        slideUp: { from: { opacity: '0', transform: 'translateY(40px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        fadeIn:  { from: { opacity: '0' }, to: { opacity: '1' } },
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #00A884 0%, #00E676 100%)',
        'gradient-dark':  'linear-gradient(180deg, #0A0E17 0%, #050709 100%)',
        'gradient-card':  'linear-gradient(135deg, #0F1520 0%, #131C26 100%)',
        'gradient-radial':'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
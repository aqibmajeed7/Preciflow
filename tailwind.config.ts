import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#050A10',
          900: '#0C1821',
          800: '#132636',
          700: '#1B2838',
          600: '#243447',
        },
        steel: {
          900: '#1A1D21',
          800: '#2D3436',
          700: '#434A4F',
          600: '#636E72',
          500: '#7F8C8D',
          400: '#95A5A6',
          300: '#B2BEC3',
          200: '#D5DFE3',
          100: '#ECF0F1',
        },
        accent: {
          DEFAULT: '#0984E3',
          light: '#74B9FF',
          dark: '#0652DD',
          glow: '#00D2FF',
        },
        copper: {
          DEFAULT: '#C27D38',
          light: '#D4A574',
          dark: '#8B5E2B',
        },
      },
      fontFamily: {
        heading: ['Inter', 'system-ui', 'sans-serif'],
        body: ['Roboto', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-industrial': 'linear-gradient(135deg, #0C1821 0%, #1B2838 50%, #0C1821 100%)',
        'gradient-accent': 'linear-gradient(135deg, #0984E3 0%, #00D2FF 100%)',
        'gradient-steel': 'linear-gradient(180deg, #1A1D21 0%, #2D3436 100%)',
        'mesh-gradient': 'radial-gradient(at 40% 20%, #0984E3 0px, transparent 50%), radial-gradient(at 80% 0%, #132636 0px, transparent 50%), radial-gradient(at 0% 50%, #1B2838 0px, transparent 50%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'fade-in': 'fadeIn 0.5s ease-out',
        'spin-slow': 'spin 20s linear infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(9, 132, 227, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(9, 132, 227, 0.6)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      boxShadow: {
        'industrial': '0 4px 30px rgba(0, 0, 0, 0.4)',
        'glow': '0 0 30px rgba(9, 132, 227, 0.3)',
        'glow-lg': '0 0 60px rgba(9, 132, 227, 0.4)',
        'inner-glow': 'inset 0 0 30px rgba(9, 132, 227, 0.1)',
      },
    },
  },
  plugins: [],
};

export default config;

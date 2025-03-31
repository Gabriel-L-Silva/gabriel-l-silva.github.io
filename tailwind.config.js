/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb', // blue-600
        secondary: '#9333ea', // purple-600
        background: {
          dark: '#0a1120',
          light: '#111827',
        },
        text: {
          primary: '#ffffff',
          secondary: '#d1d5db', // gray-300
          muted: '#9ca3af', // gray-400
        },
        accent: {
          blue: {
            light: '#60a5fa', // blue-400
            DEFAULT: '#2563eb', // blue-600
            dark: '#1d4ed8', // blue-700
          },
          purple: {
            light: '#a78bfa', // purple-400
            DEFAULT: '#9333ea', // purple-600
            dark: '#7e22ce', // purple-700
          }
        },
        border: {
          dark: '#1f2937', // gray-800
          DEFAULT: '#374151', // gray-700
          light: '#4b5563', // gray-600
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        card: '0 10px 25px -5px rgba(37, 99, 235, 0.2)',
        glow: '0 0 20px rgba(37, 99, 235, 0.5)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(to right, #2563eb, #9333ea)',
      },
    },
  },
  plugins: [],
} 
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink:     '#04060a',
        surface: 'rgba(255,255,255,0.04)',
        accent:  '#00b7e3',
        'accent-d': '#0099c4',
      },
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
      },
    },
  },
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        // This maps Tailwind classes (like 'bg-primary') to your CSS variables
        primary: 'var(--color-primary)',
        'accent-coral': 'var(--color-accent-coral)',
        'accent-pink': 'var(--color-accent-pink)',
        'secondary-light': 'var(--color-secondary-light)',
        'neutral-light': 'var(--color-neutral-light)',
        'neutral-dark': 'var(--color-neutral-dark)',
        border: 'var(--color-border)',
        // Adding background mapping to support your HTML classes
        background: '#0B0409',
        'on-background': '#FFFFFF',
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
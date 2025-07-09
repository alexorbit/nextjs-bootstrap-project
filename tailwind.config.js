/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3B82F6', // Blue
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#1E3A8A', // Dark Blue
          foreground: '#FFFFFF',
        },
        accent: {
          DEFAULT: '#F59E0B', // Dark Yellow
          foreground: '#000000',
        },
        muted: {
          DEFAULT: '#F3F4F6', // Soft Grey
          foreground: '#6B7280',
        },
        background: '#FFFFFF',
        foreground: '#111827',
        card: {
          DEFAULT: '#FFFFFF',
          foreground: '#111827',
        },
        border: '#E5E7EB',
      },
    },
  },
  plugins: [],
}

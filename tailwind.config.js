/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        github: {
          dark: '#0d1117',
          'dark-secondary': '#161b22',
          'dark-tertiary': '#21262d',
          border: '#30363d',
          text: '#f0f6fc',
          'text-secondary': '#8b949e',
          accent: '#238636',
          'accent-hover': '#2ea043',
        }
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

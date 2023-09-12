/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'press-start': ['"Press Start 2P"', 'cursive']
      },
      fontSize: {
        xs: '0.575rem', // Tamaño de fuente extra pequeño
        sm: '0.875rem', // Tamaño de fuente pequeño
        base: '1rem', // Tamaño de fuente base
        lg: '1.125rem', // Tamaño de fuente grande
        xl: '1.25rem' // Tamaño de fuente extra grande
      }
    }
  },
  plugins: []
}

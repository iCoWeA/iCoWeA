/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    screens: {
      md: '600px',
      lg: '905px',
      xl: '1240px',
      xxl: '1440px'
    },
    fontFamily: {
      sans: ['Poppins', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif']
    },
    extend: {
      colors: {
        default: {
          text: '#b3b3b3',
          'text-light': '#ffffff',
          'text-dark': '#595959',
          bg: '#ffffff',
          'bg-light': '#b3b3b3',
          'bg-dark': '#595959',
          primary: '#2c7cf5',
          secondary: '#fea716',
          success: '#81db57',
          warning: '#ffcc00',
          error: '#eb474a'
        }
      },
      gridTemplateRows: {
        layout: 'auto 1fr auto'

      },
      gridTemplateColumns: {
        12: 'repeat(12, 1fr)'
      }
    }
  },
  plugins: []
};

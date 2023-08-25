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
          default: '#b3b3b3',
          light: '#ffffff',
          dark: '#595959',
          primary: '#2c7cf5',
          secondary: '#fea716',
          success: '#00cc44',
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

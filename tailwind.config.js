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
        light: {
          surface: '#9dc2fc',
          'surface-low': '#ffffff',
          'surface-light': '#cee0fd',
          'surface-dark': '#6ba2fa',
          'surface-high': '#d9d9d9',
          'on-surface': '#262626',
          'on-surface-variant': '#cccccc',
          divider: '#cccccc',
          'divider-variant': '#a6a6a6',
          primary: '#2c7cf5',
          'on-primary': '#ffffff',
          'primary-light': '#9ec3fa',
          secondary: '#fea716',
          'on-secondary': '#ffffff',
          'secondary-light': '#fed99a',
          success: '#00cc44',
          'on-success': '#ffffff',
          'success-light': '#99ffbb',
          warning: '#ffcc00',
          'on-warning': '#ffffff',
          'warning-light': '#ffeb99',
          error: '#e83034',
          'on-error': '#ffffff',
          'error-light': '#f5a3a5'
        }
      },
      gridTemplateRows: {
        layout: 'auto 1fr auto'
      },
      gridTemplateColumns: {
        layout: 'auto 1fr auto',
        12: 'repeat(12, 1fr)'
      }
    }
  },
  plugins: []
};

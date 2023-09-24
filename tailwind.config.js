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
      spacing: {
        xs: '0.5rem',
        sm: '0.75rem',
        md: '1rem',
        lg: '1.5rem',
        'xs-size': '1.75rem',
        'sm-size': '2rem',
        'md-size': '2.25rem',
        'lg-size': '2.75rem'
      },
      colors: {
        light: {
          surface: '#9dc2fc',
          'surface-light': '#ffffff',
          'surface-soft': '#cee0fd',
          'surface-dark': '#d9d9d9',
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

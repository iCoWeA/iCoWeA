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
      sans: ['Montserrat', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif']
    },
    extend: {
      maxWidth: {
        content: '90rem'
      },
      opacity: {
        25: '0.25'
      },
      spacing: {
        xs: '0.5rem',
        sm: '0.75rem',
        md: '1rem',
        lg: '1.25rem',
        'xs-y': '0.1875rem',
        'sm-y': '0.375rem',
        'md-y': '0.5625rem',
        'lg-y': '0.75rem',
        'xs-x': '0.4375rem',
        'sm-x': '0.8125rem',
        'md-x': '1.1875rem',
        'lg-x': '1.5625rem',
        'xs-h': '1.75rem',
        'sm-h': '2.125rem',
        'md-h': '2.5rem',
        'lg-h': '2.875rem',
        'xs-p': '0.4375rem',
        'sm-p': '0.6875rem',
        'md-p': '0.9375rem',
        'lg-p': '1.1875rem',
        'xs-py': '0.1875rem',
        'sm-py': '0.3125rem',
        'md-py': '0.4375rem',
        'lg-py': '0.5625rem',
        'xs-px': '0.4375rem',
        'sm-px': '0.6875rem',
        'md-px': '0.9375rem',
        'lg-px': '1.1875rem'
      },
      boxShadow: {
        top: 'inset 0 1px 0 0',
        bottom: 'inset 0 -1px 0 0',
        left: 'inset 1px 0 0 0',
        right: 'inset -1px 0 0 0'
      },
      colors: {
        light: {
          surface: '#9dc2fc',
          'surface-light': '#ffffff',
          'surface-soft': '#cee0fd',
          'surface-dark': '#f2f2f2',
          'on-surface': '#262626',
          'on-surface-variant': '#cccccc',
          divider: '#cccccc',
          'divider-variant': '#a6a6a6',
          primary: '#2c7cf5',
          'on-primary': '#ffffff',
          'primary-soft': '#9ec3fa',
          secondary: '#fea716',
          'on-secondary': '#ffffff',
          'secondary-soft': '#fed99a',
          success: '#00cc44',
          'on-success': '#ffffff',
          'success-soft': '#99ffbb',
          warning: '#ffcc00',
          'on-warning': '#ffffff',
          'warning-soft': '#ffeb99',
          error: '#e83034',
          'on-error': '#ffffff',
          'error-soft': '#f5a3a5'
        },
        dark: {
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
          'primary-soft': '#9ec3fa',
          secondary: '#fea716',
          'on-secondary': '#ffffff',
          'secondary-soft': '#fed99a',
          success: '#00cc44',
          'on-success': '#ffffff',
          'success-soft': '#99ffbb',
          warning: '#ffcc00',
          'on-warning': '#ffffff',
          'warning-soft': '#ffeb99',
          error: '#e83034',
          'on-error': '#ffffff',
          'error-soft': '#f5a3a5'
        }
      }
    }
  },
  plugins: []
};

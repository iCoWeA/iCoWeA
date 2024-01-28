/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      light: {
        divider: '#bfbfbf',
        neutral: '#1a1a1a',
        'on-neutral': '#ffffff',
        'soft-neutral': '#d9d9d9',
        'neutral-variant': '#ffffff',
        'on-neutral-variant': '#808080',
        primary: '#0b68f4',
        'on-primary': '#ffffff',
        'soft-primary': '#cee0fd',
        secondary: '#fea101',
        'on-secondary': '#ffffff',
        'soft-secondary': '#ffeccc',
        success: '#40bf40',
        'on-success': '#ffffff',
        'soft-success': '#d9f2d9',
        warning: '#ffbf00',
        'on-warning': '#ffffff',
        'soft-warning': '#fff2cc',
        error: '#f44336',
        'on-error': '#ffffff',
        'soft-error': '#fcd2cf'
      }
    },
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
        376: '94rem', // max content width (90rem (1440px)) + padding (2* (2rem (32px)))
        120: '30rem'
      },
      zIndex: {
        0: '0',
        100: '100',
        200: '200',
        300: '300',
        400: '400',
        1000: '1000',
        2000: '2000',
        3000: '3000',
        4000: '4000',
        5000: '5000'
      },
      opacity: {
        0: '0',
        8: '0.08',
        10: '0.1',
        15: '0.15',
        20: '0.2',
        40: '0.4',
        75: '0.75',
        100: '1'
      },
      minWidth: {
        2: '0.5rem',
        2.5: '0.625rem',
        3: '0.75rem',
        4: '1rem',
        4.5: '1.125rem',
        5: '1.25rem',
        5.5: '1.375rem',
        6: '1.5rem',
        6.5: '1.625rem'
      },
      spacing: {
        px: '1px',
        0.1: '1px',
        0: '0rem',
        0.5: '0.125rem',
        1: '0.25rem',
        1.5: '0.375rem',
        2: '0.5rem',
        2.5: '0.625rem',
        3: '0.75rem',
        3.5: '0.875rem',
        4: '1rem',
        4.5: '1.125rem',
        5: '1.25rem',
        5.5: '1.375rem',
        6: '1.5rem',
        6.5: '1.625rem',
        7: '1.75rem',
        8: '2rem',
        8.5: '2.125rem',
        9: '2.25rem',
        9.5: '2.375rem',
        10: '2.5rem',
        10.5: '2.625rem',
        11: '2.75rem',
        12: '3rem',
        12.5: '3.125rem',
        13: '3.25rem',
        13.5: '3.375rem',
        14: '3.5rem',
        14.5: '3.625rem',
        15: '3.75rem',
        15.5: '3.875rem',
        16: '4rem',
        16.5: '4.125rem',
        17: '4.25rem',
        17.5: '4.375rem',
        18: '4.5rem',
        18.5: '4.625rem',
        19: '4.75rem',
        19.5: '4.875rem',
        20: '5rem',
        20.5: '5.125rem',
        21: '5.25rem',
        21.5: '5.375rem',
        22: '5.5rem',
        22.5: '5.625rem',
        23.5: '5.875rem',
        24: '6rem',
        24.5: '6.125rem',
        26: '6.5rem',
        28: '7rem',
        40: '10rem',
        full: '100%'
      }
    }
  },
  plugins: []
};

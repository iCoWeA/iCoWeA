const textConfig = {
  defaultProps: {
    size: 'md',
    color: 'inherit',
    align: 'left',
    gutter: false
  },
  styles: {
    base: {
      display: 'block',
      font: 'antialiased font-normal font-sans'
    },
    gutter: {
      margin: 'mb-2'
    },
    sizes: {
      sm: {
        font: 'text-xs'
      },
      md: {
        font: 'text-sm'
      },
      lg: {
        font: 'text-base'
      }
    },
    aligns: {
      right: {
        textAlign: 'text-right'
      },
      center: {
        textAlign: 'text-center'
      },
      justify: {
        textAlign: 'text-justify'
      }
    },
    colors: {
      light: {
        neutral: {
          border: 'border-light-divider',
          fill: 'fill-light-neutral',
          color: 'text-light-neutral'
        },
        primary: {
          border: 'border-light-primary',
          fill: 'fill-light-primary',
          color: 'text-light-primary'
        },
        secondary: {
          border: 'border-light-secondary',
          fill: 'fill-light-secondary',
          color: 'text-light-secondary'
        },
        success: {
          border: 'border-light-success',
          fill: 'fill-light-success',
          color: 'text-light-success'
        },
        warning: {
          border: 'border-light-warning',
          fill: 'fill-light-warning',
          color: 'text-light-warning'
        },
        error: {
          border: 'border-light-error',
          fill: 'fill-light-error',
          color: 'text-light-error'
        }
      }
    }
  }
};

export default textConfig;

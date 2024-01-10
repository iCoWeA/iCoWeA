const iconConfig = {
  defaultProps: {
    color: 'none',
    size: 'md'
  },
  styles: {
    base: {
      display: 'inline-block',
      fill: 'fill-inherit'
    },
    sizes: {
      sm: {
        height: 'h-4'
      },
      md: {
        height: 'h-5'
      },
      lg: {
        height: 'h-6'
      }
    },
    colors: {
      light: {
        neutral: {
          fill: 'fill-light-neutral'
        },
        primary: {
          fill: 'fill-light-primary'
        },
        secondary: {
          fill: 'fill-light-secondary'
        },
        success: {
          fill: 'fill-light-success'
        },
        warning: {
          fill: 'fill-light-warning'
        },
        error: {
          fill: 'fill-light-error'
        }
      }
    }
  }
};

export default iconConfig;

const markConfig = {
  defaultProps: {
    size: 'md',
    color: 'neutral',
    bg: 'primary'
  },
  styles: {
    base: {
      display: 'inline-flex',
      height: 'h-fit',
      font: 'antialiased font-normal font-sans',
      alignItems: 'items-center',
      gap: 'gap-2'
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
    },
    bg: {
      light: {
        neutral: {
          background: 'bg-light-soft-neutral'
        },
        primary: {
          background: 'bg-light-soft-primary'
        },
        secondary: {
          background: 'bg-light-soft-secondary'
        },
        success: {
          background: 'bg-light-soft-success'
        },
        warning: {
          background: 'bg-light-soft-warning'
        },
        error: {
          background: 'bg-light-soft-error'
        }
      }
    }
  }
};

export default markConfig;

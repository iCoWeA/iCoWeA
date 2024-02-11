const labelConfig = {
  defaultProps: {
    placement: 'right',
    size: 'md',
    color: 'neutral',
    align: 'center',
    gap: 'base'
  },
  styles: {
    base: {
      display: 'flex',
      flexWrap: 'flex-wrap',
      font: 'font-semibold'
    },
    columns: {
      flexDirection: 'flex-col'
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
      start: {
        alignItems: 'items-start'
      },
      end: {
        alignItems: 'items-end'
      },
      center: {
        alignItems: 'items-center'
      },
      baseline: {
        alignItems: 'items-baseline'
      }
    },
    gaps: {
      base: {
        gap: 'gap-2'
      },
      sm: {
        gap: 'gap-4'
      },
      md: {
        gap: 'gap-6'
      },
      lg: {
        gap: 'gap-8'
      }
    },
    colors: {
      light: {
        neutral: {
          fill: 'fill-light-on-neutral-variant',
          color: 'text-light-on-neutral-variant'
        },
        primary: {
          fill: 'fill-light-primary',
          color: 'text-light-primary'
        },
        secondary: {
          fill: 'fill-light-secondary',
          color: 'text-light-secondary'
        },
        success: {
          fill: 'fill-light-success',
          color: 'text-light-success'
        },
        warning: {
          fill: 'fill-light-warning',
          color: 'text-light-warning'
        },
        error: {
          fill: 'fill-light-error',
          color: 'text-light-error'
        },
        'on-neutral': {
          fill: 'fill-light-on-neutral',
          color: 'text-light-on-neutral'
        },
        'on-primary': {
          fill: 'fill-light-on-primary',
          color: 'text-light-on-primary'
        },
        'on-secondary': {
          fill: 'fill-light-on-secondary',
          color: 'text-light-on-secondary'
        },
        'on-success': {
          fill: 'fill-light-on-success',
          color: 'text-light-on-success'
        },
        'on-warning': {
          fill: 'fill-light-on-warning',
          color: 'text-light-on-warning'
        },
        'on-error': {
          fill: 'fill-light-on-error',
          color: 'text-light-on-error'
        }
      },
      dark: {
        neutral: {
          fill: 'fill-dark-on-neutral-variant',
          color: 'text-dark-on-neutral-variant'
        },
        primary: {
          fill: 'fill-dark-primary',
          color: 'text-dark-primary'
        },
        secondary: {
          fill: 'fill-dark-secondary',
          color: 'text-dark-secondary'
        },
        success: {
          fill: 'fill-dark-success',
          color: 'text-dark-success'
        },
        warning: {
          fill: 'fill-dark-warning',
          color: 'text-dark-warning'
        },
        error: {
          fill: 'fill-dark-error',
          color: 'text-dark-error'
        },
        'on-neutral': {
          fill: 'fill-dark-on-neutral',
          color: 'text-dark-on-neutral'
        },
        'on-primary': {
          fill: 'fill-dark-on-primary',
          color: 'text-dark-on-primary'
        },
        'on-secondary': {
          fill: 'fill-dark-on-secondary',
          color: 'text-dark-on-secondary'
        },
        'on-success': {
          fill: 'fill-dark-on-success',
          color: 'text-dark-on-success'
        },
        'on-warning': {
          fill: 'fill-dark-on-warning',
          color: 'text-dark-on-warning'
        },
        'on-error': {
          fill: 'fill-dark-on-error',
          color: 'text-dark-on-error'
        }
      }
    }
  }
};

export default labelConfig;

const labelConfig = {
  defaultProps: {
    position: 'right',
    color: 'neutral',
    size: 'md',
    align: 'center',
    gap: 'base'
  },
  styles: {
    base: {
      display: 'flex',
      flexWrap: 'flex-wrap',
      font: 'font-semibold text-xs'
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
          border: 'border-light-neutral',
          fill: 'fill-light-neutral',
          color: 'text-light-neutral'
        },
        primary: {
          border: 'border-light-primary',
          fill: 'fill-light-primary',
          text: 'text-light-primary'
        },
        secondary: {
          border: 'border-light-secondary',
          fill: 'fill-light-secondary',
          text: 'text-light-secondary'
        },
        success: {
          border: 'border-light-success',
          fill: 'fill-light-success',
          text: 'text-light-success'
        },
        warning: {
          border: 'border-light-warning',
          fill: 'fill-light-warning',
          text: 'text-light-warning'
        },
        error: {
          border: 'border-light-error',
          fill: 'fill-light-error',
          text: 'text-light-error'
        }
      }
    }
  }
};

export default labelConfig;

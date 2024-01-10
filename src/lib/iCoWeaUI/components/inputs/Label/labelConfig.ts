const labelConfig = {
  defaultProps: {
    position: 'right',
    color: 'neutral',
    align: 'center',
    gap: 'base'
  },
  styles: {
    base: {
      display: 'flex',
      width: 'w-fit',
      height: 'h-fit',
      flexWrap: 'flex-wrap'
    },
    columns: {
      flexDirection: 'flex-col'
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
          fill: 'fill-light-neutral',
          color: 'text-light-neutral'
        },
        primary: {
          fill: 'fill-light-primary',
          text: 'text-light-primary'
        },
        secondary: {
          fill: 'fill-light-secondary',
          text: 'text-light-secondary'
        },
        success: {
          fill: 'fill-light-success',
          text: 'text-light-success'
        },
        warning: {
          fill: 'fill-light-warning',
          text: 'text-light-warning'
        },
        error: {
          fill: 'fill-light-error',
          text: 'text-light-error'
        }
      }
    }
  }
};

export default labelConfig;

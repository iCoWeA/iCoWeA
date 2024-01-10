const breadcrumbsConfig = {
  defaultProps: {
    color: 'neutral',
    block: false,
    gap: 'base',
    separator: '/'
  },
  styles: {
    root: {
      base: {
        display: 'block',
        width: 'w-fit',
        height: 'h-fit'
      },
      block: {
        width: 'w-full'
      }
    },
    item: {
      base: {
        display: 'flex',
        alignItems: 'items-center'
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
      }
    },
    container: {
      base: {
        display: 'flex',
        alignItems: 'items-center',
        gap: 'gap-2'
      }
    },
    separator: {
      base: {
        display: 'block',
        font: 'antialiased font-normal text-sm font-sans',
        userSelect: 'select-none'
      },
      colors: {
        light: {
          neutral: {
            fill: 'fill-light-neutral',
            color: 'text-light-neutral'
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
          }
        }
      }
    }
  }
};

export default breadcrumbsConfig;

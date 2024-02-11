const linearProgressConfig = {
  defaultProps: {
    vertical: false,
    size: 'md',
    color: 'primary',
    value: 0
  },
  styles: {
    root: {
      colors: {
        light: {
          neutral: {
            background: 'bg-light-neutral/10'
          },
          primary: {
            background: 'bg-light-primary/10'
          },
          secondary: {
            background: 'bg-light-secondary/10'
          },
          success: {
            background: 'bg-light-success/10'
          },
          warning: {
            background: 'bg-light-warning/10'
          },
          error: {
            background: 'bg-light-error/10'
          },
          'on-neutral': {
            background: 'bg-light-on-neutral/10'
          },
          'on-primary': {
            background: 'bg-light-on-primary/10'
          },
          'on-secondary': {
            background: 'bg-light-on-secondary/10'
          },
          'on-success': {
            background: 'bg-light-on-success/10'
          },
          'on-warning': {
            background: 'bg-light-on-warning/10'
          },
          'on-error': {
            background: 'bg-light-on-error/10'
          }
        },
        dark: {
          neutral: {
            background: 'bg-dark-neutral/10'
          },
          primary: {
            background: 'bg-dark-primary/10'
          },
          secondary: {
            background: 'bg-dark-secondary/10'
          },
          success: {
            background: 'bg-dark-success/10'
          },
          warning: {
            background: 'bg-dark-warning/10'
          },
          error: {
            background: 'bg-dark-error/10'
          },
          'on-neutral': {
            background: 'bg-dark-on-neutral/10'
          },
          'on-primary': {
            background: 'bg-dark-on-primary/10'
          },
          'on-secondary': {
            background: 'bg-dark-on-secondary/10'
          },
          'on-success': {
            background: 'bg-dark-on-success/10'
          },
          'on-warning': {
            background: 'bg-dark-on-warning/10'
          },
          'on-error': {
            background: 'bg-dark-on-error/10'
          }
        }
      },
      sizes: {
        default: {
          horizontal: {
            sm: {
              height: 'h-0.5'
            },
            md: {
              height: 'h-1'
            },
            lg: {
              height: 'h-2'
            }
          },
          vertical: {
            sm: {
              width: 'w-0.5'
            },
            md: {
              width: 'w-1'
            },
            lg: {
              width: 'w-2'
            }
          }
        },
        label: {
          horizontal: {
            height: 'h-4'
          },
          vertical: {
            width: 'w-4'
          }
        }
      }
    },
    progressBar: {
      base: {
        overflow: 'overflow-hidden'
      },
      orientations: {
        horizontal: {
          height: 'h-full',
          transition: 'transition-[width]'
        },
        vertical: {
          bottom: 'top-full',
          width: 'w-full',
          translate: '-translate-y-full',
          transition: 'transition-[height]'
        }
      }
    },
    label: {
      base: {
        userSelect: 'select-none',
        whiteSpace: 'whitespace-nowrap'
      },
      vertical: {
        position: 'relative',
        transform: '-rotate-90'
      }
    }
  }
};

export default linearProgressConfig;

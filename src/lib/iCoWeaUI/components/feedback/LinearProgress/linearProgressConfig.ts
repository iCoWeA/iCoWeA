const linearProgressConfig = {
  defaultProps: {
    color: 'primary',
    size: 'md',
    vertical: false,
    innerBar: 'neutral',
    value: 0
  },
  styles: {
    root: {
      base: {
        borderRadius: 'rounded-full'
      },
      disabled: {
        light: {
          background: 'bg-light-neutral/20'
        }
      },
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
          }
        }
      },
      sizes: {
        horizontal: {
          sm: {
            height: 'h-0.5'
          },
          md: {
            height: 'h-1'
          },
          lg: {
            height: 'h-1.5'
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
            width: 'w-1.5'
          }
        }
      },
      labelSizes: {
        horizontal: {
          height: 'h-4'
        },
        vertical: {
          width: 'w-4'
        }
      }
    },
    progressBar: {
      base: {
        position: 'relative',
        borderRadius: 'rounded-[inherit]',
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
        position: 'relative',
        font: 'text-xs',
        userSelect: 'select-none'
      },
      vertical: {
        transform: '-rotate-90'
      }
    }
  }
};

export default linearProgressConfig;

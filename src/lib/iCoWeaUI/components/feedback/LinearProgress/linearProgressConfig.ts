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
        display: 'block',
        borderRadius: 'rounded-full'
      },
      orientations: {
        horizontal: {
          width: 'w-full'
        },
        vertical: {
          height: 'h-full'
        }
      },
      disabled: {
        light: {
          background: 'bg-light-neutral/20'
        }
      },
      colors: {
        light: {
          neutral: {
            background: 'bg-light-soft-neutral/20'
          },
          primary: {
            background: 'bg-light-primary/20'
          },
          secondary: {
            background: 'bg-light-secondary/20'
          },
          success: {
            background: 'bg-light-success/20'
          },
          warning: {
            background: 'bg-light-warning/20'
          },
          error: {
            background: 'bg-light-error/20'
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
      },
      innerSizes: {
        horizontal: {
          height: 'h-px'
        },
        vertical: {
          width: 'w-px'
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
      },
      disabled: {
        light: {
          background: 'bg-light-neutral/40'
        }
      },
      colors: {
        light: {
          neutral: {
            background: 'bg-light-neutral'
          },
          primary: {
            background: 'bg-light-primary'
          },
          secondary: {
            background: 'bg-light-secondary'
          },
          success: {
            background: 'bg-light-success'
          },
          warning: {
            background: 'bg-light-warning'
          },
          error: {
            background: 'bg-light-error'
          }
        }
      }
    },
    label: {
      base: {
        position: 'relative',
        font: 'antialiased font-normal text-xs font-sans',
        userSelect: 'select-none'
      },
      vertical: {
        transform: '-rotate-90'
      },
      colors: {
        light: {
          neutral: {
            border: 'border-light-on-neutral',
            fill: 'fill-light-on-neutral',
            color: 'text-light-on-neutral'
          },
          primary: {
            border: 'border-light-on-primary',
            fill: 'fill-light-on-primary',
            color: 'text-light-on-primary'
          },
          secondary: {
            border: 'border-light-on-secondary',
            fill: 'fill-light-on-secondary',
            color: 'text-light-on-secondary'
          },
          success: {
            border: 'border-light-on-success',
            fill: 'fill-light-on-success',
            color: 'text-light-on-success'
          },
          warning: {
            border: 'border-light-on-warning',
            fill: 'fill-light-on-warning',
            color: 'text-light-on-warning'
          },
          error: {
            border: 'border-light-on-error',
            fill: 'fill-light-on-error',
            color: 'text-light-on-error'
          }
        }
      }
    }
  }
};

export default linearProgressConfig;

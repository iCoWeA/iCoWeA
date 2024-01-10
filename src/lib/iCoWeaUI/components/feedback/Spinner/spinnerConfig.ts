const spinnerConfig = {
  defaultProps: {
    color: 'primary',
    size: 'md',
    inner: false,
    innerBar: 'none',
    rotate: true,
    value: 75,
    strokeWidth: 4,
    strokeLinecap: 'round'
  },
  styles: {
    root: {
      base: {
        position: 'relative',
        dislay: 'block'
      },
      sizes: {
        sm: {
          width: 'w-8',
          height: 'h-8'
        },
        md: {
          width: 'w-9',
          height: 'h-9'
        },
        lg: {
          width: 'w-10',
          height: 'h-10'
        }
      },
      innerSizes: {
        sm: {
          width: 'w-4',
          height: 'h-4'
        },
        md: {
          width: 'w-5',
          height: 'h-5'
        },
        lg: {
          width: 'w-6',
          height: 'h-6'
        }
      }
    },
    container: {
      base: {
        display: 'block',
        width: 'w-full',
        height: 'h-full'
      },
      rotate: {
        animation: 'animate-spin'
      }
    },
    innerBar: {
      base: {
        display: 'block',
        fill: 'fill-transparent',
        transformOrigin: 'origin-center'
      },
      disabled: {
        light: {
          stroke: 'stroke-light-neutral/20'
        }
      },
      strokes: {
        light: {
          neutral: {
            stroke: 'stroke-light-soft-neutral/20'
          },
          primary: {
            stroke: 'stroke-light-primary/20'
          },
          secondary: {
            stroke: 'stroke-light-secondary/20'
          },
          success: {
            stroke: 'stroke-light-success/20'
          },
          warning: {
            stroke: 'stroke-light-warning/20'
          },
          error: {
            stroke: 'stroke-light-error/20'
          }
        }
      }
    },
    progressBar: {
      base: {
        display: 'block',
        fill: 'fill-transparent',
        transformOrigin: 'origin-center',
        transform: '-rotate-90',
        transition: 'transition-[stroke]'
      },
      disabled: {
        light: {
          stroke: 'stroke-light-neutral/40'
        }
      },
      strokes: {
        light: {
          neutral: {
            stroke: 'stroke-light-neutral'
          },
          primary: {
            stroke: 'stroke-light-primary'
          },
          secondary: {
            stroke: 'stroke-light-secondary'
          },
          success: {
            stroke: 'stroke-light-success'
          },
          warning: {
            stroke: 'stroke-light-warning'
          },
          error: {
            stroke: 'stroke-light-error'
          }
        }
      }
    },
    label: {
      base: {
        position: 'absolute',
        left: 'left-2/4',
        top: 'top-2/4',
        translate: '-translate-x-2/4 -translate-y-2/4',
        font: 'antialiased font-semibold font-sans',
        userSelect: 'select-none'
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
            border: 'border-light-neutral',
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
  }
};

export default spinnerConfig;

const spinnerConfig = {
  defaultProps: {
    color: 'primary',
    size: 'md',
    innerBar: 'inherit',
    rotate: true,
    value: 75
  },
  styles: {
    root: {
      base: {
        position: 'relative'
      },
      disabled: {
        light: {
          stroke: 'stroke-light-neutral/40'
        }
      },
      sizes: {
        sm: {
          width: 'w-8',
          height: 'h-8'
        },
        md: {
          width: 'w-10',
          height: 'h-10'
        },
        lg: {
          width: 'w-12',
          height: 'h-12'
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
    bar: {
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
            stroke: 'stroke-light-neutral/10'
          },
          primary: {
            stroke: 'stroke-light-primary/10'
          },
          secondary: {
            stroke: 'stroke-light-secondary/10'
          },
          success: {
            stroke: 'stroke-light-success/10'
          },
          warning: {
            stroke: 'stroke-light-warning/10'
          },
          error: {
            stroke: 'stroke-light-error/10'
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
      }
    },
    label: {
      base: {
        position: 'absolute',
        left: 'left-2/4',
        top: 'top-2/4',
        translate: '-translate-x-2/4 -translate-y-2/4',
        userSelect: 'select-none'
      }
    }
  }
};

export default spinnerConfig;

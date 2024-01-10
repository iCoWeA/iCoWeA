const switchConfig = {
  defaultProps: {
    color: 'primary',
    size: 'md',
    bordered: false
  },
  styles: {
    root: {
      base: {
        position: 'relative',
        display: 'inline-flex',
        borderRadius: 'rounded-full'
      },
      checked: {
        group: 'checked'
      },
      sizes: {
        sm: {
          width: 'w-8',
          height: 'h-4'
        },
        md: {
          width: 'w-10',
          height: 'h-5'
        },
        lg: {
          width: 'w-12',
          height: 'h-6'
        }
      }
    },
    input: {
      base: {
        display: 'block',
        width: 'w-full',
        height: 'h-full',
        borderRadius: 'rounded-full',
        background: 'bg-transparent',
        appearance: 'appearance-none',
        transition: 'transition-colors',
        focus: 'focus:outline-0',
        disabled: 'disabled:pointer-events-none'
      },
      border: {
        border: 'border'
      },
      color: {
        light: {
          border: 'border-light-divider',
          background: 'bg-light-soft-neutral/20'
        }
      },
      disabled: {
        light: {
          border: 'border-light-neutral/40',
          background: 'bg-light-neutral/20'
        }
      },
      checkedColors: {
        light: {
          neutral: {
            border: 'border-transparent',
            background: 'bg-light-neutral'
          },
          primary: {
            border: 'border-transparent',
            background: 'bg-light-primary'
          },
          secondary: {
            border: 'border-transparent',
            background: 'bg-light-secondary'
          },
          success: {
            border: 'border-transparent',
            background: 'bg-light-success'
          },
          warning: {
            border: 'border-transparent',
            background: 'bg-light-warning'
          },
          error: {
            border: 'border-transparent',
            background: 'bg-light-error'
          }
        }
      }
    },
    dot: {
      base: {
        position: 'absolute',
        top: 'top-0',
        left: 'left-0',
        display: 'block',
        height: 'h-full',
        padding: 'p-0.5',
        borderRadius: 'rounded-full',
        transition: 'transition',
        pointerEvent: 'pointer-events-none'
      },
      checked: {
        transform: 'translate-x-full'
      },
      color: {
        light: {
          fill: 'fill-light-neutral-variant'
        }
      },
      disabled: {
        light: {
          fill: 'fill-light-neutral/40'
        }
      },
      checkedColors: {
        light: {
          neutral: {
            fill: 'fill-light-on-neutral'
          },
          primary: {
            fill: 'fill-light-on-primary'
          },
          secondary: {
            fill: 'fill-light-on-secondary'
          },
          success: {
            fill: 'fill-light-on-success'
          },
          warning: {
            fill: 'fill-light-on-warning'
          },
          error: {
            fill: 'fill-light-on-error'
          }
        }
      }
    }
  }
};

export default switchConfig;

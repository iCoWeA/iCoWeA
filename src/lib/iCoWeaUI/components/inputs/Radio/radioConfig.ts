const radioConfig = {
  defaultProps: {
    color: 'primary',
    size: 'md',
    bordered: false,
    valid: false,
    invalid: false,
    noRipple: false
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
        default: {
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
        plain: {
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
      }
    },
    input: {
      base: {
        display: 'block',
        width: 'w-full',
        height: 'h-full',
        background: 'bg-transparent',
        appearance: 'appearance-none',
        focus: 'focus:outline-0',
        disabled: 'disabled:pointer-events-none'
      }
    },
    dot: {
      base: {
        position: 'absolute',
        top: 'top-2/4',
        left: 'left-2/4',
        translate: '-translate-y-2/4 -translate-x-2/4',
        display: 'block',
        borderRadius: 'rounded-full',
        fill: 'fill-transparent',
        transition: 'transition-colors',
        pointerEvent: 'pointer-events-none'
      },
      border: {
        border: 'border'
      },
      sizes: {
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
      },
      color: {
        light: {
          border: 'border-light-divider',
          background: 'bg-light-soft-neutral/20'
        }
      },
      valid: {
        light: {
          border: 'border-light-success',
          background: 'bg-light-success/20'
        }
      },
      invalid: {
        light: {
          border: 'border-light-error',
          background: 'bg-light-error/20'
        }
      },
      disabled: {
        light: {
          border: 'border-light-neutral/40',
          background: 'bg-light-neutral/20'
        }
      },
      disabledChecked: {
        light: {
          fill: 'fill-light-neutral/40'
        }
      },
      checkedColors: {
        light: {
          neutral: {
            border: 'border-light-neutral',
            fill: 'fill-light-neutral',
            background: 'bg-transparent'
          },
          primary: {
            border: 'border-light-primary',
            fill: 'fill-light-primary',
            background: 'bg-transparent'
          },
          secondary: {
            border: 'border-light-secondary',
            fill: 'fill-light-secondary',
            background: 'bg-transparent'
          },
          success: {
            border: 'border-light-success',
            fill: 'fill-light-success',
            background: 'bg-transparent'
          },
          warning: {
            border: 'border-light-warning',
            fill: 'fill-light-warning',
            background: 'bg-transparent'
          },
          error: {
            border: 'border-light-error',
            fill: 'fill-light-error',
            background: 'bg-transparent'
          }
        }
      }
    }
  }
};

export default radioConfig;

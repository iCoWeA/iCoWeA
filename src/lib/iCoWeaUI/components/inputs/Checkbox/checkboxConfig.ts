const checkboxConfig = {
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
        display: 'inline-block',
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
    icon: {
      base: {
        position: 'absolute',
        top: 'top-2/4',
        left: 'left-2/4',
        translate: '-translate-y-2/4 -translate-x-2/4',
        display: 'block',
        borderRadius: 'rounded',
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
            border: 'border-transparent',
            fill: 'fill-light-on-neutral',
            background: 'bg-light-neutral'
          },
          primary: {
            border: 'border-transparent',
            fill: 'fill-light-on-primary',
            background: 'bg-light-primary'
          },
          secondary: {
            border: 'border-transparent',
            fill: 'fill-light-on-secondary',
            background: 'bg-light-secondary'
          },
          success: {
            border: 'border-transparent',
            fill: 'fill-light-on-success',
            background: 'bg-light-success'
          },
          warning: {
            border: 'border-transparent',
            fill: 'fill-light-on-warning',
            background: 'bg-light-warning'
          },
          error: {
            border: 'border-transparent',
            fill: 'fill-light-on-error',
            background: 'bg-light-error'
          }
        }
      }
    }
  }
};

export default checkboxConfig;

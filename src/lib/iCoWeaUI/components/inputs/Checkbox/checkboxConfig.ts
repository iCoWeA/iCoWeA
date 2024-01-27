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
            width: 'w-10',
            height: 'h-10'
          },
          lg: {
            width: 'w-12',
            height: 'h-12'
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
        borderRadius: 'rounded',
        transition: 'transition-colors',
        pointerEvent: 'pointer-events-none'
      },
      color: {
        light: {
          border: 'border-light-neutral/20',
          fill: 'fill-transparent',
          background: 'bg-light-neutral/10'
        }
      },
      valid: {
        light: {
          border: 'border-light-success',
          fill: 'fill-transparent',
          background: 'bg-light-success/20'
        }
      },
      invalid: {
        light: {
          border: 'border-light-error',
          fill: 'fill-transparent',
          background: 'bg-light-error/20'
        }
      },
      disabled: {
        light: {
          border: 'border-light-neutral/40',
          fill: 'fill-transparent',
          background: 'bg-light-neutral/20'
        }
      },
      disabledChecked: {
        light: {
          fill: 'fill-light-neutral/40'
        }
      }
    }
  }
};

export default checkboxConfig;

const checkboxConfig = {
  defaultProps: {
    size: 'md',
    color: 'primary',
    border: false,
    noRipple: false
  },
  styles: {
    root: {
      base: {
        display: 'inline-flex'
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
        focus: 'focus:outline-0'
      }
    },
    icon: {
      base: {
        position: 'absolute',
        top: 'top-2/4',
        left: 'left-2/4',
        translate: '-translate-y-2/4 -translate-x-2/4',
        borderRadius: 'rounded',
        border: 'border-transparent',
        transition: 'transition-colors',
        pointerEvent: 'pointer-events-none'
      },
      unchecked: {
        fill: 'fill-transparent'
      },
      color: {
        default: {
          light: {
            border: 'border-light-neutral/40',
            background: 'bg-light-neutral/10'
          },
          dark: {
            border: 'border-dark-neutral/40',
            background: 'bg-dark-neutral/10'
          }
        },
        invalid: {
          light: {
            border: 'border-light-error/40',
            background: 'bg-light-error/10'
          },
          dark: {
            border: 'border-dark-error/40',
            background: 'bg-dark-error/10'
          }
        },
        valid: {
          light: {
            border: 'border-light-success/40',
            background: 'bg-light-success/10'
          },
          dark: {
            border: 'border-dark-success/40',
            background: 'bg-dark-success/10'
          }
        }
      },
      disabled: {
        unchecked: {
          light: {
            border: 'border-light-neutral/40',
            background: 'bg-light-neutral/20'
          },
          dark: {
            border: 'border-dark-neutral/40',
            background: 'bg-dark-neutral/20'
          }
        },
        checked: {
          light: {
            border: 'border-light-neutral/40',
            fill: 'fill-light-neutral/40',
            background: 'bg-light-neutral/20'
          },
          dark: {
            border: 'border-dark-neutral/40',
            fill: 'fill-dark-neutral/40',
            background: 'bg-dark-neutral/20'
          }
        }
      }
    }
  }
};

export default checkboxConfig;

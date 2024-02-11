const switchConfig = {
  defaultProps: {
    size: 'md',
    color: 'primary'
  },
  styles: {
    root: {
      base: {
        display: 'inline-flex',
        transition: 'transition-color'
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
      },
      color: {
        default: {
          light: {
            background: 'bg-light-on-neutral/10'
          },
          dark: {
            background: 'bg-dark-on-neutral/10'
          }
        },
        solid: {
          light: {
            background: 'bg-light-neutral/10'
          },
          dark: {
            background: 'bg-dark-neutral/10'
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
    dot: {
      base: {
        position: 'absolute',
        top: 'top-0',
        left: 'left-0',
        transition: 'transition',
        pointerEvent: 'pointer-events-none'
      },
      checked: {
        transform: 'translate-x-full'
      }
    }
  }
};

export default switchConfig;

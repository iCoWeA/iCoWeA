const switchConfig = {
  defaultProps: {
    color: 'primary',
    size: 'md'
  },
  styles: {
    root: {
      base: {
        position: 'relative',
        display: 'inline-flex',
        borderRadius: 'rounded-full',
        transition: 'transition-[background]'
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
        light: {
          fill: 'fill-light-neutral-variant',
          background: 'bg-light-neutral/10'
        }
      },
      disabled: {
        light: {
          fill: 'fill-light-neutral-variant',
          background: 'bg-light-neutral/20'
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
        top: 'top-0',
        left: 'left-0',
        padding: 'p-0.5',
        transition: 'transition',
        pointerEvent: 'pointer-events-none'
      },
      checked: {
        transform: 'translate-x-full'
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
      }
    }
  }
};

export default switchConfig;

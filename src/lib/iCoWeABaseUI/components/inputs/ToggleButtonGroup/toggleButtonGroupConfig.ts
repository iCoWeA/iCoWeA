const toggleButtonGroupConfig = {
  defaultProps: {
    vertical: false,
    size: 'md',
    block: false,
    icon: false,
    variant: 'text',
    color: 'primary',
    border: false,
    radius: 'rounded',
    noRipple: false
  },
  styles: {
    root: {
      base: {
        display: 'inline-flex',
        height: 'h-fit'
      },
      block: {
        width: 'w-full'
      }
    },
    button: {
      base: {
        zIndex: 'z-100',
        active: 'active:z-200 [&.checked:active]:z-400',
        focus: 'focus:z-200 [&.checked:focus]:z-400',
        focusVisible: 'focus-visible:z-200 [&.checked:focus-visible]:z-400',
        checked: '[&.checked]:z-300',
        disabled: 'disabled:z-0'
      },
      width: {
        width: 'w-auto'
      },
      orientations: {
        horizontal: {
          left: {
            borderRadius: 'rounded-r-none'
          },
          middle: {
            borderRadius: 'rounded-none'
          },
          right: {
            borderRadius: 'rounded-l-none'
          }
        },
        vertical: {
          left: {
            borderRadius: 'rounded-b-none'
          },
          middle: {
            borderRadius: 'rounded-none'
          },
          right: {
            borderRadius: 'rounded-t-none'
          }
        }
      },
      border: {
        horizontal: {
          left: {
            border: 'border-r'
          },
          middle: {
            margin: '-ml-px',
            border: 'border-x'
          },
          right: {
            margin: '-ml-px',
            border: 'border-l'
          }
        },
        vertical: {
          left: {
            border: 'border-b'
          },
          middle: {
            margin: '-mt-px',
            border: 'border-y'
          },
          right: {
            margin: '-mt-px',
            border: 'border-t'
          }
        }
      }
    }
  }
};

export default toggleButtonGroupConfig;

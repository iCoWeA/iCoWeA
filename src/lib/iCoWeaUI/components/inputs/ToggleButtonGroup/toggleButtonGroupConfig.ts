const toggleButtonGroupConfig = {
  defaultProps: {
    vertical: false,
    uncheckedVariant: 'default',
    variant: 'solid',
    uncheckedColor: 'neutral',
    color: 'primary',
    size: 'md',
    inner: false,
    icon: false,
    bordered: false,
    block: false,
    shadow: false,
    noRipple: false
  },
  styles: {
    root: {
      base: {
        width: 'w-fit',
        height: 'h-fit'
      },
      block: {
        width: 'w-full'
      }
    },
    button: {
      base: {
        width: 'w-auto',
        height: 'h-auto',
        zIndex: 'z-100',
        active: 'active:z-200 [&.checked:active]:z-400',
        focus: 'focus:z-200 [&.checked:focus]:z-400',
        focusVisible: 'focus-visible:z-200 focus-visible:border-transparent [&.checked:focus-visible]:z-400',
        checked: '[&.checked]:z-300',
        disabled: 'disabled:z-0'
      },
      block: {
        width: 'w-full'
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
            border: 'border-r',
            borderRadius: 'rounded-r-none'
          },
          middle: {
            margin: '-ml-px',
            border: 'border-x',
            borderRadius: 'rounded-none'
          },
          right: {
            margin: '-ml-px',
            border: 'border-l',
            borderRadius: 'rounded-l-none'
          }
        },
        vertical: {
          left: {
            border: 'border-b',
            borderRadius: 'rounded-b-none'
          },
          middle: {
            margin: '-mt-px',
            border: 'border-y',
            borderRadius: 'rounded-none'
          },
          right: {
            margin: '-mt-px',
            border: 'border-t',
            borderRadius: 'rounded-t-none'
          }
        }
      }
    }
  }
};

export default toggleButtonGroupConfig;

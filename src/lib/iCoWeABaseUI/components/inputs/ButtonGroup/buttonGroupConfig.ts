const buttonGroupConfig = {
  defaultProps: {
    vertical: false,
    size: 'md',
    block: false,
    icon: false,
    variant: 'solid',
    color: 'primary',
    border: false,
    divided: false,
    radius: 'circular',
    loading: false,
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
        active: 'active:z-200',
        focus: 'focus:z-200',
        focusVisible: 'focus-visible:z-200',
        disabled: 'disabled:z-0'
      },
      width: {
        width: 'w-auto'
      },
      divider: {
        border: 'border-0'
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
      },
      dividers: {
        light: {
          neutral: {
            border: 'border-light-neutral/20'
          },
          primary: {
            border: 'border-light-primary/20'
          },
          secondary: {
            border: 'border-light-secondary/20'
          },
          success: {
            border: 'border-light-success/20'
          },
          warning: {
            border: 'border-light-warning/20'
          },
          error: {
            border: 'border-light-error/20'
          }
        },
        dark: {
          neutral: {
            border: 'border-dark-neutral/20'
          },
          primary: {
            border: 'border-dark-primary/20'
          },
          secondary: {
            border: 'border-dark-secondary/20'
          },
          success: {
            border: 'border-dark-success/20'
          },
          warning: {
            border: 'border-dark-warning/20'
          },
          error: {
            border: 'border-dark-error/20'
          }
        }
      }
    }
  }
};

export default buttonGroupConfig;

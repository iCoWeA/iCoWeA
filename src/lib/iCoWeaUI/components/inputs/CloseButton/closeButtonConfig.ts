const closeButtonConfig = {
  defaultProps: {
    position: 'right',
    panel: false,
    variant: 'default',
    color: 'primary',
    size: 'md',
    bordered: false,
    noRipple: false
  },
  styles: {
    base: {
      position: 'absolute'
    },
    positions: {
      default: {
        left: {
          sm: {
            left: 'left-2.5',
            top: 'top-2.5'
          },
          md: {
            left: 'left-3.5',
            top: 'top-3.5'
          },
          lg: {
            left: 'left-4.5',
            top: 'top-4.5'
          }
        },
        right: {
          sm: {
            right: 'right-2.5',
            top: 'top-2.5'
          },
          md: {
            right: 'right-3.5',
            top: 'top-3.5'
          },
          lg: {
            right: 'right-4.5',
            top: 'top-4.5'
          }
        }
      },
      panel: {
        left: {
          sm: {
            left: 'left-2.5',
            top: 'top-0.5'
          },
          md: {
            left: 'left-3.5',
            top: 'top-0.5'
          },
          lg: {
            left: 'left-4.5',
            top: 'top-0.5'
          }
        },
        right: {
          sm: {
            right: 'right-2.5',
            top: 'top-0.5'
          },
          md: {
            right: 'right-4',
            top: 'top-1'
          },
          lg: {
            right: 'right-5.5',
            top: 'top-1.5'
          }
        }
      }
    }
  }
};

export default closeButtonConfig;

const closeButtonConfig = {
  defaultProps: {
    position: 'right',
    variant: 'default',
    color: 'primary',
    size: 'md',
    inner: false,
    bordered: false,
    noRipple: false
  },
  styles: {
    base: {
      position: 'absolute'
    },
    positions: {
      left: {
        sm: {
          left: 'left-2.5',
          top: 'top-2.5'
        },
        md: {
          left: 'left-4',
          top: 'top-4'
        },
        lg: {
          left: 'left-5.5',
          top: 'top-5.5'
        }
      },
      right: {
        sm: {
          right: 'right-2.5',
          top: 'top-2.5'
        },
        md: {
          right: 'right-4',
          top: 'top-4'
        },
        lg: {
          right: 'right-5.5',
          top: 'top-5.5'
        }
      },
      'left-panel': {
        sm: {
          left: 'left-2.5',
          top: 'top-0.5'
        },
        md: {
          left: 'left-4',
          top: 'top-1'
        },
        lg: {
          left: 'left-5.5',
          top: 'top-1.5'
        }
      },
      'right-panel': {
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
    },
    innerPositions: {
      left: {
        sm: {
          left: 'left-1',
          top: 'top-1'
        },
        md: {
          left: 'left-2',
          top: 'top-2'
        },
        lg: {
          left: 'left-3',
          top: 'top-3'
        }
      },
      right: {
        sm: {
          right: 'right-1',
          top: 'top-1'
        },
        md: {
          right: 'right-2',
          top: 'top-2'
        },
        lg: {
          right: 'right-3',
          top: 'top-3'
        }
      },
      'left-panel': {
        sm: {
          left: 'left-1',
          top: 'top-0.5'
        },
        md: {
          left: 'left-2',
          top: 'top-1'
        },
        lg: {
          left: 'left-3',
          top: 'top-1.5'
        }
      },
      'right-panel': {
        sm: {
          right: 'right-1',
          top: 'top-0.5'
        },
        md: {
          right: 'right-2',
          top: 'top-1'
        },
        lg: {
          right: 'right-3',
          top: 'top-1.5'
        }
      }
    }
  }
};

export default closeButtonConfig;

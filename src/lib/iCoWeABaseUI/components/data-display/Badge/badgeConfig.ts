const badgeConfig = {
  defaultProps: {
    position: 'top-right',
    variant: 'solid',
    color: 'error',
    size: 'md',
    border: false,
    invisible: false
  },
  styles: {
    anchor: {
      base: {
        position: 'relative'
      }
    },
    root: {
      base: {
        position: 'absolute',
        borderRadius: 'rounded-full',
        userSelect: 'select-none'
      },
      border: {
        border: 'border-2'
      },
      invisible: {
        visible: 'invisible'
      },
      sizes: {
        default: {
          sm: {
            minWidth: 'min-w-4',
            padding: 'px-0.5',
            font: 'text-xs'
          },
          md: {
            minWidth: 'min-w-5',
            padding: 'px-1',
            font: 'text-sm'
          },
          lg: {
            minWidth: 'min-w-6',
            padding: 'px-1.5',
            font: 'text-base'
          }
        },
        border: {
          sm: {
            minWidth: 'min-w-5',
            padding: 'px-0.5',
            font: 'text-xs'
          },
          md: {
            minWidth: 'min-w-6',
            padding: 'px-1',
            font: 'text-sm'
          },
          lg: {
            minWidth: 'min-w-7',
            padding: 'px-1.5',
            font: 'text-base'
          }
        },
        empty: {
          sm: {
            width: 'w-2',
            height: 'h-2'
          },
          md: {
            width: 'w-2.5',
            height: 'h-2.5'
          },
          lg: {
            width: 'w-3',
            height: 'h-3'
          }
        }
      },
      positions: {
        'top-left': {
          top: 'top-0',
          left: 'left-0',
          translate: '-translate-y-2/4 -translate-x-2/4'
        },
        'top-right': {
          top: 'top-0',
          right: 'right-0',
          translate: '-translate-y-2/4 translate-x-2/4'
        },
        'bottom-left': {
          bottom: 'bottom-0',
          left: 'left-0',
          translate: 'translate-y-2/4 -translate-x-2/4'
        },
        'bottom-right': {
          bottom: 'bottom-0',
          right: 'right-0',
          translate: 'translate-y-2/4 translate-x-2/4'
        }
      }
    }
  }
};

export default badgeConfig;

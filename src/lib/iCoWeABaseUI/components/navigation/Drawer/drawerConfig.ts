const drawerConfig = {
  defaultProps: {
    placement: 'left',
    spacing: 'none',
    variant: 'plain',
    color: 'neutral',
    radius: 'rounded',
    justify: 'start',
    align: 'stretch',
    gap: 'none',
    closeOnEscape: true,
    focusTrap: false,
    smooth: false,
    backdrop: 'visible'
  },
  styles: {
    root: {
      base: {
        position: 'fixed',
        zIndex: 'z-4000'
      },
      placements: {
        top: {
          top: 'top-0',
          left: 'left-0',
          width: 'w-screen'
        },
        bottom: {
          bottom: 'bottom-0',
          left: 'left-0',
          width: 'w-screen'
        },
        left: {
          top: 'top-0',
          left: 'left-0',
          width: 'h-screen'
        },
        right: {
          top: 'top-0',
          right: 'right-0',
          width: 'h-screen'
        }
      }
    },
    container: {
      orientations: {
        horizontal: {
          width: 'w-full'
        },
        vertical: {
          width: 'w-64',
          height: 'h-full',
          overflow: 'overflow-auto'
        }
      },
      radiuses: {
        top: {
          rounded: {
            borderRadius: 'rounded-b-xl'
          },
          circular: {
            borderRadius: 'rounded-b-full'
          }
        },
        bottom: {
          rounded: {
            borderRadius: 'rounded-t-xl'
          },
          circular: {
            borderRadius: 'rounded-t-full'
          }
        },
        left: {
          rounded: {
            borderRadius: 'rounded-r-xl'
          },
          circular: {
            borderRadius: 'rounded-r-full'
          }
        },
        right: {
          rounded: {
            borderRadius: 'rounded-l-xl'
          },
          circular: {
            borderRadius: 'rounded-l-full'
          }
        }
      }
    }
  }
};

export default drawerConfig;

const drawerConfig = {
  defaultProps: {
    variant: 'plain',
    color: 'neutral',
    position: 'left',
    closeOnEscape: true,
    focusTrap: false
  },
  styles: {
    root: {
      base: {
        position: 'fixed',
        zIndex: 'z-4000'
      },
      positions: {
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
      positions: {
        top: {
          width: 'w-full',
          borderRadius: 'rounded-t-none'
        },
        bottom: {
          width: 'w-full',
          borderRadius: 'rounded-b-none'
        },
        left: {
          width: 'h-full',
          borderRadius: 'rounded-l-none'
        },
        right: {
          width: 'h-full',
          borderRadius: 'rounded-r-none'
        }
      }
    }
  }
};

export default drawerConfig;

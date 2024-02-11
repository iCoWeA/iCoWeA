const snackbarConfig = {
  defaultProps: {
    placement: 'bottom-left',
    closeOnEscape: false,
    closeDuration: -1
  },
  styles: {
    base: {
      position: 'fixed',
      zIndex: 'z-3000'
    },
    placements: {
      top: {
        top: 'top-8',
        left: 'left-2/4',
        translate: '-translate-x-2/4'
      },
      'top-left': {
        top: 'top-8',
        left: 'left-8'
      },
      'top-right': {
        top: 'top-8',
        right: 'right-8'
      },
      bottom: {
        bottom: 'bottom-8',
        left: 'left-2/4',
        translate: '-translate-x-2/4'
      },
      'bottom-left': {
        bottom: 'bottom-8',
        left: 'left-8'
      },
      'bottom-right': {
        bottom: 'bottom-8',
        right: 'right-8'
      },
      left: {
        top: 'top-2/4',
        left: 'left-8',
        translate: '-translate-y-2/4'
      },
      right: {
        top: 'top-2/4',
        right: 'right-8',
        translate: '-translate-y-2/4'
      }
    }
  }
};

export default snackbarConfig;

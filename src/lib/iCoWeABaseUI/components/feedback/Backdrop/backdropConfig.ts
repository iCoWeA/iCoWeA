const backdropConfig = {
  defaultProps: {
    invisible: false
  },
  styles: {
    base: {
      position: 'fixed',
      top: 'top-0',
      left: 'left-0',
      zIndex: 'z-1000',
      width: 'w-screen',
      height: 'h-screen'
    },
    background: {
      light: {
        background: 'bg-light-neutral/40'
      }
    }
  }
};

export default backdropConfig;

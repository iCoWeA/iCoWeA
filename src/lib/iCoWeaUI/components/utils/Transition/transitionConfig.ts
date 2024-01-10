const transitionConfig = {
  defaultProps: {
    variant: 'fade',
    unmountOnExit: false
  },
  styles: {
    base: {
      position: 'relative',
      display: 'block',
      width: 'w-fit',
      height: 'h-fit',
      transition: 'transition-all',
      transitionDuration: 'duration-250'
    },
    grow: {
      overflow: 'overflow-hidden'
    }
  }
};

export default transitionConfig;

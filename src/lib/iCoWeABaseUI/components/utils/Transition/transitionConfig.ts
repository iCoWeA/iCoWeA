const transitionConfig = {
  defaultProps: {
    variant: 'fade',
    smooth: false,
    unmountOnExit: false
  },
  styles: {
    base: {
      position: 'relative',
      display: 'block',
      transition: 'transition-all',
      transitionDuration: 'duration-250'
    },
    grow: {
      whiteSpace: 'whitespace-nowrap',
      overflow: 'overflow-hidden'
    }
  }
};

export default transitionConfig;

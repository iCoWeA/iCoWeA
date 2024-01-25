const tooltipConfig = {
  defaultProps: {
    position: 'bottom',
    offset: 0,
    variant: 'plain',
    color: 'neutral',
    spacing: 'md',
    responsive: true,
    arrow: false,
    keepOnHover: false,
    followCursor: false,
    closeOnEscape: false
  },
  styles: {
    base: {
      zIndes: 'z-5000'
    },
    followCursor: {
      position: 'fixed',
      pointerEvents: 'pointer-events-none'
    }
  }
};

export default tooltipConfig;

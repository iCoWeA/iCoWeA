const tooltipConfig = {
  defaultProps: {
    placement: 'bottom',
    offset: 0,
    spacing: 'md',
    variant: 'solid',
    color: 'neutral',
    border: false,
    keepOnHover: false,
    followCursor: false,
    responsive: true,
    closeOnEscape: false,
    arrow: false
  },
  styles: {
    base: {
      zIndes: 'z-5000',
      font: 'text-xs'
    },
    followCursor: {
      position: 'fixed',
      pointerEvents: 'pointer-events-none'
    }
  }
};

export default tooltipConfig;

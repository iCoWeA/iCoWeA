const popoverConfig = {
  defaultProps: {
    color: 'neutral',
    bordered: false,
    position: 'bottom',
    responsive: true,
    offset: 0,
    openOnHover: false
  },
  styles: {
    base: {
      position: 'absolute',
      zIndes: 'z-3000',
      transition: 'transition-[opacity]'
    }
  }
};

export default popoverConfig;

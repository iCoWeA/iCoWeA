const accordionConfig = {
  defaultProps: {
    variant: 'default',
    color: 'neutral',
    size: 'md',
    bordered: 'none',
    divider: false
  },
  styles: {
    root: {
      base: {
        borderRadius: 'rounded-xl',
        overflow: 'overflow-hidden'
      }
    },
    expandIcon: {
      right: {
        margin: 'ml-auto'
      }
    }
  }
};

export default accordionConfig;

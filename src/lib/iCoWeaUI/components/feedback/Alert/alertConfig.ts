const alertConfig = {
  defaultProps: {
    alert: {
      variant: 'solid',
      color: 'primary',
      bordered: false,
      size: 'md',
      closable: 'none',
      buttonGap: 'md'
    }
  },
  styles: {
    root: {
      base: {
        width: 'w-full',
        height: 'h-fit',
        borderRadius: 'rounded-xl',
        shadow: 'shadow-sm'
      }
    },
    body: {
      base: {
        flexGrow: 'grow'
      }
    }
  }
};

export default alertConfig;

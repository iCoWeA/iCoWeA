const alertConfig = {
  defaultProps: {
    alert: {
      variant: 'solid',
      color: 'primary',
      size: 'md',
      bordered: 'none',
      shadow: true,
      closable: 'none'
    }
  },
  styles: {
    root: {
      base: {
        borderRadius: 'rounded-xl'
      },
      shadow: {
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

const footerConfig = {
  defaultProps: {
    variant: 'default',
    color: 'neutral',
    bordered: false,
    block: false
  },
  styles: {
    root: {
      base: {
        display: 'flex',
        width: 'w-full',
        height: 'h-fit',
        flexDirection: 'flex-col'
      }
    },
    container: {
      base: {
        padding: 'py-4'
      },
      border: {
        border: 'border-0 border-t'
      }
    }
  }
};

export default footerConfig;

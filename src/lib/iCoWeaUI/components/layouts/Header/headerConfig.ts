const headerConfig = {
  defaultProps: {
    variant: 'plain',
    color: 'neutral',
    bordered: false,
    block: false,
    shadow: false
  },
  styles: {
    root: {
      base: {
        display: 'flex',
        width: 'w-full',
        height: 'h-fit',
        flexDirection: 'flex-col'
      },
      shadow: {
        shadow: 'shadow-sm'
      }
    },
    container: {
      base: {
        padding: 'py-4'
      },
      border: {
        border: 'border-0 border-b'
      }
    }
  }
};

export default headerConfig;

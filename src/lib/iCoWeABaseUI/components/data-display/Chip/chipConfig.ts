const chipConfig = {
  defaultProps: {
    variant: 'solid',
    color: 'primary',
    size: 'md',
    border: false
  },
  styles: {
    root: {
      base: {
        height: 'h-fit',
        borderRadius: 'rounded-full',
        fontSize: 'text-xs'
      },
      sizes: {
        sm: {
          paddding: 'px-2 py-1'
        },
        md: {
          paddding: 'px-3 py-1.5'
        },
        lg: {
          paddding: 'px-4 py-2'
        }
      }
    },
    button: {
      base: {
        padding: 'p-0'
      }
    }
  }
};

export default chipConfig;

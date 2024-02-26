const chipConfig = {
  defaultProps: {
    size: 'md',
    variant: 'solid',
    color: 'primary',
    border: false
  },
  styles: {
    base: {
      width: 'w-fit',
      height: 'h-fit',
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
  }
};

export default chipConfig;

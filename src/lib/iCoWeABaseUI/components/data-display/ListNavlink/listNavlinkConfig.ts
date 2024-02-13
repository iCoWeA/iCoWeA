const listNavlinkConfig = {
  defaultProps: {
    size: 'md',
    variant: 'text',
    color: 'primary',
    border: false,
    radius: 'circular',
    loading: false,
    noRipple: false
  },
  styles: {
    base: {
      justify: 'justify-start'
    },
    sizes: {
      sm: {
        padding: 'px-4 py-2'
      },
      md: {
        padding: 'px-6 py-3'
      },
      lg: {
        padding: 'px-8 py-4'
      }
    }
  }
};

export default listNavlinkConfig;

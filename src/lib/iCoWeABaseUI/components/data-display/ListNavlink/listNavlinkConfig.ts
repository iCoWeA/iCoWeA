const listNavlinkConfig = {
  defaultProps: {
    variant: 'default',
    color: 'primary',
    size: 'md',
    border: false,
    block: false,
    noRipple: false
  },
  styles: {
    base: {
      userSelect: 'select-auto',
      justifyContent: 'justify-start'
    },
    block: {
      borderRadius: 'rounded-none'
    },
    sizes: {
      sm: {
        padding: 'px-4 py-2',
        gap: 'gap-4'
      },
      md: {
        padding: 'px-6 py-3',
        gap: 'gap-6'
      },
      lg: {
        padding: 'px-8 py-4',
        gap: 'gap-8'
      }
    }
  }
};

export default listNavlinkConfig;

const listNavlinkConfig = {
  defaultProps: {
    variant: 'default',
    activeVariant: 'default',
    color: 'primary',
    activeColor: 'neutral',
    size: 'md',
    bordered: false,
    block: false,
    noRipple: false
  },
  styles: {
    base: {
      userSelect: 'select-auto',
      justifyContent: 'justify-start'
    },
    block: {
      padding: 'mx-0',
      borderRadius: 'rounded-none'
    },
    sizes: {
      sm: {
        margin: 'mx-4',
        padding: 'px-4 py-2',
        gap: 'gap-4'
      },
      md: {
        margin: 'mx-6',
        padding: 'px-6 py-3',
        gap: 'gap-6'
      },
      lg: {
        margin: 'mx-8',
        padding: 'px-8 py-4',
        gap: 'gap-8'
      }
    }
  }
};

export default listNavlinkConfig;
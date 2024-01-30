const accordionConfig = {
  defaultProps: {
    variant: 'default',
    color: 'neutral',
    size: 'md',
    border: 'none',
    divider: false,
    noRipple: false
  },
  styles: {
    root: {
      base: {
        borderRadius: 'rounded-xl',
        overflow: 'overflow-hidden'
      }
    },
    header: {
      base: {
        borderRadius: 'rounded-none',
        userSelect: 'select-auto',
        justifyContent: 'justify-start'
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
    },
    expandIcon: {
      right: {
        margin: 'ml-auto'
      }
    }
  }
};

export default accordionConfig;

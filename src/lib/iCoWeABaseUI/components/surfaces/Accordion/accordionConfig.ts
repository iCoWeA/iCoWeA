const accordionConfig = {
  defaultProps: {
    size: 'md',
    variant: 'text',
    color: 'neutral',
    border: 'none',
    divider: false,
    radius: 'rounded',
    noRipple: false
  },
  styles: {
    root: {
      base: {
        overflow: 'overflow-hidden'
      }
    },
    header: {
      base: {
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

const accordionConfig = {
  defaultProps: {
    defaultOpen: false,
    variant: 'default',
    color: 'neutral',
    size: 'md',
    divider: false,
    bordered: false,
    leftExpandIcon: false,
    rightExpandIcon: false
  },
  styles: {
    root: {
      base: {
        width: 'w-full',
        borderRadius: 'rounded-xl',
        overflow: 'overflow-hidden'
      }
    },
    header: {
      base: {
        borderRadius: 'rounded-none',
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
    body: {
      divider: {
        border: 'border-t'
      }
    },
    collape: {
      base: {
        width: 'w-full'
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

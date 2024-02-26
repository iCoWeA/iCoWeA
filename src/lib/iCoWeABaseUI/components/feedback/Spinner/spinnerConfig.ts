const spinnerConfig = {
  defaultProps: {
    size: 'md',
    color: 'primary',
    stable: false,
    value: '75'
  },
  styles: {
    root: {
      base: {
        display: 'inline-flex',
        width: 'w-fit',
        height: 'h-fit'
      }
    },
    label: {
      base: {
        position: 'absolute',
        left: 'left-2/4',
        top: 'top-2/4',
        translate: '-translate-x-2/4 -translate-y-2/4',
        userSelect: 'select-none'
      },
      sizes: {
        none: {
          fontSize: 'text-xs'
        },
        sm: {
          fontSize: 'text-xs'
        },
        md: {
          fontSize: 'text-sm'
        },
        lg: {
          fontSize: 'text-base'
        },
        xl: {
          fontSize: 'text-lg'
        },
        xxl: {
          fontSize: 'text-2xl'
        }
      },
      disabled: {
        light: {
          fill: 'fill-light-neutral/40',
          color: 'text-light-neutral/40'
        },
        dark: {
          fill: 'fill-dark-neutral/40',
          color: 'text-dark-neutral/40'
        }
      }
    }
  }
};

export default spinnerConfig;

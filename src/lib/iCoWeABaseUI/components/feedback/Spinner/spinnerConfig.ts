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

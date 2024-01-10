const listItemConfig = {
  defaultProps: {
    size: 'md',
    block: false
  },
  styles: {
    base: {
      display: 'flex',
      width: 'w-full',
      height: 'h-fit',
      alignItems: 'items-center',
      font: 'antialiased font-normal text-sm font-sans'
    },
    block: {
      padding: 'px-0'
    },
    divider: {
      border: 'border-b border-inherit'
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

export default listItemConfig;

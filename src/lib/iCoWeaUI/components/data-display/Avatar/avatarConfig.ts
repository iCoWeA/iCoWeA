const avatarConfig = {
  defaultProps: {
    variant: 'solid',
    color: 'primary',
    size: 'md',
    bordered: false
  },
  styles: {
    base: {
      display: 'inline-flex',
      aspectRatio: 'aspect-square',
      borderRadius: 'rounded-full',
      font: 'antialiased font-semibold font-sans',
      overflow: 'overflow-hidden',
      userSelect: 'select-none'
    },
    border: {
      border: 'border-2'
    },
    sizes: {
      default: {
        sm: {
          height: 'h-8',
          fontSize: 'text-xs'
        },
        md: {
          height: 'h-9',
          fontSize: 'text-sm'
        },
        lg: {
          height: 'h-10',
          fontSize: 'text-base'
        }
      },
      bordered: {
        sm: {
          height: 'h-9',
          fontSize: 'text-xs'
        },
        md: {
          height: 'h-10',
          fontSize: 'text-sm'
        },
        lg: {
          height: 'h-11',
          fontSize: 'text-base'
        }
      }
    }
  }
};

export default avatarConfig;

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
      borderRadius: 'rounded-full',
      overflow: 'overflow-hidden',
      userSelect: 'select-none'
    },
    border: {
      border: 'border-2'
    },
    sizes: {
      default: {
        sm: {
          width: 'w-8',
          height: 'h-8',
          fontSize: 'text-xs'
        },
        md: {
          width: 'w-9',
          height: 'h-9',
          fontSize: 'text-sm'
        },
        lg: {
          width: 'w-10',
          height: 'h-10',
          fontSize: 'text-base'
        }
      },
      bordered: {
        sm: {
          width: 'w-9',
          height: 'h-9',
          fontSize: 'text-xs'
        },
        md: {
          width: 'w-10',
          height: 'h-10',
          fontSize: 'text-sm'
        },
        lg: {
          width: 'w-11',
          height: 'h-11',
          fontSize: 'text-base'
        }
      }
    }
  }
};

export default avatarConfig;

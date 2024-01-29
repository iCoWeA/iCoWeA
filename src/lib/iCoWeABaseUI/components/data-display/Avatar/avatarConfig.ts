const avatarConfig = {
  defaultProps: {
    variant: 'solid',
    color: 'primary',
    size: 'md',
    border: false
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
          width: 'w-10',
          height: 'h-10',
          fontSize: 'text-sm'
        },
        lg: {
          width: 'w-12',
          height: 'h-12',
          fontSize: 'text-base'
        }
      },
      border: {
        sm: {
          width: 'w-9',
          height: 'h-9',
          fontSize: 'text-xs'
        },
        md: {
          width: 'w-11',
          height: 'h-11',
          fontSize: 'text-sm'
        },
        lg: {
          width: 'w-13',
          height: 'h-13',
          fontSize: 'text-base'
        }
      }
    }
  }
};

export default avatarConfig;

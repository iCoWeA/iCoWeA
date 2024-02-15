const avatarConfig = {
  defaultProps: {
    size: 'md',
    variant: 'solid',
    color: 'primary',
    border: false,
    radius: 'circular'
  },
  styles: {
    base: {
      display: 'inline-flex',
      overflow: 'overflow-hidden',
      whitespace: 'whitespace-nowrap',
      userSelect: 'select-none'
    },
    border: {
      border: 'border-2'
    },
    sizes: {
      default: {
        none: {
          width: 'w-5',
          height: 'h-5',
          fontSize: 'text-xs'
        },
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
        none: {
          width: 'w-6',
          height: 'h-6',
          fontSize: 'text-xs'
        },
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

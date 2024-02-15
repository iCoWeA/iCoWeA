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
      aspectRatio: 'aspect-square',
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
          fontSize: 'text-xs'
        },
        sm: {
          width: 'w-8',
          fontSize: 'text-xs'
        },
        md: {
          width: 'w-10',
          fontSize: 'text-sm'
        },
        lg: {
          width: 'w-12',
          fontSize: 'text-base'
        }
      },
      border: {
        none: {
          width: 'w-6',
          fontSize: 'text-xs'
        },
        sm: {
          width: 'w-9',
          fontSize: 'text-xs'
        },
        md: {
          width: 'w-11',
          fontSize: 'text-sm'
        },
        lg: {
          width: 'w-13',
          fontSize: 'text-base'
        }
      }
    }
  }
};

export default avatarConfig;

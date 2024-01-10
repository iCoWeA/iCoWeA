const avatarConfig = {
  defaultProps: {
    variant: 'solid',
    color: 'primary',
    size: 'md',
    inner: false,
    bordered: false
  },
  styles: {
    base: {
      display: 'inline-flex',
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
    },
    innerSizes: {
      default: {
        width: 'w-4',
        height: 'h-4',
        fontSize: 'text-xs'
      },
      bordered: {
        width: 'w-4.5',
        height: 'h-4.5',
        fontSize: 'text-xs'
      }
    }
  }
};

export default avatarConfig;

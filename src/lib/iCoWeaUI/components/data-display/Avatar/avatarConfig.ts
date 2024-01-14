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
    },
    innerSizes: {
      default: {
        height: 'h-4',
        fontSize: 'text-xs'
      },
      bordered: {
        height: 'h-4.5',
        fontSize: 'text-xs'
      }
    }
  }
};

export default avatarConfig;

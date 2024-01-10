const linkConfig = {
  defaultProps: {
    underline: 'none',
    color: 'primary',
    size: 'md',
    block: false
  },
  styles: {
    base: {
      display: 'inline-flex',
      width: 'w-fit',
      height: 'h-fit',
      justifyContent: 'justify-center',
      alignItems: 'items-center',
      gap: 'gap-2',
      font: 'antialiased font-normal font-sans',
      cursor: 'cursor-pointer',
      focus: 'focus:outline-0'
    },
    block: {
      width: 'w-full'
    },
    underlines: {
      none: {
        textDecoration: 'no-underline'
      },
      hover: {
        hover: 'hover:underline'
      },
      always: {
        textDecoration: 'underline'
      }
    },
    sizes: {
      sm: {
        font: 'text-xs'
      },
      md: {
        font: 'text-sm'
      },
      lg: {
        font: 'text-base'
      }
    },
    disabled: {
      light: {
        border: 'border-light-neutral/40',
        fill: 'fill-light-neutral/40',
        color: 'text-light-neutral/40',
        userSelect: 'select-none',
        pointer: 'pointer-events-none'
      }
    },
    colors: {
      light: {
        neutral: {
          border: 'border-light-divider',
          fill: 'fill-light-neutral',
          color: 'text-light-neutral'
        },
        primary: {
          border: 'border-light-primary',
          fill: 'fill-light-primary',
          color: 'text-light-primary'
        },
        secondary: {
          border: 'border-light-secondary',
          fill: 'fill-light-secondary',
          color: 'text-light-secondary'
        },
        success: {
          border: 'border-light-success',
          fill: 'fill-light-success',
          color: 'text-light-success'
        },
        warning: {
          border: 'border-light-warning',
          fill: 'fill-light-warning',
          color: 'text-light-warning'
        },
        error: {
          border: 'border-light-error',
          fill: 'fill-light-error',
          color: 'text-light-error'
        }
      }
    }
  }
};

export default linkConfig;

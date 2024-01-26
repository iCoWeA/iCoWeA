const linkConfig = {
  defaultProps: {
    color: 'primary',
    size: 'md',
    align: 'left',
    underline: 'none',
    block: false,
    gutter: false
  },
  styles: {
    base: {
      display: 'inline-block',
      cursor: 'cursor-pointer',
      focus: 'focus:outline-0'
    },
    block: {
      width: 'w-full'
    },
    gutter: {
      margin: 'mb-2'
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
    aligns: {
      right: {
        textAlign: 'text-right'
      },
      center: {
        textAlign: 'text-center'
      },
      justify: {
        textAlign: 'text-justify'
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
          border: 'border-light-neutral',
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

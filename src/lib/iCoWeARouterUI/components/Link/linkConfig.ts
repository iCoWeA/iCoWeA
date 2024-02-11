const linkConfig = {
  defaultProps: {
    size: 'md',
    block: false,
    gutter: false,
    color: 'primary',
    underline: 'none',
    align: 'left'
  },
  styles: {
    base: {
      display: 'inline-block',
      font: 'font-semibold',
      cursor: 'cursor-pointer',
      focus: 'focus:outline-0'
    },
    block: {
      width: 'w-full'
    },
    gutter: {
      margin: 'mb-2'
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
        userSelect: 'select-none'
      },
      dark: {
        border: 'border-dark-neutral/40',
        fill: 'fill-dark-neutral/40',
        color: 'text-dark-neutral/40',
        userSelect: 'select-none'
      }
    },
    colors: {
      light: {
        neutral: {
          fill: 'fill-light-neutral',
          color: 'text-light-neutral'
        },
        primary: {
          fill: 'fill-light-primary',
          color: 'text-light-primary'
        },
        secondary: {
          fill: 'fill-light-secondary',
          color: 'text-light-secondary'
        },
        success: {
          fill: 'fill-light-success',
          color: 'text-light-success'
        },
        warning: {
          fill: 'fill-light-warning',
          color: 'text-light-warning'
        },
        error: {
          fill: 'fill-light-error',
          color: 'text-light-error'
        },
        'on-neutral': {
          fill: 'fill-light-on-neutral',
          color: 'text-light-on-neutral'
        },
        'on-primary': {
          fill: 'fill-light-on-primary',
          color: 'text-light-on-primary'
        },
        'on-secondary': {
          fill: 'fill-light-on-secondary',
          color: 'text-light-on-secondary'
        },
        'on-success': {
          fill: 'fill-light-on-success',
          color: 'text-light-on-success'
        },
        'on-warning': {
          fill: 'fill-light-on-warning',
          color: 'text-light-on-warning'
        },
        'on-error': {
          fill: 'fill-light-on-error',
          color: 'text-light-on-error'
        }
      },
      dark: {
        neutral: {
          fill: 'fill-dark-neutral',
          color: 'text-dark-neutral'
        },
        primary: {
          fill: 'fill-dark-primary',
          color: 'text-dark-primary'
        },
        secondary: {
          fill: 'fill-dark-secondary',
          color: 'text-dark-secondary'
        },
        success: {
          fill: 'fill-dark-success',
          color: 'text-dark-success'
        },
        warning: {
          fill: 'fill-dark-warning',
          color: 'text-dark-warning'
        },
        error: {
          fill: 'fill-dark-error',
          color: 'text-dark-error'
        },
        'on-neutral': {
          fill: 'fill-dark-on-neutral',
          color: 'text-dark-on-neutral'
        },
        'on-primary': {
          fill: 'fill-dark-on-primary',
          color: 'text-dark-on-primary'
        },
        'on-secondary': {
          fill: 'fill-dark-on-secondary',
          color: 'text-dark-on-secondary'
        },
        'on-success': {
          fill: 'fill-dark-on-success',
          color: 'text-dark-on-success'
        },
        'on-warning': {
          fill: 'fill-dark-on-warning',
          color: 'text-dark-on-warning'
        },
        'on-error': {
          fill: 'fill-dark-on-error',
          color: 'text-dark-on-error'
        }
      }
    }
  }
};

export default linkConfig;

const defaultSpinnerConfig = {
  defaultProps: {
    size: 'md',
    color: 'primary',
    stable: false,
    value: '75'
  },
  styles: {
    root: {
      base: {
        display: 'inline-block',
        aspectRatio: 'aspect-square'
      },
      sizes: {
        none: {
          width: 'w-5'
        },
        sm: {
          width: 'w-8'
        },
        md: {
          width: 'w-10'
        },
        lg: {
          width: 'w-12'
        }
      }
    },
    bar: {
      base: {
        display: 'block',
        fill: 'fill-transparent',
        transformOrigin: 'origin-center'
      },
      disabled: {
        light: {
          stroke: 'stroke-light-neutral/20'
        },
        dark: {
          stroke: 'stroke-dark-neutral/20'
        }
      },
      colors: {
        light: {
          neutral: {
            stroke: 'stroke-light-neutral/10'
          },
          primary: {
            stroke: 'stroke-light-primary/10'
          },
          secondary: {
            stroke: 'stroke-light-secondary/10'
          },
          success: {
            stroke: 'stroke-light-success/10'
          },
          warning: {
            stroke: 'stroke-light-warning/10'
          },
          error: {
            stroke: 'stroke-light-error/10'
          },
          'on-neutral': {
            stroke: 'stroke-light-on-neutral/10'
          },
          'on-primary': {
            stroke: 'stroke-light-on-primary/10'
          },
          'on-secondary': {
            stroke: 'stroke-light-on-secondary/10'
          },
          'on-success': {
            stroke: 'stroke-light-on-success/10'
          },
          'on-warning': {
            stroke: 'stroke-light-on-warning/10'
          },
          'on-error': {
            stroke: 'stroke-light-on-error/10'
          }
        },
        dark: {
          neutral: {
            stroke: 'stroke-dark-neutral/10'
          },
          primary: {
            stroke: 'stroke-dark-primary/10'
          },
          secondary: {
            stroke: 'stroke-dark-secondary/10'
          },
          success: {
            stroke: 'stroke-dark-success/10'
          },
          warning: {
            stroke: 'stroke-dark-warning/10'
          },
          error: {
            stroke: 'stroke-dark-error/10'
          },
          'on-neutral': {
            stroke: 'stroke-dark-on-neutral/10'
          },
          'on-primary': {
            stroke: 'stroke-dark-on-primary/10'
          },
          'on-secondary': {
            stroke: 'stroke-dark-on-secondary/10'
          },
          'on-success': {
            stroke: 'stroke-dark-on-success/10'
          },
          'on-warning': {
            stroke: 'stroke-dark-on-warning/10'
          },
          'on-error': {
            stroke: 'stroke-dark-on-error/10'
          }
        }
      }
    },
    progressBar: {
      base: {
        display: 'block',
        fill: 'fill-transparent',
        transformOrigin: 'origin-center'
      },
      transition: {
        stable: {
          transform: '-rotate-90',
          transition: 'transition-[stroke]'
        },
        rotate: {
          animation: 'animate-spin'
        }
      },
      disabled: {
        light: {
          stroke: 'stroke-light-neutral/40'
        },
        dark: {
          stroke: 'stroke-dark-neutral/40'
        }
      },
      colors: {
        light: {
          neutral: {
            stroke: 'stroke-light-neutral'
          },
          primary: {
            stroke: 'stroke-light-primary'
          },
          secondary: {
            stroke: 'stroke-light-secondary'
          },
          success: {
            stroke: 'stroke-light-success'
          },
          warning: {
            stroke: 'stroke-light-warning'
          },
          error: {
            stroke: 'stroke-light-error'
          },
          'on-neutral': {
            stroke: 'stroke-light-on-neutral'
          },
          'on-primary': {
            stroke: 'stroke-light-on-primary'
          },
          'on-secondary': {
            stroke: 'stroke-light-on-secondary'
          },
          'on-success': {
            stroke: 'stroke-light-on-success'
          },
          'on-warning': {
            stroke: 'stroke-light-on-warning'
          },
          'on-error': {
            stroke: 'stroke-light-on-error'
          }
        },
        dark: {
          neutral: {
            stroke: 'stroke-dark-neutral'
          },
          primary: {
            stroke: 'stroke-dark-primary'
          },
          secondary: {
            stroke: 'stroke-dark-secondary'
          },
          success: {
            stroke: 'stroke-dark-success'
          },
          warning: {
            stroke: 'stroke-dark-warning'
          },
          error: {
            stroke: 'stroke-dark-error'
          },
          'on-neutral': {
            stroke: 'stroke-dark-on-neutral'
          },
          'on-primary': {
            stroke: 'stroke-dark-on-primary'
          },
          'on-secondary': {
            stroke: 'stroke-dark-on-secondary'
          },
          'on-success': {
            stroke: 'stroke-dark-on-success'
          },
          'on-warning': {
            stroke: 'stroke-dark-on-warning'
          },
          'on-error': {
            stroke: 'stroke-dark-on-error'
          }
        }
      }
    }
  }
};

export default defaultSpinnerConfig;

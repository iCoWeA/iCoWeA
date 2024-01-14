const iconConfig = {
  defaultProps: {
    variant: 'default',
    color: 'none',
    size: 'md',
    spacing: 'none',
    bordered: false
  },
  styles: {
    base: {
      boxSizing: 'box-content',
      display: 'inline-block',
      border: 'border-inherit',
      borderRadius: 'rounded-full',
      fill: 'fill-inherit'
    },
    border: {
      border: 'border'
    },
    sizes: {
      sm: {
        height: 'h-4'
      },
      md: {
        height: 'h-5'
      },
      lg: {
        height: 'h-6'
      }
    },
    spacing: {
      sm: {
        padding: 'p-1.5'
      },
      md: {
        padding: 'p-2'
      },
      lg: {
        padding: 'p-2.5'
      }
    },
    variants: {
      default: {
        light: {
          neutral: {
            border: 'border-light-divider',
            fill: 'fill-light-neutral'
          },
          primary: {
            border: 'border-light-primary',
            fill: 'fill-light-primary'
          },
          secondary: {
            border: 'border-light-secondary',
            fill: 'fill-light-secondary'
          },
          success: {
            border: 'border-light-success',
            fill: 'fill-light-success'
          },
          warning: {
            border: 'border-light-warning',
            fill: 'fill-light-warning'
          },
          error: {
            border: 'border-light-error',
            fill: 'fill-light-error'
          }
        }
      },
      plain: {
        light: {
          neutral: {
            border: 'border-light-divider',
            fill: 'fill-light-neutral',
            background: 'bg-light-neutral-variant'
          },
          primary: {
            border: 'border-light-primary',
            fill: 'fill-light-primary',
            background: 'bg-light-neutral-variant'
          },
          secondary: {
            border: 'border-light-secondary',
            fill: 'fill-light-secondary',
            background: 'bg-light-neutral-variant'
          },
          success: {
            border: 'border-light-success',
            fill: 'fill-light-success',
            background: 'bg-light-neutral-variant'
          },
          warning: {
            border: 'border-light-warning',
            fill: 'fill-light-warning',
            background: 'bg-light-neutral-variant'
          },
          error: {
            border: 'border-light-error',
            fill: 'fill-light-error',
            background: 'bg-light-neutral-variant'
          }
        }
      },
      soft: {
        light: {
          neutral: {
            border: 'border-light-divider',
            fill: 'fill-light-neutral',
            background: 'bg-light-soft-neutral'
          },
          primary: {
            border: 'border-light-primary',
            fill: 'fill-light-primary',
            background: 'bg-light-soft-primary'
          },
          secondary: {
            border: 'border-light-secondary',
            fill: 'fill-light-secondary',
            background: 'bg-light-soft-secondary'
          },
          success: {
            border: 'border-light-success',
            fill: 'fill-light-success',
            background: 'bg-light-soft-success'
          },
          warning: {
            border: 'border-light-warning',
            fill: 'fill-light-warning',
            background: 'bg-light-soft-warning'
          },
          error: {
            border: 'border-light-error',
            fill: 'fill-light-error',
            background: 'bg-light-soft-error'
          }
        }
      },
      solid: {
        light: {
          neutral: {
            border: 'border-light-on-neutral',
            fill: 'fill-light-on-neutral',
            background: 'bg-light-neutral'
          },
          primary: {
            border: 'border-light-on-primary',
            fill: 'fill-light-on-primary',
            background: 'bg-light-primary'
          },
          secondary: {
            border: 'border-light-on-secondary',
            fill: 'fill-light-on-secondary',
            background: 'bg-light-secondary'
          },
          success: {
            border: 'border-light-on-success',
            fill: 'fill-light-on-success',
            background: 'bg-light-success'
          },
          warning: {
            border: 'border-light-on-warning',
            fill: 'fill-light-on-warning',
            background: 'bg-light-warning'
          },
          error: {
            border: 'border-light-on-error',
            fill: 'fill-light-on-error',
            background: 'bg-light-error'
          }
        }
      }
    }
  }
};

export default iconConfig;

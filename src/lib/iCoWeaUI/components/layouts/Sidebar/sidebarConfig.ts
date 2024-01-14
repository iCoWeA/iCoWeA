const sidebarConfig = {
  defaultProps: {
    variant: 'default',
    color: 'neutral',
    bordered: 'none',
    justify: 'start',
    align: 'stretch'
  },
  styles: {
    base: {
      display: 'flex',
      width: 'w-3/12',
      maxWidth: 'max-w-120',
      height: 'h-full'
    },
    border: {
      left: {
        border: 'border-l'
      },
      right: {
        border: 'border-r'
      },
      both: {
        border: 'border-x'
      }
    },
    justifies: {
      normal: {
        justifyContent: 'justify-normal'
      },
      stretch: {
        justifyContent: 'justify-stretch'
      },
      end: {
        justifyContent: 'justify-end'
      },
      center: {
        justifyContent: 'justify-center'
      },
      between: {
        justifyContent: 'justify-between'
      },
      around: {
        justifyContent: 'justify-around'
      },
      evenly: {
        justifyContent: 'justify-evenly'
      }
    },
    aligns: {
      start: {
        alignItems: 'items-start'
      },
      end: {
        alignItems: 'items-end'
      },
      center: {
        alignItems: 'items-center'
      },
      baseline: {
        alignItems: 'items-baseline'
      }
    },
    variants: {
      default: {
        light: {
          neutral: {
            border: 'border-light-divider',
            fill: 'fill-light-on-neutral-variant',
            color: 'text-light-on-neutral-variant'
          },
          primary: {
            border: 'border-light-primary',
            fill: 'fill-light-primary',
            text: 'text-light-primary'
          },
          secondary: {
            border: 'border-light-secondary',
            fill: 'fill-light-secondary',
            text: 'text-light-secondary'
          },
          success: {
            border: 'border-light-success',
            fill: 'fill-light-success',
            text: 'text-light-success'
          },
          warning: {
            border: 'border-light-warning',
            fill: 'fill-light-warning',
            text: 'text-light-warning'
          },
          error: {
            border: 'border-light-error',
            fill: 'fill-light-error',
            text: 'text-light-error'
          }
        }
      },
      plain: {
        light: {
          neutral: {
            border: 'border-light-divider',
            fill: 'fill-light-on-neutral-variant',
            color: 'text-light-on-neutral-variant',
            background: 'bg-light-neutral-variant'
          },
          primary: {
            border: 'border-light-primary',
            fill: 'fill-light-primary',
            text: 'text-light-primary',
            background: 'bg-light-neutral-variant'
          },
          secondary: {
            border: 'border-light-secondary',
            fill: 'fill-light-secondary',
            text: 'text-light-secondary',
            background: 'bg-light-neutral-variant'
          },
          success: {
            border: 'border-light-success',
            fill: 'fill-light-success',
            text: 'text-light-success',
            background: 'bg-light-neutral-variant'
          },
          warning: {
            border: 'border-light-warning',
            fill: 'fill-light-warning',
            text: 'text-light-warning',
            background: 'bg-light-neutral-variant'
          },
          error: {
            border: 'border-light-error',
            fill: 'fill-light-error',
            text: 'text-light-error',
            background: 'bg-light-neutral-variant'
          }
        }
      },
      soft: {
        light: {
          neutral: {
            border: 'border-light-divider',
            fill: 'fill-light-on-neutral-variant',
            color: 'text-light-on-neutral-variant',
            background: 'bg-light-soft-neutral'
          },
          primary: {
            border: 'border-light-primary',
            fill: 'fill-light-primary',
            text: 'text-light-primary',
            background: 'bg-light-soft-primary'
          },
          secondary: {
            border: 'border-light-secondary',
            fill: 'fill-light-secondary',
            text: 'text-light-secondary',
            background: 'bg-light-soft-secondary'
          },
          success: {
            border: 'border-light-success',
            fill: 'fill-light-success',
            text: 'text-light-success',
            background: 'bg-light-soft-success'
          },
          warning: {
            border: 'border-light-warning',
            fill: 'fill-light-warning',
            text: 'text-light-warning',
            background: 'bg-light-soft-warning'
          },
          error: {
            border: 'border-light-error',
            fill: 'fill-light-error',
            text: 'text-light-error',
            background: 'bg-light-soft-error'
          }
        }
      },
      solid: {
        light: {
          neutral: {
            border: 'border-light-on-neutral',
            fill: 'fill-light-on-neutral',
            color: 'text-light-on-neutral',
            background: 'bg-light-neutral'
          },
          primary: {
            border: 'border-light-on-primary',
            fill: 'fill-light-on-primary',
            text: 'text-light-on-primary',
            background: 'bg-light-primary'
          },
          secondary: {
            border: 'border-light-on-secondary',
            fill: 'fill-light-on-secondary',
            text: 'text-light-on-secondary',
            background: 'bg-light-secondary'
          },
          success: {
            border: 'border-light-on-success',
            fill: 'fill-light-on-success',
            text: 'text-light-on-success',
            background: 'bg-light-success'
          },
          warning: {
            border: 'border-light-on-warning',
            fill: 'fill-light-on-warning',
            text: 'text-light-on-warning',
            background: 'bg-light-warning'
          },
          error: {
            border: 'border-light-on-error',
            fill: 'fill-light-on-error',
            text: 'text-light-on-error',
            background: 'bg-light-error'
          }
        }
      }
    }
  }
};

export default sidebarConfig;

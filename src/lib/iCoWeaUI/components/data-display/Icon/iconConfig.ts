const iconConfig = {
  defaultProps: {
    variant: 'default',
    color: 'inherit',
    size: 'md',
    spacing: 'none',
    bordered: false
  },
  styles: {
    base: {
      display: 'inline-block',
      borderRadius: 'rounded-full'
    },
    border: {
      border: 'border'
    },
    sizes: {
      default: {
        sm: {
          width: 'w-4',
          height: 'h-4'
        },
        md: {
          width: 'w-5',
          height: 'h-5'
        },
        lg: {
          width: 'w-6',
          height: 'h-6'
        }
      },
      space: {
        sm: {
          width: 'w-8',
          height: 'h-8'
        },
        md: {
          width: 'w-10',
          height: 'h-10'
        },
        lg: {
          width: 'w-12',
          height: 'h-12'
        }
      }
    },
    spacing: {
      sm: {
        sm: {
          padding: 'p-2'
        },
        md: {
          padding: 'p-1.5'
        },
        lg: {
          padding: 'p-1'
        }
      },
      md: {
        sm: {
          padding: 'p-3'
        },
        md: {
          padding: 'p-2.5'
        },
        lg: {
          padding: 'p-2'
        }
      },
      lg: {
        sm: {
          padding: 'p-4'
        },
        md: {
          padding: 'p-3.5'
        },
        lg: {
          padding: 'p-3'
        }
      }
    },
    variants: {
      default: {
        light: {
          neutral: {
            border: 'border-light-neutral',
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
            border: 'border-light-neutral',
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
            border: 'border-light-neutral',
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

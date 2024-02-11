const markConfig = {
  defaultProps: {
    size: 'md',
    variant: 'soft',
    color: 'primary',
    border: false
  },
  styles: {
    base: {
      display: 'inline-flex',
      alignItems: 'items-center',
      gap: 'gap-2'
    },
    border: {
      border: 'border'
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
    variants: {
      default: {
        light: {
          neutral: {
            fill: 'fill-light-on-neutral',
            color: 'text-light-on-neutral'
          },
          primary: {
            fill: 'fill-light-on-primary',
            color: 'text-light-on-primary'
          },
          secondary: {
            fill: 'fill-light-on-secondary',
            color: 'text-light-on-secondary'
          },
          success: {
            fill: 'fill-light-on-success',
            color: 'text-light-on-success'
          },
          warning: {
            fill: 'fill-light-on-warning',
            color: 'text-light-on-warning'
          },
          error: {
            fill: 'fill-light-on-error',
            color: 'text-light-on-error'
          }
        },
        dark: {
          neutral: {
            fill: 'fill-dark-on-neutral',
            color: 'text-dark-on-neutral'
          },
          primary: {
            fill: 'fill-dark-on-primary',
            color: 'text-dark-on-primary'
          },
          secondary: {
            fill: 'fill-dark-on-secondary',
            color: 'text-dark-on-secondary'
          },
          success: {
            fill: 'fill-dark-on-success',
            color: 'text-dark-on-success'
          },
          warning: {
            fill: 'fill-dark-on-warning',
            color: 'text-dark-on-warning'
          },
          error: {
            fill: 'fill-dark-on-error',
            color: 'text-dark-on-error'
          }
        }
      },
      text: {
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
          }
        }
      },
      soft: {
        light: {
          neutral: {
            fill: 'fill-light-neutral',
            color: 'text-light-neutral',
            background: 'bg-light-soft-neutral'
          },
          primary: {
            fill: 'fill-light-primary',
            color: 'text-light-primary',
            background: 'bg-light-soft-primary'
          },
          secondary: {
            fill: 'fill-light-secondary',
            color: 'text-light-secondary',
            background: 'bg-light-soft-secondary'
          },
          success: {
            fill: 'fill-light-success',
            color: 'text-light-success',
            background: 'bg-light-soft-success'
          },
          warning: {
            fill: 'fill-light-warning',
            color: 'text-light-warning',
            background: 'bg-light-soft-warning'
          },
          error: {
            fill: 'fill-light-error',
            color: 'text-light-error',
            background: 'bg-light-soft-error'
          }
        },
        dark: {
          neutral: {
            fill: 'fill-dark-soft-neutral',
            color: 'text-dark-soft-neutral',
            background: 'bg-dark-neutral'
          },
          primary: {
            fill: 'fill-dark-soft-primary',
            color: 'text-dark-soft-primary',
            background: 'bg-dark-primary'
          },
          secondary: {
            fill: 'fill-dark-soft-secondary',
            color: 'text-dark-soft-secondary',
            background: 'bg-dark-secondary'
          },
          success: {
            fill: 'fill-dark-soft-success',
            color: 'text-dark-soft-success',
            background: 'bg-dark-success'
          },
          warning: {
            fill: 'fill-dark-soft-warning',
            color: 'text-dark-soft-warning',
            background: 'bg-dark-warning'
          },
          error: {
            fill: 'fill-dark-soft-error',
            color: 'text-dark-soft-error',
            background: 'bg-dark-error'
          }
        }
      },
      plain: {
        light: {
          neutral: {
            fill: 'fill-light-neutral',
            color: 'text-light-neutral',
            background: 'bg-light-on-neutral'
          },
          primary: {
            fill: 'fill-light-primary',
            color: 'text-light-primary',
            background: 'bg-light-on-primary'
          },
          secondary: {
            fill: 'fill-light-secondary',
            color: 'text-light-secondary',
            background: 'bg-light-on-secondary'
          },
          success: {
            fill: 'fill-light-success',
            color: 'text-light-success',
            background: 'bg-light-on-success'
          },
          warning: {
            fill: 'fill-light-warning',
            color: 'text-light-warning',
            background: 'bg-light-on-warning'
          },
          error: {
            fill: 'fill-light-error',
            color: 'text-light-error',
            background: 'bg-light-on-error'
          }
        },
        dark: {
          neutral: {
            fill: 'fill-dark-neutral',
            color: 'text-dark-neutral',
            background: 'bg-dark-on-neutral'
          },
          primary: {
            fill: 'fill-dark-primary',
            color: 'text-dark-primary',
            background: 'bg-dark-on-primary'
          },
          secondary: {
            fill: 'fill-dark-secondary',
            color: 'text-dark-secondary',
            background: 'bg-dark-on-secondary'
          },
          success: {
            fill: 'fill-dark-success',
            color: 'text-dark-success',
            background: 'bg-dark-on-success'
          },
          warning: {
            fill: 'fill-dark-warning',
            color: 'text-dark-warning',
            background: 'bg-dark-on-warning'
          },
          error: {
            fill: 'fill-dark-error',
            color: 'text-dark-error',
            background: 'bg-dark-on-error'
          }
        }
      },
      solid: {
        light: {
          neutral: {
            fill: 'fill-light-on-neutral',
            color: 'text-light-on-neutral',
            background: 'bg-light-neutral'
          },
          primary: {
            fill: 'fill-light-on-primary',
            color: 'text-light-on-primary',
            background: 'bg-light-primary'
          },
          secondary: {
            fill: 'fill-light-on-secondary',
            color: 'text-light-on-secondary',
            background: 'bg-light-secondary'
          },
          success: {
            fill: 'fill-light-on-success',
            color: 'text-light-on-success',
            background: 'bg-light-success'
          },
          warning: {
            fill: 'fill-light-on-warning',
            color: 'text-light-on-warning',
            background: 'bg-light-warning'
          },
          error: {
            fill: 'fill-light-on-error',
            color: 'text-light-on-error',
            background: 'bg-light-error'
          }
        },
        dark: {
          neutral: {
            fill: 'fill-dark-on-neutral',
            color: 'text-dark-on-neutral',
            background: 'bg-dark-neutral'
          },
          primary: {
            fill: 'fill-dark-on-primary',
            color: 'text-dark-on-primary',
            background: 'bg-dark-primary'
          },
          secondary: {
            fill: 'fill-dark-on-secondary',
            color: 'text-dark-on-secondary',
            background: 'bg-dark-secondary'
          },
          success: {
            fill: 'fill-dark-on-success',
            color: 'text-dark-on-success',
            background: 'bg-dark-success'
          },
          warning: {
            fill: 'fill-dark-on-warning',
            color: 'text-dark-on-warning',
            background: 'bg-dark-warning'
          },
          error: {
            fill: 'fill-dark-on-error',
            color: 'text-dark-on-error',
            background: 'bg-dark-error'
          }
        }
      }
    },
    borderVariants: {
      default: {
        light: {
          neutral: {
            border: 'border-light-on-neutral'
          },
          primary: {
            border: 'border-light-on-primary'
          },
          secondary: {
            border: 'border-light-on-secondary'
          },
          success: {
            border: 'border-light-on-success'
          },
          warning: {
            border: 'border-light-on-warning'
          },
          error: {
            border: 'border-light-on-error'
          }
        },
        dark: {
          neutral: {
            border: 'border-dark-on-neutral'
          },
          primary: {
            border: 'border-dark-on-primary'
          },
          secondary: {
            border: 'border-dark-on-secondary'
          },
          success: {
            border: 'border-dark-on-success'
          },
          warning: {
            border: 'border-dark-on-warning'
          },
          error: {
            border: 'border-dark-on-error'
          }
        }
      },
      solid: {
        light: {
          neutral: {
            border: 'border-light-neutral'
          },
          primary: {
            border: 'border-light-primary'
          },
          secondary: {
            border: 'border-light-secondary'
          },
          success: {
            border: 'border-light-success'
          },
          warning: {
            border: 'border-light-warning'
          },
          error: {
            border: 'border-light-error'
          }
        },
        dark: {
          neutral: {
            border: 'border-dark-neutral'
          },
          primary: {
            border: 'border-dark-primary'
          },
          secondary: {
            border: 'border-dark-secondary'
          },
          success: {
            border: 'border-dark-success'
          },
          warning: {
            border: 'border-dark-warning'
          },
          error: {
            border: 'border-dark-error'
          }
        }
      }
    }
  }
};

export default markConfig;

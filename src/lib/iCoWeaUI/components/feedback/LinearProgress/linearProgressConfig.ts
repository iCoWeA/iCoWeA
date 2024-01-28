const linearProgressConfig = {
  defaultProps: {
    variant: 'default',
    color: 'primary',
    size: 'md',
    vertical: false,
    innerBar: 'neutral',
    value: 0
  },
  styles: {
    root: {
      base: {
        borderRadius: 'rounded-full'
      },
      disabled: {
        light: {
          background: 'bg-light-neutral/20'
        }
      },
      colors: {
        light: {
          neutral: {
            background: 'bg-light-neutral/10'
          },
          primary: {
            background: 'bg-light-primary/10'
          },
          secondary: {
            background: 'bg-light-secondary/10'
          },
          success: {
            background: 'bg-light-success/10'
          },
          warning: {
            background: 'bg-light-warning/10'
          },
          error: {
            background: 'bg-light-error/10'
          }
        }
      },
      sizes: {
        horizontal: {
          sm: {
            height: 'h-0.5'
          },
          md: {
            height: 'h-1'
          },
          lg: {
            height: 'h-2'
          }
        },
        vertical: {
          sm: {
            width: 'w-0.5'
          },
          md: {
            width: 'w-1'
          },
          lg: {
            width: 'w-2'
          }
        }
      },
      labelSizes: {
        horizontal: {
          height: 'h-4'
        },
        vertical: {
          width: 'w-4'
        }
      }
    },
    progressBar: {
      base: {
        position: 'relative',
        borderRadius: 'rounded-[inherit]',
        overflow: 'overflow-hidden'
      },
      orientations: {
        horizontal: {
          height: 'h-full',
          transition: 'transition-[width]'
        },
        vertical: {
          bottom: 'top-full',
          width: 'w-full',
          translate: '-translate-y-full',
          transition: 'transition-[height]'
        }
      },
      variants: {
        default: {
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
              color: 'text-light-on-primary',
              background: 'bg-light-primary'
            },
            secondary: {
              border: 'border-light-on-secondary',
              fill: 'fill-light-on-secondary',
              color: 'text-light-on-secondary',
              background: 'bg-light-secondary'
            },
            success: {
              border: 'border-light-on-success',
              fill: 'fill-light-on-success',
              color: 'text-light-on-success',
              background: 'bg-light-success'
            },
            warning: {
              border: 'border-light-on-warning',
              fill: 'fill-light-on-warning',
              color: 'text-light-on-warning',
              background: 'bg-light-warning'
            },
            error: {
              border: 'border-light-on-error',
              fill: 'fill-light-on-error',
              color: 'text-light-on-error',
              background: 'bg-light-error'
            }
          }
        },
        plain: {
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
              color: 'text-light-on-primary',
              background: 'bg-light-primary'
            },
            secondary: {
              border: 'border-light-on-secondary',
              fill: 'fill-light-on-secondary',
              color: 'text-light-on-secondary',
              background: 'bg-light-secondary'
            },
            success: {
              border: 'border-light-on-success',
              fill: 'fill-light-on-success',
              color: 'text-light-on-success',
              background: 'bg-light-success'
            },
            warning: {
              border: 'border-light-on-warning',
              fill: 'fill-light-on-warning',
              color: 'text-light-on-warning',
              background: 'bg-light-warning'
            },
            error: {
              border: 'border-light-on-error',
              fill: 'fill-light-on-error',
              color: 'text-light-on-error',
              background: 'bg-light-error'
            }
          }
        },
        soft: {
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
              color: 'text-light-on-primary',
              background: 'bg-light-primary'
            },
            secondary: {
              border: 'border-light-on-secondary',
              fill: 'fill-light-on-secondary',
              color: 'text-light-on-secondary',
              background: 'bg-light-secondary'
            },
            success: {
              border: 'border-light-on-success',
              fill: 'fill-light-on-success',
              color: 'text-light-on-success',
              background: 'bg-light-success'
            },
            warning: {
              border: 'border-light-on-warning',
              fill: 'fill-light-on-warning',
              color: 'text-light-on-warning',
              background: 'bg-light-warning'
            },
            error: {
              border: 'border-light-on-error',
              fill: 'fill-light-on-error',
              color: 'text-light-on-error',
              background: 'bg-light-error'
            }
          }
        },
        solid: {
          light: {
            neutral: {
              border: 'border-light-neutral',
              fill: 'fill-light-neutral',
              color: 'text-light-neutral',
              background: 'bg-light-on-neutral'
            },
            primary: {
              border: 'border-light-primary',
              fill: 'fill-light-primary',
              color: 'text-light-primary',
              background: 'bg-light-on-primary'
            },
            secondary: {
              border: 'border-light-secondary',
              fill: 'fill-light-secondary',
              color: 'text-light-secondary',
              background: 'bg-light-on-secondary'
            },
            success: {
              border: 'border-light-success',
              fill: 'fill-light-success',
              color: 'text-light-success',
              background: 'bg-light-on-success'
            },
            warning: {
              border: 'border-light-warning',
              fill: 'fill-light-warning',
              color: 'text-light-warning',
              background: 'bg-light-on-warning'
            },
            error: {
              border: 'border-light-error',
              fill: 'fill-light-error',
              color: 'text-light-error',
              background: 'bg-light-on-error'
            }
          }
        }
      }
    },
    label: {
      base: {
        position: 'relative',
        userSelect: 'select-none',
        whiteSpace: 'whitespace-nowrap'
      },
      vertical: {
        transform: '-rotate-90'
      }
    }
  }
};

export default linearProgressConfig;

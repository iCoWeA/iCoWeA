const spinnerConfig = {
  defaultProps: {
    variant: 'default',
    color: 'primary',
    size: 'md',
    innerBar: 'inherit',
    rotate: true,
    value: 75
  },
  styles: {
    root: {
      base: {
        position: 'relative'
      },
      disabled: {
        light: {
          stroke: 'stroke-light-neutral/40'
        }
      },
      sizes: {
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
      },
      variants: {
        default: {
          light: {
            neutral: {
              border: 'border-light-neutral',
              fill: 'fill-light-neutral',
              color: 'text-light-neutral',
              stroke: 'stroke-light-neutral'
            },
            primary: {
              border: 'border-light-primary',
              fill: 'fill-light-primary',
              color: 'text-light-primary',
              stroke: 'stroke-light-primary'
            },
            secondary: {
              border: 'border-light-secondary',
              fill: 'fill-light-secondary',
              color: 'text-light-secondary',
              stroke: 'stroke-light-secondary'
            },
            success: {
              border: 'border-light-success',
              fill: 'fill-light-success',
              color: 'text-light-success',
              stroke: 'stroke-light-success'
            },
            warning: {
              border: 'border-light-warning',
              fill: 'fill-light-warning',
              color: 'text-light-warning',
              stroke: 'stroke-light-warning'
            },
            error: {
              border: 'border-light-error',
              fill: 'fill-light-error',
              color: 'text-light-error',
              stroke: 'stroke-light-error'
            }
          }
        },
        plain: {
          light: {
            neutral: {
              border: 'border-light-neutral',
              fill: 'fill-light-neutral',
              color: 'text-light-neutral',
              stroke: 'stroke-light-neutral'
            },
            primary: {
              border: 'border-light-primary',
              fill: 'fill-light-primary',
              color: 'text-light-primary',
              stroke: 'stroke-light-primary'
            },
            secondary: {
              border: 'border-light-secondary',
              fill: 'fill-light-secondary',
              color: 'text-light-secondary',
              stroke: 'stroke-light-secondary'
            },
            success: {
              border: 'border-light-success',
              fill: 'fill-light-success',
              color: 'text-light-success',
              stroke: 'stroke-light-success'
            },
            warning: {
              border: 'border-light-warning',
              fill: 'fill-light-warning',
              color: 'text-light-warning',
              stroke: 'stroke-light-warning'
            },
            error: {
              border: 'border-light-error',
              fill: 'fill-light-error',
              color: 'text-light-error',
              stroke: 'stroke-light-error'
            }
          }
        },
        soft: {
          light: {
            neutral: {
              border: 'border-light-neutral',
              fill: 'fill-light-neutral',
              color: 'text-light-neutral',
              stroke: 'stroke-light-neutral'
            },
            primary: {
              border: 'border-light-primary',
              fill: 'fill-light-primary',
              color: 'text-light-primary',
              stroke: 'stroke-light-primary'
            },
            secondary: {
              border: 'border-light-secondary',
              fill: 'fill-light-secondary',
              color: 'text-light-secondary',
              stroke: 'stroke-light-secondary'
            },
            success: {
              border: 'border-light-success',
              fill: 'fill-light-success',
              color: 'text-light-success',
              stroke: 'stroke-light-success'
            },
            warning: {
              border: 'border-light-warning',
              fill: 'fill-light-warning',
              color: 'text-light-warning',
              stroke: 'stroke-light-warning'
            },
            error: {
              border: 'border-light-error',
              fill: 'fill-light-error',
              color: 'text-light-error',
              stroke: 'stroke-light-error'
            }
          }
        },
        solid: {
          light: {
            neutral: {
              border: 'border-light-on-neutral',
              fill: 'fill-light-on-neutral',
              color: 'text-light-on-neutral',
              stroke: 'stroke-light-on-neutral'
            },
            primary: {
              border: 'border-light-on-primary',
              fill: 'fill-light-on-primary',
              color: 'text-light-on-primary',
              stroke: 'stroke-light-on-primary'
            },
            secondary: {
              border: 'border-light-on-secondary',
              fill: 'fill-light-on-secondary',
              color: 'text-light-on-secondary',
              stroke: 'stroke-light-on-secondary'
            },
            success: {
              border: 'border-light-on-success',
              fill: 'fill-light-on-success',
              color: 'text-light-on-success',
              stroke: 'stroke-light-on-success'
            },
            warning: {
              border: 'border-light-on-warning',
              fill: 'fill-light-on-warning',
              color: 'text-light-on-warning',
              stroke: 'stroke-light-on-warning'
            },
            error: {
              border: 'border-light-on-error',
              fill: 'fill-light-on-error',
              color: 'text-light-on-error',
              stroke: 'stroke-light-on-error'
            }
          }
        }
      }
    },
    container: {
      base: {
        display: 'block',
        width: 'w-full',
        height: 'h-full'
      },
      rotate: {
        animation: 'animate-spin'
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
        }
      },
      strokes: {
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
          }
        }
      }
    },
    progressBar: {
      base: {
        display: 'block',
        fill: 'fill-transparent',
        transformOrigin: 'origin-center',
        transform: '-rotate-90',
        transition: 'transition-[stroke]'
      }
    },
    label: {
      base: {
        position: 'absolute',
        left: 'left-2/4',
        top: 'top-2/4',
        translate: '-translate-x-2/4 -translate-y-2/4',
        userSelect: 'select-none'
      }
    }
  }
};

export default spinnerConfig;

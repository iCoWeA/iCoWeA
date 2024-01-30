const buttonSpinnerConfig = {
  defaultProps: {
    variant: 'default',
    color: 'primary',
    value: 75
  },
  styles: {
    root: {
      base: {
        position: 'absolute',
        left: 'left-2/4',
        top: 'top-2/4',
        translate: '-translate-x-2/4 -translate-y-2/4',
        display: 'block',
        width: 'w-5',
        height: 'h-5'
      },
      disabled: {
        light: {
          stroke: 'stroke-light-neutral/40'
        }
      },
      variants: {
        default: {
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
            }
          }
        },
        plain: {
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
            }
          }
        },
        soft: {
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
            }
          }
        },
        solid: {
          light: {
            neutral: {
              stroke: 'stroke-light-on-neutral'
            },
            primary: {
              stroke: 'stroke-light-on-primary'
            },
            secondary: {
              stroke: 'stroke-light-on-secondary'
            },
            success: {
              stroke: 'stroke-light-on-success'
            },
            warning: {
              stroke: 'stroke-light-on-warning'
            },
            error: {
              stroke: 'stroke-light-on-error'
            }
          }
        }
      }
    },
    progressBar: {
      base: {
        display: 'block',
        fill: 'fill-transparent',
        transformOrigin: 'origin-center',
        animation: 'animate-spin'
      }
    }
  }
};

export default buttonSpinnerConfig;

const boxConfig = {
  defaultProps: {
    variant: 'default',
    color: 'inherit',
    spacing: 'none',
    panel: false,
    bordered: 'none',
    direction: 'row',
    wrap: 'wrap',
    justify: 'start',
    align: 'stretch',
    gap: 'none',
    grow: false,
    block: false
  },
  styles: {
    base: {
      display: 'flex',
      font: 'antialiased font-normal text-sm font-sans'
    },
    block: {
      width: 'w-full'
    },
    grow: {
      flexGrow: 'grow'
    },
    borders: {
      all: {
        border: 'border'
      },
      x: {
        border: 'border-x'
      },
      y: {
        border: 'border-y'
      },
      top: {
        border: 'border-t'
      },
      bottom: {
        border: 'border-b'
      },
      left: {
        border: 'border-l'
      },
      right: {
        border: 'border-r'
      }
    },
    disabled: {
      light: {
        border: 'border-light-neutral/40',
        fill: 'fill-light-neutral/40',
        color: 'text-light-neutral/40',
        pointerEvents: 'pointer-events-none'
      }
    },
    disabledBg: {
      light: {
        background: 'bg-light-neutral/20'
      }
    },
    directions: {
      col: {
        flexDirection: 'flex-col'
      },
      'row-reverse': {
        flexDirection: 'flex-row-reverse'
      },
      'col-reverse': {
        flexDirection: 'flex-col-reverse'
      }
    },
    wraps: {
      wrap: {
        flexWrap: 'flex-wrap'
      },
      'wrap-reverse': {
        flexWrap: 'flex-wrap-reverse'
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
    gaps: {
      base: {
        gap: 'gap-2'
      },
      sm: {
        gap: 'gap-4'
      },
      md: {
        gap: 'gap-6'
      },
      lg: {
        gap: 'gap-8'
      }
    },
    spacing: {
      default: {
        sm: {
          paddding: 'p-4'
        },
        md: {
          paddding: 'p-6'
        },
        lg: {
          paddding: 'p-8'
        }
      },
      panel: {
        sm: {
          paddding: 'px-4 py-2'
        },
        md: {
          paddding: 'px-6 py-3'
        },
        lg: {
          paddding: 'px-8 py-4'
        }
      }
    },
    variants: {
      default: {
        light: {
          neutral: {
            border: 'border-light-neutral',
            fill: 'fill-light-neutral',
            color: 'text-light-neutral'
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
            border: 'border-light-neutral',
            fill: 'fill-light-neutral',
            color: 'text-light-neutral',
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
            border: 'border-light-neutral',
            fill: 'fill-light-neutral',
            color: 'text-light-neutral',
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

export default boxConfig;

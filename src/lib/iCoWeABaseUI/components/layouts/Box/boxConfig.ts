const boxConfig = {
  defaultProps: {
    position: 'static',
    block: false,
    spacing: 'none',
    variant: 'default',
    color: 'inherit',
    border: 'none',
    radius: 'none',
    shadow: false,
    grow: false
  },
  styles: {
    base: {
      display: 'block'
    },
    block: {
      width: 'w-full'
    },
    grow: {
      flexGrow: 'grow'
    },
    shadow: {
      boxShadow: 'shadow-xl'
    },
    positions: {
      relative: {
        position: 'relative'
      },
      fixed: {
        position: 'fixed'
      },
      absolute: {
        position: 'absolute'
      },
      sticky: {
        position: 'sticky'
      }
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
    radiuses: {
      rounded: {
        borderRadius: 'rounded-xl'
      },
      circular: {
        borderRadius: 'rounded-full'
      }
    },
    spacing: {
      sm: {
        paddding: 'p-4'
      },
      md: {
        paddding: 'p-6'
      },
      lg: {
        paddding: 'p-8'
      },
      'sm-panel': {
        paddding: 'px-4 py-2'
      },
      'md-panel': {
        paddding: 'px-6 py-3'
      },
      'lg-panel': {
        paddding: 'px-8 py-4'
      }
    },
    disabled: {
      light: {
        border: 'border-light-neutral/40',
        fill: 'fill-light-neutral/40',
        color: 'text-light-neutral/40',
        background: 'bg-light-neutral/20'
      },
      dark: {
        border: 'border-dark-neutral/40',
        fill: 'fill-dark-neutral/40',
        color: 'text-dark-neutral/40',
        background: 'bg-dark-neutral/20'
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

export default boxConfig;

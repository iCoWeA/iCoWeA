const iconConfig = {
  defaultProps: {
    size: 'md',
    spacing: 'text',
    variant: 'text',
    color: 'inherit',
    border: false,
    radius: 'none'
  },
  styles: {
    base: {
      display: 'inline-block'
    },
    border: {
      border: 'border'
    },
    spacing: {
      sm: {
        padding: 'p-1.5'
      },
      md: {
        padding: 'p-2.5'
      },
      lg: {
        padding: 'p-3.5'
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
    sizes: {
      default: {
        sm: {
          height: 'h-8'
        },
        md: {
          height: 'h-10'
        },
        lg: {
          height: 'h-12'
        }
      },
      text: {
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
      bordered: {
        sm: {
          height: 'h-8.5'
        },
        md: {
          height: 'h-10.5'
        },
        lg: {
          height: 'h-12.5'
        }
      }
    },
    variants: {
      default: {
        light: {
          neutral: {
            fill: 'fill-light-on-neutral'
          },
          primary: {
            fill: 'fill-light-on-primary'
          },
          secondary: {
            fill: 'fill-light-on-secondary'
          },
          success: {
            fill: 'fill-light-on-success'
          },
          warning: {
            fill: 'fill-light-on-warning'
          },
          error: {
            fill: 'fill-light-on-error'
          }
        },
        dark: {
          neutral: {
            fill: 'fill-dark-on-neutral'
          },
          primary: {
            fill: 'fill-dark-on-primary'
          },
          secondary: {
            fill: 'fill-dark-on-secondary'
          },
          success: {
            fill: 'fill-dark-on-success'
          },
          warning: {
            fill: 'fill-dark-on-warning'
          },
          error: {
            fill: 'fill-dark-on-error'
          }
        }
      },
      text: {
        light: {
          neutral: {
            fill: 'fill-light-neutral'
          },
          primary: {
            fill: 'fill-light-primary'
          },
          secondary: {
            fill: 'fill-light-secondary'
          },
          success: {
            fill: 'fill-light-success'
          },
          warning: {
            fill: 'fill-light-warning'
          },
          error: {
            fill: 'fill-light-error'
          }
        },
        dark: {
          neutral: {
            fill: 'fill-dark-neutral'
          },
          primary: {
            fill: 'fill-dark-primary'
          },
          secondary: {
            fill: 'fill-dark-secondary'
          },
          success: {
            fill: 'fill-dark-success'
          },
          warning: {
            fill: 'fill-dark-warning'
          },
          error: {
            fill: 'fill-dark-error'
          }
        }
      },
      soft: {
        light: {
          neutral: {
            fill: 'fill-light-neutral',
            background: 'bg-light-soft-neutral'
          },
          primary: {
            fill: 'fill-light-primary',
            background: 'bg-light-soft-primary'
          },
          secondary: {
            fill: 'fill-light-secondary',
            background: 'bg-light-soft-secondary'
          },
          success: {
            fill: 'fill-light-success',
            background: 'bg-light-soft-success'
          },
          warning: {
            fill: 'fill-light-warning',
            background: 'bg-light-soft-warning'
          },
          error: {
            fill: 'fill-light-error',
            background: 'bg-light-soft-error'
          }
        },
        dark: {
          neutral: {
            fill: 'fill-dark-soft-neutral',
            background: 'bg-dark-neutral'
          },
          primary: {
            fill: 'fill-dark-soft-primary',
            background: 'bg-dark-primary'
          },
          secondary: {
            fill: 'fill-dark-soft-secondary',
            background: 'bg-dark-secondary'
          },
          success: {
            fill: 'fill-dark-soft-success',
            background: 'bg-dark-success'
          },
          warning: {
            fill: 'fill-dark-soft-warning',
            background: 'bg-dark-warning'
          },
          error: {
            fill: 'fill-dark-soft-error',
            background: 'bg-dark-error'
          }
        }
      },
      plain: {
        light: {
          neutral: {
            fill: 'fill-light-neutral',
            background: 'bg-light-on-neutral'
          },
          primary: {
            fill: 'fill-light-primary',
            background: 'bg-light-on-primary'
          },
          secondary: {
            fill: 'fill-light-secondary',
            background: 'bg-light-on-secondary'
          },
          success: {
            fill: 'fill-light-success',
            background: 'bg-light-on-success'
          },
          warning: {
            fill: 'fill-light-warning',
            background: 'bg-light-on-warning'
          },
          error: {
            fill: 'fill-light-error',
            background: 'bg-light-on-error'
          }
        },
        dark: {
          neutral: {
            fill: 'fill-dark-neutral',
            background: 'bg-dark-on-neutral'
          },
          primary: {
            fill: 'fill-dark-primary',
            background: 'bg-dark-on-primary'
          },
          secondary: {
            fill: 'fill-dark-secondary',
            background: 'bg-dark-on-secondary'
          },
          success: {
            fill: 'fill-dark-success',
            background: 'bg-dark-on-success'
          },
          warning: {
            fill: 'fill-dark-warning',
            background: 'bg-dark-on-warning'
          },
          error: {
            fill: 'fill-dark-error',
            background: 'bg-dark-on-error'
          }
        }
      },
      solid: {
        light: {
          neutral: {
            fill: 'fill-light-on-neutral',
            background: 'bg-light-neutral'
          },
          primary: {
            fill: 'fill-light-on-primary',
            background: 'bg-light-primary'
          },
          secondary: {
            fill: 'fill-light-on-secondary',
            background: 'bg-light-secondary'
          },
          success: {
            fill: 'fill-light-on-success',
            background: 'bg-light-success'
          },
          warning: {
            fill: 'fill-light-on-warning',
            background: 'bg-light-warning'
          },
          error: {
            fill: 'fill-light-on-error',
            background: 'bg-light-error'
          }
        },
        dark: {
          neutral: {
            fill: 'fill-dark-on-neutral',
            background: 'bg-dark-neutral'
          },
          primary: {
            fill: 'fill-dark-on-primary',
            background: 'bg-dark-primary'
          },
          secondary: {
            fill: 'fill-dark-on-secondary',
            background: 'bg-dark-secondary'
          },
          success: {
            fill: 'fill-dark-on-success',
            background: 'bg-dark-success'
          },
          warning: {
            fill: 'fill-dark-on-warning',
            background: 'bg-dark-warning'
          },
          error: {
            fill: 'fill-dark-on-error',
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

export default iconConfig;

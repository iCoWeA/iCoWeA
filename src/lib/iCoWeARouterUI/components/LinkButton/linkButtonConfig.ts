const linkButtonConfig = {
  defaultProps: {
    size: 'md',
    block: false,
    icon: false,
    variant: 'text',
    color: 'primary',
    border: false,
    radius: 'circular',
    loading: false,
    noRipple: false
  },
  styles: {
    root: {
      base: {
        display: 'flex',
        width: 'w-fit',
        height: 'h-fit',
        alignItems: 'items-center',
        gap: 'gap-2',
        font: 'font-semibold',
        cursor: 'cursor-pointer',
        userSelect: 'select-none',
        transition: 'transition-shadow',
        focus: 'focus:outline-none',
        focusVisible: 'focus-visible:ring-4 focus-visible:border-transparent'
      },
      ripple: {
        position: 'relative'
      },
      block: {
        width: 'w-full',
        justifyContent: 'justify-center'
      },
      icon: {
        aspectRatio: 'aspect-square'
      },
      border: {
        border: 'border'
      },
      shadow: {
        shadow: 'shadow-lg',
        hover: 'hover:shadow-xl',
        active: 'active:shadow-none',
        focus: 'focus:shadow-none',
        focusVisible: 'focus-visible:shadow-none'
      },
      loading: {
        border: 'border-transparent',
        fill: 'fill-transparent',
        color: 'text-transparent',
        pointerEvents: 'pointer-events-none'
      },
      radiuses: {
        rounded: {
          borderRadius: 'rounded-xl'
        },
        circular: {
          borderRadius: 'rounded-full'
        }
      },
      disabled: {
        light: {
          border: 'border-light-neutral/40',
          fill: 'fill-light-neutral/40',
          color: 'text-light-neutral/40',
          background: 'bg-light-neutral/20',
          pointer: 'pointer-events-none'
        },
        dark: {
          border: 'border-dark-neutral/40',
          fill: 'fill-dark-neutral/40',
          color: 'text-dark-neutral/40',
          background: 'bg-dark-neutral/20',
          pointer: 'pointer-events-none'
        }
      },
      sizes: {
        default: {
          none: {
            font: 'text-xs'
          },
          sm: {
            padding: 'px-3 py-1.5',
            font: 'text-sm'
          },
          md: {
            padding: 'px-4 py-2.5',
            font: 'text-sm'
          },
          lg: {
            padding: 'px-5 py-3.5',
            font: 'text-sm'
          }
        },
        icon: {
          none: {
            font: 'text-xs'
          },
          sm: {
            padding: 'p-1.5',
            font: 'text-sm'
          },
          md: {
            padding: 'p-2.5',
            font: 'text-sm'
          },
          lg: {
            padding: 'p-3.5',
            font: 'text-sm'
          }
        }
      },
      variants: {
        default: {
          light: {
            neutral: {
              fill: 'fill-light-on-neutral',
              color: 'text-light-on-neutral',
              focusVisible: 'focus-visible:ring-light-on-neutral'
            },
            primary: {
              fill: 'fill-light-on-primary',
              color: 'text-light-on-primary',
              focusVisible: 'focus-visible:ring-light-on-primary'
            },
            secondary: {
              fill: 'fill-light-on-secondary',
              color: 'text-light-on-secondary',
              focusVisible: 'focus-visible:ring-light-on-secondary'
            },
            success: {
              fill: 'fill-light-on-success',
              color: 'text-light-on-success',
              focusVisible: 'focus-visible:ring-light-on-success'
            },
            warning: {
              fill: 'fill-light-on-warning',
              color: 'text-light-on-warning',
              focusVisible: 'focus-visible:ring-light-on-warning'
            },
            error: {
              fill: 'fill-light-on-error',
              color: 'text-light-on-error',
              focusVisible: 'focus-visible:ring-light-on-error'
            }
          },
          dark: {
            neutral: {
              fill: 'fill-dark-on-neutral',
              color: 'text-dark-on-neutral',
              focusVisible: 'focus-visible:ring-dark-on-neutral'
            },
            primary: {
              fill: 'fill-dark-on-primary',
              color: 'text-dark-on-primary',
              focusVisible: 'focus-visible:ring-dark-on-primary'
            },
            secondary: {
              fill: 'fill-dark-on-secondary',
              color: 'text-dark-on-secondary',
              focusVisible: 'focus-visible:ring-dark-on-secondary'
            },
            success: {
              fill: 'fill-dark-on-success',
              color: 'text-dark-on-success',
              focusVisible: 'focus-visible:ring-dark-on-success'
            },
            warning: {
              fill: 'fill-dark-on-warning',
              color: 'text-dark-on-warning',
              focusVisible: 'focus-visible:ring-dark-on-warning'
            },
            error: {
              fill: 'fill-dark-on-error',
              color: 'text-dark-on-error',
              focusVisible: 'focus-visible:ring-dark-on-error'
            }
          }
        },
        text: {
          light: {
            neutral: {
              fill: 'fill-light-neutral',
              color: 'text-light-neutral',
              focusVisible: 'focus-visible:ring-light-neutral'
            },
            primary: {
              fill: 'fill-light-primary',
              color: 'text-light-primary',
              focusVisible: 'focus-visible:ring-light-primary'
            },
            secondary: {
              fill: 'fill-light-secondary',
              color: 'text-light-secondary',
              focusVisible: 'focus-visible:ring-light-secondary'
            },
            success: {
              fill: 'fill-light-success',
              color: 'text-light-success',
              focusVisible: 'focus-visible:ring-light-success'
            },
            warning: {
              fill: 'fill-light-warning',
              color: 'text-light-warning',
              focusVisible: 'focus-visible:ring-light-warning'
            },
            error: {
              fill: 'fill-light-error',
              color: 'text-light-error',
              focusVisible: 'focus-visible:ring-light-error'
            }
          },
          dark: {
            neutral: {
              fill: 'fill-dark-neutral',
              color: 'text-dark-neutral',
              focusVisible: 'focus-visible:ring-dark-neutral'
            },
            primary: {
              fill: 'fill-dark-primary',
              color: 'text-dark-primary',
              focusVisible: 'focus-visible:ring-dark-primary'
            },
            secondary: {
              fill: 'fill-dark-secondary',
              color: 'text-dark-secondary',
              focusVisible: 'focus-visible:ring-dark-secondary'
            },
            success: {
              fill: 'fill-dark-success',
              color: 'text-dark-success',
              focusVisible: 'focus-visible:ring-dark-success'
            },
            warning: {
              fill: 'fill-dark-warning',
              color: 'text-dark-warning',
              focusVisible: 'focus-visible:ring-dark-warning'
            },
            error: {
              fill: 'fill-dark-error',
              color: 'text-dark-error',
              focusVisible: 'focus-visible:ring-dark-error'
            }
          }
        },
        soft: {
          light: {
            neutral: {
              fill: 'fill-light-neutral',
              color: 'text-light-neutral',
              background: 'bg-light-soft-neutral',
              focusVisible: 'focus-visible:ring-light-neutral'
            },
            primary: {
              fill: 'fill-light-primary',
              color: 'text-light-primary',
              background: 'bg-light-soft-primary',
              focusVisible: 'focus-visible:ring-light-primary'
            },
            secondary: {
              fill: 'fill-light-secondary',
              color: 'text-light-secondary',
              background: 'bg-light-soft-secondary',
              focusVisible: 'focus-visible:ring-light-secondary'
            },
            success: {
              fill: 'fill-light-success',
              color: 'text-light-success',
              background: 'bg-light-soft-success',
              focusVisible: 'focus-visible:ring-light-success'
            },
            warning: {
              fill: 'fill-light-warning',
              color: 'text-light-warning',
              background: 'bg-light-soft-warning',
              focusVisible: 'focus-visible:ring-light-warning'
            },
            error: {
              fill: 'fill-light-error',
              color: 'text-light-error',
              background: 'bg-light-soft-error',
              focusVisible: 'focus-visible:ring-light-error'
            }
          },
          dark: {
            neutral: {
              fill: 'fill-dark-neutral',
              color: 'text-dark-neutral',
              background: 'bg-dark-soft-neutral',
              focusVisible: 'focus-visible:ring-dark-neutral'
            },
            primary: {
              fill: 'fill-dark-primary',
              color: 'text-dark-primary',
              background: 'bg-dark-soft-primary',
              focusVisible: 'focus-visible:ring-dark-primary'
            },
            secondary: {
              fill: 'fill-dark-secondary',
              color: 'text-dark-secondary',
              background: 'bg-dark-soft-secondary',
              focusVisible: 'focus-visible:ring-dark-secondary'
            },
            success: {
              fill: 'fill-dark-success',
              color: 'text-dark-success',
              background: 'bg-dark-soft-success',
              focusVisible: 'focus-visible:ring-dark-success'
            },
            warning: {
              fill: 'fill-dark-warning',
              color: 'text-dark-warning',
              background: 'bg-dark-soft-warning',
              focusVisible: 'focus-visible:ring-dark-warning'
            },
            error: {
              fill: 'fill-dark-error',
              color: 'text-dark-error',
              background: 'bg-dark-soft-error',
              focusVisible: 'focus-visible:ring-dark-error'
            }
          }
        },
        plain: {
          light: {
            neutral: {
              fill: 'fill-light-neutral',
              color: 'text-light-neutral',
              background: 'bg-light-on-neutral',
              focusVisible: 'focus-visible:ring-light-neutral'
            },
            primary: {
              fill: 'fill-light-primary',
              color: 'text-light-primary',
              background: 'bg-light-on-primary',
              focusVisible: 'focus-visible:ring-light-primary'
            },
            secondary: {
              fill: 'fill-light-secondary',
              color: 'text-light-secondary',
              background: 'bg-light-on-secondary',
              focusVisible: 'focus-visible:ring-light-secondary'
            },
            success: {
              fill: 'fill-light-success',
              color: 'text-light-success',
              background: 'bg-light-on-success',
              focusVisible: 'focus-visible:ring-light-success'
            },
            warning: {
              fill: 'fill-light-warning',
              color: 'text-light-warning',
              background: 'bg-light-on-warning',
              focusVisible: 'focus-visible:ring-light-warning'
            },
            error: {
              fill: 'fill-light-error',
              color: 'text-light-error',
              background: 'bg-light-on-error',
              focusVisible: 'focus-visible:ring-light-error'
            }
          },
          dark: {
            neutral: {
              fill: 'fill-dark-neutral',
              color: 'text-dark-neutral',
              background: 'bg-dark-on-neutral',
              focusVisible: 'focus-visible:ring-dark-neutral'
            },
            primary: {
              fill: 'fill-dark-primary',
              color: 'text-dark-primary',
              background: 'bg-dark-on-primary',
              focusVisible: 'focus-visible:ring-dark-primary'
            },
            secondary: {
              fill: 'fill-dark-secondary',
              color: 'text-dark-secondary',
              background: 'bg-dark-on-secondary',
              focusVisible: 'focus-visible:ring-dark-secondary'
            },
            success: {
              fill: 'fill-dark-success',
              color: 'text-dark-success',
              background: 'bg-dark-on-success',
              focusVisible: 'focus-visible:ring-dark-success'
            },
            warning: {
              fill: 'fill-dark-warning',
              color: 'text-dark-warning',
              background: 'bg-dark-on-warning',
              focusVisible: 'focus-visible:ring-dark-warning'
            },
            error: {
              fill: 'fill-dark-error',
              color: 'text-dark-error',
              background: 'bg-dark-on-error',
              focusVisible: 'focus-visible:ring-dark-error'
            }
          }
        },
        solid: {
          light: {
            neutral: {
              fill: 'fill-light-on-neutral',
              color: 'text-light-on-neutral',
              background: 'bg-light-neutral',
              focusVisible: 'focus-visible:ring-light-on-neutral'
            },
            primary: {
              fill: 'fill-light-on-primary',
              color: 'text-light-on-primary',
              background: 'bg-light-primary',
              focusVisible: 'focus-visible:ring-light-on-primary'
            },
            secondary: {
              fill: 'fill-light-on-secondary',
              color: 'text-light-on-secondary',
              background: 'bg-light-secondary',
              focusVisible: 'focus-visible:ring-light-on-secondary'
            },
            success: {
              fill: 'fill-light-on-success',
              color: 'text-light-on-success',
              background: 'bg-light-success',
              focusVisible: 'focus-visible:ring-light-on-success'
            },
            warning: {
              fill: 'fill-light-on-warning',
              color: 'text-light-on-warning',
              background: 'bg-light-warning',
              focusVisible: 'focus-visible:ring-light-on-warning'
            },
            error: {
              fill: 'fill-light-on-error',
              color: 'text-light-on-error',
              background: 'bg-light-error',
              focusVisible: 'focus-visible:ring-light-on-error'
            }
          },
          dark: {
            neutral: {
              fill: 'fill-dark-on-neutral',
              color: 'text-dark-on-neutral',
              background: 'bg-dark-neutral',
              focusVisible: 'focus-visible:ring-dark-on-neutral'
            },
            primary: {
              fill: 'fill-dark-on-primary',
              color: 'text-dark-on-primary',
              background: 'bg-dark-primary',
              focusVisible: 'focus-visible:ring-dark-on-primary'
            },
            secondary: {
              fill: 'fill-dark-on-secondary',
              color: 'text-dark-on-secondary',
              background: 'bg-dark-secondary',
              focusVisible: 'focus-visible:ring-dark-on-secondary'
            },
            success: {
              fill: 'fill-dark-on-success',
              color: 'text-dark-on-success',
              background: 'bg-dark-success',
              focusVisible: 'focus-visible:ring-dark-on-success'
            },
            warning: {
              fill: 'fill-dark-on-warning',
              color: 'text-dark-on-warning',
              background: 'bg-dark-warning',
              focusVisible: 'focus-visible:ring-dark-on-warning'
            },
            error: {
              fill: 'fill-dark-on-error',
              color: 'text-dark-on-error',
              background: 'bg-dark-error',
              focusVisible: 'focus-visible:ring-dark-on-error'
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
    },
    spinner: {
      base: {
        position: 'absolute',
        left: 'left-2/4',
        top: 'top-2/4',
        transform: '-translate-x-2/4 -translate-y-2/4'
      }
    }
  }
};

export default linkButtonConfig;

const navlinkConfig = {
  defaultProps: {
    variant: 'default',
    activeVariant: 'solid',
    color: 'neutral',
    activeColor: 'primary',
    size: 'md',
    icon: false,
    bordered: false,
    block: false,
    shadow: false,
    loading: false,
    noRipple: false
  },
  styles: {
    root: {
      base: {
        position: 'relative',
        display: 'flex',
        width: 'w-fit',
        height: 'h-fit',
        borderRadius: 'rounded-full',
        alignItems: 'items-center',
        gap: 'gap-2',
        font: 'antialiased font-semibold text-sm font-sans',
        userSelect: 'select-none',
        cursor: 'cursor-pointer',
        transition: 'transition-all',
        focus: 'focus:outline-none',
        focusVisible: 'focus-visible:ring-4'
      },
      active: {
        group: 'active'
      },
      icon: {
        aspectRatio: 'aspect-square'
      },
      border: {
        border: 'border'
      },
      block: {
        width: 'w-full',
        justifyContent: 'justify-center'
      },
      shadow: {
        shadow: 'shadow-sm',
        hover: 'hover:shadow-md',
        active: 'active:shadow-none',
        focus: 'focus:shadow-none',
        focusVisible: 'focus-visible:shadow-none'
      },
      loading: {
        border: 'border-transparent',
        fill: 'fill-transparent',
        text: 'text-transparent'
      },
      disabled: {
        light: {
          border: 'border-light-neutral/40',
          fill: 'fill-light-neutral/40',
          color: 'text-light-neutral/40',
          background: 'bg-light-neutral/20',
          pointer: 'pointer-events-none'
        }
      },
      sizes: {
        default: {
          sm: {
            padding: 'px-3 py-1.5'
          },
          md: {
            padding: 'px-4 py-2'
          },
          lg: {
            padding: 'px-5 py-2.5'
          }
        },
        icon: {
          sm: {
            padding: 'p-1.5'
          },
          md: {
            padding: 'p-2'
          },
          lg: {
            padding: 'p-2.5'
          }
        }
      },
      variants: {
        default: {
          light: {
            neutral: {
              border: 'border-light-neutral',
              fill: 'fill-light-neutral',
              color: 'text-light-neutral',
              focusVisible: 'focus-visible:ring-light-neutral'
            },
            primary: {
              border: 'border-light-primary',
              fill: 'fill-light-primary',
              color: 'text-light-primary',
              focusVisible: 'focus-visible:ring-light-primary'
            },
            secondary: {
              border: 'border-light-secondary',
              fill: 'fill-light-secondary',
              color: 'text-light-secondary',
              focusVisible: 'focus-visible:ring-light-secondary'
            },
            success: {
              border: 'border-light-success',
              fill: 'fill-light-success',
              color: 'text-light-success',
              focusVisible: 'focus-visible:ring-light-success'
            },
            warning: {
              border: 'border-light-warning',
              fill: 'fill-light-warning',
              color: 'text-light-warning',
              focusVisible: 'focus-visible:ring-light-warning'
            },
            error: {
              border: 'border-light-error',
              fill: 'fill-light-error',
              color: 'text-light-error',
              focusVisible: 'focus-visible:ring-light-error'
            }
          }
        },
        plain: {
          light: {
            neutral: {
              border: 'border-light-neutral',
              fill: 'fill-light-neutral',
              color: 'text-light-neutral',
              background: 'bg-light-neutral-variant',
              focusVisible: 'focus-visible:ring-light-neutral'
            },
            primary: {
              border: 'border-light-primary',
              fill: 'fill-light-primary',
              color: 'text-light-primary',
              background: 'bg-light-neutral-variant',
              focusVisible: 'focus-visible:ring-light-primary'
            },
            secondary: {
              border: 'border-light-secondary',
              fill: 'fill-light-secondary',
              color: 'text-light-secondary',
              background: 'bg-light-neutral-variant',
              focusVisible: 'focus-visible:ring-light-secondary'
            },
            success: {
              border: 'border-light-success',
              fill: 'fill-light-success',
              color: 'text-light-success',
              background: 'bg-light-neutral-variant',
              focusVisible: 'focus-visible:ring-light-success'
            },
            warning: {
              border: 'border-light-warning',
              fill: 'fill-light-warning',
              color: 'text-light-warning',
              background: 'bg-light-neutral-variant',
              focusVisible: 'focus-visible:ring-light-warning'
            },
            error: {
              border: 'border-light-error',
              fill: 'fill-light-error',
              color: 'text-light-error',
              background: 'bg-light-neutral-variant',
              focusVisible: 'focus-visible:ring-light-error'
            }
          }
        },
        soft: {
          light: {
            neutral: {
              border: 'border-light-neutral',
              fill: 'fill-light-neutral',
              color: 'text-light-neutral',
              background: 'bg-light-soft-neutral',
              focusVisible: 'focus-visible:ring-light-neutral'
            },
            primary: {
              border: 'border-light-primary',
              fill: 'fill-light-primary',
              color: 'text-light-primary',
              background: 'bg-light-soft-primary',
              focusVisible: 'focus-visible:ring-light-primary'
            },
            secondary: {
              border: 'border-light-secondary',
              fill: 'fill-light-secondary',
              color: 'text-light-secondary',
              background: 'bg-light-soft-secondary',
              focusVisible: 'focus-visible:ring-light-secondary'
            },
            success: {
              border: 'border-light-success',
              fill: 'fill-light-success',
              color: 'text-light-success',
              background: 'bg-light-soft-success',
              focusVisible: 'focus-visible:ring-light-success'
            },
            warning: {
              border: 'border-light-warning',
              fill: 'fill-light-warning',
              color: 'text-light-warning',
              background: 'bg-light-soft-warning',
              focusVisible: 'focus-visible:ring-light-warning'
            },
            error: {
              border: 'border-light-error',
              fill: 'fill-light-error',
              color: 'text-light-error',
              background: 'bg-light-soft-error',
              focusVisible: 'focus-visible:ring-light-error'
            }
          }
        },
        solid: {
          light: {
            neutral: {
              border: 'border-light-on-neutral',
              fill: 'fill-light-on-neutral',
              color: 'text-light-on-neutral',
              background: 'bg-light-neutral',
              focusVisible: 'focus-visible:ring-light-neutral'
            },
            primary: {
              border: 'border-light-on-primary',
              fill: 'fill-light-on-primary',
              color: 'text-light-on-primary',
              background: 'bg-light-primary',
              focusVisible: 'focus-visible:ring-light-primary'
            },
            secondary: {
              border: 'border-light-on-secondary',
              fill: 'fill-light-on-secondary',
              color: 'text-light-on-secondary',
              background: 'bg-light-secondary',
              focusVisible: 'focus-visible:ring-light-secondary'
            },
            success: {
              border: 'border-light-on-success',
              fill: 'fill-light-on-success',
              color: 'text-light-on-success',
              background: 'bg-light-success',
              focusVisible: 'focus-visible:ring-light-success'
            },
            warning: {
              border: 'border-light-on-warning',
              fill: 'fill-light-on-warning',
              color: 'text-light-on-warning',
              background: 'bg-light-warning',
              focusVisible: 'focus-visible:ring-light-warning'
            },
            error: {
              border: 'border-light-on-error',
              fill: 'fill-light-on-error',
              color: 'text-light-on-error',
              background: 'bg-light-error',
              focusVisible: 'focus-visible:ring-light-error'
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
        transform: '-translate-x-2/4 -translate-y-2/4',
        width: 'w-5',
        height: 'h-5'
      },
      variants: {
        default: {
          light: {
            neutral: {
              border: 'border-light-neutral',
              stroke: 'stroke-light-neutral',
              fill: 'fill-light-neutral',
              color: 'text-light-neutral'
            },
            primary: {
              border: 'border-light-primary',
              stroke: 'stroke-light-primary',
              fill: 'fill-light-primary',
              color: 'text-light-primary'
            },
            secondary: {
              border: 'border-light-secondary',
              stroke: 'stroke-light-secondary',
              fill: 'fill-light-secondary',
              color: 'text-light-secondary'
            },
            success: {
              border: 'border-light-success',
              stroke: 'stroke-light-success',
              fill: 'fill-light-success',
              color: 'text-light-success'
            },
            warning: {
              border: 'border-light-warning',
              stroke: 'stroke-light-warning',
              fill: 'fill-light-warning',
              color: 'text-light-warning'
            },
            error: {
              border: 'border-light-error',
              stroke: 'stroke-light-error',
              fill: 'fill-light-error',
              color: 'text-light-error'
            }
          }
        },
        plain: {
          light: {
            neutral: {
              border: 'border-light-neutral',
              stroke: 'stroke-light-neutral',
              fill: 'fill-light-neutral',
              color: 'text-light-neutral'
            },
            primary: {
              border: 'border-light-primary',
              stroke: 'stroke-light-primary',
              fill: 'fill-light-primary',
              color: 'text-light-primary'
            },
            secondary: {
              border: 'border-light-secondary',
              stroke: 'stroke-light-secondary',
              fill: 'fill-light-secondary',
              color: 'text-light-secondary'
            },
            success: {
              border: 'border-light-success',
              stroke: 'stroke-light-success',
              fill: 'fill-light-success',
              color: 'text-light-success'
            },
            warning: {
              border: 'border-light-warning',
              stroke: 'stroke-light-warning',
              fill: 'fill-light-warning',
              color: 'text-light-warning'
            },
            error: {
              border: 'border-light-error',
              stroke: 'stroke-light-error',
              fill: 'fill-light-error',
              color: 'text-light-error'
            }
          }
        },
        soft: {
          light: {
            neutral: {
              border: 'border-light-neutral',
              stroke: 'stroke-light-neutral',
              fill: 'fill-light-neutral',
              color: 'text-light-neutral'
            },
            primary: {
              border: 'border-light-primary',
              stroke: 'stroke-light-primary',
              fill: 'fill-light-primary',
              color: 'text-light-primary'
            },
            secondary: {
              border: 'border-light-secondary',
              stroke: 'stroke-light-secondary',
              fill: 'fill-light-secondary',
              color: 'text-light-secondary'
            },
            success: {
              border: 'border-light-success',
              stroke: 'stroke-light-success',
              fill: 'fill-light-success',
              color: 'text-light-success'
            },
            warning: {
              border: 'border-light-warning',
              stroke: 'stroke-light-warning',
              fill: 'fill-light-warning',
              color: 'text-light-warning'
            },
            error: {
              border: 'border-light-error',
              stroke: 'stroke-light-error',
              fill: 'fill-light-error',
              color: 'text-light-error'
            }
          }
        },
        solid: {
          light: {
            neutral: {
              border: 'border-light-on-neutral',
              stroke: 'stroke-light-on-neutral',
              fill: 'fill-light-on-neutral',
              color: 'text-light-on-neutral'
            },
            primary: {
              border: 'border-light-on-primary',
              stroke: 'stroke-light-on-primary',
              fill: 'fill-light-on-primary',
              color: 'text-light-on-primary'
            },
            secondary: {
              border: 'border-light-on-secondary',
              stroke: 'stroke-light-on-secondary',
              fill: 'fill-light-on-secondary',
              color: 'text-light-on-secondary'
            },
            success: {
              border: 'border-light-on-success',
              stroke: 'stroke-light-on-success',
              fill: 'fill-light-on-success',
              color: 'text-light-on-success'
            },
            warning: {
              border: 'border-light-on-warning',
              stroke: 'stroke-light-on-warning',
              fill: 'fill-light-on-warning',
              color: 'text-light-on-warning'
            },
            error: {
              border: 'border-light-on-error',
              stroke: 'stroke-light-on-error',
              fill: 'fill-light-on-error',
              color: 'text-light-on-error'
            }
          }
        }
      }
    }
  }
};

export default navlinkConfig;

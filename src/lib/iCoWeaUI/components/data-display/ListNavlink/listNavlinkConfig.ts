const listNavlinkConfig = {
  defaultProps: {
    activeVariant: 'default',
    variant: 'default',
    activeColor: 'neutral',
    color: 'primary',
    size: 'md',
    bordered: false,
    block: false,
    shadow: false,
    noRipple: false
  },
  styles: {
    base: {
      position: 'relative',
      display: 'flex',
      width: 'w-full',
      borderRadius: 'rounded-full',
      alignItems: 'items-center',
      font: 'antialiased font-semibold text-sm font-sans',
      transition: 'transition-all',
      focus: 'focus:outline-none',
      focusVisible: 'focus-visible:ring-4'
    },
    active: {
      group: 'active'
    },
    border: {
      border: 'border'
    },
    block: {
      padding: 'mx-0',
      borderRadius: 'rounded-none'
    },
    shadow: {
      shadow: 'shadow-sm',
      hover: 'hover:shadow-md',
      active: 'active:shadow-none',
      focus: 'focus:shadow-none',
      focusVisible: 'focus-visible:shadow-none'
    },
    disabled: {
      light: {
        border: 'border-light-neutral/40',
        fill: 'fill-light-neutral/40',
        color: 'text-light-neutral/40',
        background: 'bg-light-neutral/20',
        pointerEvents: 'pointer-events-none'
      }
    },
    sizes: {
      sm: {
        margin: 'mx-4',
        padding: 'px-4 py-2',
        gap: 'gap-4'
      },
      md: {
        margin: 'mx-6',
        padding: 'px-6 py-3',
        gap: 'gap-6'
      },
      lg: {
        margin: 'mx-8',
        padding: 'px-8 py-4',
        gap: 'gap-8'
      }
    },
    variants: {
      default: {
        light: {
          neutral: {
            border: 'border-light-divider',
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
            border: 'border-light-divider',
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
            border: 'border-light-divider',
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
  }
};

export default listNavlinkConfig;

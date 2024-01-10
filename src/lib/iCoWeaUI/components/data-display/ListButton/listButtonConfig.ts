const listButtonConfig = {
  defaultProps: {
    unselectVariant: 'default',
    variant: 'default',
    unselectColor: 'neutral',
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
    selected: {
      group: 'selected'
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
    unselectVariants: {
      default: {
        light: {
          neutral: {
            fill: 'fill-light-neutral/75',
            color: 'text-light-neutral/75',
            hover: 'hover:fill-light-neutral hover:text-light-neutral',
            active: 'active:fill-light-neutral active:text-light-neutral',
            focus: 'focus:fill-light-neutral focus:text-light-neutral'
          },
          primary: {
            fill: 'fill-light-primary/75',
            color: 'text-light-primary/75',
            hover: 'hover:fill-light-primary hover:text-light-primary',
            active: 'active:fill-light-primary active:text-light-primary',
            focus: 'focus:fill-light-primary focus:text-light-primary'
          },
          secondary: {
            fill: 'fill-light-secondary/75',
            color: 'text-light-secondary/75',
            hover: 'hover:fill-light-secondary hover:text-light-secondary',
            active: 'active:fill-light-secondary active:text-light-secondary',
            focus: 'focus:fill-light-secondary focus:text-light-secondary'
          },
          success: {
            fill: 'fill-light-success/75',
            color: 'text-light-success/75',
            hover: 'hover:fill-light-success hover:text-light-success',
            active: 'active:fill-light-success active:text-light-success',
            focus: 'focus:fill-light-success focus:text-light-success'
          },
          warning: {
            fill: 'fill-light-warning/75',
            color: 'text-light-warning/75',
            hover: 'hover:fill-light-warning hover:text-light-warning',
            active: 'active:fill-light-warning active:text-light-warning',
            focus: 'focus:fill-light-warning focus:text-light-warning'
          },
          error: {
            fill: 'fill-light-error/75',
            color: 'text-light-error/75',
            hover: 'hover:fill-light-error hover:text-light-error',
            active: 'active:fill-light-error active:text-light-error',
            focus: 'focus:fill-light-error focus:text-light-error'
          }
        }
      },
      plain: {
        light: {
          neutral: {
            fill: 'fill-light-neutral/75',
            color: 'text-light-neutral/75',
            hover: 'hover:fill-light-neutral hover:text-light-neutral',
            active: 'active:fill-light-neutral active:text-light-neutral',
            focus: 'focus:fill-light-neutral focus:text-light-neutral'
          },
          primary: {
            fill: 'fill-light-primary/75',
            color: 'text-light-primary/75',
            hover: 'hover:fill-light-primary hover:text-light-primary',
            active: 'active:fill-light-primary active:text-light-primary',
            focus: 'focus:fill-light-primary focus:text-light-primary'
          },
          secondary: {
            fill: 'fill-light-secondary/75',
            color: 'text-light-secondary/75',
            hover: 'hover:fill-light-secondary hover:text-light-secondary',
            active: 'active:fill-light-secondary active:text-light-secondary',
            focus: 'focus:fill-light-secondary focus:text-light-secondary'
          },
          success: {
            fill: 'fill-light-success/75',
            color: 'text-light-success/75',
            hover: 'hover:fill-light-success hover:text-light-success',
            active: 'active:fill-light-success active:text-light-success',
            focus: 'focus:fill-light-success focus:text-light-success'
          },
          warning: {
            fill: 'fill-light-warning/75',
            color: 'text-light-warning/75',
            hover: 'hover:fill-light-warning hover:text-light-warning',
            active: 'active:fill-light-warning active:text-light-warning',
            focus: 'focus:fill-light-warning focus:text-light-warning'
          },
          error: {
            fill: 'fill-light-error/75',
            color: 'text-light-error/75',
            hover: 'hover:fill-light-error hover:text-light-error',
            active: 'active:fill-light-error active:text-light-error',
            focus: 'focus:fill-light-error focus:text-light-error'
          }
        }
      },
      soft: {
        light: {
          neutral: {
            fill: 'fill-light-neutral/75',
            color: 'text-light-neutral/75',
            hover: 'hover:fill-light-neutral hover:text-light-neutral',
            active: 'active:fill-light-neutral active:text-light-neutral',
            focus: 'focus:fill-light-neutral focus:text-light-neutral'
          },
          primary: {
            fill: 'fill-light-primary/75',
            color: 'text-light-primary/75',
            hover: 'hover:fill-light-primary hover:text-light-primary',
            active: 'active:fill-light-primary active:text-light-primary',
            focus: 'focus:fill-light-primary focus:text-light-primary'
          },
          secondary: {
            fill: 'fill-light-secondary/75',
            color: 'text-light-secondary/75',
            hover: 'hover:fill-light-secondary hover:text-light-secondary',
            active: 'active:fill-light-secondary active:text-light-secondary',
            focus: 'focus:fill-light-secondary focus:text-light-secondary'
          },
          success: {
            fill: 'fill-light-success/75',
            color: 'text-light-success/75',
            hover: 'hover:fill-light-success hover:text-light-success',
            active: 'active:fill-light-success active:text-light-success',
            focus: 'focus:fill-light-success focus:text-light-success'
          },
          warning: {
            fill: 'fill-light-warning/75',
            color: 'text-light-warning/75',
            hover: 'hover:fill-light-warning hover:text-light-warning',
            active: 'active:fill-light-warning active:text-light-warning',
            focus: 'focus:fill-light-warning focus:text-light-warning'
          },
          error: {
            fill: 'fill-light-error/75',
            color: 'text-light-error/75',
            hover: 'hover:fill-light-error hover:text-light-error',
            active: 'active:fill-light-error active:text-light-error',
            focus: 'focus:fill-light-error focus:text-light-error'
          }
        }
      },
      solid: {
        light: {
          neutral: {
            fill: 'fill-light-on-neutral/75',
            color: 'text-light-on-neutral/75',
            hover: 'hover:fill-light-on-neutral hover:text-light-on-neutral',
            active: 'active:fill-light-on-neutral active:text-light-on-neutral',
            focus: 'focus:fill-light-on-neutral focus:text-light-on-neutral'
          },
          primary: {
            fill: 'fill-light-on-primary/75',
            color: 'text-light-on-primary/75',
            hover: 'hover:fill-light-on-primary hover:text-light-on-primary',
            active: 'active:fill-light-on-primary active:text-light-on-primary',
            focus: 'focus:fill-light-on-primary focus:text-light-on-primary'
          },
          secondary: {
            fill: 'fill-light-on-secondary/75',
            color: 'text-light-on-secondary/75',
            hover: 'hover:fill-light-on-secondary hover:text-light-on-secondary',
            active: 'active:fill-light-on-secondary active:text-light-on-secondary',
            focus: 'focus:fill-light-on-secondary focus:text-light-on-secondary'
          },
          success: {
            fill: 'fill-light-on-success/75',
            color: 'text-light-on-success/75',
            hover: 'hover:fill-light-on-success hover:text-light-on-success',
            active: 'active:fill-light-on-success active:text-light-on-success',
            focus: 'focus:fill-light-on-success focus:text-light-on-success'
          },
          warning: {
            fill: 'fill-light-on-warning/75',
            color: 'text-light-on-warning/75',
            hover: 'hover:fill-light-on-warning hover:text-light-on-warning',
            active: 'active:fill-light-on-warning active:text-light-on-warning',
            focus: 'focus:fill-light-on-warning focus:text-light-on-warning'
          },
          error: {
            fill: 'fill-light-on-error/75',
            color: 'text-light-on-error/75',
            hover: 'hover:fill-light-on-error hover:text-light-on-error',
            active: 'active:fill-light-on-error active:text-light-on-error',
            focus: 'focus:fill-light-on-error focus:text-light-on-error'
          }
        }
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

export default listButtonConfig;

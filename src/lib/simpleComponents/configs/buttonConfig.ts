export interface ButtonConfig {
  defaultProps: {
    size: Sizes;
    shape: Shapes;
    variant: Variants;
    color: Colors;
    fullwidth: boolean;
    type: 'button';
  };
  styles: {
    base: Record<string, string>;
    stateLayer: Record<string, string>;
    fullwidth: Record<string, string>;
    sizes: Record<Sizes, Record<string, string>>;
    shapes: Record<Shapes, Record<string, string>>;
    variants: Record<Variants, Record<Themes, Record<Colors, Record<string, string>>>>;
    stateLayerVariants: Record<TextVariants, Record<Themes, Record<Colors, Record<string, string>>>>;
  }
}

const buttonConfig: ButtonConfig = {
  defaultProps: {
    size: 'md',
    shape: 'circular',
    variant: 'solid',
    color: 'primary',
    fullwidth: false,
    type: 'button'
  },
  styles: {
    base: {
      position: 'relative',
      display: 'flex',
      gap: 'gap-xs',
      alignItems: 'items-center',
      width: 'w-fit',
      border: 'border border-transparent',
      font: 'antialiased font-semibold text-sm font-sans',
      transition: 'transition',
      userSelect: 'select-none',
      focus: 'focus:outline-none',
      focusVisible: 'focus-visible:ring-4',
      disabled: 'disabled:pointer-events-none'
    },
    stateLayer: {
      position: 'after:absolute',
      top: 'after:-top-px',
      left: 'after:-left-px',
      display: 'after:block',
      width: 'after:w-[calc(100%_+_2px)]',
      height: 'after:h-[calc(100%_+_2px)]',
      transitions: 'after:transition-colors',
      pointerEvents: 'after:pointer-events-none'
    },
    fullwidth: {
      width: 'w-full',
      justifyContent: 'justify-center'
    },
    shapes: {
      rounded: {
        borderRadius: 'rounded-lg',
        after: 'after:rounded-lg'
      },
      circular: {
        borderRadius: 'rounded-full',
        after: 'after:rounded-full'
      },
      square: {
        borderRadius: 'rounded-none',
        after: 'after:rounded-none'
      }
    },
    sizes: {
      xs: {
        height: 'h-xs-h',
        padding: 'px-xs-x py-xs-y'
      },
      sm: {
        height: 'h-sm-h',
        padding: 'px-sm-x py-sm-y'
      },
      md: {
        height: 'h-md-h',
        padding: 'px-md-x py-md-y'
      },
      lg: {
        height: 'h-lg-h',
        padding: 'px-lg-x py-lg-y'
      }
    },
    variants: {
      plain: {
        light: {
          default: {
            fill: 'fill-light-on-surface',
            color: 'text-light-on-surface',
            focusVisible: 'focus-visible:ring-light-on-surface',
            disabled: 'disabled:text-light-on-surface/40'
          },
          primary: {
            fill: 'fill-light-on-primary',
            color: 'text-light-on-primary',
            focusVisible: 'focus-visible:ring-light-on-primary',
            disabled: 'disabled:text-light-on-surface/40'
          },
          secondary: {
            fill: 'fill-light-on-secondary',
            color: 'text-light-on-secondary',
            focusVisible: 'focus-visible:ring-light-on-secondary',
            disabled: 'disabled:text-light-on-surface/40'
          },
          success: {
            fill: 'fill-light-on-success',
            color: 'text-light-on-success',
            focusVisible: 'focus-visible:ring-light-on-success',
            disabled: 'disabled:text-light-on-surface/40'
          },
          warning: {
            fill: 'fill-light-on-warning',
            color: 'text-light-on-warning',
            focusVisible: 'focus-visible:ring-light-on-warning',
            disabled: 'disabled:text-light-on-surface/40'
          },
          error: {
            fill: 'fill-light-on-error',
            color: 'text-light-on-error',
            focusVisible: 'focus-visible:ring-light-on-error',
            disabled: 'disabled:text-light-on-surface/40'
          }
        },
        dark: {
          default: {
            fill: 'fill-dark-on-surface',
            color: 'text-dark-on-surface',
            focusVisible: 'focus-visible:ring-dark-on-surface',
            disabled: 'disabled:text-dark-on-surface/40'
          },
          primary: {
            fill: 'fill-dark-on-primary',
            color: 'text-dark-on-primary',
            focusVisible: 'focus-visible:ring-dark-on-primary',
            disabled: 'disabled:text-dark-on-surface/40'
          },
          secondary: {
            fill: 'fill-dark-on-secondary',
            color: 'text-dark-on-secondary',
            focusVisible: 'focus-visible:ring-dark-on-secondary',
            disabled: 'disabled:text-dark-on-surface/40'
          },
          success: {
            fill: 'fill-dark-on-success',
            color: 'text-dark-on-success',
            focusVisible: 'focus-visible:ring-dark-on-success',
            disabled: 'disabled:text-dark-on-surface/40'
          },
          warning: {
            fill: 'fill-dark-on-warning',
            color: 'text-dark-on-warning',
            focusVisible: 'focus-visible:ring-dark-on-warning',
            disabled: 'disabled:text-dark-on-surface/40'
          },
          error: {
            fill: 'fill-dark-on-error',
            color: 'text-dark-on-error',
            focusVisible: 'focus-visible:ring-dark-on-error',
            disabled: 'disabled:text-dark-on-surface/40'
          }
        }
      },
      text: {
        light: {
          default: {
            fill: 'fill-light-on-surface',
            color: 'text-light-on-surface',
            focusVisible: 'focus-visible:ring-light-on-surface',
            disabled: 'disabled:text-light-on-surface/40'
          },
          primary: {
            fill: 'fill-light-primary',
            color: 'text-light-primary',
            focusVisible: 'focus-visible:ring-light-primary',
            disabled: 'disabled:text-light-on-surface/40'
          },
          secondary: {
            fill: 'fill-light-secondary',
            color: 'text-light-secondary',
            focusVisible: 'focus-visible:ring-light-secondary',
            disabled: 'disabled:text-light-on-surface/40'
          },
          success: {
            fill: 'fill-light-success',
            color: 'text-light-success',
            focusVisible: 'focus-visible:ring-light-success',
            disabled: 'disabled:text-light-on-surface/40'
          },
          warning: {
            fill: 'fill-light-warning',
            color: 'text-light-warning',
            focusVisible: 'focus-visible:ring-light-warning',
            disabled: 'disabled:text-light-on-surface/40'
          },
          error: {
            fill: 'fill-light-error',
            color: 'text-light-error',
            focusVisible: 'focus-visible:ring-light-error',
            disabled: 'disabled:text-light-on-surface/40'
          }
        },
        dark: {
          default: {
            fill: 'fill-dark-on-surface',
            color: 'text-dark-on-surface',
            focusVisible: 'focus-visible:ring-dark-on-surface',
            disabled: 'disabled:text-dark-on-surface/40'
          },
          primary: {
            fill: 'fill-dark-primary',
            color: 'text-dark-primary',
            focusVisible: 'focus-visible:ring-dark-primary',
            disabled: 'disabled:text-dark-on-surface/40'
          },
          secondary: {
            fill: 'fill-dark-secondary',
            color: 'text-dark-secondary',
            focusVisible: 'focus-visible:ring-dark-secondary',
            disabled: 'disabled:text-dark-on-surface/40'
          },
          success: {
            fill: 'fill-dark-success',
            color: 'text-dark-success',
            focusVisible: 'focus-visible:ring-dark-success',
            disabled: 'disabled:text-dark-on-surface/40'
          },
          warning: {
            fill: 'fill-dark-warning',
            color: 'text-dark-warning',
            focusVisible: 'focus-visible:ring-dark-warning',
            disabled: 'disabled:text-dark-on-surface/40'
          },
          error: {
            fill: 'fill-dark-error',
            color: 'text-dark-error',
            focusVisible: 'focus-visible:ring-dark-error',
            disabled: 'disabled:text-dark-on-surface/40'
          }
        }
      },
      soft: {
        light: {
          default: {
            fill: 'fill-light-on-surface',
            color: 'text-light-on-surface',
            background: 'bg-light-surface-soft',
            hadow: 'shadow-sm',
            hover: 'hover:shadow-md',
            active: 'active:shadow-none',
            focus: 'focus:shadow-none',
            focusVisible: 'focus-visible:shadow-none focus-visible:ring-light-on-surface',
            disabled: 'disabled:text-light-on-surface/40 disabled:bg-light-on-surface/20'
          },
          primary: {
            fill: 'fill-light-primary',
            color: 'text-light-primary',
            background: 'bg-light-primary-soft',
            hadow: 'shadow-sm',
            hover: 'hover:shadow-md',
            active: 'active:shadow-none',
            focus: 'focus:shadow-none',
            focusVisible: 'focus-visible:shadow-none focus-visible:ring-light-primary',
            disabled: 'disabled:text-light-on-surface/40 disabled:bg-light-on-surface/20'
          },
          secondary: {
            fill: 'fill-light-secondary',
            color: 'text-light-secondary',
            background: 'bg-light-secondary-soft',
            hadow: 'shadow-sm',
            hover: 'hover:shadow-md',
            active: 'active:shadow-none',
            focus: 'focus:shadow-none',
            focusVisible: 'focus-visible:shadow-none focus-visible:ring-light-secondary',
            disabled: 'disabled:text-light-on-surface/40 disabled:bg-light-on-surface/20'
          },
          success: {
            fill: 'fill-light-success',
            color: 'text-light-success',
            background: 'bg-light-success-soft',
            hadow: 'shadow-sm',
            hover: 'hover:shadow-md',
            active: 'active:shadow-none',
            focus: 'focus:shadow-none',
            focusVisible: 'focus-visible:shadow-none focus-visible:ring-light-success',
            disabled: 'disabled:text-light-on-surface/40 disabled:bg-light-on-surface/20'
          },
          warning: {
            fill: 'fill-light-warning',
            color: 'text-light-warning',
            background: 'bg-light-warning-soft',
            hadow: 'shadow-sm',
            hover: 'hover:shadow-md',
            active: 'active:shadow-none',
            focus: 'focus:shadow-none',
            focusVisible: 'focus-visible:shadow-none focus-visible:ring-light-warning',
            disabled: 'disabled:text-light-on-surface/40 disabled:bg-light-on-surface/20'
          },
          error: {
            fill: 'fill-light-error',
            color: 'text-light-error',
            background: 'bg-light-error-soft',
            hadow: 'shadow-sm',
            hover: 'hover:shadow-md',
            active: 'active:shadow-none',
            focus: 'focus:shadow-none',
            focusVisible: 'focus-visible:shadow-none focus-visible:ring-light-error',
            disabled: 'disabled:text-light-on-surface/40 disabled:bg-light-on-surface/20'
          }
        },
        dark: {
          default: {
            fill: 'fill-dark-',
            color: 'text-dark-on-surface',
            background: 'bg-dark-surface-soft',
            hadow: 'shadow-sm',
            hover: 'hover:shadow-md',
            active: 'active:shadow-none',
            focus: 'focus:shadow-none',
            focusVisible: 'focus-visible:shadow-none focus-visible:ring-dark-on-surface',
            disabled: 'disabled:text-dark-on-surface/40 disabled:bg-dark-on-surface/20'
          },
          primary: {
            fill: 'fill-dark-primary',
            color: 'text-dark-primary',
            background: 'bg-dark-primary-soft',
            hadow: 'shadow-sm',
            hover: 'hover:shadow-md',
            active: 'active:shadow-none',
            focus: 'focus:shadow-none',
            focusVisible: 'focus-visible:shadow-none focus-visible:ring-dark-primary',
            disabled: 'disabled:text-dark-on-surface/40 disabled:bg-dark-on-surface/20'
          },
          secondary: {
            fill: 'fill-dark-secondary',
            color: 'text-dark-secondary',
            background: 'bg-dark-secondary-soft',
            hadow: 'shadow-sm',
            hover: 'hover:shadow-md',
            active: 'active:shadow-none',
            focus: 'focus:shadow-none',
            focusVisible: 'focus-visible:shadow-none focus-visible:ring-dark-secondary',
            disabled: 'disabled:text-dark-on-surface/40 disabled:bg-dark-on-surface/20'
          },
          success: {
            fill: 'fill-dark-success',
            color: 'text-dark-success',
            background: 'bg-dark-success-soft',
            hadow: 'shadow-sm',
            hover: 'hover:shadow-md',
            active: 'active:shadow-none',
            focus: 'focus:shadow-none',
            focusVisible: 'focus-visible:shadow-none focus-visible:ring-dark-success',
            disabled: 'disabled:text-dark-on-surface/40 disabled:bg-dark-on-surface/20'
          },
          warning: {
            fill: 'fill-dark-warning',
            color: 'text-dark-warning',
            background: 'bg-dark-warning-soft',
            hadow: 'shadow-sm',
            hover: 'hover:shadow-md',
            active: 'active:shadow-none',
            focus: 'focus:shadow-none',
            focusVisible: 'focus-visible:shadow-none focus-visible:ring-dark-warning',
            disabled: 'disabled:text-dark-on-surface/40 disabled:bg-dark-on-surface/20'
          },
          error: {
            fill: 'fill-dark-error',
            color: 'text-dark-error',
            background: 'bg-dark-error-soft',
            hadow: 'shadow-sm',
            hover: 'hover:shadow-md',
            active: 'active:shadow-none',
            focus: 'focus:shadow-none',
            focusVisible: 'focus-visible:shadow-none focus-visible:ring-dark-error',
            disabled: 'disabled:text-dark-on-surface/40 disabled:bg-dark-on-surface/20'
          }
        }
      },
      solid: {
        light: {
          default: {
            fill: 'fill-light-on-surface',
            color: 'text-light-on-surface',
            background: 'bg-light-surface',
            hadow: 'shadow-sm',
            hover: 'hover:shadow-md',
            active: 'active:shadow-none',
            focus: 'focus:shadow-none',
            focusVisible: 'focus-visible:shadow-none focus-visible:ring-light-on-surface',
            disabled: 'disabled:text-light-on-surface/40 disabled:bg-light-on-surface/20'
          },
          primary: {
            fill: 'fill-light-primary',
            color: 'text-light-on-primary',
            background: 'bg-light-primary',
            hadow: 'shadow-sm',
            hover: 'hover:shadow-md',
            active: 'active:shadow-none',
            focus: 'focus:shadow-none',
            focusVisible: 'focus-visible:shadow-none focus-visible:ring-light-primary',
            disabled: 'disabled:text-light-on-surface/40 disabled:bg-light-on-surface/20'
          },
          secondary: {
            fill: 'fill-light-secondary',
            color: 'text-light-on-secondary',
            background: 'bg-light-secondary',
            hadow: 'shadow-sm',
            hover: 'hover:shadow-md',
            active: 'active:shadow-none',
            focus: 'focus:shadow-none',
            focusVisible: 'focus-visible:shadow-none focus-visible:ring-light-secondary',
            disabled: 'disabled:text-light-on-surface/40 disabled:bg-light-on-surface/20'
          },
          success: {
            fill: 'fill-light-success',
            color: 'text-light-on-success',
            background: 'bg-light-success',
            hadow: 'shadow-sm',
            hover: 'hover:shadow-md',
            active: 'active:shadow-none',
            focus: 'focus:shadow-none',
            focusVisible: 'focus-visible:shadow-none focus-visible:ring-light-success',
            disabled: 'disabled:text-light-on-surface/40 disabled:bg-light-on-surface/20'
          },
          warning: {
            fill: 'fill-light-warning',
            color: 'text-light-on-warning',
            background: 'bg-light-warning',
            hadow: 'shadow-sm',
            hover: 'hover:shadow-md',
            active: 'active:shadow-none',
            focus: 'focus:shadow-none',
            focusVisible: 'focus-visible:shadow-none focus-visible:ring-light-warning',
            disabled: 'disabled:text-light-on-surface/40 disabled:bg-light-on-surface/20'
          },
          error: {
            fill: 'fill-light-error',
            color: 'text-light-on-error',
            background: 'bg-light-error',
            hadow: 'shadow-sm',
            hover: 'hover:shadow-md',
            active: 'active:shadow-none',
            focus: 'focus:shadow-none',
            focusVisible: 'focus-visible:shadow-none focus-visible:ring-light-error',
            disabled: 'disabled:text-light-on-surface/40 disabled:bg-light-on-surface/20'
          }
        },
        dark: {
          default: {
            fill: 'fill-dark-on-surface',
            color: 'text-dark-on-surface',
            background: 'bg-dark-surface',
            hadow: 'shadow-sm',
            hover: 'hover:shadow-md',
            active: 'active:shadow-none',
            focus: 'focus:shadow-none',
            focusVisible: 'focus-visible:shadow-none focus-visible:ring-dark-on-surface',
            disabled: 'disabled:text-dark-on-surface/40 disabled:bg-dark-on-surface/20'
          },
          primary: {
            fill: 'fill-dark-on-primary',
            color: 'text-dark-on-primary',
            background: 'bg-dark-primary',
            hadow: 'shadow-sm',
            hover: 'hover:shadow-md',
            active: 'active:shadow-none',
            focus: 'focus:shadow-none',
            focusVisible: 'focus-visible:shadow-none focus-visible:ring-dark-primary',
            disabled: 'disabled:text-dark-on-surface/40 disabled:bg-dark-on-surface/20'
          },
          secondary: {
            fill: 'fill-dark-on-secondary',
            color: 'text-dark-on-secondary',
            background: 'bg-dark-secondary',
            hadow: 'shadow-sm',
            hover: 'hover:shadow-md',
            active: 'active:shadow-none',
            focus: 'focus:shadow-none',
            focusVisible: 'focus-visible:shadow-none focus-visible:ring-dark-secondary',
            disabled: 'disabled:text-dark-on-surface/40 disabled:bg-dark-on-surface/20'
          },
          success: {
            fill: 'fill-dark-on-success',
            color: 'text-dark-on-success',
            background: 'bg-dark-success',
            hadow: 'shadow-sm',
            hover: 'hover:shadow-md',
            active: 'active:shadow-none',
            focus: 'focus:shadow-none',
            focusVisible: 'focus-visible:shadow-none focus-visible:ring-dark-success',
            disabled: 'disabled:text-dark-on-surface/40 disabled:bg-dark-on-surface/20'
          },
          warning: {
            fill: 'fill-dark-on-warning',
            color: 'text-dark-on-warning',
            background: 'bg-dark-warning',
            hadow: 'shadow-sm',
            hover: 'hover:shadow-md',
            active: 'active:shadow-none',
            focus: 'focus:shadow-none',
            focusVisible: 'focus-visible:shadow-none focus-visible:ring-dark-warning',
            disabled: 'disabled:text-dark-on-surface/40 disabled:bg-dark-on-surface/20'
          },
          error: {
            fill: 'fill-dark-on-error',
            color: 'text-dark-on-error',
            background: 'bg-dark-error',
            hadow: 'shadow-sm',
            hover: 'hover:shadow-md',
            active: 'active:shadow-none',
            focus: 'focus:shadow-none',
            focusVisible: 'focus-visible:shadow-none focus-visible:ring-dark-error',
            disabled: 'disabled:text-dark-on-surface/40 disabled:bg-dark-on-surface/20'
          }
        }
      },
      outlined: {
        light: {
          default: {
            border: 'border-light-on-surface',
            fill: 'fill-light-on-surface',
            color: 'text-light-on-surface',
            focusVisible: 'focus-visible:ring-light-on-surface',
            disabled: 'disabled:border-light-on-surface/40 disabled:text-light-on-surface/40'
          },
          primary: {
            border: 'border-light-primary',
            fill: 'fill-light-primary',
            color: 'text-light-primary',
            focusVisible: 'focus-visible:ring-light-primary',
            disabled: 'disabled:border-light-on-surface/40 disabled:text-light-on-surface/40'
          },
          secondary: {
            border: 'border-light-secondary',
            fill: 'fill-light-secondary',
            color: 'text-light-secondary',
            focusVisible: 'focus-visible:ring-light-secondary',
            disabled: 'disabled:border-light-on-surface/40 disabled:text-light-on-surface/40'
          },
          success: {
            border: 'border-light-success',
            fill: 'fill-light-success',
            color: 'text-light-success',
            focusVisible: 'focus-visible:ring-light-success',
            disabled: 'disabled:border-light-on-surface/40 disabled:text-light-on-surface/40'
          },
          warning: {
            border: 'border-light-warning',
            fill: 'fill-light-warning',
            color: 'text-light-warning',
            focusVisible: 'focus-visible:ring-light-warning',
            disabled: 'disabled:border-light-on-surface/40 disabled:text-light-on-surface/40'
          },
          error: {
            border: 'border-light-error',
            fill: 'fill-light-error',
            color: 'text-light-error',
            focusVisible: 'focus-visible:ring-light-error',
            disabled: 'disabled:border-light-on-surface/40 disabled:text-light-on-surface/40'
          }
        },
        dark: {
          default: {
            border: 'border-dark-on-surface',
            fill: 'fill-dark-on-surface',
            color: 'text-dark-on-surface',
            focusVisible: 'focus-visible:ring-dark-on-surface',
            disabled: 'disabled:border-dark-on-surface/40 disabled:text-dark-on-surface/40'
          },
          primary: {
            border: 'border-dark-primary',
            fill: 'fill-dark-primary',
            color: 'text-dark-primary',
            focusVisible: 'focus-visible:ring-dark-primary',
            disabled: 'disabled:border-dark-on-surface/40 disabled:text-dark-on-surface/40'
          },
          secondary: {
            border: 'border-dark-secondary',
            fill: 'fill-dark-secondary',
            color: 'text-dark-secondary',
            focusVisible: 'focus-visible:ring-dark-secondary',
            disabled: 'disabled:border-dark-on-surface/40 disabled:text-dark-on-surface/40'
          },
          success: {
            border: 'border-dark-success',
            fill: 'fill-dark-success',
            color: 'text-dark-success',
            focusVisible: 'focus-visible:ring-dark-success',
            disabled: 'disabled:border-dark-on-surface/40 disabled:text-dark-on-surface/40'
          },
          warning: {
            border: 'border-dark-warning',
            fill: 'fill-dark-warning',
            color: 'text-dark-warning',
            focusVisible: 'focus-visible:ring-dark-warning',
            disabled: 'disabled:border-dark-on-surface/40 disabled:text-dark-on-surface/40'
          },
          error: {
            border: 'border-dark-error',
            fill: 'fill-dark-error',
            color: 'text-dark-error',
            focusVisible: 'focus-visible:ring-dark-error',
            disabled: 'disabled:border-dark-on-surface/40 disabled:text-dark-on-surface/40'
          }
        }
      }
    },
    stateLayerVariants: {
      plain: {
        light: {
          default: {
            hover: 'hover:after:bg-light-on-surface/10',
            active: 'active:after:bg-light-on-surface/20',
            focus: 'focus:after:bg-light-on-surface/20'
          },
          primary: {
            hover: 'hover:after:bg-light-on-primary/10',
            active: 'active:after:bg-light-on-primary/20',
            focus: 'focus:after:bg-light-on-primary/20'
          },
          secondary: {
            hover: 'hover:after:bg-light-on-secondary/10',
            active: 'active:after:bg-light-on-secondary/20',
            focus: 'focus:after:bg-light-on-secondary/20'
          },
          success: {
            hover: 'hover:after:bg-light-on-success/10',
            active: 'active:after:bg-light-on-success/20',
            focus: 'focus:after:bg-light-on-success/20'
          },
          warning: {
            hover: 'hover:after:bg-light-on-warning/10',
            active: 'active:after:bg-light-on-warning/20',
            focus: 'focus:after:bg-light-on-warning/20'
          },
          error: {
            hover: 'hover:after:bg-light-on-error/10',
            active: 'active:after:bg-light-on-error/20',
            focus: 'focus:after:bg-light-on-error/20'
          }
        },
        dark: {
          default: {
            hover: 'hover:after:bg-dark-on-surface/10',
            active: 'active:after:bg-dark-on-surface/20',
            focus: 'focus:after:bg-dark-on-surface/20'
          },
          primary: {
            hover: 'hover:after:bg-dark-on-primary/10',
            active: 'active:after:bg-dark-on-primary/20',
            focus: 'focus:after:bg-dark-on-primary/20'
          },
          secondary: {
            hover: 'hover:after:bg-dark-on-secondary/10',
            active: 'active:after:bg-dark-on-secondary/20',
            focus: 'focus:after:bg-dark-on-secondary/20'
          },
          success: {
            hover: 'hover:after:bg-dark-on-success/10',
            active: 'active:after:bg-dark-on-success/20',
            focus: 'focus:after:bg-dark-on-success/20'
          },
          warning: {
            hover: 'hover:after:bg-dark-on-warning/10',
            active: 'active:after:bg-dark-on-warning/20',
            focus: 'focus:after:bg-dark-on-warning/20'
          },
          error: {
            hover: 'hover:after:bg-dark-on-error/10',
            active: 'active:after:bg-dark-on-error/20',
            focus: 'focus:after:bg-dark-on-error/20'
          }
        }
      },
      solid: {
        light: {
          default: {
            hover: 'hover:after:bg-light-on-surface/10',
            active: 'active:after:bg-light-on-surface/20',
            focus: 'focus:after:bg-light-on-surface/20'
          },
          primary: {
            hover: 'hover:after:bg-light-primary/10',
            active: 'active:after:bg-light-primary/20',
            focus: 'focus:after:bg-light-primary/20'
          },
          secondary: {
            hover: 'hover:after:bg-light-secondary/10',
            active: 'active:after:bg-light-secondary/20',
            focus: 'focus:after:bg-light-secondary/20'
          },
          success: {
            hover: 'hover:after:bg-light-success/10',
            active: 'active:after:bg-light-success/20',
            focus: 'focus:after:bg-light-success/20'
          },
          warning: {
            hover: 'hover:after:bg-light-warning/10',
            active: 'active:after:bg-light-warning/20',
            focus: 'focus:after:bg-light-warning/20'
          },
          error: {
            hover: 'hover:after:bg-light-error/10',
            active: 'active:after:bg-light-error/20',
            focus: 'focus:after:bg-light-error/20'
          }
        },
        dark: {
          default: {
            hover: 'hover:after:bg-dark-on-surface/10',
            active: 'active:after:bg-dark-on-surface/20',
            focus: 'focus:after:bg-dark-on-surface/20'
          },
          primary: {
            hover: 'hover:after:bg-dark-primary/10',
            active: 'active:after:bg-dark-primary/20',
            focus: 'focus:after:bg-dark-primary/20'
          },
          secondary: {
            hover: 'hover:after:bg-dark-secondary/10',
            active: 'active:after:bg-dark-secondary/20',
            focus: 'focus:after:bg-dark-secondary/20'
          },
          success: {
            hover: 'hover:after:bg-dark-success/10',
            active: 'active:after:bg-dark-success/20',
            focus: 'focus:after:bg-dark-success/20'
          },
          warning: {
            hover: 'hover:after:bg-dark-warning/10',
            active: 'active:after:bg-dark-warning/20',
            focus: 'focus:after:bg-dark-warning/20'
          },
          error: {
            hover: 'hover:after:bg-dark-error/10',
            active: 'active:after:bg-dark-error/20',
            focus: 'focus:after:bg-dark-error/20'
          }
        }
      }
    }
  }
};

export default buttonConfig;

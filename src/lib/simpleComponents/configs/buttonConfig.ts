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
    disabled: Record<TextVariants, Record<Themes, Record<string, string>>>;
    variants: Record<Variants, Record<Themes, Record<Colors, Record<string, string>>>>;
    outlined: Record<TextVariants, Record<Themes, Record<Colors, Record<string, string>>>>;
    focusVisible: Record<TextVariants, Record<Themes, Record<Colors, Record<string, string>>>>;
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
      font: 'antialiased font-semibold text-sm font-sans',
      transition: 'transition',
      userSelect: 'select-none',
      focus: 'focus:outline-none',
      focusVisible: 'focus-visible:ring-4',
      disabled: 'disabled:pointer-events-none'
    },
    stateLayer: {
      position: 'after:absolute',
      top: 'after:top-0',
      left: 'after:left-0',
      display: 'after:block',
      width: 'after:w-full',
      height: 'after:h-full',
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
        padding: 'px-xs py-xs-y'
      },
      sm: {
        height: 'h-sm-h',
        padding: 'px-sm py-sm-y'
      },
      md: {
        height: 'h-md-h',
        padding: 'px-md py-md-y'
      },
      lg: {
        height: 'h-lg-h',
        padding: 'px-lg py-lg-y'
      }
    },
    disabled: {
      plain: {
        light: {
          disabled: 'disabled:text-light-on-surface/40'
        },
        dark: {
          disabled: 'disabled:text-dark-on-surface/40'
        }
      },
      solid: {
        light: {
          disabled: 'disabled:text-light-on-surface/40 disabled:bg-light-on-surface/20'
        },
        dark: {
          disabled: 'disabled:text-dark-on-surface/40 disabled:bg-dark-on-surface/20'
        }
      }
    },
    variants: {
      plain: {
        light: {
          default: {
            fill: 'fill-light-on-surface',
            color: 'text-light-on-surface'
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
          default: {
            fill: 'fill-dark-on-surface',
            color: 'text-dark-on-surface'
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
          default: {
            fill: 'fill-light-on-surface',
            color: 'text-light-on-surface'
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
          default: {
            fill: 'fill-dark-on-surface',
            color: 'text-dark-on-surface'
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
          default: {
            fill: 'fill-light-on-surface',
            color: 'text-light-on-surface',
            background: 'bg-light-surface-soft',
            shadow: 'shadow-sm',
            hover: '[&:hover:not(:active:focus:focus-visible)]:shadow-md'
          },
          primary: {
            fill: 'fill-light-primary',
            color: 'text-light-primary',
            background: 'bg-light-primary-soft',
            shadow: 'shadow-sm',
            hover: '[&:hover:not(:active:focus:focus-visible)]:shadow-md'
          },
          secondary: {
            fill: 'fill-light-secondary',
            color: 'text-light-secondary',
            background: 'bg-light-secondary-soft',
            shadow: 'shadow-sm',
            hover: '[&:hover:not(:active:focus:focus-visible)]:shadow-md'
          },
          success: {
            fill: 'fill-light-success',
            color: 'text-light-success',
            background: 'bg-light-success-soft',
            shadow: 'shadow-sm',
            hover: '[&:hover:not(:active:focus:focus-visible)]:shadow-md'
          },
          warning: {
            fill: 'fill-light-warning',
            color: 'text-light-warning',
            background: 'bg-light-warning-soft',
            shadow: 'shadow-sm',
            hover: '[&:hover:not(:active:focus:focus-visible)]:shadow-md'
          },
          error: {
            fill: 'fill-light-error',
            color: 'text-light-error',
            background: 'bg-light-error-soft',
            shadow: 'shadow-sm',
            hover: '[&:hover:not(:active:focus:focus-visible)]:shadow-md'
          }
        },
        dark: {
          default: {
            fill: 'fill-dark-',
            color: 'text-dark-on-surface',
            background: 'bg-dark-surface-soft',
            shadow: 'shadow-sm',
            hover: '[&:hover:not(:active:focus:focus-visible)]:shadow-md'
          },
          primary: {
            fill: 'fill-dark-primary',
            color: 'text-dark-primary',
            background: 'bg-dark-primary-soft',
            shadow: 'shadow-sm',
            hover: '[&:hover:not(:active:focus:focus-visible)]:shadow-md'
          },
          secondary: {
            fill: 'fill-dark-secondary',
            color: 'text-dark-secondary',
            background: 'bg-dark-secondary-soft',
            shadow: 'shadow-sm',
            hover: '[&:hover:not(:active:focus:focus-visible)]:shadow-md'
          },
          success: {
            fill: 'fill-dark-success',
            color: 'text-dark-success',
            background: 'bg-dark-success-soft',
            shadow: 'shadow-sm',
            hover: '[&:hover:not(:active:focus:focus-visible)]:shadow-md'
          },
          warning: {
            fill: 'fill-dark-warning',
            color: 'text-dark-warning',
            background: 'bg-dark-warning-soft',
            shadow: 'shadow-sm',
            hover: '[&:hover:not(:active:focus:focus-visible)]:shadow-md'
          },
          error: {
            fill: 'fill-dark-error',
            color: 'text-dark-error',
            background: 'bg-dark-error-soft',
            shadow: 'shadow-sm',
            hover: '[&:hover:not(:active:focus:focus-visible)]:shadow-md'
          }
        }
      },
      solid: {
        light: {
          default: {
            fill: 'fill-light-on-surface',
            color: 'text-light-on-surface',
            background: 'bg-light-surface',
            shadow: 'shadow-sm',
            hover: '[&:hover:not(:active:focus:focus-visible)]:shadow-md'
          },
          primary: {
            fill: 'fill-light-primary',
            color: 'text-light-on-primary',
            background: 'bg-light-primary',
            shadow: 'shadow-sm',
            hover: '[&:hover:not(:active:focus:focus-visible)]:shadow-md'
          },
          secondary: {
            fill: 'fill-light-secondary',
            color: 'text-light-on-secondary',
            background: 'bg-light-secondary',
            shadow: 'shadow-sm',
            hover: '[&:hover:not(:active:focus:focus-visible)]:shadow-md'
          },
          success: {
            fill: 'fill-light-success',
            color: 'text-light-on-success',
            background: 'bg-light-success',
            shadow: 'shadow-sm',
            hover: '[&:hover:not(:active:focus:focus-visible)]:shadow-md'
          },
          warning: {
            fill: 'fill-light-warning',
            color: 'text-light-on-warning',
            background: 'bg-light-warning',
            shadow: 'shadow-sm',
            hover: '[&:hover:not(:active:focus:focus-visible)]:shadow-md'
          },
          error: {
            fill: 'fill-light-error',
            color: 'text-light-on-error',
            background: 'bg-light-error',
            shadow: 'shadow-sm',
            hover: '[&:hover:not(:active:focus:focus-visible)]:shadow-md'
          }
        },
        dark: {
          default: {
            fill: 'fill-dark-on-surface',
            color: 'text-dark-on-surface',
            background: 'bg-dark-surface',
            shadow: 'shadow-sm',
            hover: '[&:hover:not(:active:focus:focus-visible)]:shadow-md'
          },
          primary: {
            fill: 'fill-dark-on-primary',
            color: 'text-dark-on-primary',
            background: 'bg-dark-primary',
            shadow: 'shadow-sm',
            hover: '[&:hover:not(:active:focus:focus-visible)]:shadow-md'
          },
          secondary: {
            fill: 'fill-dark-on-secondary',
            color: 'text-dark-on-secondary',
            background: 'bg-dark-secondary',
            shadow: 'shadow-sm',
            hover: '[&:hover:not(:active:focus:focus-visible)]:shadow-md'
          },
          success: {
            fill: 'fill-dark-on-success',
            color: 'text-dark-on-success',
            background: 'bg-dark-success',
            shadow: 'shadow-sm',
            hover: '[&:hover:not(:active:focus:focus-visible)]:shadow-md'
          },
          warning: {
            fill: 'fill-dark-on-warning',
            color: 'text-dark-on-warning',
            background: 'bg-dark-warning',
            shadow: 'shadow-sm',
            hover: '[&:hover:not(:active:focus:focus-visible)]:shadow-md'
          },
          error: {
            fill: 'fill-dark-on-error',
            color: 'text-dark-on-error',
            background: 'bg-dark-error',
            shadow: 'shadow-sm',
            hover: '[&:hover:not(:active:focus:focus-visible)]:shadow-md'
          }
        }
      }
    },
    outlined: {
      plain: {
        light: {
          default: {
            border: 'border border-light-divider-variant'
          },
          primary: {
            border: 'border border-light-on-primary'
          },
          secondary: {
            border: 'border border-light-on-secondary'
          },
          success: {
            border: 'border border-light-on-success'
          },
          warning: {
            border: 'border border-light-on-warning'
          },
          error: {
            border: 'border border-light-on-error'
          }
        },
        dark: {
          default: {
            border: 'border border-dark-divider-variant'
          },
          primary: {
            border: 'border border-dark-on-primary'
          },
          secondary: {
            border: 'border border-dark-on-secondary'
          },
          success: {
            border: 'border border-dark-on-success'
          },
          warning: {
            border: 'border border-dark-on-warning'
          },
          error: {
            border: 'border border-dark-on-error'
          }
        }
      },
      solid: {
        light: {
          default: {
            border: 'border border-light-divider'
          },
          primary: {
            border: 'border border-light-primary'
          },
          secondary: {
            border: 'border border-light-secondary'
          },
          success: {
            border: 'border border-light-success'
          },
          warning: {
            border: 'border border-light-warning'
          },
          error: {
            border: 'border border-light-error'
          }
        },
        dark: {
          default: {
            border: 'border border-dark-divider'
          },
          primary: {
            border: 'border border-dark-primary'
          },
          secondary: {
            border: 'border border-dark-secondary'
          },
          success: {
            border: 'border border-dark-success'
          },
          warning: {
            border: 'border border-dark-warning'
          },
          error: {
            border: 'border border-dark-error'
          }
        }
      }
    },
    focusVisible: {
      plain: {
        light: {
          default: {
            focusVisible: 'focus-visible:ring-light-on-surface'
          },
          primary: {
            focusVisible: 'focus-visible:ring-light-on-primary'
          },
          secondary: {
            focusVisible: 'focus-visible:ring-light-on-secondary'
          },
          success: {
            focusVisible: 'focus-visible:ring-light-on-success'
          },
          warning: {
            focusVisible: 'focus-visible:ring-light-on-warning'
          },
          error: {
            focusVisible: 'focus-visible:ring-light-on-error'
          }
        },
        dark: {
          default: {
            focusVisible: 'focus-visible:ring-dark-on-surface'
          },
          primary: {
            focusVisible: 'focus-visible:ring-dark-on-primary'
          },
          secondary: {
            focusVisible: 'focus-visible:ring-dark-on-secondary'
          },
          success: {
            focusVisible: 'focus-visible:ring-dark-on-success'
          },
          warning: {
            focusVisible: 'focus-visible:ring-dark-on-warning'
          },
          error: {
            focusVisible: 'focus-visible:ring-dark-on-error'
          }
        }
      },
      solid: {
        light: {
          default: {
            focusVisible: 'focus-visible:ring-light-on-surface'
          },
          primary: {
            focusVisible: 'focus-visible:ring-light-primary'
          },
          secondary: {
            focusVisible: 'focus-visible:ring-light-secondary'
          },
          success: {
            focusVisible: 'focus-visible:ring-light-success'
          },
          warning: {
            focusVisible: 'focus-visible:ring-light-warning'
          },
          error: {
            focusVisible: 'focus-visible:ring-light-error'
          }
        },
        dark: {
          default: {
            focusVisible: 'focus-visible:ring-dark-on-surface'
          },
          primary: {
            focusVisible: 'focus-visible:ring-dark-primary'
          },
          secondary: {
            focusVisible: 'focus-visible:ring-dark-secondary'
          },
          success: {
            focusVisible: 'focus-visible:ring-dark-success'
          },
          warning: {
            focusVisible: 'focus-visible:ring-dark-warning'
          },
          error: {
            focusVisible: 'focus-visible:ring-dark-error'
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

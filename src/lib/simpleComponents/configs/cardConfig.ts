export interface CardConfig {
  defaultProps: {
    size: Sizes;
    variant: Variants;
    color: Colors;
    simple: boolean;
    elevated: boolean;
    clickable: boolean;
    grabed: boolean;
    disabled: boolean;
    layout: BoxLayouts;
  };
  styles: {
    base: Record<string, string>;
    stateLayer: Record<string, string>;
    sizes: Record<Sizes, Record<string, string>>;
    disabledOutline: Record<Themes, Record<string, string>>;
    disabled: Record<TextVariants, Record<Themes, Record<string, string>>>;
    focusVisible: Record<TextVariants, Record<Themes, Record<Colors, Record<string, string>>>>;
    stateLayerVariants: Record<TextVariants, Record<Themes, Record<Colors, Record<string, string>>>>;
    stateLayerGrabedVariants: Record<TextVariants, Record<Themes, Record<Colors, Record<string, string>>>>;
  }
}

const cardConfig: CardConfig = {
  defaultProps: {
    size: 'md',
    variant: 'text',
    color: 'default',
    simple: false,
    clickable: false,
    grabed: false,
    disabled: false,
    layout: 'col',
    elevated: false
  },
  styles: {
    base: {
      borderRadius: 'rounded-xl',
      overflow: 'overflow-hidden'
    },
    stateLayer: {
      position: 'relative after:absolute',
      top: 'after:top-0',
      left: 'after:left-0',
      display: 'after:block',
      width: 'after:w-full',
      height: 'after:h-full',
      transitions: 'after:transition-colors',
      pointerEvents: 'after:pointer-events-none'
    },
    sizes: {
      xs: {
        padding: 'p-xs'
      },
      sm: {
        padding: 'p-sm'
      },
      md: {
        padding: 'p-md'
      },
      lg: {
        padding: 'p-lg'
      }
    },
    disabledOutline: {
      light: {
        border: 'border-light-on-surface/40'
      },
      dark: {
        border: 'border-dark-on-surface/40'
      }
    },
    disabled: {
      plain: {
        light: {
          color: 'text-light-on-surface/40'
        },
        dark: {
          color: 'text-dark-on-surface/40'
        }
      },
      solid: {
        light: {
          color: 'text-light-on-surface/40',
          background: 'bg-light-on-surface/20'
        },
        dark: {
          color: 'text-dark-on-surface/40',
          background: 'bg-dark-on-surface/20'
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
    },
    stateLayerGrabedVariants: {
      plain: {
        light: {
          default: {
            background: 'after:bg-light-on-surface/25'
          },
          primary: {
            background: 'after:bg-light-on-primary/25'
          },
          secondary: {
            background: 'after:bg-light-on-secondary/25'
          },
          success: {
            background: 'after:bg-light-on-success/25'
          },
          warning: {
            background: 'after:bg-light-on-warning/25'
          },
          error: {
            background: 'after:bg-light-on-error/25'
          }
        },
        dark: {
          default: {
            background: 'after:bg-dark-on-surface/25'
          },
          primary: {
            background: 'after:bg-dark-on-primary/25'
          },
          secondary: {
            background: 'after:bg-dark-on-secondary/25'
          },
          success: {
            background: 'after:bg-dark-on-success/25'
          },
          warning: {
            background: 'after:bg-dark-on-warning/25'
          },
          error: {
            background: 'after:bg-dark-on-error/25'
          }
        }
      },
      solid: {
        light: {
          default: {
            background: 'after:bg-light-surface/25'
          },
          primary: {
            background: 'after:bg-light-primary/25'
          },
          secondary: {
            background: 'after:bg-light-secondary/25'
          },
          success: {
            background: 'after:bg-light-success/25'
          },
          warning: {
            background: 'after:bg-light-warning/25'
          },
          error: {
            background: 'after:bg-light-error/25'
          }
        },
        dark: {
          default: {
            background: 'after:bg-dark-surface/25'
          },
          primary: {
            background: 'after:bg-dark-primary/25'
          },
          secondary: {
            background: 'after:bg-dark-secondary/25'
          },
          success: {
            background: 'after:bg-dark-success/25'
          },
          warning: {
            background: 'after:bg-dark-warning/25'
          },
          error: {
            background: 'after:bg-dark-error/25'
          }
        }
      }
    }
  }
};

export default cardConfig;

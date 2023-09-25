export interface CardConfig {
  defaultProps: {
    variant: Variants;
    color: Colors;
    simple: boolean;
    elevated: boolean;
    clickable: boolean;
    grabed: boolean;
    disabled: boolean;
  };
  styles: {
    base: Record<string, string>;
    stateLayer: Record<string, string>;
    elevated: Record<string, string>;
    clickable: Record<string, string>;
    grabed: Record<string, string>;
    sizes: Record<Sizes, Record<string, string>>;
    stateLayerVariants: Record<TextVariants, Record<Themes, Record<Colors, Record<string, string>>>>;
    stateLayerGrabed: Record<TextVariants, Record<Themes, Record<Colors, Record<string, string>>>>;
    disabled: Record<Variants, Record<Themes, Record<string, string>>>;
  }
}

const cardConfig: CardConfig = {
  defaultProps: {
    variant: 'text',
    color: 'default',
    simple: false,
    elevated: false,
    clickable: false,
    grabed: false,
    disabled: false
  },
  styles: {
    base: {
      borderRadius: 'rounded-xl',
      overflow: 'overflow-hidden'
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
    elevated: {
      shadow: 'shadow-md'
    },
    clickable: {
      position: 'relative'
    },
    grabed: {
      position: 'relative'
    },
    sizes: {
      xs: {
        padding: 'px-xs-p'
      },
      sm: {
        padding: 'px-sm-p'
      },
      md: {
        padding: 'px-md-p'
      },
      lg: {
        padding: 'px-lg-p'
      }
    },
    stateLayerVariants: {
      plain: {
        light: {
          default: {
            hover: 'hover:after:bg-light-on-surface/10',
            active: 'active:after:bg-light-on-surface/20',
            focus: 'focus:after:bg-light-on-surface/20',
            focusVisible: 'focus-visible:ring-light-on-surface'
          },
          primary: {
            hover: 'hover:after:bg-light-on-primary/10',
            active: 'active:after:bg-light-on-primary/20',
            focus: 'focus:after:bg-light-on-primary/20',
            focusVisible: 'focus-visible:ring-light-primary'
          },
          secondary: {
            hover: 'hover:after:bg-light-on-secondary/10',
            active: 'active:after:bg-light-on-secondary/20',
            focus: 'focus:after:bg-light-on-secondary/20',
            focusVisible: 'focus-visible:ring-light-secondary'
          },
          success: {
            hover: 'hover:after:bg-light-on-success/10',
            active: 'active:after:bg-light-on-success/20',
            focus: 'focus:after:bg-light-on-success/20',
            focusVisible: 'focus-visible:ring-light-success'
          },
          warning: {
            hover: 'hover:after:bg-light-on-warning/10',
            active: 'active:after:bg-light-on-warning/20',
            focus: 'focus:after:bg-light-on-warning/20',
            focusVisible: 'focus-visible:ring-light-warning'
          },
          error: {
            hover: 'hover:after:bg-light-on-error/10',
            active: 'active:after:bg-light-on-error/20',
            focus: 'focus:after:bg-light-on-error/20',
            focusVisible: 'focus-visible:ring-light-error'
          }
        },
        dark: {
          default: {
            hover: 'hover:after:bg-dark-on-surface/10',
            active: 'active:after:bg-dark-on-surface/20',
            focus: 'focus:after:bg-dark-on-surface/20',
            focusVisible: 'focus-visible:ring-dark-on-surface'
          },
          primary: {
            hover: 'hover:after:bg-dark-on-primary/10',
            active: 'active:after:bg-dark-on-primary/20',
            focus: 'focus:after:bg-dark-on-primary/20',
            focusVisible: 'focus-visible:ring-dark-primary'
          },
          secondary: {
            hover: 'hover:after:bg-dark-on-secondary/10',
            active: 'active:after:bg-dark-on-secondary/20',
            focus: 'focus:after:bg-dark-on-secondary/20',
            focusVisible: 'focus-visible:ring-dark-secondary'
          },
          success: {
            hover: 'hover:after:bg-dark-on-success/10',
            active: 'active:after:bg-dark-on-success/20',
            focus: 'focus:after:bg-dark-on-success/20',
            focusVisible: 'focus-visible:ring-dark-success'
          },
          warning: {
            hover: 'hover:after:bg-dark-on-warning/10',
            active: 'active:after:bg-dark-on-warning/20',
            focus: 'focus:after:bg-dark-on-warning/20',
            focusVisible: 'focus-visible:ring-dark-warning'
          },
          error: {
            hover: 'hover:after:bg-dark-on-error/10',
            active: 'active:after:bg-dark-on-error/20',
            focus: 'focus:after:bg-dark-on-error/20',
            focusVisible: 'focus-visible:ring-dark-error'
          }
        }
      },
      solid: {
        light: {
          default: {
            hover: 'hover:after:bg-light-on-surface/10',
            active: 'active:after:bg-light-on-surface/20',
            focus: 'focus:after:bg-light-on-surface/20',
            focusVisible: 'focus-visible:ring-light-on-surface'
          },
          primary: {
            hover: 'hover:after:bg-light-primary/10',
            active: 'active:after:bg-light-primary/20',
            focus: 'focus:after:bg-light-primary/20',
            focusVisible: 'focus-visible:ring-light-primary'
          },
          secondary: {
            hover: 'hover:after:bg-light-secondary/10',
            active: 'active:after:bg-light-secondary/20',
            focus: 'focus:after:bg-light-secondary/20',
            focusVisible: 'focus-visible:ring-light-secondary'
          },
          success: {
            hover: 'hover:after:bg-light-success/10',
            active: 'active:after:bg-light-success/20',
            focus: 'focus:after:bg-light-success/20',
            focusVisible: 'focus-visible:ring-light-success'
          },
          warning: {
            hover: 'hover:after:bg-light-warning/10',
            active: 'active:after:bg-light-warning/20',
            focus: 'focus:after:bg-light-warning/20',
            focusVisible: 'focus-visible:ring-light-warning'
          },
          error: {
            hover: 'hover:after:bg-light-error/10',
            active: 'active:after:bg-light-error/20',
            focus: 'focus:after:bg-light-error/20',
            focusVisible: 'focus-visible:ring-light-error'
          }
        },
        dark: {
          default: {
            hover: 'hover:after:bg-dark-on-surface/10',
            active: 'active:after:bg-dark-on-surface/20',
            focus: 'focus:after:bg-dark-on-surface/20',
            focusVisible: 'focus-visible:ring-dark-on-surface'
          },
          primary: {
            hover: 'hover:after:bg-dark-primary/10',
            active: 'active:after:bg-dark-primary/20',
            focus: 'focus:after:bg-dark-primary/20',
            focusVisible: 'focus-visible:ring-dark-primary'
          },
          secondary: {
            hover: 'hover:after:bg-dark-secondary/10',
            active: 'active:after:bg-dark-secondary/20',
            focus: 'focus:after:bg-dark-secondary/20',
            focusVisible: 'focus-visible:ring-dark-secondary'
          },
          success: {
            hover: 'hover:after:bg-dark-success/10',
            active: 'active:after:bg-dark-success/20',
            focus: 'focus:after:bg-dark-success/20',
            focusVisible: 'focus-visible:ring-dark-success'
          },
          warning: {
            hover: 'hover:after:bg-dark-warning/10',
            active: 'active:after:bg-dark-warning/20',
            focus: 'focus:after:bg-dark-warning/20',
            focusVisible: 'focus-visible:ring-dark-warning'
          },
          error: {
            hover: 'hover:after:bg-dark-error/10',
            active: 'active:after:bg-dark-error/20',
            focus: 'focus:after:bg-dark-error/20',
            focusVisible: 'focus-visible:ring-dark-error'
          }
        }
      }
    },
    stateLayerGrabed: {
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
      text: {
        light: {
          color: 'text-light-on-surface/40'
        },
        dark: {
          color: 'text-dark-on-surface/40'
        }
      },
      soft: {
        light: {
          color: 'text-light-on-surface/40',
          background: 'bg-light-on-surface/20'
        },
        dark: {
          color: 'text-dark-on-surface/40',
          background: 'bg-dark-on-surface/20'
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
      },
      outlined: {
        light: {
          border: 'border-light-on-surface/40',
          color: 'text-light-on-surface/40'
        },
        dark: {
          border: 'border-dark-on-surface/40',
          color: 'text-dark-on-surface/40'
        }
      }
    }
  }
};

export default cardConfig;

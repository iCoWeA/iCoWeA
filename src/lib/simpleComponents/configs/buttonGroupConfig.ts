import { type ButtonGroupVariants } from '../components/UI/ButtonGroup';

export interface ButtonGroupConfig {
  defaultProps: {
    variant: ButtonGroupVariants;
    size: Sizes;
    color: Colors;
    elevated: boolean;
    fullwidth: boolean;
    disabled: boolean;
    type: 'submit' | 'reset' | 'button';
  };
  styles: {
    container: {
      base: Record<string, string>;
      fullwidth: Record<string, string>;
      elevated: Record<string, string>;
    },
    button: {
      base: Record<string, string>;
      first: Record<string, string>;
      last: Record<string, string>;
      firstOutline: Record<string, string>;
      lastOutline: Record<string, string>;
      variants: Record<ButtonGroupVariants, Record<string, Record<Colors, Record<string, string>>>>;
    }
  }
}

const buttonGroupConfig: ButtonGroupConfig = {
  defaultProps: {
    variant: 'filled',
    size: 'md',
    color: 'primary',
    elevated: false,
    fullwidth: false,
    disabled: false,
    type: 'button'
  },
  styles: {
    container: {
      base: {
        display: 'flex',
        height: 'h-fit',
        width: 'w-fit',
        borderRadius: 'rounded-full'
      },
      fullwidth: {
        width: 'w-full'
      },
      elevated: {
        shadow: 'shadow-md shadow-black/50'
      }
    },
    button: {
      base: {
        border: 'border-r'
      },
      first: {
        borderRadius: 'rounded-l-full'
      },
      last: {
        border: 'border-r-0',
        borderRadius: 'rounded-r-full'
      },
      firstOutline: {
        border: 'border-l'
      },
      lastOutline: {
        border: 'border-r'
      },
      variants: {
        plain: {
          light: {
            default: {
              border: 'border-light-on-surface',
              disabled: 'disabled:border-light-on-surface/40'
            },
            primary: {
              border: 'border-light-on-primary',
              disabled: 'disabled:border-light-on-primary/40'
            },
            secondary: {
              border: 'border-light-on-secondary',
              disabled: 'disabled:border-light-on-secondary/40'
            },
            success: {
              border: 'border-light-on-success',
              disabled: 'disabled:border-light-on-success/40'
            },
            warning: {
              border: 'border-light-on-warning',
              disabled: 'disabled:border-light-on-warning/40'
            },
            error: {
              border: 'border-light-on-error',
              disabled: 'disabled:border-light-on-error/40'
            }
          }
        },
        text: {
          light: {
            default: {
              border: 'border-light-on-surface',
              disabled: 'disabled:border-light-on-surface/40'
            },
            primary: {
              border: 'border-light-primary',
              disabled: 'disabled:border-light-on-surface/40'
            },
            secondary: {
              border: 'border-light-secondary',
              disabled: 'disabled:border-light-on-surface/40'
            },
            success: {
              border: 'border-light-success',
              disabled: 'disabled:border-light-on-surface/40'
            },
            warning: {
              border: 'border-light-warning',
              disabled: 'disabled:border-light-on-surface/40'
            },
            error: {
              border: 'border-light-error',
              disabled: 'disabled:border-light-on-surface/40'
            }
          }
        },
        outlined: {
          light: {
            default: {
              border: 'border-y border-light-on-surface',
              disabled: 'disabled:border-light-on-surface/40'
            },
            primary: {
              border: 'border-y border-light-primary',
              disabled: 'disabled:border-light-on-surface/40'
            },
            secondary: {
              border: 'border-y border-light-secondary',
              disabled: 'disabled:border-light-on-surface/40'
            },
            success: {
              border: 'border-y border-light-success',
              disabled: 'disabled:border-light-on-surface/40'
            },
            warning: {
              border: 'border-y border-light-warning',
              disabled: 'disabled:border-light-on-surface/40'
            },
            error: {
              border: 'border-y border-light-error',
              disabled: 'disabled:border-light-on-surface/40'
            }
          }
        },
        filled: {
          light: {
            default: {
              border: 'border-light-on-surface',
              disabled: 'disabled:border-light-on-surface/40'
            },
            primary: {
              border: 'border-light-primary-dark',
              disabled: 'disabled:border-light-on-surface/40'
            },
            secondary: {
              border: 'border-light-secondary-dark',
              disabled: 'disabled:border-light-on-surface/40'
            },
            success: {
              border: 'border-light-success-dark',
              disabled: 'disabled:border-light-on-surface/40'
            },
            warning: {
              border: 'border-light-warning-dark',
              disabled: 'disabled:border-light-on-surface/40'
            },
            error: {
              border: 'border-light-error-dark',
              disabled: 'disabled:border-light-on-surface/40'
            }
          }
        }
      }
    }
  }
};

export default buttonGroupConfig;

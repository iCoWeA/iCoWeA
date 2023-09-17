import { type ButtonGroupVariants } from '../components/UI/ButtonGroup';

export interface ButtonGroupConfig {
  defaultProps: {
    variant: ButtonGroupVariants;
    size: Sizes;
    color: Colors;
    elevated: boolean;
    fullwidth: boolean;
    tabIndex: number;
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
      fullwidth: Record<string, string>;
      sizes: Record<Sizes, Record<string, string>>;
      outlineSizes: Record<Sizes, Record<string, string>>;
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
    tabIndex: 0,
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
        position: 'relative',
        display: 'flex',
        gap: 'gap-2',
        alignItems: 'items-center',
        width: 'w-fit',
        border: 'border-r',
        font: 'antialiased font-normal text-sm font-sans',
        transition: 'transition',
        userSelect: 'select-none',
        hover: 'hover:bg-gradient-to-r',
        active: 'active:bg-gradient-to-r',
        focus: 'focus:outline-0',
        disabled: 'disabled:pointer-events-none'
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
      fullwidth: {
        width: 'w-full',
        justifyContent: 'justify-center'
      },
      sizes: {
        xs: {
          height: 'h-6',
          padding: 'py-0.5 px-2'
        },
        sm: {
          height: 'h-8',
          padding: 'py-1.5 px-3'
        },
        md: {
          height: 'h-10',
          padding: 'py-2.5 px-4'
        },
        lg: {
          height: 'h-12',
          padding: 'py-3.5 px-5'
        }
      },
      outlineSizes: {
        xs: {
          padding: 'py-px px-[0.4375rem]'
        },
        sm: {
          padding: 'py-[0.3125rem] px-[0.6875rem]'
        },
        md: {
          padding: 'py-[0.5625rem] px-[0.9375rem]'
        },
        lg: {
          padding: 'py-[0.8125rem] px-[1.1875rem]'
        }
      },
      variants: {
        plain: {
          light: {
            default: {
              border: 'border-light-on-surface',
              fill: 'fill-light-on-surface',
              color: 'text-light-on-surface',
              hover: 'hover:from-light-on-surface/10 hover:to-light-on-surface/10',
              active: 'active:from-light-on-surface/[0.15] active:to-light-on-surface/[0.15]',
              disabled: 'disabled:border-light-on-surface/40 disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40'
            },
            primary: {
              border: 'border-light-on-primary',
              fill: 'fill-light-on-primary',
              color: 'text-light-on-primary',
              hover: 'hover:from-light-on-primary/10 hover:to-light-on-primary/10',
              active: 'active:from-light-on-primary/[0.15] active:to-light-on-primary/[0.15]',
              disabled: 'disabled:border-light-on-primary/40 disabled:fill-light-on-primary/40 disabled:text-light-on-primary/40'
            },
            secondary: {
              border: 'border-light-on-secondary',
              fill: 'fill-light-on-secondary',
              color: 'text-light-on-secondary',
              hover: 'hover:from-light-on-secondary/10 hover:to-light-on-secondary/10',
              active: 'active:from-light-on-secondary/[0.15] active:to-light-on-secondary/[0.15]',
              disabled: 'disabled:border-light-on-secondary/40 disabled:fill-light-on-secondary/40 disabled:text-light-on-secondary/40'
            },
            success: {
              border: 'border-light-on-success',
              fill: 'fill-light-on-success',
              color: 'text-light-on-success',
              hover: 'hover:from-light-on-success/10 hover:to-light-on-success/10',
              active: 'active:from-light-on-success/[0.15] active:to-light-on-success/[0.15]',
              disabled: 'disabled:border-light-on-success/40 disabled:fill-light-on-success/40 disabled:text-light-on-success/40'
            },
            warning: {
              border: 'border-light-on-warning',
              fill: 'fill-light-on-warning',
              color: 'text-light-on-warning',
              hover: 'hover:from-light-on-warning/10 hover:to-light-on-warning/10',
              active: 'active:from-light-on-warning/[0.15] active:to-light-on-warning/[0.15]',
              disabled: 'disabled:border-light-on-warning/40 disabled:fill-light-on-warning/40 disabled:text-light-on-warning/40'
            },
            error: {
              border: 'border-light-on-error',
              fill: 'fill-light-on-error',
              color: 'text-light-on-error',
              hover: 'hover:from-light-on-error/10 hover:to-light-on-error/10',
              active: 'active:from-light-on-error/[0.15] active:to-light-on-error/[0.15]',
              disabled: 'disabled:border-light-on-error/40 disabled:fill-light-on-error/40 disabled:text-light-on-error/40'
            }
          }
        },
        text: {
          light: {
            default: {
              border: 'border-light-on-surface',
              fill: 'fill-light-on-surface',
              color: 'text-light-on-surface',
              hover: 'hover:from-light-on-surface/10 hover:to-light-on-surface/10',
              active: 'active:from-light-on-surface/[0.15] active:to-light-on-surface/[0.15]',
              disabled: 'disabled:border-light-on-surface/40 disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40'
            },
            primary: {
              border: 'border-light-primary',
              fill: 'fill-light-primary',
              color: 'text-light-primary',
              hover: 'hover:from-light-primary/10 hover:to-light-primary/10',
              active: 'active:from-light-primary/[0.15] active:to-light-primary/[0.15]',
              disabled: 'disabled:border-light-on-surface/40 disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40'
            },
            secondary: {
              border: 'border-light-secondary',
              fill: 'fill-light-secondary',
              color: 'text-light-secondary',
              hover: 'hover:from-light-secondary/10 hover:to-light-secondary/10',
              active: 'active:from-light-secondary/[0.15] active:to-light-secondary/[0.15]',
              disabled: 'disabled:border-light-on-surface/40 disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40'
            },
            success: {
              border: 'border-light-success',
              fill: 'fill-light-success',
              color: 'text-light-success',
              hover: 'hover:from-light-success/10 hover:to-light-success/10',
              active: 'active:from-light-success/[0.15] active:to-light-success/[0.15]',
              disabled: 'disabled:border-light-on-surface/40 disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40'
            },
            warning: {
              border: 'border-light-warning',
              fill: 'fill-light-warning',
              color: 'text-light-warning',
              hover: 'hover:from-light-warning/10 hover:to-light-warning/10',
              active: 'active:from-light-warning/[0.15] active:to-light-warning/[0.15]',
              disabled: 'disabled:border-light-on-surface/40 disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40'
            },
            error: {
              border: 'border-light-error',
              fill: 'fill-light-error',
              color: 'text-light-error',
              hover: 'hover:from-light-error/10 hover:to-light-error/10',
              active: 'active:from-light-error/[0.15] active:to-light-error/[0.15]',
              disabled: 'disabled:border-light-on-surface/40 disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40'
            }
          }
        },
        outlined: {
          light: {
            default: {
              border: 'border-y border-light-on-surface',
              fill: 'fill-light-on-surface',
              color: 'text-light-on-surface',
              hover: 'hover:from-light-on-surface/10 hover:to-light-on-surface/10',
              active: 'active:from-light-on-surface/[0.15] active:to-light-on-surface/[0.15]',
              disabled: 'disabled:border-light-on-surface/40 disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40'
            },
            primary: {
              border: 'border-y border-light-primary',
              fill: 'fill-light-primary',
              color: 'text-light-primary',
              hover: 'hover:from-light-primary/10 hover:to-light-primary/10',
              active: 'active:from-light-primary/[0.15] active:to-light-primary/[0.15]',
              disabled: 'disabled:border-light-on-surface/40 disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40'
            },
            secondary: {
              border: 'border-y border-light-secondary',
              fill: 'fill-light-secondary',
              color: 'text-light-secondary',
              hover: 'hover:from-light-secondary/10 hover:to-light-secondary/10',
              active: 'active:from-light-secondary/[0.15] active:to-light-secondary/[0.15]',
              disabled: 'disabled:border-light-on-surface/40 disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40'
            },
            success: {
              border: 'border-y border-light-success',
              fill: 'fill-light-success',
              color: 'text-light-success',
              hover: 'hover:from-light-success/10 hover:to-light-success/10',
              active: 'active:from-light-success/[0.15] active:to-light-success/[0.15]',
              disabled: 'disabled:border-light-on-surface/40 disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40'
            },
            warning: {
              border: 'border-y border-light-warning',
              fill: 'fill-light-warning',
              color: 'text-light-warning',
              hover: 'hover:from-light-warning/10 hover:to-light-warning/10',
              active: 'active:from-light-warning/[0.15] active:to-light-warning/[0.15]',
              disabled: 'disabled:border-light-on-surface/40 disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40'
            },
            error: {
              border: 'border-y border-light-error',
              fill: 'fill-light-error',
              color: 'text-light-error',
              hover: 'hover:from-light-error/10 hover:to-light-error/10',
              active: 'active:from-light-error/[0.15] active:to-light-error/[0.15]',
              disabled: 'disabled:border-light-on-surface/40 disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40'
            }
          }
        },
        filled: {
          light: {
            default: {
              border: 'border-light-on-surface',
              fill: 'fill-light-on-surface',
              color: 'text-light-on-surface',
              background: 'bg-light-surface-dark',
              hover: 'hover:shadow-md hover:shadow-black/50 hover:from-light-on-surface/10 hover:to-light-on-surface/10',
              active: 'active:shadow-none active:from-light-on-surface/[0.15] active:to-light-on-surface/[0.15]',
              disabled: 'disabled:border-light-on-surface/40 disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40 disabled:bg-light-on-surface/20'
            },
            primary: {
              border: 'border-light-primary-dark',
              fill: 'fill-light-on-primary',
              color: 'text-light-on-primary',
              background: 'bg-light-primary',
              hover: 'hover:shadow-md hover:shadow-black/50 hover:from-light-on-primary/10 hover:to-light-on-primary/10',
              active: 'active:shadow-none active:from-light-on-primary/[0.15] active:to-light-on-primary/[0.15]',
              disabled: 'disabled:border-light-on-surface/40 disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40 disabled:bg-light-on-surface/20'
            },
            secondary: {
              border: 'border-light-secondary-dark',
              fill: 'fill-light-on-secondary',
              color: 'text-light-on-secondary',
              background: 'bg-light-secondary',
              hover: 'hover:shadow-md hover:shadow-black/50 hover:from-light-on-secondary/10 hover:to-light-on-secondary/10',
              active: 'active:shadow-none active:from-light-on-secondary/[0.15] active:to-light-on-secondary/[0.15]',
              disabled: 'disabled:border-light-on-surface/40 disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40 disabled:bg-light-on-surface/20'
            },
            success: {
              border: 'border-light-success-dark',
              fill: 'fill-light-on-success',
              color: 'text-light-on-success',
              background: 'bg-light-success',
              hover: 'hover:shadow-md hover:shadow-black/50 hover:from-light-on-success/10 hover:to-light-on-success/10',
              active: 'active:shadow-none active:from-light-on-success/[0.15] active:to-light-on-success/[0.15]',
              disabled: 'disabled:border-light-on-surface/40 disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40 disabled:bg-light-on-surface/20'
            },
            warning: {
              border: 'border-light-warning-dark',
              fill: 'fill-light-on-warning',
              color: 'text-light-on-warning',
              background: 'bg-light-warning',
              hover: 'hover:shadow-md hover:shadow-black/50 hover:from-light-on-warning/10 hover:to-light-on-warning/10',
              active: 'active:shadow-none active:from-light-on-warning/[0.15] active:to-light-on-warning/[0.15]',
              disabled: 'disabled:border-light-on-surface/40 disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40 disabled:bg-light-on-surface/20'
            },
            error: {
              border: 'border-light-error-dark',
              fill: 'fill-light-on-error',
              color: 'text-light-on-error',
              background: 'bg-light-error',
              hover: 'hover:shadow-md hover:shadow-black/50 hover:from-light-on-error/10 hover:to-light-on-error/10',
              active: 'active:shadow-none active:from-light-on-error/[0.15] active:to-light-on-error/[0.15]',
              disabled: 'disabled:border-light-on-surface/40 disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40 disabled:bg-light-on-surface/20'
            }
          }
        }
      }
    }
  }
};

export default buttonGroupConfig;

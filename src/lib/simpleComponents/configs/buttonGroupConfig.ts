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
        overflow: 'overflow-hidden',
        transition: 'transition',
        userSelect: 'select-none',
        focus: 'focus:outline-0',
        disabled: 'disabled:pointer-events-none',
        group: 'group'
      },
      first: {
        borderRadius: 'rounded-l-full'
      },
      last: {
        border: 'border-r-0',
        borderRadius: 'rounded-r-full'
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
              disabled: 'disabled:border-light-on-surface-variant/40 disabled:fill-light-on-surface-variant/40 disabled:text-light-on-surface-variant/40'
            },
            primary: {
              border: 'border-light-on-primary',
              fill: 'fill-light-on-primary',
              color: 'text-light-on-primary',
              disabled: 'disabled:border-light-on-primary/40 disabled:fill-light-on-primary/40 disabled:text-light-on-primary/40'
            },
            secondary: {
              border: 'border-light-on-secondary',
              fill: 'fill-light-on-secondary',
              color: 'text-light-on-secondary',
              disabled: 'disabled:border-light-on-secondary/40 disabled:fill-light-on-secondary/40 disabled:text-light-on-secondary/40'
            },
            success: {
              border: 'border-light-on-success',
              fill: 'fill-light-on-success',
              color: 'text-light-on-success',
              disabled: 'disabled:border-light-on-success/40 disabled:fill-light-on-success/40 disabled:text-light-on-success/40'
            },
            warning: {
              border: 'border-light-on-warning',
              fill: 'fill-light-on-warning',
              color: 'text-light-on-warning',
              disabled: 'disabled:border-light-on-warning/40 disabled:fill-light-on-warning/40 disabled:text-light-on-warning/40'
            },
            error: {
              border: 'border-light-on-error',
              fill: 'fill-light-on-error',
              color: 'text-light-on-error',
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
              disabled: 'disabled:border-light-on-surface/40 disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40'
            },
            primary: {
              border: 'border-light-primary',
              fill: 'fill-light-primary',
              color: 'text-light-primary',
              disabled: 'disabled:border-light-on-surface/40 disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40'
            },
            secondary: {
              border: 'border-light-secondary',
              fill: 'fill-light-secondary',
              color: 'text-light-secondary',
              disabled: 'disabled:border-light-on-surface/40 disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40'
            },
            success: {
              border: 'border-light-success',
              fill: 'fill-light-success',
              color: 'text-light-success',
              disabled: 'disabled:border-light-on-surface/40 disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40'
            },
            warning: {
              border: 'border-light-warning',
              fill: 'fill-light-warning',
              color: 'text-light-warning',
              disabled: 'disabled:border-light-on-surface/40 disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40'
            },
            error: {
              border: 'border-light-error',
              fill: 'fill-light-error',
              color: 'text-light-error',
              disabled: 'disabled:border-light-on-surface/40 disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40'
            }
          }
        },
        outlined: {
          light: {
            default: {
              border: 'border border-light-on-surface',
              fill: 'fill-light-on-surface',
              color: 'text-light-on-surface',
              disabled: 'disabled:border-light-on-surface/40 disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40'
            },
            primary: {
              border: 'border border-light-primary',
              fill: 'fill-light-primary',
              color: 'text-light-primary',
              disabled: 'disabled:border-light-on-surface/40 disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40'
            },
            secondary: {
              border: 'border border-light-secondary',
              fill: 'fill-light-secondary',
              color: 'text-light-secondary',
              disabled: 'disabled:border-light-on-surface/40 disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40'
            },
            success: {
              border: 'border border-light-success',
              fill: 'fill-light-success',
              color: 'text-light-success',
              disabled: 'disabled:border-light-on-surface/40 disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40'
            },
            warning: {
              border: 'border border-light-warning',
              fill: 'fill-light-warning',
              color: 'text-light-warning',
              disabled: 'disabled:border-light-on-surface/40 disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40'
            },
            error: {
              border: 'border border-light-error',
              fill: 'fill-light-error',
              color: 'text-light-error',
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
              hover: 'hover:shadow-md hover:shadow-black/50',
              active: 'active:shadow-none',
              disabled: 'disabled:border-light-on-surface/40 disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40 disabled:bg-light-on-surface/20'
            },
            primary: {
              border: 'border-light-primary-dark',
              fill: 'fill-light-on-primary',
              color: 'text-light-on-primary',
              background: 'bg-light-primary',
              hover: 'hover:shadow-md hover:shadow-black/50',
              active: 'active:shadow-none',
              disabled: 'disabled:border-light-on-surface/40 disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40 disabled:bg-light-on-surface/20'
            },
            secondary: {
              border: 'border-light-secondary-dark',
              fill: 'fill-light-on-secondary',
              color: 'text-light-on-secondary',
              background: 'bg-light-secondary',
              hover: 'hover:shadow-md hover:shadow-black/50',
              active: 'active:shadow-none',
              disabled: 'disabled:border-light-on-surface/40 disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40 disabled:bg-light-on-surface/20'
            },
            success: {
              border: 'border-light-success-dark',
              fill: 'fill-light-on-success',
              color: 'text-light-on-success',
              background: 'bg-light-success',
              hover: 'hover:shadow-md hover:shadow-black/50',
              active: 'active:shadow-none',
              disabled: 'disabled:border-light-on-surface/40 disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40 disabled:bg-light-on-surface/20'
            },
            warning: {
              border: 'border-light-warning-dark',
              fill: 'fill-light-on-warning',
              color: 'text-light-on-warning',
              background: 'bg-light-warning',
              hover: 'hover:shadow-md hover:shadow-black/50',
              active: 'active:shadow-none',
              disabled: 'disabled:border-light-on-surface/40 disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40 disabled:bg-light-on-surface/20'
            },
            error: {
              border: 'border-light-error-dark',
              fill: 'fill-light-on-error',
              color: 'text-light-on-error',
              background: 'bg-light-error',
              hover: 'hover:shadow-md hover:shadow-black/50',
              active: 'active:shadow-none',
              disabled: 'disabled:border-light-on-surface/40 disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40 disabled:bg-light-on-surface/20'
            }
          }
        }
      }
    }
  }
};

export default buttonGroupConfig;

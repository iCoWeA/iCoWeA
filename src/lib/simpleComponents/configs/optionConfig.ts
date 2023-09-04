import { type LiHTMLAttributes } from 'react';

export type OptionVariant = 'standard' | 'filled';

export interface OptionConfig {
  defaultProps: {
    variant: OptionVariant;
    size: Sizes;
    color: Colors;
    fullwidth: boolean;
    selected: boolean;
    itemProps: LiHTMLAttributes<HTMLLIElement>;
  };
  styles: {
    container: {
      base: Record<string, string>;
    },
    button: {
      base: Record<string, string>;
      fullwidth: Record<string, string>;
      sizes: Record<Sizes, Record<string, string>>;
      selected: Record<OptionVariant, Record<string, Record<Colors, Record<string, string>>>>;
      variants: Record<OptionVariant, Record<string, Record<Colors, Record<string, string>>>>;
    }
  }
}

const optionConfig: OptionConfig = {
  defaultProps: {
    variant: 'filled',
    size: 'md',
    color: 'default',
    fullwidth: false,
    selected: false,
    itemProps: {}
  },
  styles: {
    container: {
      base: {
        display: 'flex',
        gap: 'gap-3',
        alignItems: 'items-center',
        height: 'h-full',
        width: 'w-full',
        focus: 'focus:outline-0'
      }
    },
    button: {
      base: {
        display: 'flex',
        gap: 'gap-3',
        alignItems: 'items-center',
        height: 'h-full',
        width: 'w-full',
        borderRadius: 'rounded-full',
        font: 'antialiased font-normal text-base font-sans',
        transition: 'transition-colors',
        focus: 'focus:outline-0',
        disabled: 'disabled:opacity-50 disabled:pointer-events-none disabled:select-none'
      },
      fullwidth: {
        borderRadius: 'rounded-none'
      },
      sizes: {
        sm: {
          padding: 'py-1.5 px-3'
        },
        md: {
          padding: 'py-2 px-4'
        },
        lg: {
          padding: 'py-2.5 px-5'
        }
      },
      selected: {
        filled: {
          default: {
            default: {
              fill: 'fill-default-default',
              color: 'text-default-default',
              background: 'bg-default-default/20'
            },
            primary: {
              fill: 'fill-default-primary',
              color: 'text-default-primary',
              background: 'bg-default-primary/20'
            },
            secondary: {
              fill: 'fill-default-secondary',
              color: 'text-default-secondary',
              background: 'bg-default-secondary/20'
            },
            success: {
              fill: 'fill-default-success',
              color: 'text-default-success',
              background: 'bg-default-success/20'
            },
            warning: {
              fill: 'fill-default-warning',
              color: 'text-default-warning',
              background: 'bg-default-warning/20'
            },
            error: {
              fill: 'fill-default-error',
              color: 'text-default-error',
              background: 'bg-default-error/20'
            },
            light: {
              fill: 'fill-default-light',
              color: 'text-default-light',
              background: 'bg-default-light/20'
            },
            dark: {
              fill: 'fill-default-dark',
              color: 'text-default-dark',
              background: 'bg-default-dark/20'
            }
          }
        },
        standard: {
          default: {
            default: {
              fill: 'fill-default-default',
              color: 'text-default-default'
            },
            primary: {
              fill: 'fill-default-primary',
              color: 'text-default-primary'
            },
            secondary: {
              fill: 'fill-default-secondary',
              color: 'text-default-secondary'
            },
            success: {
              fill: 'fill-default-success',
              color: 'text-default-success'
            },
            warning: {
              fill: 'fill-default-warning',
              color: 'text-default-warning'
            },
            error: {
              fill: 'fill-default-error',
              color: 'text-default-error'
            },
            light: {
              fill: 'fill-default-light',
              color: 'text-default-light'
            },
            dark: {
              fill: 'fill-default-dark',
              color: 'text-default-dark'
            }
          }
        }
      },
      variants: {
        filled: {
          default: {
            default: {
              fill: 'fill-default-default',
              color: 'text-default-default',
              hover: 'hover:fill-default-default hover:text-default-default hover:bg-default-default/10',
              active: 'active:fill-default-default active:text-default-default active:bg-default-default/20',
              focus: 'focus:fill-default-default focus:text-default-default focus:bg-default-default/20'
            },
            primary: {
              fill: 'fill-default-default',
              color: 'text-default-default',
              hover: 'hover:fill-default-primary hover:text-default-primary hover:bg-default-primary/10',
              active: 'active:fill-default-primary active:text-default-primary active:bg-default-primary/20',
              focus: 'focus:fill-default-primary focus:text-default-primary focus:bg-default-primary/20'
            },
            secondary: {
              fill: 'fill-default-default',
              color: 'text-default-default',
              hover: 'hover:fill-default-secondary hover:text-default-secondary hover:bg-default-secondary/10',
              active: 'active:fill-default-secondary active:text-default-secondary active:bg-default-secondary/20',
              focus: 'focus:fill-default-secondary focus:text-default-secondary focus:bg-default-secondary/20'
            },
            success: {
              fill: 'fill-default-default',
              color: 'text-default-default',
              hover: 'hover:fill-default-success hover:text-default-success hover:bg-default-success/10',
              active: 'active:fill-default-success active:text-default-success active:bg-default-success/20',
              focus: 'focus:fill-default-success focus:text-default-success focus:bg-default-success/20'
            },
            warning: {
              fill: 'fill-default-default',
              color: 'text-default-default',
              hover: 'hover:fill-default-warning hover:text-default-warning hover:bg-default-warning/10',
              active: 'active:fill-default-warning active:text-default-warning active:bg-default-warning/20',
              focus: 'focus:fill-default-warning focus:text-default-warning focus:bg-default-warning/20'
            },
            error: {
              fill: 'fill-default-default',
              color: 'text-default-default',
              hover: 'hover:fill-default-error hover:text-default-error hover:bg-default-error/10',
              active: 'active:fill-default-error active:text-default-error active:bg-default-error/20',
              focus: 'focus:fill-default-error focus:text-default-error focus:bg-default-error/20'
            },
            light: {
              fill: 'fill-default-default',
              color: 'text-default-default',
              hover: 'hover:fill-default-light hover:text-default-light hover:bg-default-light/10',
              active: 'active:fill-default-light active:text-default-light active:bg-default-light/20',
              focus: 'focus:fill-default-light focus:text-default-light focus:bg-default-light/20'
            },
            dark: {
              fill: 'fill-default-default',
              color: 'text-default-default',
              hover: 'hover:fill-default-dark hover:text-default-dark hover:bg-default-dark/10',
              active: 'active:fill-default-dark active:text-default-dark active:bg-default-dark/20',
              focus: 'focus:fill-default-dark focus:text-default-dark focus:bg-default-dark/20'
            }
          }
        },
        standard: {
          default: {
            default: {
              fill: 'fill-default-default',
              color: 'text-default-default',
              hover: 'hover:fill-default-default/70 hover:text-default-default/70',
              active: 'active:fill-default-default active:text-default-default',
              focus: 'focus:fill-default-default focus:text-default-default'
            },
            primary: {
              fill: 'fill-default-default',
              color: 'text-default-default',
              hover: 'hover:fill-default-primary/70 hover:text-default-primary/70',
              active: 'active:fill-default-primary active:text-default-primary',
              focus: 'focus:fill-default-primary focus:text-default-primary'
            },
            secondary: {
              fill: 'fill-default-default',
              color: 'text-default-default',
              hover: 'hover:fill-default-secondary/70 hover:text-default-secondary/70',
              active: 'active:fill-default-secondary active:text-default-secondary',
              focus: 'focus:fill-default-secondary focus:text-default-secondary'
            },
            success: {
              fill: 'fill-default-default',
              color: 'text-default-default',
              hover: 'hover:fill-default-success/70 hover:text-default-success/70',
              active: 'active:fill-default-success active:text-default-success',
              focus: 'focus:fill-default-success focus:text-default-success'
            },
            warning: {
              fill: 'fill-default-default',
              color: 'text-default-default',
              hover: 'hover:fill-default-warning/70 hover:text-default-warning/70',
              active: 'active:fill-default-warning active:text-default-warning',
              focus: 'focus:fill-default-warning focus:text-default-warning'
            },
            error: {
              fill: 'fill-default-default',
              color: 'text-default-default',
              hover: 'hover:fill-default-error/70 hover:text-default-error/70',
              active: 'active:fill-default-error active:text-default-error',
              focus: 'focus:fill-default-error focus:text-default-error'
            },
            light: {
              fill: 'fill-default-default',
              color: 'text-default-default',
              hover: 'hover:fill-default-light/70 hover:text-default-light/70',
              active: 'active:fill-default-light active:text-default-light',
              focus: 'focus:fill-default-light focus:text-default-light'
            },
            dark: {
              fill: 'fill-default-default',
              color: 'text-default-default',
              hover: 'hover:fill-default-dark/70 hover:text-default-dark/70',
              active: 'active:fill-default-dark active:text-default-dark',
              focus: 'focus:fill-default-dark focus:text-default-dark'
            }
          }
        }
      }
    }
  }
};

export default optionConfig;

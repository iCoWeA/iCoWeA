import { type ButtonHTMLAttributes, type ReactNode } from 'react';

export type ButtonGroupVariants = 'filled' | 'outlined' | 'text';

export interface ButtonGroupConfig {
  defaultProps: {
    variant: ButtonGroupVariants;
    size: Sizes;
    color: Colors;
    elevated: boolean;
    fullwidth: boolean;
    type: 'submit' | 'reset' | 'button';
    buttonProps: Record<number, ButtonHTMLAttributes<HTMLButtonElement>>;
    className: string;
    children?: ReactNode;
  };
  styles: {
    root: {
      base: Record<string, string>;
      fullwidth: Record<string, string>;
    },
    button: {
      base: Record<string, string>;
      first: Record<string, string>;
      last: Record<ButtonGroupVariants, Record<string, string>>;
      fullwidth: Record<string, string>;
      sizes: Record<Sizes, Record<string, string>>;
      elevated: Record<string, Record<string, string>>;
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
    type: 'button',
    buttonProps: {},
    className: ''
  },
  styles: {
    root: {
      base: {
        display: 'flex',
        height: 'h-fit',
        width: 'w-fit',
        focus: 'focus:outline-0'
      },
      fullwidth: {
        width: 'w-full'
      }
    },
    button: {
      base: {
        display: 'flex',
        gap: 'gap-2',
        alignItems: 'items-center',
        height: 'h-fit',
        width: 'w-fit',
        font: 'antialiased font-normal text-base font-sans',
        transition: 'transition-all',
        focus: 'focus:outline-0',
        disabled: 'disabled:opacity-50 disabled:pointer-events-none disabled:select-none'
      },
      first: {
        borderRadius: 'rounded-l-full'
      },
      last: {
        filled: {
          border: 'border-0',
          borderRadius: 'rounded-r-full'
        },
        outlined: {
          border: 'border-r',
          borderRadius: 'rounded-r-full'
        },
        text: {
          border: 'border-0',
          borderRadius: 'rounded-r-full'
        }
      },
      fullwidth: {
        width: 'w-full',
        justifyContent: 'justify-center'
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
      elevated: {
        default: {
          shadow: 'shadow-md shadow-default-default/80',
          hover: 'hover:shadow-lg hover:shadow-default-default',
          active: 'active:shadow-none',
          disabled: 'disabled:shadow-none'
        }
      },
      variants: {
        filled: {
          default: {
            default: {
              border: 'border-r border-black/[0.15]',
              fill: 'fill-default-text-dark',
              color: 'text-default-text-dark',
              background: 'bg-default-default',
              hover: 'hover:bg-default-default/90',
              active: 'active:bg-default-default/80'
            },
            primary: {
              border: 'border-r border-black/[0.15]',
              fill: 'fill-default-text-light',
              color: 'text-default-text-light',
              background: 'bg-default-primary',
              hover: 'hover:bg-default-primary/90',
              active: 'active:bg-default-primary/80'
            },
            secondary: {
              border: 'border-r border-black/[0.15]',
              fill: 'fill-default-text-light',
              color: 'text-default-text-light',
              background: 'bg-default-secondary',
              hover: 'hover:bg-default-secondary/90',
              active: 'active:bg-default-secondary/80'
            },
            success: {
              border: 'border-r border-black/[0.15]',
              fill: 'fill-default-text-light',
              color: 'text-default-text-light',
              background: 'bg-default-success',
              hover: 'hover:bg-default-success/90',
              active: 'active:bg-default-success/80'
            },
            warning: {
              border: 'border-r border-black/[0.15]',
              fill: 'fill-default-text-dark',
              color: 'text-default-text-dark',
              background: 'bg-default-warning',
              hover: 'hover:bg-default-warning/90',
              active: 'active:bg-default-warning/80'
            },
            error: {
              border: 'border-r border-black/[0.15]',
              fill: 'fill-default-text-light',
              color: 'text-default-text-light',
              background: 'bg-default-error',
              hover: 'hover:bg-default-error/90',
              active: 'active:bg-default-error/80'
            },
            light: {
              border: 'border-r border-black/[0.15]',
              fill: 'fill-default-text-dark',
              color: 'text-default-text-dark',
              background: 'bg-default-light',
              hover: 'hover:bg-default-light/90',
              active: 'active:bg-default-light/80'
            },
            dark: {
              border: 'border-r border-black/[0.15]',
              fill: 'fill-default-text-light',
              color: 'text-default-text-light',
              background: 'bg-default-dark',
              hover: 'hover:bg-default-dark/90',
              active: 'active:bg-default-dark/80'
            }
          }
        },
        outlined: {
          default: {
            default: {
              border: 'border border-r-0 border-default-default',
              fill: 'fill-default-default',
              color: 'text-default-default',
              hover: 'hover:bg-default-default/10',
              active: 'active:bg-default-default/20'
            },
            primary: {
              border: 'border border-r-0 border-default-primary',
              fill: 'fill-default-primary',
              color: 'text-default-primary',
              hover: 'hover:bg-default-primary/10',
              active: 'active:bg-default-primary/20'
            },
            secondary: {
              border: 'border border-r-0 border-default-secondary',
              fill: 'fill-default-secondary',
              color: 'text-default-secondary',
              hover: 'hover:bg-default-secondary/10',
              active: 'active:bg-default-secondary/20'
            },
            success: {
              border: 'border border-r-0 border-default-success',
              fill: 'fill-default-success',
              color: 'text-default-success',
              hover: 'hover:bg-default-success/10',
              active: 'active:bg-default-success/20'
            },
            warning: {
              border: 'border border-r-0 border-default-warning',
              fill: 'fill-default-warning',
              color: 'text-default-warning',
              hover: 'hover:bg-default-warning/10',
              active: 'active:bg-default-warning/20'
            },
            error: {
              border: 'border border-r-0 border-default-error',
              fill: 'fill-default-error',
              color: 'text-default-error',
              hover: 'hover:bg-default-error/10',
              active: 'active:bg-default-error/20'
            },
            light: {
              border: 'border border-r-0 border-default-light',
              fill: 'fill-default-light',
              color: 'text-default-light',
              hover: 'hover:bg-default-light/10',
              active: 'active:bg-default-light/20'
            },
            dark: {
              border: 'border border-r-0 border-default-dark',
              fill: 'fill-default-dark',
              color: 'text-default-dark',
              hover: 'hover:bg-default-dark/10',
              active: 'active:bg-default-dark/20'
            }
          }
        },
        text: {
          default: {
            default: {
              border: 'border-r border-default',
              fill: 'fill-default-default',
              color: 'text-default-default',
              hover: 'hover:bg-default-default/10',
              active: 'active:bg-default-default/20'
            },
            primary: {
              border: 'border-r border-default-primary',
              fill: 'fill-default-primary',
              color: 'text-default-primary',
              hover: 'hover:bg-default-primary/10',
              active: 'active:bg-default-primary/20'
            },
            secondary: {
              border: 'border-r border-default-secondary',
              fill: 'fill-default-secondary',
              color: 'text-default-secondary',
              hover: 'hover:bg-default-secondary/10',
              active: 'active:bg-default-secondary/20'
            },
            success: {
              border: 'border-r border-default-success',
              fill: 'fill-default-success',
              color: 'text-default-success',
              hover: 'hover:bg-default-success/10',
              active: 'active:bg-default-success/20'
            },
            warning: {
              border: 'border-r border-default-warning',
              fill: 'fill-default-warning',
              color: 'text-default-warning',
              hover: 'hover:bg-default-warning/10',
              active: 'active:bg-default-warning/20'
            },
            error: {
              border: 'border-r border-default-error',
              fill: 'fill-default-error',
              color: 'text-default-error',
              hover: 'hover:bg-default-error/10',
              active: 'active:bg-default-error/20'
            },
            light: {
              border: 'border-r border-default-light',
              fill: 'fill-default-light',
              color: 'text-default-light',
              hover: 'hover:bg-default-light/10',
              active: 'active:bg-default-light/20'
            },
            dark: {
              border: 'border-r border-default-dark',
              fill: 'fill-default-dark',
              color: 'text-default-dark',
              hover: 'hover:bg-default-dark/10',
              active: 'active:bg-default-dark/20'
            }
          }
        }
      }
    }
  }
};

export default buttonGroupConfig;

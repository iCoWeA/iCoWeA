import { type ButtonHTMLAttributes, type ReactNode } from 'react';

export type ChipVariants = 'filled' | 'outlined' | 'ghost';
export type ChipSizes = 'sm' | 'md' | 'lg';
export type ChipColors = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | string;

export interface ChipDefaultProps {
  variant?: ChipVariants;
  size?: ChipSizes;
  color?: ChipColors;
  invisible?: boolean;
  buttonProps?: ButtonHTMLAttributes<HTMLButtonElement>;
}

export interface ChipConfig {
  defaultProps: Required<ChipDefaultProps>;
  styles: {
    root: {
      base: Record<string, string>;
      invisible: Record<string, string>;
      sizes: Record<ChipSizes, Record<string, string>>;
      actionSpace: Record<ChipSizes, Record<string, string>>;
      variants: Record<ChipVariants, Record<string, Record<ChipColors, Record<string, string>>>>
    },
    button: {
      base: Record<string, string>;
      sizes: Record<ChipSizes, Record<string, string>>;
      variants: Record<ChipVariants, Record<string, Record<ChipColors, Record<string, string>>>>;
    }
  }
}

const chipConfig: ChipConfig = {
  defaultProps: {
    variant: 'filled',
    size: 'md',
    color: 'primary',
    invisible: false,
    buttonProps: {}
  },
  styles: {
    root: {
      base: {
        position: 'relative',
        display: 'flex',
        gap: 'gap-2',
        alignItems: 'items-center',
        width: 'w-full',
        borderRadius: 'rounded-2xl',
        font: 'antialiased font-bold text-xs font-sans',
        focus: 'focus:outline-0'
      },
      invisible: {
        display: 'hidden'
      },
      sizes: {
        sm: {
          padding: 'py-1 px-2'
        },
        md: {
          padding: 'py-1.5 px-3'
        },
        lg: {
          padding: 'py-2 px-4'
        }
      },
      actionSpace: {
        sm: {
          padding: 'pr-8'
        },
        md: {
          padding: 'pr-9'
        },
        lg: {
          padding: 'pr-10'
        }
      },
      variants: {
        filled: {
          default: {
            default: {
              fill: 'fill-default-text-dark',
              color: 'text-default-text-dark',
              background: 'bg-default-bg'
            },
            primary: {
              fill: 'fill-default-text-light',
              color: 'text-default-text-light',
              background: 'bg-default-primary'
            },
            secondary: {
              fill: 'fill-default-text-light',
              color: 'text-default-text-light',
              background: 'bg-default-secondary'
            },
            success: {
              fill: 'fill-default-text-light',
              color: 'text-default-text-light',
              background: 'bg-default-success'
            },
            warning: {
              fill: 'fill-default-text-dark',
              color: 'text-default-text-dark',
              background: 'bg-default-warning'
            },
            error: {
              fill: 'fill-default-text-light',
              color: 'text-default-text-light',
              background: 'bg-default-error'
            }
          }
        },
        outlined: {
          default: {
            default: {
              border: 'border border-default-bg',
              fill: 'fill-default-text-light',
              color: 'text-default-text-light'
            },
            primary: {
              border: 'border border-default-primary',
              fill: 'fill-default-primary',
              color: 'text-default-primary'
            },
            secondary: {
              border: 'border border-default-secondary',
              fill: 'fill-default-secondary',
              color: 'text-default-secondary'
            },
            success: {
              border: 'border border-default-success',
              fill: 'fill-default-success',
              color: 'text-default-success'
            },
            warning: {
              border: 'border border-default-warning',
              fill: 'fill-default-warning',
              color: 'text-default-warning'
            },
            error: {
              border: 'border border-default-error',
              fill: 'fill-default-error',
              color: 'text-default-error'
            }
          }
        },
        ghost: {
          default: {
            default: {
              fill: 'fill-default-text-light',
              color: 'text-default-text-light',
              background: 'bg-default-bg/20'
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
            }
          }
        }
      }
    },
    button: {
      base: {
        position: 'absolute',
        display: 'flex',
        alignItems: 'items-center',
        justifyContent: 'justify-center',
        width: 'w-5',
        aspectRatio: 'aspect-square',
        padding: 'p-0.5',
        borderRadius: 'rounded-full',
        transition: 'transition-colors',
        focus: 'focus:outline-0',
        disabled: 'disabled:opacity-50 disabled:pointer-events-none disabled:select-none'
      },
      sizes: {
        sm: {
          top: 'top-0.5',
          right: 'right-1.5'
        },
        md: {
          top: 'top-1',
          right: 'right-2.5'
        },
        lg: {
          top: 'top-1.5',
          right: 'right-3.5'
        }
      },
      variants: {
        filled: {
          default: {
            default: {
              fill: 'fill-default-text-dark',
              hover: 'hover:bg-default-bg-dark/10',
              active: 'active:bg-default-bg-dark/20'
            },
            primary: {
              fill: 'fill-default-text-light',
              hover: 'hover:bg-default-bg/10',
              active: 'active:bg-default-bg/20'
            },
            secondary: {
              fill: 'fill-default-text-light',
              hover: 'hover:bg-default-bg/10',
              active: 'active:bg-default-bg/20'
            },
            success: {
              fill: 'fill-default-text-light',
              hover: 'hover:bg-default-bg/10',
              active: 'active:bg-default-bg/20'
            },
            warning: {
              fill: 'fill-default-text-dark',
              hover: 'hover:bg-default-bg-dark/10',
              active: 'active:bg-default-bg-dark/20'
            },
            error: {
              fill: 'fill-default-text-light',
              hover: 'hover:bg-default-bg/10',
              active: 'active:bg-default-bg/20'
            }
          }
        },
        outlined: {
          default: {
            default: {
              fill: 'fill-default-text-light',
              hover: 'hover:bg-default-bg/10',
              active: 'active:bg-default-bg/20'
            },
            primary: {
              fill: 'fill-default-primary',
              hover: 'hover:bg-default-primary/10',
              active: 'active:bg-default-primary/20'
            },
            secondary: {
              fill: 'fill-default-secondary',
              hover: 'hover:bg-default-secondary/10',
              active: 'active:bg-default-secondary/20'
            },
            success: {
              fill: 'fill-default-success',
              hover: 'hover:bg-default-success/10',
              active: 'active:bg-default-success/20'
            },
            warning: {
              fill: 'fill-default-warning',
              hover: 'hover:bg-default-warning/10',
              active: 'active:bg-default-warning/20'
            },
            error: {
              fill: 'fill-default-error',
              hover: 'hover:bg-default-error/10',
              active: 'active:bg-default-error/20'
            }
          }
        },
        ghost: {
          default: {
            default: {
              fill: 'fill-default-text-light',
              hover: 'hover:bg-default-bg/10',
              active: 'active:bg-default-bg/20'
            },
            primary: {
              fill: 'fill-default-primary',
              hover: 'hover:bg-default-primary/10',
              active: 'active:bg-default-primary/20'
            },
            secondary: {
              fill: 'fill-default-secondary',
              hover: 'hover:bg-default-secondary/10',
              active: 'active:bg-default-secondary/20'
            },
            success: {
              fill: 'fill-default-success',
              hover: 'hover:bg-default-success/10',
              active: 'active:bg-default-success/20'
            },
            warning: {
              fill: 'fill-default-warning',
              hover: 'hover:bg-default-warning/10',
              active: 'active:bg-default-warning/20'
            },
            error: {
              fill: 'fill-default-error',
              hover: 'hover:bg-default-error/10',
              active: 'active:bg-default-error/20'
            }
          }
        }
      }
    }
  }
};

export default chipConfig;

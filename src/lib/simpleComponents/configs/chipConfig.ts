import { type ReactNode, type BaseHTMLAttributes, type ButtonHTMLAttributes } from 'react';

export type ChipVariants = 'filled' | 'outlined' | 'ghost';
export type ChipSizes = 'sm' | 'md' | 'lg';
export type ChipColors = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | string;

export interface ChipProps {
  onClose?: () => void;
  variant?: ChipVariants;
  size?: ChipSizes;
  color?: ChipColors;
  invisible?: boolean;
  action?: ReactNode;
  bodyProps?: BaseHTMLAttributes<HTMLDivElement>;
  buttonContainerProps?: BaseHTMLAttributes<HTMLDivElement>;
  buttonProps?: ButtonHTMLAttributes<HTMLButtonElement>;
  className?: string;
}

export interface ChipConfig {
  defaultProps: {
    variant?: ChipVariants;
    size?: ChipSizes;
    color?: ChipColors;
    invisible?: boolean;
    bodyProps?: BaseHTMLAttributes<HTMLDivElement>;
    buttonContainerProps?: BaseHTMLAttributes<HTMLDivElement>;
    buttonProps?: ButtonHTMLAttributes<HTMLButtonElement>;
    className?: string;
  };
  styles: {
    root: {
      base: Record<string, string>;
      invisible: Record<string, string>;
      sizes: Record<ChipSizes, Record<string, string>>;
      variants: Record<ChipVariants, Record<string, Record<ChipColors, Record<string, string>>>>
    },
    body: {
      base: Record<string, string>;
    },
    buttonContainer: {
      base: Record<string, string>;
    },
    button: {
      base: Record<string, string>;
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
    bodyProps: {},
    buttonContainerProps: {},
    buttonProps: {},
    className: ''
  },
  styles: {
    root: {
      base: {
        display: 'flex',
        alignItems: 'items-center',
        width: 'w-full',
        borderRadius: 'rounded-2xl',
        focus: 'focus:outline-0'
      },
      invisible: {
        display: 'hidden'
      },
      sizes: {
        sm: {
          padding: 'py-0.5 px-2 pr-1.5'
        },
        md: {
          padding: 'py-1 px-3 pr-2.5'
        },
        lg: {
          padding: 'py-1.5 px-4 pr-3.5'
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
    body: {
      base: {
        display: 'flex',
        flexDirection: 'flex-col',
        gap: 'gap-4',
        padding: 'py-0.5 pr-0.5',
        font: 'antialiased font-bold text-xs font-sans',
        focus: 'focus:outline-0'
      }
    },
    buttonContainer: {
      base: {
        display: 'flex',
        gap: 'gap-2',
        alignItems: 'items-center',
        margin: 'ml-auto',
        padding: 'pl-1.5',
        focus: 'focus:outline-0'
      }
    },
    button: {
      base: {
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

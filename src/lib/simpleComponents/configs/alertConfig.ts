import { type AlertDefaultProps } from '../components/UI/Alert';

export type AlertVariants = 'filled' | 'outlined' | 'ghost';
export type AlertColors = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | string;

export interface AlertConfig {
  defaultProps: Required<AlertDefaultProps>;
  styles: {
    root: {
      base: Record<string, string>;
      actionSpace: Record<string, string>;
      invisible: Record<string, string>;
      variants: Record<AlertVariants, Record<string, Record<AlertColors, Record<string, string>>>>
    },
    body: {
      base: Record<string, string>;
    },
    button: {
      base: Record<string, string>;
      variants: Record<AlertVariants, Record<string, Record<AlertColors, Record<string, string>>>>;
    }
  }
}

const alertConfig: AlertConfig = {
  defaultProps: {
    variant: 'filled',
    color: 'primary',
    invisible: false,
    icon: null,
    action: null,
    componentsProps: {}
  },
  styles: {
    root: {
      base: {
        position: 'relative',
        display: 'flex',
        gap: 'gap-2',
        width: 'w-full',
        padding: 'p-4',
        borderRadius: 'rounded-2xl',
        focus: 'focus:outline-0'
      },
      actionSpace: {
        padding: 'pr-12'
      },
      invisible: {
        display: 'hidden'
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
        focus: 'focus:outline-0'
      }
    },
    button: {
      base: {
        position: 'absolute',
        top: 'top-2',
        right: 'right-2',
        display: 'flex',
        alignItems: 'items-center',
        justifyContent: 'justify-center',
        width: 'w-10',
        aspectRatio: 'aspect-square',
        padding: 'p-2',
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

export default alertConfig;

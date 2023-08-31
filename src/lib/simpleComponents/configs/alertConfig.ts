import { type BaseHTMLAttributes, type ButtonHTMLAttributes } from 'react';
import { type IconProps } from '../components/UI/Icon/Icon';

export type AlertVariants = 'filled' | 'outlined' | 'ghost';

export interface AlertConfig {
  defaultProps: {
    variant: AlertVariants;
    color: Colors;
    invisible: boolean;
    iconContainerProps: BaseHTMLAttributes<HTMLDivElement>;
    bodyContainerProps: BaseHTMLAttributes<HTMLDivElement>;
    buttonProps: ButtonHTMLAttributes<HTMLButtonElement>;
    buttonIconProps: IconProps;
    buttonContainerProps: BaseHTMLAttributes<HTMLDivElement>;
  };
  styles: {
    container: {
      base: Record<string, string>;
      invisible: Record<string, string>;
      variants: Record<AlertVariants, Record<string, Record<Colors, Record<string, string>>>>
    },
    iconContainer: {
      base: Record<string, string>;
    }
    bodyContainer: {
      base: Record<string, string>;
    },
    buttonContainer: {
      base: Record<string, string>;
    },
    button: {
      base: Record<string, string>;
      variants: Record<AlertVariants, Record<string, Record<Colors, Record<string, string>>>>;
    }
  }
}

const alertConfig: AlertConfig = {
  defaultProps: {
    variant: 'filled',
    color: 'primary',
    invisible: false,
    iconContainerProps: {},
    bodyContainerProps: {},
    buttonProps: {},
    buttonIconProps: {},
    buttonContainerProps: {}
  },
  styles: {
    container: {
      base: {
        display: 'flex',
        alignItems: 'items-start',
        width: 'w-full',
        padding: 'p-2',
        borderRadius: 'rounded-2xl',
        focus: 'focus:outline-0'
      },
      invisible: {
        display: 'hidden'
      },
      variants: {
        filled: {
          default: {
            default: {
              fill: 'fill-default-dark',
              color: 'text-default-dark',
              background: 'bg-default-default'
            },
            primary: {
              fill: 'fill-default-light',
              color: 'text-default-light',
              background: 'bg-default-primary'
            },
            secondary: {
              fill: 'fill-default-light',
              color: 'text-default-light',
              background: 'bg-default-secondary'
            },
            success: {
              fill: 'fill-default-light',
              color: 'text-default-light',
              background: 'bg-default-success'
            },
            warning: {
              fill: 'fill-default-dark',
              color: 'text-default-dark',
              background: 'bg-default-warning'
            },
            error: {
              fill: 'fill-default-light',
              color: 'text-default-light',
              background: 'bg-default-error'
            },
            light: {
              fill: 'fill-default-dark',
              color: 'text-default-dark',
              background: 'bg-default-light'
            },
            dark: {
              fill: 'fill-default-light',
              color: 'text-default-light',
              background: 'bg-default-dark'
            }
          }
        },
        outlined: {
          default: {
            default: {
              border: 'border border-default-default',
              fill: 'fill-default-default',
              color: 'text-default-default'
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
            },
            light: {
              border: 'border border-default-light',
              fill: 'fill-default-light',
              color: 'text-default-light'
            },
            dark: {
              border: 'border border-default-dark',
              fill: 'fill-default-dark',
              color: 'text-default-dark'
            }
          }
        },
        ghost: {
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
        }
      }
    },
    iconContainer: {
      base: {
        display: 'flex',
        gap: 'gap-2',
        alignItems: 'items-center',
        height: 'h-10',
        padding: 'pl-2',
        focus: 'focus:outline-0'
      }
    },
    bodyContainer: {
      base: {
        display: 'flex',
        flexDirection: 'flex-col',
        gap: 'gap-4',
        padding: 'p-2',
        focus: 'focus:outline-0'
      }
    },
    buttonContainer: {
      base: {
        display: 'flex',
        gap: 'gap-2',
        alignItems: 'items-center',
        margin: 'ml-auto',
        height: 'h-10',
        focus: 'focus:outline-0'
      }
    },
    button: {
      base: {
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
              fill: 'fill-default-dark',
              hover: 'hover:bg-default-dark/10',
              active: 'active:bg-default-dark/20'
            },
            primary: {
              fill: 'fill-default-light',
              hover: 'hover:bg-default-light/10',
              active: 'active:bg-default-light/20'
            },
            secondary: {
              fill: 'fill-default-light',
              hover: 'hover:bg-default-light/10',
              active: 'active:bg-default-light/20'
            },
            success: {
              fill: 'fill-default-light',
              hover: 'hover:bg-default-light/10',
              active: 'active:bg-default-light/20'
            },
            warning: {
              fill: 'fill-default-dark',
              hover: 'hover:bg-default-dark-dark/10',
              active: 'active:bg-default-dark-dark/20'
            },
            error: {
              fill: 'fill-default-light',
              hover: 'hover:bg-default-light/10',
              active: 'active:bg-default-light/20'
            },
            light: {
              fill: 'fill-default-dark',
              hover: 'hover:bg-default-dark/10',
              active: 'active:bg-default-dark/20'
            },
            dark: {
              fill: 'fill-default-light',
              hover: 'hover:bg-default-light/10',
              active: 'active:bg-default-light/20'
            }
          }
        },
        outlined: {
          default: {
            default: {
              fill: 'fill-default-default',
              hover: 'hover:bg-default-default/10',
              active: 'active:bg-default-default/20'
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
            },
            light: {
              fill: 'fill-default-light',
              hover: 'hover:bg-default-light/10',
              active: 'active:bg-default-light/20'
            },
            dark: {
              fill: 'fill-default-dark',
              hover: 'hover:bg-default-dark/10',
              active: 'active:bg-default-dark/20'
            }
          }
        },
        ghost: {
          default: {
            default: {
              fill: 'fill-default-default',
              hover: 'hover:bg-default-default/10',
              active: 'active:bg-default-default/20'
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
            },
            light: {
              fill: 'fill-default-light',
              hover: 'hover:bg-default-light/10',
              active: 'active:bg-default-light/20'
            },
            dark: {
              fill: 'fill-default-dark',
              hover: 'hover:bg-default-dark/10',
              active: 'active:bg-default-dark/20'
            }
          }
        }
      }
    }
  }
};

export default alertConfig;

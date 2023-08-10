import { type IconButtonDefaultProps } from '../components/UI/IconButton';

export type IconButtonVariants = 'filled' | 'elevated' | 'outlined' | 'text';
export type IconButtonSizes = 'sm' | 'md' | 'lg';
export type IconButtonColors = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | string;

export interface IconButtonConfig {
  defaultProps: Required<IconButtonDefaultProps>;
  styles: {
    base: Record<string, string>;
    sizes: Record<IconButtonSizes, Record<string, string>>;
    variants: Record<IconButtonVariants, Record<string, Record<IconButtonColors, Record<string, string>>>>;
  }
}

const iconButtonConfig: IconButtonConfig = {
  defaultProps: {
    variant: 'filled',
    size: 'md',
    color: 'primary'
  },
  styles: {
    base: {
      display: 'flex',
      alignItems: 'items-center',
      justifyContent: 'justify-center',
      aspectRatio: 'aspect-square',
      borderRadius: 'rounded-full',
      transition: 'transition-all',
      focus: 'focus:outline-0',
      disabled: 'disabled:opacity-50 disabled:pointer-events-none disabled:select-none'
    },
    sizes: {
      sm: {
        width: 'w-9',
        padding: 'p-1.5'
      },
      md: {
        width: 'w-10',
        padding: 'p-2'
      },
      lg: {
        width: 'w-11',
        padding: 'p-2.5'
      }
    },
    variants: {
      filled: {
        default: {
          default: {
            fill: 'fill-default-text-dark',
            background: 'bg-default-bg',
            hover: 'hover:bg-default-bg/90',
            active: 'active:bg-default-bg/80'
          },
          primary: {
            fill: 'fill-default-text-light',
            background: 'bg-default-primary',
            hover: 'hover:bg-default-primary/90',
            active: 'active:bg-default-primary/80'
          },
          secondary: {
            fill: 'fill-default-text-light',
            background: 'bg-default-secondary',
            hover: 'hover:bg-default-secondary/90',
            active: 'active:bg-default-secondary/80'
          },
          success: {
            fill: 'fill-default-text-light',
            background: 'bg-default-success',
            hover: 'hover:bg-default-success/90',
            active: 'active:bg-default-success/80'
          },
          warning: {
            fill: 'fill-default-text-dark',
            background: 'bg-default-warning',
            hover: 'hover:bg-default-warning/90',
            active: 'active:bg-default-warning/80'
          },
          error: {
            fill: 'fill-default-text-light',
            background: 'bg-default-error',
            hover: 'hover:bg-default-error/90',
            active: 'active:bg-default-error/80'
          }
        }
      },
      elevated: {
        default: {
          default: {
            shadow: 'shadow-md shadow-default-bg/20',
            fill: 'fill-default-text-light',
            hover: 'hover:shadow-lg hover:shadow-default-bg/40 hover:bg-default-bg/10',
            active: 'active:shadow-none active:bg-default-bg/20',
            disabled: 'disabled:shadow-none'
          },
          primary: {
            shadow: 'shadow-md shadow-default-bg-dark/20',
            fill: 'fill-default-primary',
            hover: 'hover:shadow-lg hover:shadow-default-bg-dark/40 hover:bg-default-primary/10',
            active: 'active:shadow-none active:bg-default-primary/20',
            disabled: 'disabled:shadow-none'
          },
          secondary: {
            shadow: 'shadow-md shadow-default-bg-dark/20',
            fill: 'fill-default-secondary',
            hover: 'hover:shadow-lg hover:shadow-default-bg-dark/40 hover:bg-default-secondary/10',
            active: 'active:shadow-none active:bg-default-secondary/20',
            disabled: 'disabled:shadow-none'
          },
          success: {
            shadow: 'shadow-md shadow-default-bg-dark/20',
            fill: 'fill-default-success',
            hover: 'hover:shadow-lg hover:shadow-default-bg-dark/40 hover:bg-default-success/10',
            active: 'active:shadow-none active:bg-default-success/20',
            disabled: 'disabled:shadow-none'
          },
          warning: {
            shadow: 'shadow-md shadow-default-bg-dark/20',
            fill: 'fill-default-warning',
            hover: 'hover:shadow-lg hover:shadow-default-bg-dark/40 hover:bg-default-warning/10',
            active: 'active:shadow-none active:bg-default-warning/20',
            disabled: 'disabled:shadow-none'
          },
          error: {
            shadow: 'shadow-md shadow-default-bg-dark/20',
            fill: 'fill-default-error',
            hover: 'hover:shadow-lg hover:shadow-default-bg-dark/40 hover:bg-default-error/10',
            active: 'active:shadow-none active:bg-default-error/20',
            disabled: 'disabled:shadow-none'
          }
        }
      },
      outlined: {
        default: {
          default: {
            border: 'border border-default-bg',
            fill: 'fill-default-text-light',
            hover: 'hover:bg-default-bg/10',
            active: 'active:bg-default-bg/20'
          },
          primary: {
            border: 'border border-default-primary',
            fill: 'fill-default-primary',
            hover: 'hover:bg-default-primary/10',
            active: 'active:bg-default-primary/20'
          },
          secondary: {
            border: 'border border-default-secondary',
            fill: 'fill-default-secondary',
            hover: 'hover:bg-default-secondary/10',
            active: 'active:bg-default-secondary/20'
          },
          success: {
            border: 'border border-default-success',
            fill: 'fill-default-success',
            hover: 'hover:bg-default-success/10',
            active: 'active:bg-default-success/20'
          },
          warning: {
            border: 'border border-default-warning',
            fill: 'fill-default-warning',
            hover: 'hover:bg-default-warning/10',
            active: 'active:bg-default-warning/20'
          },
          error: {
            border: 'border border-default-error',
            fill: 'fill-default-error',
            hover: 'hover:bg-default-error/10',
            active: 'active:bg-default-error/20'
          }
        }
      },
      text: {
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
};

export default iconButtonConfig;

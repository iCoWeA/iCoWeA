import { type ButtonDefaultProps } from '../components/UI/Button';

export type ButtonVariants = 'contained' | 'outlined' | 'text';
export type ButtonSizes = 'sm' | 'md' | 'lg';
export type ButtonColors = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | string;

export interface ButtonConfig {
  defaultProps: Required<ButtonDefaultProps>;
  styles: {
    base: Record<string, string>;
    fullwidth: Record<string, string>;
    sizes: Record<ButtonSizes, Record<string, string>>;
    variants: Record<ButtonVariants, Record<string, Record<ButtonColors, Record<string, string>>>>;
  }
}

const buttonConfig: ButtonConfig = {
  defaultProps: {
    variant: 'contained',
    size: 'md',
    color: 'primary',
    fullwidth: false
  },
  styles: {
    base: {
      display: 'flex',
      gap: 'gap-2',
      alignItems: 'items-center',
      height: 'h-fit',
      width: 'w-fit',
      borderRadius: 'rounded-2xl',
      font: 'antialiased font-normal text-base font-sans',
      transition: 'transition-all',
      focus: 'focus:outline-0',
      disabled: 'disabled:opacity-50 disabled:pointer-events-none disabled:select-none'
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
    variants: {
      contained: {
        default: {
          default: {
            shadow: 'shadow-md shadow-default-bg/20',
            fill: 'fill-default-text-dark',
            color: 'text-default-text-dark',
            background: 'bg-default-bg',
            hover: 'hover:shadow-lg hover:shadow-default-bg/40 hover:bg-default-bg/90',
            active: 'active:shadow-none active:bg-default-bg/80',
            disabled: 'disabled:shadow-none'
          },
          primary: {
            shadow: 'shadow-md shadow-default-primary/20',
            fill: 'fill-default-text-light',
            color: 'text-default-text-light',
            background: 'bg-default-primary',
            hover: 'hover:shadow-lg hover:shadow-default-primary/40 hover:bg-default-primary/90',
            active: 'active:shadow-none active:bg-default-primary/80',
            disabled: 'disabled:shadow-none'
          },
          secondary: {
            shadow: 'shadow-md shadow-default-secondary/20',
            fill: 'fill-default-text-light',
            color: 'text-default-text-light',
            background: 'bg-default-secondary',
            hover: 'hover:shadow-lg hover:shadow-default-secondary/40 hover:bg-default-secondary/90',
            active: 'active:shadow-none active:bg-default-secondary/80',
            disabled: 'disabled:shadow-none'
          },
          success: {
            shadow: 'shadow-md shadow-default-success/20',
            fill: 'fill-default-text-light',
            color: 'text-default-text-light',
            background: 'bg-default-success',
            hover: 'hover:shadow-lg hover:shadow-default-success/40 hover:bg-default-success/90',
            active: 'active:shadow-none active:bg-default-success/80',
            disabled: 'disabled:shadow-none'
          },
          warning: {
            shadow: 'shadow-md shadow-default-warning/20',
            fill: 'fill-default-text-dark',
            color: 'text-default-text-dark',
            background: 'bg-default-warning',
            hover: 'hover:shadow-lg hover:shadow-default-warning/40 hover:bg-default-warning/90',
            active: 'active:shadow-none active:bg-default-warning/80',
            disabled: 'disabled:shadow-none'
          },
          error: {
            shadow: 'shadow-md shadow-default-error/20',
            fill: 'fill-default-text-light',
            color: 'text-default-text-light',
            background: 'bg-default-error',
            hover: 'hover:shadow-lg hover:shadow-default-error/40 hover:bg-default-error/90',
            active: 'active:shadow-none active:bg-default-error/80',
            disabled: 'disabled:shadow-none'
          }
        }
      },
      outlined: {
        default: {
          default: {
            border: 'border border-default-bg',
            fill: 'fill-default-text-light',
            color: 'text-default-text-light',
            hover: 'hover:bg-default-bg/10',
            active: 'active:bg-default-bg/20'
          },
          primary: {
            border: 'border border-default-primary',
            fill: 'fill-default-primary',
            color: 'text-default-primary',
            hover: 'hover:bg-default-primary/10',
            active: 'active:bg-default-primary/20'
          },
          secondary: {
            border: 'border border-default-secondary',
            fill: 'fill-default-secondary',
            color: 'text-default-secondary',
            hover: 'hover:bg-default-secondary/10',
            active: 'active:bg-default-secondary/20'
          },
          success: {
            border: 'border border-default-success',
            fill: 'fill-default-success',
            color: 'text-default-success',
            hover: 'hover:bg-default-success/10',
            active: 'active:bg-default-success/20'
          },
          warning: {
            border: 'border border-default-warning',
            fill: 'fill-default-warning',
            color: 'text-default-warning',
            hover: 'hover:bg-default-warning/10',
            active: 'active:bg-default-warning/20'
          },
          error: {
            border: 'border border-default-error',
            fill: 'fill-default-error',
            color: 'text-default-error',
            hover: 'hover:bg-default-error/10',
            active: 'active:bg-default-error/20'
          }
        }
      },
      text: {
        default: {
          default: {
            fill: 'fill-default-text-light',
            color: 'text-default-text-light',
            hover: 'hover:bg-default-bg/10',
            active: 'active:bg-default-bg/20'
          },
          primary: {
            fill: 'fill-default-primary',
            color: 'text-default-primary',
            hover: 'hover:bg-default-primary/10',
            active: 'active:bg-default-primary/20'
          },
          secondary: {
            fill: 'fill-default-secondary',
            color: 'text-default-secondary',
            hover: 'hover:bg-default-secondary/10',
            active: 'active:bg-default-secondary/20'
          },
          success: {
            fill: 'fill-default-success',
            color: 'text-default-success',
            hover: 'hover:bg-default-success/10',
            active: 'active:bg-default-success/20'
          },
          warning: {
            fill: 'fill-default-warning',
            color: 'text-default-warning',
            hover: 'hover:bg-default-warning/10',
            active: 'active:bg-default-warning/20'
          },
          error: {
            fill: 'fill-default-erro',
            color: 'text-default-error',
            hover: 'hover:bg-default-error/10',
            active: 'active:bg-default-error/20'
          }
        }
      }
    }
  }
};

export default buttonConfig;

export type ButtonVariants = 'filled' | 'outlined' | 'text';

export interface ButtonConfig {
  defaultProps: {
    variant: ButtonVariants;
    size: Sizes;
    color: Colors;
    elevated: boolean;
    fullwidth: boolean;
    className: string;
    type: 'submit' | 'reset' | 'button';
  };
  styles: {
    base: Record<string, string>;
    fullwidth: Record<string, string>;
    sizes: Record<Sizes, Record<string, string>>;
    elevated: Record<string, Record<string, string>>;
    variants: Record<ButtonVariants, Record<string, Record<Colors, Record<string, string>>>>;
  }
}

const buttonConfig: ButtonConfig = {
  defaultProps: {
    variant: 'filled',
    size: 'md',
    color: 'primary',
    elevated: false,
    fullwidth: false,
    className: '',
    type: 'button'
  },
  styles: {
    base: {
      display: 'flex',
      gap: 'gap-2',
      alignItems: 'items-center',
      height: 'h-fit',
      width: 'w-fit',
      borderRadius: 'rounded-full',
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
    elevated: {
      default: {
        shadow: 'shadow-md shadow-default-bg-dark/20',
        hover: 'hover:shadow-lg hover:shadow-default-bg-dark/40',
        active: 'active:shadow-none',
        disabled: 'disabled:shadow-none'
      }
    },
    variants: {
      filled: {
        default: {
          default: {
            fill: 'fill-default-dark',
            color: 'text-default-dark',
            background: 'bg-default-default',
            hover: 'hover:bg-default-default/90',
            active: 'active:bg-default-default/80'
          },
          primary: {
            fill: 'fill-default-light',
            color: 'text-default-light',
            background: 'bg-default-primary',
            hover: 'hover:bg-default-primary/90',
            active: 'active:bg-default-primary/80'
          },
          secondary: {
            fill: 'fill-default-light',
            color: 'text-default-light',
            background: 'bg-default-secondary',
            hover: 'hover:bg-default-secondary/90',
            active: 'active:bg-default-secondary/80'
          },
          success: {
            fill: 'fill-default-light',
            color: 'text-default-light',
            background: 'bg-default-success',
            hover: 'hover:bg-default-success/90',
            active: 'active:bg-default-success/80'
          },
          warning: {
            fill: 'fill-default-dark',
            color: 'text-default-dark',
            background: 'bg-default-warning',
            hover: 'hover:bg-default-warning/90',
            active: 'active:bg-default-warning/80'
          },
          error: {
            fill: 'fill-default-light',
            color: 'text-default-light',
            background: 'bg-default-error',
            hover: 'hover:bg-default-error/90',
            active: 'active:bg-default-error/80'
          },
          light: {
            fill: 'fill-default-dark',
            color: 'text-default-dark',
            background: 'bg-default-light',
            hover: 'hover:bg-default-light/90',
            active: 'active:bg-default-light/80'
          },
          dark: {
            fill: 'fill-default-light',
            color: 'text-default-light',
            background: 'bg-default-dark',
            hover: 'hover:bg-default-dark/90',
            active: 'active:bg-default-dark/80'
          }
        }
      },
      outlined: {
        default: {
          default: {
            border: 'border border-default-default',
            fill: 'fill-default-default',
            color: 'text-default-default',
            hover: 'hover:bg-default-default/10',
            active: 'active:bg-default-default/20'
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
          },
          light: {
            border: 'border border-default-light',
            fill: 'fill-default-light',
            color: 'text-default-light',
            hover: 'hover:bg-default-light/10',
            active: 'active:bg-default-light/20'
          },
          dark: {
            border: 'border border-default-dark',
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
            fill: 'fill-default-default',
            color: 'text-default-default',
            hover: 'hover:bg-default-default/10',
            active: 'active:bg-default-default/20'
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
            fill: 'fill-default-error',
            color: 'text-default-error',
            hover: 'hover:bg-default-error/10',
            active: 'active:bg-default-error/20'
          },
          light: {
            fill: 'fill-default-light',
            color: 'text-default-light',
            hover: 'hover:bg-default-light/10',
            active: 'active:bg-default-light/20'
          },
          dark: {
            fill: 'fill-default-dark',
            color: 'text-default-dark',
            hover: 'hover:bg-default-dark/10',
            active: 'active:bg-default-dark/20'
          }
        }
      }
    }
  }
};

export default buttonConfig;

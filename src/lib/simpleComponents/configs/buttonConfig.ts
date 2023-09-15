import { type ButtonVariants } from '../components/UI/Button';

export interface ButtonConfig {
  defaultProps: {
    variant: ButtonVariants;
    size: Sizes;
    color: Colors;
    elevated: boolean;
    fullwidth: boolean;
  };
  styles: {
    base: Record<string, string>;
    fullwidth: Record<string, string>;
    elevated: Record<string, string>;
    sizes: Record<Sizes, Record<string, string>>;
    outlineSizes: Record<Sizes, Record<string, string>>;
    variants: Record<ButtonVariants, Record<Themes, Record<Colors, Record<string, string>>>>;
  }
}

const buttonConfig: ButtonConfig = {
  defaultProps: {
    variant: 'filled',
    size: 'md',
    color: 'primary',
    elevated: false,
    fullwidth: false
  },
  styles: {
    base: {
      position: 'relative',
      display: 'flex',
      gap: 'gap-2',
      alignItems: 'items-center',
      width: 'w-fit',
      borderRadius: 'rounded-full',
      font: 'antialiased font-normal text-sm font-sans',
      overflow: 'overflow-hidden',
      transition: 'transition',
      userSelect: 'select-none',
      focus: 'focus:outline-0',
      disabled: 'disabled:pointer-events-none',
      group: 'group'
    },
    fullwidth: {
      width: 'w-full',
      justifyContent: 'justify-center'
    },
    elevated: {
      shadow: 'shadow-md shadow-black/50',
      hover: 'hover:shadow-lg hover:shadow-black/50',
      active: 'active:shadow-md active:shadow-black/50'
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
            fill: 'fill-light-on-surface',
            color: 'text-light-on-surface',
            disabled: 'disabled:fill-light-on-surface-variant/40 disabled:text-light-on-surface-variant/40'
          },
          primary: {
            fill: 'fill-light-on-primary',
            color: 'text-light-on-primary',
            disabled: 'disabled:fill-light-on-primary/40 disabled:text-light-on-primary/40'
          },
          secondary: {
            fill: 'fill-light-on-secondary',
            color: 'text-light-on-secondary',
            disabled: 'disabled:fill-light-on-secondary/40 disabled:text-light-on-secondary/40'
          },
          success: {
            fill: 'fill-light-on-success',
            color: 'text-light-on-success',
            disabled: 'disabled:fill-light-on-success/40 disabled:text-light-on-success/40'
          },
          warning: {
            fill: 'fill-light-on-warning',
            color: 'text-light-on-warning',
            disabled: 'disabled:fill-light-on-warning/40 disabled:text-light-on-warning/40'
          },
          error: {
            fill: 'fill-light-on-error',
            color: 'text-light-on-error',
            disabled: 'disabled:fill-light-on-error/40 disabled:text-light-on-error/40'
          }
        }
      },
      text: {
        light: {
          default: {
            fill: 'fill-light-on-surface',
            color: 'text-light-on-surface',
            disabled: 'disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40'
          },
          primary: {
            fill: 'fill-light-primary',
            color: 'text-light-primary',
            disabled: 'disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40'
          },
          secondary: {
            fill: 'fill-light-secondary',
            color: 'text-light-secondary',
            disabled: 'disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40'
          },
          success: {
            fill: 'fill-light-success',
            color: 'text-light-success',
            disabled: 'disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40'
          },
          warning: {
            fill: 'fill-light-warning',
            color: 'text-light-warning',
            disabled: 'disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40'
          },
          error: {
            fill: 'fill-light-error',
            color: 'text-light-error',
            disabled: 'disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40'
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
            fill: 'fill-light-on-surface',
            color: 'text-light-on-surface',
            background: 'bg-light-surface-dark',
            hover: 'hover:shadow-md hover:shadow-black/50',
            active: 'active:shadow-none',
            disabled: 'disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40 disabled:bg-light-on-surface/20'
          },
          primary: {
            fill: 'fill-light-on-primary',
            color: 'text-light-on-primary',
            background: 'bg-light-primary',
            hover: 'hover:shadow-md hover:shadow-black/50',
            active: 'active:shadow-none',
            disabled: 'disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40 disabled:bg-light-on-surface/20'
          },
          secondary: {
            fill: 'fill-light-on-secondary',
            color: 'text-light-on-secondary',
            background: 'bg-light-secondary',
            hover: 'hover:shadow-md hover:shadow-black/50',
            active: 'active:shadow-none',
            disabled: 'disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40 disabled:bg-light-on-surface/20'
          },
          success: {
            fill: 'fill-light-on-success',
            color: 'text-light-on-success',
            background: 'bg-light-success',
            hover: 'hover:shadow-md hover:shadow-black/50',
            active: 'active:shadow-none',
            disabled: 'disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40 disabled:bg-light-on-surface/20'
          },
          warning: {
            fill: 'fill-light-on-warning',
            color: 'text-light-on-warning',
            background: 'bg-light-warning',
            hover: 'hover:shadow-md hover:shadow-black/50',
            active: 'active:shadow-none',
            disabled: 'disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40 disabled:bg-light-on-surface/20'
          },
          error: {
            fill: 'fill-light-on-error',
            color: 'text-light-on-error',
            background: 'bg-light-error',
            hover: 'hover:shadow-md hover:shadow-black/50',
            active: 'active:shadow-none',
            disabled: 'disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40 disabled:bg-light-on-surface/20'
          }
        }
      }
    }
  }
};

export default buttonConfig;

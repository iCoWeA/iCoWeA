import { type ButtonVariants } from '../components/UI/Button';

export interface ButtonConfig {
  defaultProps: {
    variant: ButtonVariants;
    size: Sizes;
    color: Colors;
    elevated: boolean;
    fullwidth: boolean;
    type: 'button';
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
    fullwidth: false,
    type: 'button'
  },
  styles: {
    base: {
      display: 'flex',
      gap: 'gap-2',
      alignItems: 'items-center',
      width: 'w-fit',
      borderRadius: 'rounded-full',
      font: 'antialiased font-normal text-sm font-sans',
      transition: 'transition',
      userSelect: 'select-none',
      hover: 'hover:bg-gradient-to-r',
      active: 'active:bg-gradient-to-r',
      focus: 'focus:bg-gradient-to-r',
      disabled: 'disabled:pointer-events-none'
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
            hover: 'hover:from-light-on-surface/10 hover:to-light-on-surface/10',
            active: 'active:from-light-on-surface/[0.15] active:to-light-on-surface/[0.15]',
            focus: 'focus:from-light-on-surface/[0.15] focus:to-light-on-surface/[0.15]',
            disabled: 'disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40'
          },
          primary: {
            fill: 'fill-light-on-primary',
            color: 'text-light-on-primary',
            hover: 'hover:from-light-on-primary/10 hover:to-light-on-primary/10',
            active: 'active:from-light-on-primary/[0.15] active:to-light-on-primary/[0.15]',
            focus: 'focus:from-light-on-primary/[0.15] focus:to-light-on-primary/[0.15]',
            disabled: 'disabled:fill-light-on-primary/40 disabled:text-light-on-primary/40'
          },
          secondary: {
            fill: 'fill-light-on-secondary',
            color: 'text-light-on-secondary',
            hover: 'hover:from-light-on-secondary/10 hover:to-light-on-secondary/10',
            active: 'active:from-light-on-secondary/[0.15] active:to-light-on-secondary/[0.15]',
            focus: 'focus:from-light-on-secondary/[0.15] focus:to-light-on-secondary/[0.15]',
            disabled: 'disabled:fill-light-on-secondary/40 disabled:text-light-on-secondary/40'
          },
          success: {
            fill: 'fill-light-on-success',
            color: 'text-light-on-success',
            hover: 'hover:from-light-on-success/10 hover:to-light-on-success/10',
            active: 'active:from-light-on-success/[0.15] active:to-light-on-success/[0.15]',
            focus: 'focus:from-light-on-success/[0.15] focus:to-light-on-success/[0.15]',
            disabled: 'disabled:fill-light-on-success/40 disabled:text-light-on-success/40'
          },
          warning: {
            fill: 'fill-light-on-warning',
            color: 'text-light-on-warning',
            hover: 'hover:from-light-on-warning/10 hover:to-light-on-warning/10',
            active: 'active:from-light-on-warning/[0.15] active:to-light-on-warning/[0.15]',
            focus: 'focus:from-light-on-warning/[0.15] focus:to-light-on-warning/[0.15]',
            disabled: 'disabled:fill-light-on-warning/40 disabled:text-light-on-warning/40'
          },
          error: {
            fill: 'fill-light-on-error',
            color: 'text-light-on-error',
            hover: 'hover:from-light-on-error/10 hover:to-light-on-error/10',
            active: 'active:from-light-on-error/[0.15] active:to-light-on-error/[0.15]',
            focus: 'focus:from-light-on-error/[0.15] focus:to-light-on-error/[0.15]',
            disabled: 'disabled:fill-light-on-error/40 disabled:text-light-on-error/40'
          }
        }
      },
      text: {
        light: {
          default: {
            fill: 'fill-light-on-surface',
            color: 'text-light-on-surface',
            hover: 'hover:from-light-on-surface/10 hover:to-light-on-surface/10',
            active: 'active:from-light-on-surface/[0.15] active:to-light-on-surface/[0.15]',
            focus: 'focus:from-light-on-surface/[0.15] focus:to-light-on-surface/[0.15]',
            disabled: 'disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40'
          },
          primary: {
            fill: 'fill-light-primary',
            color: 'text-light-primary',
            hover: 'hover:from-light-primary/10 hover:to-light-primary/10',
            active: 'active:from-light-primary/[0.15] active:to-light-primary/[0.15]',
            focus: 'focus:from-light-primary/[0.15] focus:to-light-primary/[0.15]',
            disabled: 'disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40'
          },
          secondary: {
            fill: 'fill-light-secondary',
            color: 'text-light-secondary',
            hover: 'hover:from-light-secondary/10 hover:to-light-secondary/10',
            active: 'active:from-light-secondary/[0.15] active:to-light-secondary/[0.15]',
            focus: 'focus:from-light-secondary/[0.15] focus:to-light-secondary/[0.15]',
            disabled: 'disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40'
          },
          success: {
            fill: 'fill-light-success',
            color: 'text-light-success',
            hover: 'hover:from-light-success/10 hover:to-light-success/10',
            active: 'active:from-light-success/[0.15] active:to-light-success/[0.15]',
            focus: 'focus:from-light-success/[0.15] focus:to-light-success/[0.15]',
            disabled: 'disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40'
          },
          warning: {
            fill: 'fill-light-warning',
            color: 'text-light-warning',
            hover: 'hover:from-light-warning/10 hover:to-light-warning/10',
            active: 'active:from-light-warning/[0.15] active:to-light-warning/[0.15]',
            focus: 'focus:from-light-warning/[0.15] focus:to-light-warning/[0.15]',
            disabled: 'disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40'
          },
          error: {
            fill: 'fill-light-error',
            color: 'text-light-error',
            hover: 'hover:from-light-error/10 hover:to-light-error/10',
            active: 'active:from-light-error/[0.15] active:to-light-error/[0.15]',
            focus: 'focus:from-light-error/[0.15] focus:to-light-error/[0.15]',
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
            hover: 'hover:from-light-on-surface/10 hover:to-light-on-surface/10',
            active: 'active:from-light-on-surface/[0.15] active:to-light-on-surface/[0.15]',
            focus: 'focus:from-light-on-surface/[0.15] focus:to-light-on-surface/[0.15]',
            disabled: 'disabled:border-light-on-surface/40 disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40'
          },
          primary: {
            border: 'border border-light-primary',
            fill: 'fill-light-primary',
            color: 'text-light-primary',
            hover: 'hover:from-light-primary/10 hover:to-light-primary/10',
            active: 'active:from-light-primary/[0.15] active:to-light-primary/[0.15]',
            focus: 'focus:from-light-primary/[0.15] focus:to-light-primary/[0.15]',
            disabled: 'disabled:border-light-on-surface/40 disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40'
          },
          secondary: {
            border: 'border border-light-secondary',
            fill: 'fill-light-secondary',
            color: 'text-light-secondary',
            hover: 'hover:from-light-secondary/10 hover:to-light-secondary/10',
            active: 'active:from-light-secondary/[0.15] active:to-light-secondary/[0.15]',
            focus: 'focus:from-light-secondary/[0.15] focus:to-light-secondary/[0.15]',
            disabled: 'disabled:border-light-on-surface/40 disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40'
          },
          success: {
            border: 'border border-light-success',
            fill: 'fill-light-success',
            color: 'text-light-success',
            hover: 'hover:from-light-success/10 hover:to-light-success/10',
            active: 'active:from-light-success/[0.15] active:to-light-success/[0.15]',
            focus: 'focus:from-light-success/[0.15] focus:to-light-success/[0.15]',
            disabled: 'disabled:border-light-on-surface/40 disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40'
          },
          warning: {
            border: 'border border-light-warning',
            fill: 'fill-light-warning',
            color: 'text-light-warning',
            hover: 'hover:from-light-warning/10 hover:to-light-warning/10',
            active: 'active:from-light-warning/[0.15] active:to-light-warning/[0.15]',
            focus: 'focus:from-light-warning/[0.15] focus:to-light-warning/[0.15]',
            disabled: 'disabled:border-light-on-surface/40 disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40'
          },
          error: {
            border: 'border border-light-error',
            fill: 'fill-light-error',
            color: 'text-light-error',
            hover: 'hover:from-light-error/10 hover:to-light-error/10',
            active: 'active:from-light-error/[0.15] active:to-light-error/[0.15]',
            focus: 'focus:from-light-error/[0.15] focus:to-light-error/[0.15]',
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
            hover: 'hover:shadow-md hover:shadow-black/50 hover:from-light-on-surface/10 hover:to-light-on-surface/10',
            active: 'active:shadow-none active:from-light-on-surface/[0.15] active:to-light-on-surface/[0.15]',
            focus: 'focus:shadow-none active:from-light-on-surface/[0.15] focus:to-light-on-surface/[0.15]',
            disabled: 'disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40 disabled:bg-light-on-surface/20'
          },
          primary: {
            fill: 'fill-light-on-primary',
            color: 'text-light-on-primary',
            background: 'bg-light-primary',
            hover: 'hover:shadow-md hover:shadow-black/50 hover:from-light-on-primary/10 hover:to-light-on-primary/10',
            active: 'active:shadow-none active:bg-red',
            focus: 'active:shadow-none focus:bg-black',
            disabled: 'disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40 disabled:bg-light-on-surface/20'
          },
          secondary: {
            fill: 'fill-light-on-secondary',
            color: 'text-light-on-secondary',
            background: 'bg-light-secondary',
            hover: 'hover:shadow-md hover:shadow-black/50 hover:from-light-on-secondary/10 hover:to-light-on-secondary/10',
            active: 'active:shadow-none active:from-light-on-secondary/[0.15] active:to-light-on-secondary/[0.15]',
            focus: 'focus:shadow-none active:from-light-on-secondary/[0.15] focus:to-light-on-secondary/[0.15]',
            disabled: 'disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40 disabled:bg-light-on-surface/20'
          },
          success: {
            fill: 'fill-light-on-success',
            color: 'text-light-on-success',
            background: 'bg-light-success',
            hover: 'hover:shadow-md hover:shadow-black/50 hover:from-light-on-success/10 hover:to-light-on-success/10',
            active: 'active:shadow-none active:from-light-on-success/[0.15] active:to-light-on-success/[0.15]',
            focus: 'focus:shadow-none active:from-light-on-success/[0.15] focus:to-light-on-success/[0.15]',
            disabled: 'disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40 disabled:bg-light-on-surface/20'
          },
          warning: {
            fill: 'fill-light-on-warning',
            color: 'text-light-on-warning',
            background: 'bg-light-warning',
            hover: 'hover:shadow-md hover:shadow-black/50 hover:from-light-on-warning/10 hover:to-light-on-warning/10',
            active: 'active:shadow-none active:from-light-on-warning/[0.15] active:to-light-on-warning/[0.15]',
            focus: 'focus:shadow-none active:from-light-on-warning/[0.15] focus:to-light-on-warning/[0.15]',
            disabled: 'disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40 disabled:bg-light-on-surface/20'
          },
          error: {
            fill: 'fill-light-on-error',
            color: 'text-light-on-error',
            background: 'bg-light-error',
            hover: 'hover:shadow-md hover:shadow-black/50 hover:from-light-on-error/10 hover:to-light-on-error/10',
            active: 'active:shadow-none active:from-light-on-error/[0.15] active:to-light-on-error/[0.15]',
            focus: 'focus:shadow-none active:from-light-on-error/[0.15] focus:to-light-on-error/[0.15]',
            disabled: 'disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40 disabled:bg-light-on-surface/20'
          }
        }
      }
    }
  }
};

export default buttonConfig;

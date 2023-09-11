export interface ButtonConfig {
  defaultProps: {
    variant: ButtonVariants;
    size: ButtonSizes;
    color: Colors;
    fullwidth: boolean;
  };
  styles: {
    base: Record<string, string>;
    fullwidth: Record<string, string>;
    sizes: Record<ButtonSizes, Record<ButtonVariants, Record<string, string>>>;
    variants: Record<ButtonVariants, Record<Themes, Record<Colors, Record<string, string>>>>;
  }
}

const buttonConfig: ButtonConfig = {
  defaultProps: {
    variant: 'filled',
    size: 'md',
    color: 'primary',
    fullwidth: false
  },
  styles: {
    base: {
      display: 'flex',
      alignItems: 'items-center',
      height: 'h-fit',
      width: 'w-fit',
      gap: 'gap-2',
      borderRadius: 'rounded-full',
      font: 'antialiased font-normal text-sm font-sans',
      transition: 'transition',
      hover: 'hover:bg-gradient-to-r',
      active: 'hover:bg-gradient-to-r',
      focus: 'focus:outline-0 focus:bg-gradient-to-r',
      disabled: 'disabled:pointer-events-none disabled:select-none'
    },
    fullwidth: {
      width: 'w-full',
      justifyContent: 'justify-center'
    },
    sizes: {
      sm: {
        filled: {
          padding: 'py-1.5 px-5'
        },
        tonal: {
          padding: 'py-1.5 px-5'
        },
        outlined: {
          padding: 'py-[0.3125rem] px-[1.1875rem]'
        },
        text: {
          padding: 'py-1.5 px-5'
        }
      },
      md: {
        filled: {
          padding: 'py-2.5 px-6'
        },
        tonal: {
          padding: 'py-2.5 px-6'
        },
        outlined: {
          padding: 'py-[0.5625rem] px-[1.4375rem]'
        },
        text: {
          padding: 'py-2.5 px-6'
        }
      },
      lg: {
        filled: {
          padding: 'py-3.5 px-7'
        },
        tonal: {
          padding: 'py-3.5 px-7'
        },
        outlined: {
          padding: 'py-[0.8125rem] px-[1.6875rem]'
        },
        text: {
          padding: 'py-3.5 px-7'
        }
      }
    },
    variants: {
      filled: {
        light: {
          primary: {
            fill: 'fill-light-on-primary',
            color: 'text-light-on-primary',
            background: 'bg-light-primary',
            hover: 'hover:shadow-md hover:shadow-black/70 hover:from-light-on-primary/10 hover:to-light-on-primary/10',
            active: 'active:shadow-none active:from-light-on-primary/20 active:to-light-on-primary/20',
            disabled: 'disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40 disabled:bg-light-on-surface/10'
          },
          secondary: {
            fill: 'fill-light-on-secondary',
            color: 'text-light-on-secondary',
            background: 'bg-light-secondary',
            hover: 'hover:shadow-md hover:shadow-black/70 hover:from-light-on-secondary/10 hover:to-light-on-secondary/10',
            active: 'active:shadow-none active:from-light-on-secondary/20 active:to-light-on-secondary/20',
            disabled: 'disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40 disabled:bg-light-on-surface/10'
          },
          success: {
            fill: 'fill-light-on-success',
            color: 'text-light-on-success',
            background: 'bg-light-success',
            hover: 'hover:shadow-md hover:shadow-black/70 hover:from-light-on-success/10 hover:to-light-on-success/10',
            active: 'active:shadow-none active:from-light-on-success/20 active:to-light-on-success/20',
            disabled: 'disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40 disabled:bg-light-on-surface/10'
          },
          warning: {
            fill: 'fill-light-on-warning',
            color: 'text-light-on-warning',
            background: 'bg-light-warning',
            hover: 'hover:shadow-md hover:shadow-black/70 hover:from-light-on-warning/10 hover:to-light-on-warning/10',
            active: 'active:shadow-none active:from-light-on-warning/20 active:to-light-on-warning/20',
            disabled: 'disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40 disabled:bg-light-on-surface/10'
          },
          error: {
            fill: 'fill-light-on-error',
            color: 'text-light-on-error',
            background: 'bg-light-error',
            hover: 'hover:shadow-md hover:shadow-black/70 hover:from-light-on-error/10 hover:to-light-on-error/10',
            active: 'active:shadow-none active:from-light-on-error/20 active:to-light-on-error/20',
            disabled: 'disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40 disabled:bg-light-on-surface/10'
          }
        }
      },
      tonal: {
        light: {
          primary: {
            fill: 'fill-light-on-primary-container',
            color: 'text-light-on-primary-container',
            background: 'bg-light-primary-container',
            hover: 'hover:shadow-md hover:shadow-black/70 hover:from-light-on-primary-container/10 hover:to-light-on-primary-container/10',
            active: 'active:shadow-none active:from-light-on-primary-container/20 active:to-light-on-primary-container/20',
            disabled: 'disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40 disabled:bg-light-on-surface/10'
          },
          secondary: {
            fill: 'fill-light-on-secondary-container',
            color: 'text-light-on-secondary-container',
            background: 'bg-light-secondary-container',
            hover: 'hover:shadow-md hover:shadow-black/70 hover:from-light-on-secondary-container/10 hover:to-light-on-secondary-container/10',
            active: 'active:shadow-none active:from-light-on-secondary-container/20 active:to-light-on-secondary-container/20',
            disabled: 'disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40 disabled:bg-light-on-surface/10'
          },
          success: {
            fill: 'fill-light-on-success-container',
            color: 'text-light-on-success-container',
            background: 'bg-light-success-container',
            hover: 'hover:shadow-md hover:shadow-black/70 hover:from-light-on-success-container/10 hover:to-light-on-success-container/10',
            active: 'active:shadow-none active:from-light-on-success-container/20 active:to-light-on-success-container/20',
            disabled: 'disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40 disabled:bg-light-on-surface/10'
          },
          warning: {
            fill: 'fill-light-on-warning-container',
            color: 'text-light-on-warning-container',
            background: 'bg-light-warning-container',
            hover: 'hover:shadow-md hover:shadow-black/70 hover:from-light-on-warning-container/10 hover:to-light-on-warning-container/10',
            active: 'active:shadow-none active:from-light-on-warning-container/20 active:to-light-on-warning-container/20',
            disabled: 'disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40 disabled:bg-light-on-surface/10'
          },
          error: {
            fill: 'fill-light-on-error-container',
            color: 'text-light-on-error-container',
            background: 'bg-light-error-container',
            hover: 'hover:shadow-md hover:shadow-black/70 hover:from-light-on-error-container/10 hover:to-light-on-error-container/10',
            active: 'active:shadow-none active:from-light-on-error-container/20 active:to-light-on-error-container/20',
            disabled: 'disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40 disabled:bg-light-on-surface/10'
          }
        }
      },
      outlined: {
        light: {
          primary: {
            border: 'border border-light-primary',
            fill: 'fill-light-primary',
            color: 'text-light-primary',
            hover: 'hover:from-light-primary/10 hover:to-light-primary/10',
            active: 'active:from-light-primary/20 active:to-light-primary/20',
            disabled: 'disabled:border-light-on-surface/10 disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40'
          },
          secondary: {
            border: 'border border-light-secondary',
            fill: 'fill-light-secondary',
            color: 'text-light-secondary',
            hover: 'hover:from-light-secondary/10 hover:to-light-secondary/10',
            active: 'active:from-light-secondary/20 active:to-light-secondary/20',
            disabled: 'disabled:border-light-on-surface/10 disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40'
          },
          success: {
            border: 'border border-light-success',
            fill: 'fill-light-success',
            color: 'text-light-success',
            hover: 'hover:from-light-success/10 hover:to-light-success/10',
            active: 'active:from-light-success/20 active:to-light-success/20',
            disabled: 'disabled:border-light-on-surface/10 disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40'
          },
          warning: {
            border: 'border border-light-warning',
            fill: 'fill-light-warning',
            color: 'text-light-warning',
            hover: 'hover:from-light-warning/10 hover:to-light-warning/10',
            active: 'active:from-light-warning/20 active:to-light-warning/20',
            disabled: 'disabled:border-light-on-surface/10 disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40'
          },
          error: {
            border: 'border border-light-error',
            fill: 'fill-light-error',
            color: 'text-light-error',
            hover: 'hover:from-light-error/10 hover:to-light-error/10',
            active: 'active:from-light-error/20 active:to-light-error/20',
            disabled: 'disabled:border-light-on-surface/10 disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40'
          }
        }
      },
      text: {
        light: {
          primary: {
            fill: 'fill-light-primary',
            color: 'text-light-primary',
            hover: 'hover:from-light-primary/10 hover:to-light-primary/10',
            active: 'active:from-light-primary/20 active:to-light-primary/20',
            disabled: 'disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40'
          },
          secondary: {
            fill: 'fill-light-secondary',
            color: 'text-light-secondary',
            hover: 'hover:from-light-secondary/10 hover:to-light-secondary/10',
            active: 'active:from-light-secondary/20 active:to-light-secondary/20',
            disabled: 'disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40'
          },
          success: {
            fill: 'fill-light-success',
            color: 'text-light-success',
            hover: 'hover:from-light-success/10 hover:to-light-success/10',
            active: 'active:from-light-success/20 active:to-light-success/20',
            disabled: 'disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40'
          },
          warning: {
            fill: 'fill-light-warning',
            color: 'text-light-warning',
            hover: 'hover:from-light-warning/10 hover:to-light-warning/10',
            active: 'active:from-light-warning/20 active:to-light-warning/20',
            disabled: 'disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40'
          },
          error: {
            fill: 'fill-light-error',
            color: 'text-light-error',
            hover: 'hover:from-light-error/10 hover:to-light-error/10',
            active: 'active:from-light-error/20 active:to-light-error/20',
            disabled: 'disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40'
          }
        }
      }
    }
  }
};

export default buttonConfig;

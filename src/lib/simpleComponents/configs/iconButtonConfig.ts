import { type IconButtonVariants } from '../components/UI/IconButton';

export interface IconButtonConfig {
  defaultProps: {
    variant: IconButtonVariants;
    borderShape: Shapes;
    size: Sizes;
    color: Colors;
    elevated: boolean;
  };
  styles: {
    base: Record<string, string>;
    elevated: Record<string, string>;
    borderShapes: Record<Shapes, Record<string, string>>;
    sizes: Record<Sizes, Record<string, string>>;
    outlineSizes: Record<Sizes, Record<string, string>>;
    variants: Record<IconButtonVariants, Record<Themes, Record<Colors, Record<string, string>>>>;
  }
}

const iconIconButtonConfig: IconButtonConfig = {
  defaultProps: {
    variant: 'filled',
    borderShape: 'circular',
    size: 'md',
    color: 'primary',
    elevated: false
  },
  styles: {
    base: {
      position: 'relative',
      display: 'flex',
      alignItems: 'items-center',
      justifyContent: 'justify-center',
      aspectRatio: 'aspect-square',
      transition: 'transition',
      userSelect: 'select-none',
      hover: 'hover:bg-gradient-to-r',
      active: 'active:bg-gradient-to-r',
      focus: 'focus:outline-0',
      disabled: 'disabled:pointer-events-none'
    },
    elevated: {
      shadow: 'shadow-md shadow-black/50',
      hover: 'hover:shadow-lg hover:shadow-black/50',
      active: 'active:shadow-md active:shadow-black/50'
    },
    borderShapes: {
      rounded: {
        borderRadius: 'rounded-xl'
      },
      circular: {
        borderRadius: 'rounded-full'
      },
      square: {
        borderRadius: 'rounded-none'
      }
    },
    sizes: {
      xs: {
        height: 'h-6',
        padding: 'p-0.5'
      },
      sm: {
        height: 'h-8',
        padding: 'p-1.5'
      },
      md: {
        height: 'h-10',
        padding: 'p-2.5'
      },
      lg: {
        height: 'h-12',
        padding: 'p-3.5'
      }
    },
    outlineSizes: {
      xs: {
        padding: 'p-px'
      },
      sm: {
        padding: 'p-[0.3125rem]'
      },
      md: {
        padding: 'p-[0.5625rem]'
      },
      lg: {
        padding: 'p-[0.8125rem]'
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
            disabled: 'disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40'
          },
          primary: {
            fill: 'fill-light-on-primary',
            color: 'text-light-on-primary',
            hover: 'hover:from-light-on-primary/10 hover:to-light-on-primary/10',
            active: 'active:from-light-on-primary/[0.15] active:to-light-on-primary/[0.15]',
            disabled: 'disabled:fill-light-on-primary/40 disabled:text-light-on-primary/40'
          },
          secondary: {
            fill: 'fill-light-on-secondary',
            color: 'text-light-on-secondary',
            hover: 'hover:from-light-on-secondary/10 hover:to-light-on-secondary/10',
            active: 'active:from-light-on-secondary/[0.15] active:to-light-on-secondary/[0.15]',
            disabled: 'disabled:fill-light-on-secondary/40 disabled:text-light-on-secondary/40'
          },
          success: {
            fill: 'fill-light-on-success',
            color: 'text-light-on-success',
            hover: 'hover:from-light-on-success/10 hover:to-light-on-success/10',
            active: 'active:from-light-on-success/[0.15] active:to-light-on-success/[0.15]',
            disabled: 'disabled:fill-light-on-success/40 disabled:text-light-on-success/40'
          },
          warning: {
            fill: 'fill-light-on-warning',
            color: 'text-light-on-warning',
            hover: 'hover:from-light-on-warning/10 hover:to-light-on-warning/10',
            active: 'active:from-light-on-warning/[0.15] active:to-light-on-warning/[0.15]',
            disabled: 'disabled:fill-light-on-warning/40 disabled:text-light-on-warning/40'
          },
          error: {
            fill: 'fill-light-on-error',
            color: 'text-light-on-error',
            hover: 'hover:from-light-on-error/10 hover:to-light-on-error/10',
            active: 'active:from-light-on-error/[0.15] active:to-light-on-error/[0.15]',
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
            disabled: 'disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40'
          },
          primary: {
            fill: 'fill-light-primary',
            color: 'text-light-primary',
            hover: 'hover:from-light-primary/10 hover:to-light-primary/10',
            active: 'active:from-light-primary/[0.15] active:to-light-primary/[0.15]',
            disabled: 'disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40'
          },
          secondary: {
            fill: 'fill-light-secondary',
            color: 'text-light-secondary',
            hover: 'hover:from-light-secondary/10 hover:to-light-secondary/10',
            active: 'active:from-light-secondary/[0.15] active:to-light-secondary/[0.15]',
            disabled: 'disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40'
          },
          success: {
            fill: 'fill-light-success',
            color: 'text-light-success',
            hover: 'hover:from-light-success/10 hover:to-light-success/10',
            active: 'active:from-light-success/[0.15] active:to-light-success/[0.15]',
            disabled: 'disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40'
          },
          warning: {
            fill: 'fill-light-warning',
            color: 'text-light-warning',
            hover: 'hover:from-light-warning/10 hover:to-light-warning/10',
            active: 'active:from-light-warning/[0.15] active:to-light-warning/[0.15]',
            disabled: 'disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40'
          },
          error: {
            fill: 'fill-light-error',
            color: 'text-light-error',
            hover: 'hover:from-light-error/10 hover:to-light-error/10',
            active: 'active:from-light-error/[0.15] active:to-light-error/[0.15]',
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
            disabled: 'disabled:border-light-on-surface/40 disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40'
          },
          primary: {
            border: 'border border-light-primary',
            fill: 'fill-light-primary',
            color: 'text-light-primary',
            hover: 'hover:from-light-primary/10 hover:to-light-primary/10',
            active: 'active:from-light-primary/[0.15] active:to-light-primary/[0.15]',
            disabled: 'disabled:border-light-on-surface/40 disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40'
          },
          secondary: {
            border: 'border border-light-secondary',
            fill: 'fill-light-secondary',
            color: 'text-light-secondary',
            hover: 'hover:from-light-secondary/10 hover:to-light-secondary/10',
            active: 'active:from-light-secondary/[0.15] active:to-light-secondary/[0.15]',
            disabled: 'disabled:border-light-on-surface/40 disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40'
          },
          success: {
            border: 'border border-light-success',
            fill: 'fill-light-success',
            color: 'text-light-success',
            hover: 'hover:from-light-success/10 hover:to-light-success/10',
            active: 'active:from-light-success/[0.15] active:to-light-success/[0.15]',
            disabled: 'disabled:border-light-on-surface/40 disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40'
          },
          warning: {
            border: 'border border-light-warning',
            fill: 'fill-light-warning',
            color: 'text-light-warning',
            hover: 'hover:from-light-warning/10 hover:to-light-warning/10',
            active: 'active:from-light-warning/[0.15] active:to-light-warning/[0.15]',
            disabled: 'disabled:border-light-on-surface/40 disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40'
          },
          error: {
            border: 'border border-light-error',
            fill: 'fill-light-error',
            color: 'text-light-error',
            hover: 'hover:from-light-error/10 hover:to-light-error/10',
            active: 'active:from-light-error/[0.15] active:to-light-error/[0.15]',
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
            disabled: 'disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40 disabled:bg-light-on-surface/20'
          },
          primary: {
            fill: 'fill-light-on-primary',
            color: 'text-light-on-primary',
            background: 'bg-light-primary',
            hover: 'hover:shadow-md hover:shadow-black/50 hover:from-light-on-primary/10 hover:to-light-on-primary/10',
            active: 'active:shadow-none active:from-light-on-primary/[0.15] active:to-light-on-primary/[0.15]',
            disabled: 'disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40 disabled:bg-light-on-surface/20'
          },
          secondary: {
            fill: 'fill-light-on-secondary',
            color: 'text-light-on-secondary',
            background: 'bg-light-secondary',
            hover: 'hover:shadow-md hover:shadow-black/50 hover:from-light-on-secondary/10 hover:to-light-on-secondary/10',
            active: 'active:shadow-none active:from-light-on-secondary/[0.15] active:to-light-on-secondary/[0.15]',
            disabled: 'disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40 disabled:bg-light-on-surface/20'
          },
          success: {
            fill: 'fill-light-on-success',
            color: 'text-light-on-success',
            background: 'bg-light-success',
            hover: 'hover:shadow-md hover:shadow-black/50 hover:from-light-on-success/10 hover:to-light-on-success/10',
            active: 'active:shadow-none active:from-light-on-success/[0.15] active:to-light-on-success/[0.15]',
            disabled: 'disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40 disabled:bg-light-on-surface/20'
          },
          warning: {
            fill: 'fill-light-on-warning',
            color: 'text-light-on-warning',
            background: 'bg-light-warning',
            hover: 'hover:shadow-md hover:shadow-black/50 hover:from-light-on-warning/10 hover:to-light-on-warning/10',
            active: 'active:shadow-none active:from-light-on-warning/[0.15] active:to-light-on-warning/[0.15]',
            disabled: 'disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40 disabled:bg-light-on-surface/20'
          },
          error: {
            fill: 'fill-light-on-error',
            color: 'text-light-on-error',
            background: 'bg-light-error',
            hover: 'hover:shadow-md hover:shadow-black/50 hover:from-light-on-error/10 hover:to-light-on-error/10',
            active: 'active:shadow-none active:from-light-on-error/[0.15] active:to-light-on-error/[0.15]',
            disabled: 'disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40 disabled:bg-light-on-surface/20'
          }
        }
      }
    }
  }
};

export default iconIconButtonConfig;

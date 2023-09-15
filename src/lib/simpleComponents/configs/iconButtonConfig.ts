import { type IconButtonVariants } from '../components/UI/IconButton';

export interface IconButtonConfig {
  defaultProps: {
    variant: IconButtonVariants;
    borderShape: BorderShapes;
    size: Sizes;
    color: Colors;
    elevated: boolean;
  };
  styles: {
    base: Record<string, string>;
    elevated: Record<string, string>;
    borderShapes: Record<BorderShapes, Record<string, string>>;
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
      overflow: 'overflow-hidden',
      transition: 'transition',
      userSelect: 'select-none',
      focus: 'focus:outline-0',
      disabled: 'disabled:pointer-events-none',
      group: 'group'
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
            fill: 'fill-light-on-surface-variant',
            color: 'text-light-on-surface-variant',
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

export default iconIconButtonConfig;

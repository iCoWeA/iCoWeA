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
    button: {
      base: Record<string, string>;
      fullwidth: Record<string, string>;
      elevated: Record<string, string>;
      sizes: Record<Sizes, Record<string, string>>;
      variants: Record<ButtonVariants, Record<Themes, Record<Colors, Record<string, string>>>>;
    },
    layer: {
      base: Record<string, string>;
      variants: Record<ButtonVariants, Record<Themes, Record<Colors, Record<string, string>>>>;
    }
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
    button: {
      base: {
        position: 'relative',
        display: 'flex',
        gap: 'gap-2',
        alignItems: 'items-center',
        width: 'w-fit',
        borderRadius: 'rounded-full',
        font: 'antialiased font-normal text-sm font-sans',
        transition: 'transition',
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
        hover: 'hover:shadow-lg active:shadow-black/50',
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
    },
    layer: {
      base: {
        position: 'absolute',
        top: 'top-0',
        left: 'left-0',
        display: 'block',
        height: 'h-full',
        width: 'w-full',
        borderRadius: 'rounded-full',
        transition: 'transition',
        pointerEvent: 'pointer-events-none'
      },
      variants: {
        plain: {
          light: {
            default: {
              hover: 'group-hover:bg-light-on-surface-variant/10',
              active: 'group-active:bg-light-on-surface-variant/[0.15]'
            },
            primary: {
              hover: 'group-hover:bg-light-on-primary/10',
              active: 'group-active:bg-light-on-primary/[0.15]'
            },
            secondary: {
              hover: 'group-hover:bg-light-on-secondary/10',
              active: 'group-active:bg-light-on-secondary/[0.15]'
            },
            success: {
              hover: 'group-hover:bg-light-on-success/10',
              active: 'group-active:bg-light-on-success/[0.15]'
            },
            warning: {
              hover: 'group-hover:bg-light-on-warning/10',
              active: 'group-active:bg-light-on-warning/[0.15]'
            },
            error: {
              hover: 'group-hover:bg-light-on-error/10',
              active: 'group-active:bg-light-on-error/[0.15]'
            }
          }
        },
        text: {
          light: {
            default: {
              hover: 'group-hover:bg-light-on-surface/10',
              active: 'group-active:bg-light-on-surface/[0.15]'
            },
            primary: {
              hover: 'group-hover:bg-light-primary/10',
              active: 'group-active:bg-light-primary/[0.15]'
            },
            secondary: {
              hover: 'group-hover:bg-light-secondary/10',
              active: 'group-active:bg-light-secondary/[0.15]'
            },
            success: {
              hover: 'group-hover:bg-light-success/10',
              active: 'group-active:bg-light-success/[0.15]'
            },
            warning: {
              hover: 'group-hover:bg-light-warning/10',
              active: 'group-active:bg-light-warning/[0.15]'
            },
            error: {
              hover: 'group-hover:bg-light-error/10',
              active: 'group-active:bg-light-error/[0.15]'
            }
          }
        },
        outlined: {
          light: {
            default: {
              border: 'border border-light-on-surface',
              hover: 'group-hover:bg-light-on-surface/10',
              active: 'group-active:bg-light-on-surface/[0.15]',
              disabled: 'group-disabled:border-light-on-surface/40'
            },
            primary: {
              border: 'border border-light-primary',
              hover: 'group-hover:bg-light-primary/10',
              active: 'group-active:bg-light-primary/[0.15]',
              disabled: 'group-disabled:border-light-on-surface/40'
            },
            secondary: {
              border: 'border border-light-secondary',
              hover: 'group-hover:bg-light-secondary/10',
              active: 'group-active:bg-light-secondary/[0.15]',
              disabled: 'group-disabled:border-light-on-surface/40'
            },
            success: {
              border: 'border border-light-success',
              hover: 'group-hover:bg-light-success/10',
              active: 'group-active:bg-light-success/[0.15]',
              disabled: 'group-disabled:border-light-on-surface/40'
            },
            warning: {
              border: 'border border-light-warning',
              hover: 'group-hover:bg-light-warning/10',
              active: 'group-active:bg-light-warning/[0.15]',
              disabled: 'group-disabled:border-light-on-surface/40'
            },
            error: {
              border: 'border border-light-error',
              hover: 'group-hover:bg-light-error/10',
              active: 'group-active:bg-light-error/[0.15]',
              disabled: 'group-disabled:border-light-on-surface/40'
            }
          }
        },
        filled: {
          light: {
            default: {
              hover: 'group-hover:bg-light-on-surface-variant/10',
              active: 'group-active:bg-light-on-surface-variant/[0.15]'
            },
            primary: {
              hover: 'group-hover:bg-light-on-primary/10',
              active: 'group-active:bg-light-on-primary/[0.15]'
            },
            secondary: {
              hover: 'group-hover:bg-light-on-secondary/10',
              active: 'group-active:bg-light-on-secondary/[0.15]'
            },
            success: {
              hover: 'group-hover:bg-light-on-success/10',
              active: 'group-active:bg-light-on-success/[0.15]'
            },
            warning: {
              hover: 'group-hover:bg-light-on-warning/10',
              active: 'group-active:bg-light-on-warning/[0.15]'
            },
            error: {
              hover: 'group-hover:bg-light-on-error/10',
              active: 'group-active:bg-light-on-error/[0.15]'
            }
          }
        }
      }
    }
  }
};

export default buttonConfig;

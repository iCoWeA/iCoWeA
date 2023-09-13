import { type ButtonGroupVariants } from '../components/UI/ButtonGroup';

export interface ButtonGroupConfig {
  defaultProps: {
    variant: ButtonGroupVariants;
    size: Sizes;
    color: Colors;
    elevated: boolean;
    fullwidth: boolean;
    tabIndex: number;
    disabled: boolean;
    type: 'submit' | 'reset' | 'button';
  };
  styles: {
    container: {
      base: Record<string, string>;
      fullwidth: Record<string, string>;
      elevated: Record<string, string>;
    },
    button: {
      base: Record<string, string>;
      first: Record<string, string>;
      last: Record<string, string>;
      fullwidth: Record<string, string>;
      sizes: Record<Sizes, Record<string, string>>;
      variants: Record<ButtonGroupVariants, Record<string, Record<Colors, Record<string, string>>>>;
    },
    before: {
      base: Record<string, string>;
      first: Record<string, string>;
      last: Record<string, string>;
      firstBorder: Record<string, string>;
      lastBorder: Record<string, string>;
      variants: Record<ButtonGroupVariants, Record<Themes, Record<Colors, Record<string, string>>>>;
    }
  }
}

const buttonGroupConfig: ButtonGroupConfig = {
  defaultProps: {
    variant: 'filled',
    size: 'md',
    color: 'primary',
    elevated: false,
    fullwidth: false,
    tabIndex: 0,
    disabled: false,
    type: 'button'
  },
  styles: {
    container: {
      base: {
        display: 'flex',
        height: 'h-fit',
        width: 'w-fit',
        borderRadius: 'rounded-full'
      },
      fullwidth: {
        width: 'w-full'
      },
      elevated: {
        shadow: 'shadow-md shadow-black/50'
      }
    },
    button: {
      base: {
        position: 'relative',
        display: 'flex',
        gap: 'gap-2',
        alignItems: 'items-center',
        width: 'w-fit',
        font: 'antialiased font-normal text-sm font-sans',
        transition: 'transition',
        focus: 'focus:outline-0',
        disabled: 'disabled:pointer-events-none disabled:select-none'
      },
      first: {
        borderRadius: 'rounded-l-full'
      },
      last: {
        borderRadius: 'rounded-r-full'
      },
      fullwidth: {
        width: 'w-full',
        justifyContent: 'justify-center'
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
    before: {
      base: {
        position: 'before:absolute',
        top: 'before:top-0',
        left: 'before:left-0',
        display: 'before:block',
        height: 'before:h-full',
        width: 'before:w-full',
        transition: 'before:transition'
      },
      firstBorder: {
        border: 'before:border-l-0'
      },
      lastBorder: {
        border: 'before:border-r-0'
      },
      first: {
        borderRadius: 'before:rounded-l-full'
      },
      last: {
        borderRadius: 'before:rounded-r-full'
      },
      variants: {
        plain: {
          light: {
            default: {
              border: 'before:border-x before:border-light-on-surface-variant',
              hover: 'hover:before:bg-light-on-surface-variant/10',
              active: 'active:before:bg-light-on-surface-variant/[0.15]',
              disabled: 'disabled:before:border-light-on-surface-variant/40'
            },
            primary: {
              border: 'before:border-x before:border-light-on-primary',
              hover: 'hover:before:bg-light-on-primary/10',
              active: 'active:before:bg-light-on-primary/[0.15]',
              disabled: 'disabled:before:border-light-on-primary/40'
            },
            secondary: {
              border: 'before:border-x before:border-light-on-secondary',
              hover: 'hover:before:bg-light-on-secondary/10',
              active: 'active:before:bg-light-on-secondary/[0.15]',
              disabled: 'disabled:before:border-light-on-secondary/40'
            },
            success: {
              border: 'before:border-x before:border-light-on-success',
              hover: 'hover:before:bg-light-on-success/10',
              active: 'active:before:bg-light-on-success/[0.15]',
              disabled: 'disabled:before:border-light-on-success/40'
            },
            warning: {
              border: 'before:border-x before:border-light-on-success',
              hover: 'hover:before:bg-light-on-warning/10',
              active: 'active:before:bg-light-on-warning/[0.15]',
              disabled: 'disabled:before:border-light-on-warning/40'
            },
            error: {
              border: 'before:border-x before:border-light-on-success',
              hover: 'hover:before:bg-light-on-error/10',
              active: 'active:before:bg-light-on-error/[0.15]',
              disabled: 'disabled:before:border-light-on-error/40'
            }
          }
        },
        text: {
          light: {
            default: {
              border: 'before:border-x before:border-light-on-surface',
              hover: 'hover:before:bg-light-on-surface/10',
              active: 'active:before:bg-light-on-surface/[0.15]',
              disabled: 'disabled:before:border-light-on-surface/40'
            },
            primary: {
              border: 'before:border-x before:border-light-primary',
              hover: 'hover:before:bg-light-primary/10',
              active: 'active:before:bg-light-primary/[0.15]',
              disabled: 'disabled:before:border-light-on-surface/40'
            },
            secondary: {
              border: 'before:border-x before:border-light-secondary',
              hover: 'hover:before:bg-light-secondary/10',
              active: 'active:before:bg-light-secondary/[0.15]',
              disabled: 'disabled:before:border-light-on-surface/40'
            },
            success: {
              border: 'before:border-x before:border-light-success',
              hover: 'hover:before:bg-light-success/10',
              active: 'active:before:bg-light-success/[0.15]',
              disabled: 'disabled:before:border-light-on-surface/40'
            },
            warning: {
              border: 'before:border-x before:border-light-warning',
              hover: 'hover:before:bg-light-warning/10',
              active: 'active:before:bg-light-warning/[0.15]',
              disabled: 'disabled:before:border-light-on-surface/40'
            },
            error: {
              border: 'before:border-x before:border-light-error',
              hover: 'hover:before:bg-light-error/10',
              active: 'active:before:bg-light-error/[0.15]',
              disabled: 'disabled:before:border-light-on-surface/40'
            }
          }
        },
        outlined: {
          light: {
            default: {
              border: 'before:border before:border-light-on-surface',
              hover: 'hover:before:bg-light-on-surface/10',
              active: 'active:before:bg-light-on-surface/[0.15]',
              disabled: 'disabled:before:border-light-on-surface/40'
            },
            primary: {
              border: 'before:border before:border-light-primary',
              hover: 'hover:before:bg-light-primary/10',
              active: 'active:before:bg-light-primary/[0.15]',
              disabled: 'disabled:before:border-light-on-surface/40'
            },
            secondary: {
              border: 'before:border before:border-light-secondary',
              hover: 'hover:before:bg-light-secondary/10',
              active: 'active:before:bg-light-secondary/[0.15]',
              disabled: 'disabled:before:border-light-on-surface/40'
            },
            success: {
              border: 'before:border before:border-light-success',
              hover: 'hover:before:bg-light-success/10',
              active: 'active:before:bg-light-success/[0.15]',
              disabled: 'disabled:before:border-light-on-surface/40'
            },
            warning: {
              border: 'before:border before:border-light-warning',
              hover: 'hover:before:bg-light-warning/10',
              active: 'active:before:bg-light-warning/[0.15]',
              disabled: 'disabled:before:border-light-on-surface/40'
            },
            error: {
              border: 'before:border before:border-light-error',
              hover: 'hover:before:bg-light-error/10',
              active: 'active:before:bg-light-error/[0.15]',
              disabled: 'disabled:before:border-light-on-surface/40'
            }
          }
        },
        filled: {
          light: {
            default: {
              border: 'before:border-x before:border-light-on-surface',
              hover: 'hover:before:bg-light-on-surface/10',
              active: 'active:before:bg-light-on-surface/[0.15]',
              disabled: 'disabled:before:border-light-on-surface/40'
            },
            primary: {
              border: 'before:border-x before:border-light-primary-dark',
              hover: 'hover:before:bg-light-on-primary/10',
              active: 'active:before:bg-light-on-primary/[0.15]',
              disabled: 'disabled:before:border-light-on-surface/40'
            },
            secondary: {
              border: 'before:border-x before:border-light-secondary-dark',
              hover: 'hover:before:bg-light-on-secondary/10',
              active: 'active:before:bg-light-on-secondary/[0.15]',
              disabled: 'disabled:before:border-light-on-surface/40'
            },
            success: {
              border: 'before:border-x before:border-light-success-dark',
              hover: 'hover:before:bg-light-on-success/10',
              active: 'active:before:bg-light-on-success/[0.15]',
              disabled: 'disabled:before:border-light-on-surface/40'
            },
            warning: {
              border: 'before:border-x before:border-light-warning-dark',
              hover: 'hover:before:bg-light-on-warning/10',
              active: 'active:before:bg-light-on-warning/[0.15]',
              disabled: 'disabled:before:border-light-on-surface/40'
            },
            error: {
              border: 'before:border-x before:border-light-error-dark',
              hover: 'hover:before:bg-light-on-error/10',
              active: 'active:before:bg-light-on-error/[0.15]',
              disabled: 'disabled:before:border-light-on-surface/40'
            }
          }
        }
      }
    }
  }
};

export default buttonGroupConfig;

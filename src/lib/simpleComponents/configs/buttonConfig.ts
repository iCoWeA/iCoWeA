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
      elevated: Record<Themes, Record<string, string>>;
      sizes: Record<Sizes, Record<string, string>>;
      variants: Record<ButtonVariants, Record<Themes, Record<Colors, Record<string, string>>>>;
    },
    before: {
      base: Record<string, string>;
      variants: Record<ButtonVariants, Record<Themes, Record<Colors, Record<string, string>>>>;
    }
  }
}

const buttonConfig: ButtonConfig = {
  defaultProps: {
    variant: 'solid',
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
        disabled: 'disabled:pointer-events-none disabled:select-none'
      },
      fullwidth: {
        width: 'w-full',
        justifyContent: 'justify-center'
      },
      elevated: {
        light: {
          shadow: 'shadow-md shadow-light-shadow',
          hover: 'hover:shadow-lg active:shadow-light-shadow',
          active: 'active:shadow-md active:shadow-light-shadow'
        }
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
        soft: {
          light: {
            primary: {
              fill: 'fill-light-primary',
              color: 'text-light-primary',
              background: 'bg-light-primary-soft',
              hover: 'hover:shadow-sm hover:shadow-light-shadow',
              active: 'active:shadow-none',
              disabled: 'disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40 disabled:bg-light-on-surface/20'
            },
            secondary: {
              fill: 'fill-light-secondary',
              color: 'text-light-secondary',
              background: 'bg-light-secondary-soft',
              hover: 'hover:shadow-sm hover:shadow-light-shadow',
              active: 'active:shadow-none',
              disabled: 'disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40 disabled:bg-light-on-surface/20'
            },
            success: {
              fill: 'fill-light-success',
              color: 'text-light-success',
              background: 'bg-light-success-soft',
              hover: 'hover:shadow-sm hover:shadow-light-shadow',
              active: 'active:shadow-none',
              disabled: 'disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40 disabled:bg-light-on-surface/20'
            },
            warning: {
              fill: 'fill-light-warning',
              color: 'text-light-warning',
              background: 'bg-light-warning-soft',
              hover: 'hover:shadow-sm hover:shadow-light-shadow',
              active: 'active:shadow-none',
              disabled: 'disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40 disabled:bg-light-on-surface/20'
            },
            error: {
              fill: 'fill-light-error',
              color: 'text-light-error',
              background: 'bg-light-error-soft',
              hover: 'hover:shadow-sm hover:shadow-light-shadow',
              active: 'active:shadow-none',
              disabled: 'disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40 disabled:bg-light-on-surface/20'
            }
          }
        },
        solid: {
          light: {
            primary: {
              fill: 'fill-light-on-primary',
              color: 'text-light-on-primary',
              background: 'bg-light-primary',
              hover: 'hover:shadow-sm hover:shadow-light-shadow',
              active: 'active:shadow-none',
              disabled: 'disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40 disabled:bg-light-on-surface/20'
            },
            secondary: {
              fill: 'fill-light-on-secondary',
              color: 'text-light-on-secondary',
              background: 'bg-light-secondary',
              hover: 'hover:shadow-sm hover:shadow-light-shadow',
              active: 'active:shadow-none',
              disabled: 'disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40 disabled:bg-light-on-surface/20'
            },
            success: {
              fill: 'fill-light-on-success',
              color: 'text-light-on-success',
              background: 'bg-light-success',
              hover: 'hover:shadow-sm hover:shadow-light-shadow',
              active: 'active:shadow-none',
              disabled: 'disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40 disabled:bg-light-on-surface/20'
            },
            warning: {
              fill: 'fill-light-on-warning',
              color: 'text-light-on-warning',
              background: 'bg-light-warning',
              hover: 'hover:shadow-sm hover:shadow-light-shadow',
              active: 'active:shadow-none',
              disabled: 'disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40 disabled:bg-light-on-surface/20'
            },
            error: {
              fill: 'fill-light-on-error',
              color: 'text-light-on-error',
              background: 'bg-light-error',
              hover: 'hover:shadow-sm hover:shadow-light-shadow',
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
        borderRadius: 'before:rounded-full',
        transition: 'before:transition'
      },
      variants: {
        plain: {
          light: {
            primary: {
              hover: 'hover:before:bg-light-on-primary/10',
              active: 'active:before:bg-light-on-primary/[0.15]'
            },
            secondary: {
              hover: 'hover:before:bg-light-on-secondary/10',
              active: 'active:before:bg-light-on-secondary/[0.15]'
            },
            success: {
              hover: 'hover:before:bg-light-on-success/10',
              active: 'active:before:bg-light-on-success/[0.15]'
            },
            warning: {
              hover: 'hover:before:bg-light-on-warning/10',
              active: 'active:before:bg-light-on-warning/[0.15]'
            },
            error: {
              hover: 'hover:before:bg-light-on-error/10',
              active: 'active:before:bg-light-on-error/[0.15]'
            }
          }
        },
        text: {
          light: {
            primary: {
              hover: 'hover:before:bg-light-primary/10',
              active: 'active:before:bg-light-primary/[0.15]'
            },
            secondary: {
              hover: 'hover:before:bg-light-secondary/10',
              active: 'active:before:bg-light-secondary/[0.15]'
            },
            success: {
              hover: 'hover:before:bg-light-success/10',
              active: 'active:before:bg-light-success/[0.15]'
            },
            warning: {
              hover: 'hover:before:bg-light-warning/10',
              active: 'active:before:bg-light-warning/[0.15]'
            },
            error: {
              hover: 'hover:before:bg-light-error/10',
              active: 'active:before:bg-light-error/[0.15]'
            }
          }
        },
        outlined: {
          light: {
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
        soft: {
          light: {
            primary: {
              hover: 'hover:before:bg-light-primary/10',
              active: 'active:before:bg-light-primary/[0.15]'
            },
            secondary: {
              hover: 'hover:before:bg-light-secondary/10',
              active: 'active:before:bg-light-secondary/[0.15]'
            },
            success: {
              hover: 'hover:before:bg-light-success/10',
              active: 'active:before:bg-light-success/[0.15]'
            },
            warning: {
              hover: 'hover:before:bg-light-warning/10',
              active: 'active:before:bg-light-warning/[0.15]'
            },
            error: {
              hover: 'hover:before:bg-light-error/10',
              active: 'active:before:bg-light-error/[0.15]'
            }
          }
        },
        solid: {
          light: {
            primary: {
              hover: 'hover:before:bg-light-on-primary/10',
              active: 'active:before:bg-light-on-primary/[0.15]'
            },
            secondary: {
              hover: 'hover:before:bg-light-on-secondary/10',
              active: 'active:before:bg-light-on-secondary/[0.15]'
            },
            success: {
              hover: 'hover:before:bg-light-on-success/10',
              active: 'active:before:bg-light-on-success/[0.15]'
            },
            warning: {
              hover: 'hover:before:bg-light-on-warning/10',
              active: 'active:before:bg-light-on-warning/[0.15]'
            },
            error: {
              hover: 'hover:before:bg-light-on-error/10',
              active: 'active:before:bg-light-on-error/[0.15]'
            }
          }
        }
      }
    }
  }
};

export default buttonConfig;

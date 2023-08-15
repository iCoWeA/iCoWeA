export type ListItemButtonVariant = 'standard' | 'filled';
export type ListItemButtonSizes = 'sm' | 'md' | 'lg';
export type ListItemButtonColors = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | string;

export interface ListItemButtonProps {
  variant?: ListItemButtonVariant;
  size?: ListItemButtonSizes;
  color?: ListItemButtonColors;
  selected?: boolean;
  className?: string;
}

export interface ListItemButtonConfig {
  defaultProps: Required<ListItemButtonProps>;
  styles: {
    base: Record<string, string>;
    sizes: Record<ListItemButtonSizes, Record<string, string>>;
    selected: Record<ListItemButtonVariant, Record<string, Record<ListItemButtonColors, Record<string, string>>>>;
    variants: Record<ListItemButtonVariant, Record<string, Record<ListItemButtonColors, Record<string, string>>>>;
  }
}

const listItemButtonConfig: ListItemButtonConfig = {
  defaultProps: {
    variant: 'filled',
    size: 'md',
    color: 'default',
    selected: false,
    className: ''
  },
  styles: {
    base: {
      display: 'flex',
      gap: 'gap-2',
      alignItems: 'items-center',
      width: 'w-full',
      borderRadius: 'rounded-full',
      font: 'antialiased font-normal text-base font-sans',
      transition: 'transition-colors',
      focus: 'focus:outline-0',
      disabled: 'disabled:opacity-50 disabled:pointer-events-none disabled:select-none'
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
    selected: {
      filled: {
        default: {
          default: {
            fill: 'fill-default-text-dark',
            color: 'text-default-text-dark',
            background: 'bg-default-bg-dark/20'
          },
          primary: {
            fill: 'fill-default-primary',
            color: 'text-default-primary',
            background: 'bg-default-primary/20'
          },
          secondary: {
            fill: 'fill-default-secondary',
            color: 'text-default-secondary',
            background: 'bg-default-secondary/20'
          },
          success: {
            fill: 'fill-default-success',
            color: 'text-default-success',
            background: 'bg-default-success/20'
          },
          warning: {
            fill: 'fill-default-warning',
            color: 'text-default-warning',
            background: 'bg-default-warning/20'
          },
          error: {
            fill: 'fill-default-error',
            color: 'text-default-error',
            background: 'bg-default-error/20'
          }
        }
      },
      standard: {
        default: {
          default: {
            fill: 'fill-default-text-dark',
            color: 'text-default-text-dark'
          },
          primary: {
            fill: 'fill-default-primary',
            color: 'text-default-primary'
          },
          secondary: {
            fill: 'fill-default-secondary',
            color: 'text-default-secondary'
          },
          success: {
            fill: 'fill-default-success',
            color: 'text-default-success'
          },
          warning: {
            fill: 'fill-default-warning',
            color: 'text-default-warning'
          },
          error: {
            fill: 'fill-default-error',
            color: 'text-default-error'
          }
        }
      }
    },
    variants: {
      filled: {
        default: {
          default: {
            fill: 'fill-default-text',
            color: 'text-default-text',
            hover: 'hover:fill-default-text-dark hover:text-default-text-dark hover:bg-default-bg-dark/10',
            active: 'active:fill-default-text-dark active:text-default-text-dark active:bg-default-bg-dark/20',
            focus: 'focus:fill-default-text-dark focus:text-default-text-dark focus:bg-default-bg-dark/20'
          },
          primary: {
            fill: 'fill-default-text',
            color: 'text-default-text',
            hover: 'hover:fill-default-primary hover:text-default-primary hover:bg-default-primary/10',
            active: 'active:fill-default-primary active:text-default-primary active:bg-default-primary/20',
            focus: 'focus:fill-default-primary focus:text-default-primary focus:bg-default-primary/20'
          },
          secondary: {
            fill: 'fill-default-text',
            color: 'text-default-text',
            hover: 'hover:fill-default-secondary hover:text-default-secondary hover:bg-default-secondary/10',
            active: 'active:fill-default-secondary active:text-default-secondary active:bg-default-secondary/20',
            focus: 'focus:fill-default-secondary focus:text-default-secondary focus:bg-default-secondary/20'
          },
          success: {
            fill: 'fill-default-text',
            color: 'text-default-text',
            hover: 'hover:fill-default-success hover:text-default-success hover:bg-default-success/10',
            active: 'active:fill-default-success active:text-default-success active:bg-default-success/20',
            focus: 'focus:fill-default-success focus:text-default-success focus:bg-default-success/20'
          },
          warning: {
            fill: 'fill-default-text',
            color: 'text-default-text',
            hover: 'hover:fill-default-warning hover:text-default-warning hover:bg-default-warning/10',
            active: 'active:fill-default-warning active:text-default-warning active:bg-default-warning/20',
            focus: 'focus:fill-default-warning focus:text-default-warning focus:bg-default-warning/20'
          },
          error: {
            fill: 'fill-default-text',
            color: 'text-default-text',
            hover: 'hover:fill-default-error hover:text-default-error hover:bg-default-error/10',
            active: 'active:fill-default-error active:text-default-error active:bg-default-error/20',
            focus: 'focus:fill-default-error focus:text-default-error focus:bg-default-error/20'
          }
        }
      },
      standard: {
        default: {
          default: {
            fill: 'fill-default-text',
            color: 'text-default-text',
            hover: 'hover:fill-default-text-dark/70 hover:text-default-text-dark/70',
            active: 'active:fill-default-text-dark active:text-default-text-dark',
            focus: 'focus:fill-default-text-dark focus:text-default-text-dark'
          },
          primary: {
            fill: 'fill-default-text',
            color: 'text-default-text',
            hover: 'hover:fill-default-primary/70 hover:text-default-primary/70',
            active: 'active:fill-default-primary active:text-default-primary',
            focus: 'focus:fill-default-primary focus:text-default-primary'
          },
          secondary: {
            fill: 'fill-default-text',
            color: 'text-default-text',
            hover: 'hover:fill-default-secondary/70 hover:text-default-secondary/70',
            active: 'active:fill-default-secondary active:text-default-secondary',
            focus: 'focus:fill-default-secondary focus:text-default-secondary'
          },
          success: {
            fill: 'fill-default-text',
            color: 'text-default-text',
            hover: 'hover:fill-default-success/70 hover:text-default-success/70',
            active: 'active:fill-default-success active:text-default-success',
            focus: 'focus:fill-default-success focus:text-default-success'
          },
          warning: {
            fill: 'fill-default-text',
            color: 'text-default-text',
            hover: 'hover:fill-default-warning/70 hover:text-default-warning/70',
            active: 'active:fill-default-warning active:text-default-warning',
            focus: 'focus:fill-default-warning focus:text-default-warning'
          },
          error: {
            fill: 'fill-default-text',
            color: 'text-default-text',
            hover: 'hover:fill-default-error/70 hover:text-default-error/70',
            active: 'active:fill-default-error active:text-default-error',
            focus: 'focus:fill-default-error focus:text-default-error'
          }
        }
      }
    }
  }
};

export default listItemButtonConfig;

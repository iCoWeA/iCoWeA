import { type ListItemButtonVariants } from '../components/UI/ListItemButton';

export interface ListItemButtonConfig {
  defaultProps: {
    variant: ListItemButtonVariants;
    color: Colors;
    fullwidth: boolean;
    selected: boolean;
  };
  styles: {
    container: {
      base: Record<string, string>;
      fullwidth: Record<string, string>;
    },
    button: {
      base: Record<string, string>;
      fullwidth: Record<string, string>;
      selected: Record<ListItemButtonVariants, Record<string, Record<Colors, Record<string, string>>>>;
      variants: Record<ListItemButtonVariants, Record<Themes, Record<string, string>>>;
    }
  }
}

const listItemButtonConfig: ListItemButtonConfig = {
  defaultProps: {
    variant: 'filled',
    color: 'default',
    fullwidth: false,
    selected: false
  },
  styles: {
    container: {
      base: {
        display: 'flex',
        height: 'h-fit',
        width: 'w-full',
        padding: 'px-4'
      },
      fullwidth: {
        padding: 'p-0'
      }
    },
    button: {
      base: {
        display: 'flex',
        gap: 'gap-4',
        alignItems: 'items-center',
        height: 'min-h-[3.5rem]',
        width: 'w-full',
        padding: 'py-2 px-4',
        borderRadius: 'rounded-full',
        font: 'antialiased font-normal text-sm font-sans',
        transition: 'transition',
        hover: 'hover:bg-gradient-to-r',
        active: 'active:bg-gradient-to-r',
        focus: 'focus:outline-0',
        disabled: 'disabled:pointer-events-none disabled:select-none'
      },
      fullwidth: {
        borderRadius: 'rounded-none'
      },
      variants: {
        text: {
          light: {
            fill: 'fill-light-on-surface-variant',
            color: 'text-light-on-surface-variant',
            hover: 'hover:fill-light-on-surface hover:text-light-on-surface'
          }
        },
        filled: {
          light: {
            fill: 'fill-light-on-surface-variant',
            color: 'text-light-on-surface-variant',
            hover: 'hover:fill-light-on-surface hover:text-light-on-surface hover:from-light-on-surface/10 hover:to-light-on-surface/10',
            active: 'active:from-light-on-surface/[0.15] active:to-light-on-surface/[0.15]'
          }
        }
      },
      selected: {
        text: {
          light: {
            default: {
              fill: 'fill-light-on-surface',
              color: 'text-light-on-surface',
              hover: 'hover:fill-light-on-surface hover:text-light-on-surface'
            },
            primary: {
              fill: 'fill-light-primary',
              color: 'text-light-primary',
              hover: 'hover:fill-light-primary hover:text-light-primary'
            },
            secondary: {
              fill: 'fill-light-secondary',
              color: 'text-light-secondary',
              hover: 'hover:fill-light-secondary hover:text-light-secondary'
            },
            success: {
              fill: 'fill-light-success',
              color: 'text-light-success',
              hover: 'hover:fill-light-success hover:text-light-success'
            },
            warning: {
              fill: 'fill-light-warning',
              color: 'text-light-warning',
              hover: 'hover:fill-light-warning hover:text-light-warning'
            },
            error: {
              fill: 'fill-light-error',
              color: 'text-light-error',
              hover: 'hover:fill-light-error hover:text-light-error'
            }
          }
        },
        filled: {
          light: {
            default: {
              fill: 'fill-light-on-surface',
              color: 'text-light-on-surface',
              hover: 'hover:fill-light-on-surface hover:text-light-on-surface hover:from-light-on-surface/10 hover:to-light-on-surface/10',
              active: 'active:from-light-on-surface/[0.15] active:to-light-on-surface/[0.15]'
            },
            primary: {
              fill: 'fill-text-primary',
              color: 'text-light-primary',
              hover: 'hover:fill-light-primary hover:text-light-primary hover:from-light-primary/10 hover:to-light-primary/10',
              active: 'active:from-light-primary/[0.15] active:to-light-primary/[0.15]'
            },
            secondary: {
              fill: 'fill-text-secondary',
              color: 'text-light-secondary',
              hover: 'hover:fill-light-secondary hover:text-light-secondary hover:from-light-secondary/10 hover:to-light-secondary/10',
              active: 'active:from-light-secondary/[0.15] active:to-light-secondary/[0.15]'
            },
            success: {
              fill: 'fill-text-success',
              color: 'text-light-success',
              hover: 'hover:fill-light-success hover:text-light-success hover:from-light-success/10 hover:to-light-success/10',
              active: 'active:from-light-success/[0.15] active:to-light-success/[0.15]'
            },
            warning: {
              fill: 'fill-light-warning',
              color: 'text-light-warning',
              hover: 'hover:fill-light-warning hover:text-light-warning hover:from-light-warning/10 hover:to-light-warning/10',
              active: 'active:from-light-warning/[0.15] active:to-light-warning/[0.15]'
            },
            error: {
              fill: 'fill-light-error',
              color: 'text-light-error',
              hover: 'hover:fill-light-error hover:text-light-error hover:from-light-error/10 hover:to-light-error/10',
              active: 'active:from-light-error/[0.15] active:to-light-error/[0.15]'
            }
          }
        }
      }
    }
  }
};

export default listItemButtonConfig;

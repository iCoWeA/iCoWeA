import { type ChipVariants } from '../components/UI/Chip';

export interface ChipConfig {
  defaultProps: {
    variant: ChipVariants;
    borderShape: BorderShapes;
    color: Colors;
    closeButton: boolean;
    clickable: boolean;
    grabed: boolean;
  };
  styles: {
    container: {
      base: Record<string, string>;
      borderShapes: Record<BorderShapes, Record<string, string>>;
      variants: Record<ChipVariants, Record<Themes, Record<Colors, Record<string, string>>>>
    },
    startDecoratorContainer: {
      base: Record<string, string>;
    }
    bodyContainer: {
      base: Record<string, string>;
    },
    endDecoratorContainer: {
      base: Record<string, string>;
      closable: Record<string, string>;
    }
  }
}

const chipConfig: ChipConfig = {
  defaultProps: {
    variant: 'filled',
    borderShape: 'circular',
    color: 'primary',
    closeButton: false,
    clickable: false,
    grabed: false
  },
  styles: {
    container: {
      base: {
        position: 'relative',
        display: 'flex',
        width: 'w-fit',
        shadow: 'shadow-md shadow-black/50',
        overflow: 'overflow-hidden',
        transition: 'transition-colors',
        group: 'group'
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
      variants: {
        filled: {
          light: {
            default: {
              fill: 'fill-light-on-surface',
              color: 'text-light-on-surface',
              background: 'bg-light-surface-dark'
            },
            primary: {
              fill: 'fill-light-on-primary',
              color: 'text-light-on-primary',
              background: 'bg-light-primary'
            },
            secondary: {
              fill: 'fill-light-on-secondary',
              color: 'text-light-on-secondary',
              background: 'bg-light-secondary'
            },
            success: {
              fill: 'fill-light-on-success',
              color: 'text-light-on-success',
              background: 'bg-light-success'
            },
            warning: {
              fill: 'fill-light-on-warning',
              color: 'text-light-on-warning',
              background: 'bg-light-warning'
            },
            error: {
              fill: 'fill-light-on-error',
              color: 'text-light-on-error',
              background: 'bg-light-error'
            }
          }
        },
        ghost: {
          light: {
            default: {
              fill: 'fill-light-on-surface',
              color: 'text-light-on-surface',
              background: 'bg-light-surface'
            },
            primary: {
              fill: 'fill-light-primary',
              color: 'text-light-primary',
              background: 'bg-light-primary-light'
            },
            secondary: {
              fill: 'fill-light-secondary',
              color: 'text-light-secondary',
              background: 'bg-light-secondary-light'
            },
            success: {
              fill: 'fill-light-success',
              color: 'text-light-success',
              background: 'bg-light-success-light'
            },
            warning: {
              fill: 'fill-light-warning',
              color: 'text-light-warning',
              background: 'bg-light-warning-light'
            },
            error: {
              fill: 'fill-light-error',
              color: 'text-light-error',
              background: 'bg-light-error-light'
            }
          }
        },
        outlined: {
          light: {
            default: {
              border: 'border border-light-on-surface',
              fill: 'fill-light-on-surface',
              color: 'text-light-on-surface'
            },
            primary: {
              border: 'border border-light-primary',
              fill: 'fill-light-primary',
              color: 'text-light-primary'
            },
            secondary: {
              border: 'border border-light-secondary',
              fill: 'fill-light-secondary',
              color: 'text-light-secondary'
            },
            success: {
              border: 'border border-light-success',
              fill: 'fill-light-success',
              color: 'text-light-success'
            },
            warning: {
              border: 'border border-light-warning',
              fill: 'fill-light-warning',
              color: 'text-light-warning'
            },
            error: {
              border: 'border border-light-error',
              fill: 'fill-light-error',
              color: 'text-light-error'
            }
          }
        }
      }
    },
    startDecoratorContainer: {
      base: {
        display: 'flex',
        gap: 'gap-3',
        alignItems: 'items-center',
        height: 'h-8',
        padding: 'py-1.5 pl-3'
      }
    },
    bodyContainer: {
      base: {
        display: 'flex',
        flexDirection: 'flex-col',
        width: 'w-full',
        padding: 'py-1.5 px-3',
        font: 'antialiased font-normal text-sm font-sans'
      }
    },
    endDecoratorContainer: {
      base: {
        display: 'flex',
        gap: 'gap-1',
        alignItems: 'items-center',
        height: 'h-8',
        padding: 'py-1 pr-3'
      },
      closable: {
        padding: 'pr-2.5'
      }
    }
  }
};

export default chipConfig;

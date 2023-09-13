import { type AlertVariant } from '../components/UI/Alert';

export interface AlertConfig {
  defaultProps: {
    variant: AlertVariant;
    color: Colors;
    closeButton: boolean;
    open: boolean;
    closeOnAwayClick: boolean;
    unmountOnExit: boolean;
  };
  styles: {
    container: {
      base: Record<string, string>;
      open: Record<string, string>;
      positions: Record<InnerPositions, Record<string, string>>;
      variants: Record<AlertVariant, Record<Themes, Record<Colors, Record<string, string>>>>
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

const alertConfig: AlertConfig = {
  defaultProps: {
    variant: 'filled',
    color: 'error',
    closeButton: false,
    open: true,
    closeOnAwayClick: true,
    unmountOnExit: false
  },
  styles: {
    container: {
      base: {
        display: 'flex',
        width: 'w-full',
        borderRadius: 'rounded-xl',
        shadow: 'shadow-md shadow-black/50',
        opacity: 'opacity-0',
        transition: 'transition',
        transitionDuration: 'duration-500'
      },
      open: {
        opacity: 'opacity-100'
      },
      positions: {
        top: {
          position: 'fixed',
          top: 'top-6',
          left: 'left-2/4',
          translate: '-translate-x-2/4'
        },
        'top-left': {
          position: 'fixed',
          top: 'top-6',
          left: 'left-6'
        },
        'top-right': {
          position: 'fixed',
          top: 'top-6',
          right: 'right-6'
        },
        bottom: {
          position: 'fixed',
          bottom: 'bottom-6',
          left: 'left-2/4',
          translate: '-translate-x-2/4'
        },
        'bottom-left': {
          position: 'fixed',
          bottom: 'bottom-6',
          left: 'left-6'
        },
        'bottom-right': {
          position: 'fixed',
          bottom: 'bottom-6',
          right: 'right-6'
        },
        left: {
          position: 'fixed',
          top: 'top-2/4',
          left: 'left-6',
          translate: '-translate-y-2/4'
        },
        right: {
          position: 'fixed',
          top: 'top-2/4',
          right: 'right-6',
          translate: '-translate-y-2/4'
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
        },
        text: {
          light: {
            default: {
              fill: 'fill-light-on-surface',
              color: 'text-light-on-surface'
            },
            primary: {
              fill: 'fill-light-primary',
              color: 'text-light-primary'
            },
            secondary: {
              fill: 'fill-light-secondary',
              color: 'text-light-secondary'
            },
            success: {
              fill: 'fill-light-success',
              color: 'text-light-success'
            },
            warning: {
              fill: 'fill-light-warning',
              color: 'text-light-warning'
            },
            error: {
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
        gap: 'gap-4',
        alignItems: 'items-center',
        height: 'h-12',
        padding: 'py-3.5 pl-4'
      }
    },
    bodyContainer: {
      base: {
        display: 'flex',
        flexDirection: 'flex-col',
        width: 'w-full',
        padding: 'py-3.5 px-4',
        font: 'antialiased font-normal text-sm font-sans'
      }
    },
    endDecoratorContainer: {
      base: {
        display: 'flex',
        gap: 'gap-2',
        alignItems: 'items-center',
        height: 'h-12',
        padding: 'py-1 pr-4'
      },
      closable: {
        padding: 'pr-1.5'
      }
    }
  }
};

export default alertConfig;

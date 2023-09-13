import { type BaseHTMLAttributes } from 'react';
import { type AlertVariant } from '../components/UI/Alert';

export interface AlertConfig {
  defaultProps: {
    variant: AlertVariant;
    color: Colors;
    invisible: boolean;
    closable: boolean;
    startDecoratorContainerProps: BaseHTMLAttributes<HTMLDivElement>;
    bodyContainerProps: BaseHTMLAttributes<HTMLDivElement>;
    endDecoratorContainerProps: BaseHTMLAttributes<HTMLDivElement>;
  };
  styles: {
    container: {
      base: Record<string, string>;
      invisible: Record<string, string>;
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
    variant: 'solid',
    color: 'error',
    invisible: false,
    closable: false,
    startDecoratorContainerProps: {},
    bodyContainerProps: {},
    endDecoratorContainerProps: {}
  },
  styles: {
    container: {
      base: {
        display: 'flex',
        width: 'w-full',
        borderRadius: 'rounded-2xl',
        shadow: 'shadow-md shadow-black/50',
        opacity: 'opacity-100',
        transition: 'transition'
      },
      invisible: {
        opacity: 'opacity-0'
      },
      variants: {
        solid: {
          light: {
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
        soft: {
          light: {
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

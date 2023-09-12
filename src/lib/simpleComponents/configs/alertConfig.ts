import { type BaseHTMLAttributes } from 'react';
import { type AlertVariant } from '../components/UI/Alert';

export interface AlertConfig {
  defaultProps: {
    variant: AlertVariant;
    color: Colors;
    invisible: boolean;
    closable: boolean;
    iconContainerProps: BaseHTMLAttributes<HTMLDivElement>;
    bodyContainerProps: BaseHTMLAttributes<HTMLDivElement>;
    actionContainerProps: BaseHTMLAttributes<HTMLDivElement>;
  };
  styles: {
    container: {
      base: Record<string, string>;
      invisible: Record<string, string>;
      shadow: Record<Themes, Record<string, string>>;
      variants: Record<AlertVariant, Record<Themes, Record<Colors, Record<string, string>>>>
    },
    iconContainer: {
      base: Record<string, string>;
    }
    bodyContainer: {
      base: Record<string, string>;
    },
    actionContainer: {
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
    iconContainerProps: {},
    bodyContainerProps: {},
    actionContainerProps: {}
  },
  styles: {
    container: {
      base: {
        display: 'flex',
        width: 'w-full',
        borderRadius: 'rounded-2xl',
        opacity: 'opacity-100',
        transition: 'transition'
      },
      invisible: {
        opacity: 'opacity-100'
      },
      shadow: {
        light: {
          shadow: 'shadow-md shadow-light-shadow'
        }
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
              background: 'bg-light-primary-soft'
            },
            secondary: {
              fill: 'fill-light-secondary',
              color: 'text-light-secondary',
              background: 'bg-light-secondary-soft'
            },
            success: {
              fill: 'fill-light-success',
              color: 'text-light-success',
              background: 'bg-light-success-soft'
            },
            warning: {
              fill: 'fill-light-warning',
              color: 'text-light-warning',
              background: 'bg-light-warning-soft'
            },
            error: {
              fill: 'fill-light-error',
              color: 'text-light-error',
              background: 'bg-light-error-soft'
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
    iconContainer: {
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
    actionContainer: {
      base: {
        display: 'flex',
        gap: 'gap-2',
        alignItems: 'items-center',
        height: 'h-12',
        padding: 'py-1 pr-2'
      },
      closable: {
        padding: 'pr-1.5'
      }
    }
  }
};

export default alertConfig;

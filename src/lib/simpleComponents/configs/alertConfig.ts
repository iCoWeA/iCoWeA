import { type BaseHTMLAttributes } from 'react';
import { type IconProps } from '../components/UI/Icon/Icon';
import { type IconButtonProps } from '../components/UI/IconButton/IconButton';
import { type TransitionConfig } from '../hooks/useTransition';

export type AlertVariants = 'filled' | 'outlined' | 'ghost';

export interface AlertConfig {
  defaultProps: {
    open: boolean;
    variant: AlertVariants;
    color: Colors;
    shadow: boolean;
    iconContainerProps: BaseHTMLAttributes<HTMLDivElement>;
    bodyContainerProps: BaseHTMLAttributes<HTMLDivElement>;
    actionContainerProps: BaseHTMLAttributes<HTMLDivElement>;
    buttonProps: IconButtonProps;
    buttonIconProps: IconProps;
    transitionConfig: TransitionConfig;
  };
  styles: {
    container: {
      base: Record<string, string>;
      open: Record<string, string>;
      shadow: Record<string, Record<string, string>>;
      variants: Record<AlertVariants, Record<string, Record<Colors, Record<string, string>>>>
    },
    iconContainer: {
      base: Record<string, string>;
    }
    bodyContainer: {
      base: Record<string, string>;
      icon: Record<string, string>;
      action: Record<string, string>;
    },
    actionContainer: {
      base: Record<string, string>;
      button: Record<string, string>;
    },
    button: {
      variants: Record<AlertVariants, Record<string, string>>;
    }
  }
}

const alertConfig: AlertConfig = {
  defaultProps: {
    open: true,
    variant: 'filled',
    color: 'primary',
    shadow: true,
    iconContainerProps: {},
    bodyContainerProps: {},
    actionContainerProps: {},
    buttonProps: {},
    buttonIconProps: {},
    transitionConfig: {}
  },
  styles: {
    container: {
      base: {
        display: 'flex',
        width: 'w-full',
        borderRadius: 'rounded-xl',
        opacity: 'opacity-0',
        transition: 'transition',
        transitionDuration: 'duration-500'
      },
      open: {
        opacity: 'opacity-100'
      },
      shadow: {
        default: {
          shadow: 'shadow-md shadow-default-shadow'
        }
      },
      variants: {
        filled: {
          default: {
            default: {
              fill: 'fill-default-dark',
              color: 'text-default-dark',
              background: 'bg-default-default'
            },
            primary: {
              fill: 'fill-default-light',
              color: 'text-default-light',
              background: 'bg-default-primary'
            },
            secondary: {
              fill: 'fill-default-light',
              color: 'text-default-light',
              background: 'bg-default-secondary'
            },
            success: {
              fill: 'fill-default-light',
              color: 'text-default-light',
              background: 'bg-default-success'
            },
            warning: {
              fill: 'fill-default-dark',
              color: 'text-default-dark',
              background: 'bg-default-warning'
            },
            error: {
              fill: 'fill-default-light',
              color: 'text-default-light',
              background: 'bg-default-error'
            },
            light: {
              fill: 'fill-default-dark',
              color: 'text-default-dark',
              background: 'bg-default-light'
            },
            dark: {
              fill: 'fill-default-light',
              color: 'text-default-light',
              background: 'bg-default-dark'
            }
          }
        },
        outlined: {
          default: {
            default: {
              border: 'border border-default-default',
              fill: 'fill-default-default',
              color: 'text-default-default'
            },
            primary: {
              border: 'border border-default-primary',
              fill: 'fill-default-primary',
              color: 'text-default-primary'
            },
            secondary: {
              border: 'border border-default-secondary',
              fill: 'fill-default-secondary',
              color: 'text-default-secondary'
            },
            success: {
              border: 'border border-default-success',
              fill: 'fill-default-success',
              color: 'text-default-success'
            },
            warning: {
              border: 'border border-default-warning',
              fill: 'fill-default-warning',
              color: 'text-default-warning'
            },
            error: {
              border: 'border border-default-error',
              fill: 'fill-default-error',
              color: 'text-default-error'
            },
            light: {
              border: 'border border-default-light',
              fill: 'fill-default-light',
              color: 'text-default-light'
            },
            dark: {
              border: 'border border-default-dark',
              fill: 'fill-default-dark',
              color: 'text-default-dark'
            }
          }
        },
        ghost: {
          default: {
            default: {
              fill: 'fill-default-default',
              color: 'text-default-default',
              background: 'bg-default-default/50'
            },
            primary: {
              fill: 'fill-default-primary',
              color: 'text-default-primary',
              background: 'bg-default-primary/50'
            },
            secondary: {
              fill: 'fill-default-secondary',
              color: 'text-default-secondary',
              background: 'bg-default-secondary/50'
            },
            success: {
              fill: 'fill-default-success',
              color: 'text-default-success',
              background: 'bg-default-success/50'
            },
            warning: {
              fill: 'fill-default-warning',
              color: 'text-default-warning',
              background: 'bg-default-warning/50'
            },
            error: {
              fill: 'fill-default-error',
              color: 'text-default-error',
              background: 'bg-default-error/50'
            },
            light: {
              fill: 'fill-default-light',
              color: 'text-default-light',
              background: 'bg-default-light/50'
            },
            dark: {
              fill: 'fill-default-dark',
              color: 'text-default-dark',
              background: 'bg-default-dark/50'
            }
          }
        }
      }
    },
    iconContainer: {
      base: {
        display: 'flex',
        padding: 'py-3 pl-4 pr-3'
      }
    },
    bodyContainer: {
      base: {
        display: 'flex',
        flexDirection: 'flex-col',
        gap: 'gap-4',
        width: 'w-full',
        padding: 'py-3 px-4'
      },
      icon: {
        padding: 'pl-0'
      },
      action: {
        padding: 'pr-0'
      }
    },
    actionContainer: {
      base: {
        display: 'flex',
        gap: 'gap-1',
        padding: 'py-2 pl-3 pr-2'
      },
      button: {
        padding: 'pr-3'
      }
    },
    button: {
      variants: {
        filled: {
          default: 'dark',
          primary: 'light',
          secondary: 'light',
          success: 'light',
          warning: 'dark',
          error: 'light',
          light: 'dark',
          dark: 'light'
        },
        outlined: {
          default: 'default',
          primary: 'primary',
          secondary: 'secondary',
          success: 'success',
          warning: 'warning',
          error: 'error',
          light: 'light',
          dark: 'dark'
        },
        ghost: {
          default: 'dark',
          primary: 'light',
          secondary: 'light',
          success: 'light',
          warning: 'dark',
          error: 'light',
          light: 'dark',
          dark: 'light'
        }
      }
    }
  }
};

export default alertConfig;

import { type BaseHTMLAttributes } from 'react';
import { type IconProps } from '../components/UI/Icon/Icon';
import { type IconButtonProps } from '../components/UI/IconButton/IconButton';
import { type TransitionConfig } from '../hooks/useTransition';

export type AlertVariants = 'filled' | 'outlined' | 'tonal';

export interface AlertConfig {
  defaultProps: {
    open: boolean;
    variant: AlertVariants;
    color: Colors;
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
      variants: Record<AlertVariants, Record<Themes, Record<Colors, Record<string, string>>>>
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
        borderRadius: 'rounded',
        shadow: 'shadow-md shadow-black',
        opacity: 'opacity-0',
        transition: 'transition',
        transitionDuration: 'duration-500'
      },
      open: {
        opacity: 'opacity-100'
      },
      variants: {
        filled: {
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
        tonal: {
          light: {
            primary: {
              fill: 'fill-light-on-primary-container',
              color: 'text-light-on-primary-container',
              background: 'bg-light-primary-container'
            },
            secondary: {
              fill: 'fill-light-on-secondary-container',
              color: 'text-light-on-secondary-container',
              background: 'bg-light-secondary-container'
            },
            success: {
              fill: 'fill-light-on-success-container',
              color: 'text-light-on-success-container',
              background: 'bg-light-success-container'
            },
            warning: {
              fill: 'fill-light-on-warning-container',
              color: 'text-light-on-warning-container',
              background: 'bg-light-warning-container'
            },
            error: {
              fill: 'fill-light-on-error-container',
              color: 'text-light-on-error-container',
              background: 'bg-light-error-container'
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
        gap: 'gap-3',
        padding: 'py-2 pl-3 pr-2'
      },
      button: {
        padding: 'pr-3'
      }
    },
    button: {
      variants: {
        filled: {
          primary: 'light',
          secondary: 'light',
          success: 'light',
          warning: 'dark',
          error: 'light'
        },
        outlined: {
          primary: 'primary',
          secondary: 'secondary',
          success: 'success',
          warning: 'warning',
          error: 'error'
        },
        tonal: {
          primary: 'light',
          secondary: 'light',
          success: 'light',
          warning: 'dark',
          error: 'light'
        }
      }
    }
  }
};

export default alertConfig;

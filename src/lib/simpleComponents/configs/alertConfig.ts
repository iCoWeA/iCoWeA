import { type BaseHTMLAttributes } from 'react';
import { type IconProps } from '../components/UI/Icon/Icon';
import { type IconButtonProps } from '../components/UI/IconButton/IconButton';
import { type TransitionConfig } from '../hooks/useTransition';

export type AlertVariants = 'filled' | 'outlined' | 'tonal';

export interface AlertConfig {
  defaultProps: {
    open: boolean;
    variant: AlertVariants;
    color: ContainerColors;
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
      shadow: Record<Themes, Record<string, string>>;
      variants: Record<AlertVariants, Record<Themes, Record<ContainerColors, Record<string, string>>>>
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
        light: {
          shadow: 'shadow-md shadow-light-shadow'
        }
      },
      variants: {
        filled: {
          light: {
            primary: {
              fill: 'fill-light-primary-text',
              color: 'text-light-primary-text',
              background: 'bg-light-primary-container'
            },
            secondary: {
              fill: 'fill-light-secondary-text',
              color: 'text-light-secondary-text',
              background: 'bg-light-secondary-container'
            },
            success: {
              fill: 'fill-light-success-text',
              color: 'text-light-success-text',
              background: 'bg-light-success-container'
            },
            warning: {
              fill: 'fill-light-warning-text',
              color: 'text-light-warning-text',
              background: 'bg-light-warning-container'
            },
            error: {
              fill: 'fill-light-error-text',
              color: 'text-light-error-text',
              background: 'bg-light-error-container'
            },
            light: {
              fill: 'fill-light-light-text',
              color: 'text-light-light-text',
              background: 'bg-light-light-container'
            },
            dark: {
              fill: 'fill-light-dark-text',
              color: 'text-light-dark-text',
              background: 'bg-light-dark-container'
            }
          }
        },
        outlined: {
          light: {
            primary: {
              border: 'border border-light-primary-container',
              fill: 'fill-light-primary-container',
              color: 'text-light-primary-container'
            },
            secondary: {
              border: 'border border-light-secondary-container',
              fill: 'fill-light-secondary-container',
              color: 'text-light-secondary-container'
            },
            success: {
              border: 'border border-light-success-container',
              fill: 'fill-light-success-container',
              color: 'text-light-success-container'
            },
            warning: {
              border: 'border border-light-warning-container',
              fill: 'fill-light-warning-container',
              color: 'text-light-warning-container'
            },
            error: {
              border: 'border border-light-error-container',
              fill: 'fill-light-error-container',
              color: 'text-light-error-container'
            },
            light: {
              border: 'border border-light-light-container',
              fill: 'fill-light-light-container',
              color: 'text-light-light-container'
            },
            dark: {
              border: 'border border-light-dark-container',
              fill: 'fill-light-dark-container',
              color: 'text-light-dark-container'
            }
          }
        },
        tonal: {
          light: {
            primary: {
              fill: 'fill-light-primary-container',
              color: 'text-light-primary-container',
              background: 'bg-light-primary-tonal-container'
            },
            secondary: {
              fill: 'fill-light-secondary-container',
              color: 'text-light-secondary-container',
              background: 'bg-light-secondary-tonal-container'
            },
            success: {
              fill: 'fill-light-success-container',
              color: 'text-light-success-container',
              background: 'bg-light-success-tonal-container'
            },
            warning: {
              fill: 'fill-light-warning-container',
              color: 'text-light-warning-container',
              background: 'bg-light-warning-tonal-container'
            },
            error: {
              fill: 'fill-light-error-container',
              color: 'text-light-error-container',
              background: 'bg-light-error-tonal-container'
            },
            light: {
              fill: 'fill-light-light-container',
              color: 'text-light-light-container',
              background: 'bg-light-light-tonal-container'
            },
            dark: {
              fill: 'fill-light-dark-container',
              color: 'text-light-dark-container',
              background: 'bg-light-dark-tonal-container'
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
          primary: 'light',
          secondary: 'light',
          success: 'light',
          warning: 'dark',
          error: 'light',
          light: 'dark',
          dark: 'light'
        },
        outlined: {
          primary: 'primary',
          secondary: 'secondary',
          success: 'success',
          warning: 'warning',
          error: 'error',
          light: 'light',
          dark: 'dark'
        },
        tonal: {
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

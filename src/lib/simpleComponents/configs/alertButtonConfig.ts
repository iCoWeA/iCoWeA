import { type IconProps } from '../components/UI/Icon/Icon';

export interface AlertButtonConfig {
  defaultProps: {
    variant: ButtonVariants;
    color: Colors;
    iconProps: IconProps;
  },
  styles: {
    variants: Record<ButtonVariants, Record<Themes, Record<Colors, Record<string, string>>>>;
  }
}

const alertButtonConfig: AlertButtonConfig = {
  defaultProps: {
    variant: 'filled',
    color: 'error',
    iconProps: {}
  },
  styles: {
    variants: {
      filled: {
        light: {
          primary: {
            fill: 'fill-light-on-primary',
            color: 'text-light-on-primary'
          },
          secondary: {
            fill: 'fill-light-on-secondary',
            color: 'text-light-on-secondary'
          },
          success: {
            fill: 'fill-light-on-success',
            color: 'text-light-on-success'
          },
          warning: {
            fill: 'fill-light-on-warning',
            color: 'text-light-on-warning'
          },
          error: {
            fill: 'fill-light-on-error',
            color: 'text-light-on-error'
          }
        }
      },
      tonal: {
        light: {
          primary: {
            fill: 'fill-light-on-primary-container',
            color: 'text-light-on-primary-container'
          },
          secondary: {
            fill: 'fill-light-on-secondary-container',
            color: 'text-light-on-secondary-container'
          },
          success: {
            fill: 'fill-light-on-success-container',
            color: 'text-light-on-success-container'
          },
          warning: {
            fill: 'fill-light-on-warning-container',
            color: 'text-light-on-warning-container'
          },
          error: {
            fill: 'fill-light-on-error-container',
            color: 'text-light-on-error-container'
          }
        }
      },
      outlined: {
        light: {
          primary: {
            fill: 'fill-light-on-primary',
            color: 'text-light-on-primary'
          },
          secondary: {
            fill: 'fill-light-on-secondary',
            color: 'text-light-on-secondary'
          },
          success: {
            fill: 'fill-light-on-success',
            color: 'text-light-on-success'
          },
          warning: {
            fill: 'fill-light-on-warning',
            color: 'text-light-on-warning'
          },
          error: {
            fill: 'fill-light-on-error',
            color: 'text-light-on-error'
          }
        }
      },
      text: {
        light: {
          primary: {
            fill: 'fill-light-on-primary',
            color: 'text-light-on-primary'
          },
          secondary: {
            fill: 'fill-light-on-secondary',
            color: 'text-light-on-secondary'
          },
          success: {
            fill: 'fill-light-on-success',
            color: 'text-light-on-success'
          },
          warning: {
            fill: 'fill-light-on-warning',
            color: 'text-light-on-warning'
          },
          error: {
            fill: 'fill-light-on-error',
            color: 'text-light-on-error'
          }
        }
      }
    }
  }
};

export default alertButtonConfig;

import { type IconProps } from '../components/UI/Icon/Icon';

export interface AccordionHeaderConfig {
  defaultProps: {
    color: ContainerColors;
    iconProps: IconProps;
    type: 'button';
  };
  styles: {
    button: {
      base: Record<string, string>;
      divider: Record<string, Record<string, string>>;
      colors: Record<string, Record<ContainerColors, Record<string, string>>>
    },
    icon: {
      base: Record<string, string>;
      open: Record<string, string>;
    }
  }
}

const accordionHeaderConfig: AccordionHeaderConfig = {
  defaultProps: {
    color: 'default',
    iconProps: {},
    type: 'button'
  },
  styles: {
    button: {
      base: {
        display: 'flex',
        gap: 'gap-3',
        alignItems: 'items-center',
        width: 'w-full',
        padding: 'py-3',
        font: 'antialiased font-normal text-base font-sans',
        focus: 'focus:outline-0'
      },
      divider: {
        default: {
          border: 'border-b border-default-divider'
        }
      },
      colors: {
        default: {
          default: {
            fill: 'fill-default-dark-container',
            color: 'text-default-dark-container'
          },
          primary: {
            fill: 'fill-default-primary-container',
            color: 'text-default-primary-container'
          },
          secondary: {
            fill: 'fill-default-secondary-container',
            color: 'text-default-secondary-container'
          },
          success: {
            fill: 'fill-default-success-container',
            color: 'text-default-success-container'
          },
          warning: {
            fill: 'fill-default-warning-container',
            color: 'text-default-warning-container'
          },
          error: {
            fill: 'fill-default-error-container',
            color: 'text-default-error-container'
          },
          dark: {
            fill: 'fill-default-dark-container',
            color: 'text-default-dark-container'
          },
          light: {
            fill: 'fill-default-light-container',
            color: 'text-default-light-container'
          }
        }
      }
    },
    icon: {
      base: {
        margin: 'ml-auto',
        transition: 'transition',
        transitionDuration: 'duration-500'
      },
      open: {
        transform: 'rotate-180'
      }
    }
  }
};

export default accordionHeaderConfig;

import { type IconProps } from '../components/UI/Icon/Icon';

export interface AccordionHeaderConfig {
  defaultProps: {
    color: ContainerColors;
    iconProps: IconProps;
  };
  styles: {
    button: {
      base: Record<string, string>;
      divider: Record<Themes, Record<string, string>>;
      colors: Record<Themes, Record<ContainerColors, Record<string, string>>>
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
    iconProps: {}
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
        light: {
          border: 'border-b border-light-divider'
        }
      },
      colors: {
        light: {
          default: {
            fill: 'fill-light-dark-container',
            color: 'text-light-dark-container'
          },
          primary: {
            fill: 'fill-light-primary-container',
            color: 'text-light-primary-container'
          },
          secondary: {
            fill: 'fill-light-secondary-container',
            color: 'text-light-secondary-container'
          },
          success: {
            fill: 'fill-light-success-container',
            color: 'text-light-success-container'
          },
          warning: {
            fill: 'fill-light-warning-container',
            color: 'text-light-warning-container'
          },
          error: {
            fill: 'fill-light-error-container',
            color: 'text-light-error-container'
          },
          dark: {
            fill: 'fill-light-dark-container',
            color: 'text-light-dark-container'
          },
          light: {
            fill: 'fill-light-light-container',
            color: 'text-light-light-container'
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

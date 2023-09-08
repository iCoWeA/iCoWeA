import { type IconProps } from '../components/UI/Icon/Icon';

export interface AccordionHeaderConfig {
  defaultProps: {
    color: Colors;
    iconProps: IconProps;
    type: 'button';
  };
  styles: {
    button: {
      base: Record<string, string>;
      divider: Record<string, Record<string, string>>;
      colors: Record<string, Record<Colors, Record<string, string>>>
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
            fill: 'fill-default-default',
            color: 'text-default-default'
          },
          primary: {
            fill: 'fill-default-primary',
            color: 'text-default-primary'
          },
          secondary: {
            fill: 'fill-default-secondary',
            color: 'text-default-secondary'
          },
          success: {
            fill: 'fill-default-success',
            color: 'text-default-success'
          },
          warning: {
            fill: 'fill-default-warning',
            color: 'text-default-warning'
          },
          error: {
            fill: 'fill-default-error',
            color: 'text-default-error'
          },
          light: {
            fill: 'fill-default-light',
            color: 'text-default-light'
          },
          dark: {
            fill: 'fill-default-dark',
            color: 'text-default-dark'
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

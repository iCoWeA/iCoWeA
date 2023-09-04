import { type BaseHTMLAttributes } from 'react';
import { type IconProps } from '../components/UI/Icon/Icon';

export interface AccordionHeaderConfig {
  defaultProps: {
    color: Colors;
    disableIcon: boolean;
    iconProps: IconProps;
    iconContainerProps: BaseHTMLAttributes<HTMLDivElement>;
  };
  styles: {
    button: {
      base: Record<string, string>;
      colors: Record<string, Record<Colors, Record<string, string>>>
    },
    iconContainer: {
      base: Record<string, string>;
      open: Record<string, string>;
    }
  }
}

const accordionHeaderConfig: AccordionHeaderConfig = {
  defaultProps: {
    color: 'default',
    disableIcon: false,
    iconProps: {},
    iconContainerProps: {}
  },
  styles: {
    button: {
      base: {
        display: 'flex',
        gap: 'gap-2',
        alignItems: 'items-center',
        width: 'w-full',
        padding: 'py-4',
        font: 'antialiased font-normal text-base font-sans',
        transition: 'transition-colors',
        focus: 'focus:outline-0',
        disabled: 'disabled:opacity-50 disabled:pointer-events-none disabled:select-none'
      },
      colors: {
        default: {
          default: {
            fill: 'fill-default-default/70',
            color: 'text-default-default/70',
            hover: 'hover:text-default-default hover:fill-default-default',
            disabled: 'disabled:fill-default-default disabled:text-default-default'
          },
          primary: {
            fill: 'fill-default-primary/70',
            color: 'text-default-primary/70',
            hover: 'hover:text-default-primary hover:fill-default-primary',
            disabled: 'disabled:fill-default-primary disabled:text-default-primary'
          },
          secondary: {
            fill: 'fill-default-secondary/70',
            color: 'text-default-secondary/70',
            hover: 'hover:text-default-secondary hover:fill-default-secondary',
            disabled: 'disabled:fill-default-secondary disabled:text-default-secondary'
          },
          success: {
            fill: 'fill-default-success/70',
            color: 'text-default-success/70',
            hover: 'hover:text-default-success hover:fill-default-success',
            disabled: 'disabled:fill-default-success disabled:text-default-success'
          },
          warning: {
            fill: 'fill-default-warning/70',
            color: 'text-default-warning/70',
            hover: 'hover:text-default-warning hover:fill-default-warning',
            disabled: 'disabled:fill-default-warning disabled:text-default-warning'
          },
          error: {
            fill: 'fill-default-error/70',
            color: 'text-default-error/70',
            hover: 'hover:text-default-error hover:fill-default-error',
            disabled: 'disabled:fill-default-error disabled:text-default-error'
          },
          light: {
            fill: 'fill-default-light/70',
            color: 'text-default-light/70',
            hover: 'hover:text-default-light hover:fill-default-light',
            disabled: 'disabled:fill-default-light disabled:text-default-light'
          },
          dark: {
            fill: 'fill-default-dark/70',
            color: 'text-default-dark/70',
            hover: 'hover:text-default-dark hover:fill-default-dark',
            disabled: 'disabled:fill-default-dark disabled:text-default-dark'
          }
        }
      }
    },
    iconContainer: {
      base: {
        display: 'flex',
        margin: 'ml-auto',
        transition: 'transition-transform',
        focus: 'focus:outline-0'
      },
      open: {
        transform: 'rotate-180'
      }
    }
  }
};

export default accordionHeaderConfig;

import { type SVGAttributes } from 'react';

export type AccordionHeaderColors = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'light' | 'dark' | string;

export interface AccordionHeaderConfig {
  defaultProps: {
    color: AccordionHeaderColors;
    icon: boolean;
    componentsProps: {
      icon: SVGAttributes<SVGSVGElement>;
    };
  };
  styles: {
    root: {
      base: Record<string, string>;
      colors: Record<string, Record<AccordionHeaderColors, Record<string, string>>>
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
    icon: true,
    componentsProps: {
      icon: {}
    }
  },
  styles: {
    root: {
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
            fill: 'fill-default-text/70',
            color: 'text-default-text/70',
            hover: 'hover:text-default-text hover:fill-default-text',
            disabled: 'disabled:fill-default-text disabled:text-default-text'
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
            fill: 'fill-default-text-light/70',
            color: 'text-default-text-light/70',
            hover: 'hover:text-default-text-light hover:fill-default-text-light',
            disabled: 'disabled:fill-default-text-light disabled:text-default-text-light'
          },
          dark: {
            fill: 'fill-default-text-dark/70',
            color: 'text-default-text-dark/70',
            hover: 'hover:text-default-text-dark hover:fill-default-text-dark',
            disabled: 'disabled:fill-default-text-dark disabled:text-default-text-dark'
          }
        }
      }
    },
    icon: {
      base: {
        display: 'inline-block',
        margin: 'ml-auto',
        width: 'w-6',
        aspectRatio: 'aspect-square',
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

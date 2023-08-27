import { type ReactElement } from 'react';
import { type PopoverProps } from '../components/UI/Popover';
import { type PopoverPositions } from './popoverConfig';

export type MenuVariants = 'filled' | 'outlined';

export interface MenuConfig {
  defaultProps: {
    variant: MenuVariants;
    color: Colors;
    elevated: boolean;
    open?: boolean;
    position: PopoverPositions;
    overlayRef: Element | null;
    disableScrolling: boolean;
    handler?: ReactElement;
    rootProps: PopoverProps;
    className: string;
  };
  styles: {
    base: Record<string, string>;
    elevated: Record<string, Record<string, string>>;
    variants: Record<MenuVariants, Record<string, Record<Colors, Record<string, string>>>>;
  }
}

const menuConfig: MenuConfig = {
  defaultProps: {
    variant: 'outlined',
    color: 'default',
    elevated: false,
    position: 'bottom',
    overlayRef: null,
    disableScrolling: false,
    rootProps: {},
    className: ''
  },
  styles: {
    base: {
      display: 'flex',
      flexDirection: 'flex-col',
      borderRadius: 'rounded-2xl',
      overflow: 'overflow-hidden',
      focus: 'focus:outline-0'
    },
    elevated: {
      default: {
        shadow: 'shadow-md shadow-default-bg-dark/20'
      }
    },
    variants: {
      filled: {
        default: {
          default: {
            background: 'bg-default-default'
          },
          primary: {
            background: 'bg-default-primary'
          },
          secondary: {
            background: 'bg-default-secondary'
          },
          success: {
            background: 'bg-default-success'
          },
          warning: {
            background: 'bg-default-warning'
          },
          error: {
            background: 'bg-default-error'
          },
          light: {
            background: 'bg-default-light'
          },
          dark: {
            background: 'bg-default-dark'
          }
        }
      },
      outlined: {
        default: {
          default: {
            border: 'border border-default-default/20',
            background: 'bg-default-light'
          },
          primary: {
            border: 'border border-default-primary/20',
            background: 'bg-default-light'
          },
          secondary: {
            border: 'border border-default-secondary/20',
            background: 'bg-default-light'
          },
          success: {
            border: 'border border-default-success/20',
            background: 'bg-default-light'
          },
          warning: {
            border: 'border border-default-warning/20',
            background: 'bg-default-light'
          },
          error: {
            border: 'border border-default-error/20',
            background: 'bg-default-light'
          },
          light: {
            border: 'border border-default-light/20',
            background: 'bg-default-light'
          },
          dark: {
            border: 'border border-default-dark/20',
            background: 'bg-default-light'
          }
        }
      }
    }
  }
};

export default menuConfig;

import { type ReactElement } from 'react';
import { type PopoverProps } from '../components/UI/Popover';
import { type PopoverPositions } from './popoverConfig';

export type MenuVariants = 'filled' | 'outlined';
export type MenuColors = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | string;

export interface MenuConfig {
  defaultProps: {
    variant: MenuVariants;
    color: MenuColors;
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
    variants: Record<MenuVariants, Record<string, Record<MenuColors, Record<string, string>>>>;
  }
}

const menuConfig: MenuConfig = {
  defaultProps: {
    variant: 'filled',
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
            background: 'bg-default-bg'
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
          }
        }
      },
      outlined: {
        default: {
          default: {
            border: 'border border-default-bg-light'
          },
          primary: {
            border: 'border border-default-primary'
          },
          secondary: {
            border: 'border border-default-secondary'
          },
          success: {
            border: 'border border-default-success'
          },
          warning: {
            border: 'border border-default-warning'
          },
          error: {
            border: 'border border-default-error'
          }
        }
      }
    }
  }
};

export default menuConfig;

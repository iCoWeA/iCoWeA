import { type PopoverProps } from '../components/UI/refactor/Popover';
import { type PopoverPositions } from './popoverConfig';

export interface MenuConfig {
  defaultProps: {
    color: Colors;
    elevated: boolean;
    position: PopoverPositions;
    overlayRef: Element | null;
    lockScroll: boolean;
    popoverProps: PopoverProps;
  };
  styles: {
    base: Record<string, string>;
    elevated: Record<string, Record<string, string>>;
    colors: Record<string, Record<Colors, Record<string, string>>>;
  }
}

const menuConfig: MenuConfig = {
  defaultProps: {
    color: 'light',
    elevated: false,
    position: 'bottom',
    overlayRef: null,
    lockScroll: false,
    popoverProps: {}
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
        shadow: 'shadow-md shadow-default-default/80'
      }
    },
    colors: {
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
    }
  }
};

export default menuConfig;

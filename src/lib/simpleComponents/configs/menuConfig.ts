import { type PopoverProps } from '../components/UI/Popover/Popover';

export interface MenuConfig {
  defaultProps: {
    color: Colors;
    elevated: boolean;
    position: Positions;
    lockScroll: boolean;
    overlayRef: Element | null;
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
    lockScroll: false,
    overlayRef: null,
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

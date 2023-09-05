import { type BackdropProps } from '../components/UI/Backdrop/Backdrop';

export type DrawerPositions = 'top' | 'bottom' | 'left' | 'right';

export interface DrawerConfig {
  defaultProps: {
    open: boolean;
    position: DrawerPositions;
    color: Colors;
    lockScroll: boolean;
    transitionConfig: { enterDuration: number, exitDuration: number }
    overlayRef: Element | null;
    backdropProps: BackdropProps;
  };
  styles: {
    base: Record<string, string>;
    positions: Record<DrawerPositions, Record<string, string>>;
    open: Record<DrawerPositions, Record<string, string>>;
    colors: Record<string, Record<Colors, Record<string, string>>>;
  }
}

const drawerConfig: DrawerConfig = {
  defaultProps: {
    open: false,
    position: 'left',
    color: 'primary',
    lockScroll: true,
    transitionConfig: { enterDuration: 500, exitDuration: 500 },
    overlayRef: null,
    backdropProps: {}
  },
  styles: {
    base: {
      position: 'fixed',
      zIndex: 'z-60',
      display: 'flex',
      flexDirection: 'flex-col',
      transition: 'transition-[transform]'
    },
    positions: {
      top: {
        top: 'top-0',
        left: 'left-0',
        width: 'w-screen',
        translate: '-translate-y-full'
      },
      bottom: {
        bottom: 'bottom-0',
        left: 'left-0',
        width: 'w-screen',
        translate: 'translate-y-full'
      },
      left: {
        top: 'top-0',
        left: 'left-0',
        height: 'h-screen',
        translate: '-translate-x-full'
      },
      right: {
        top: 'top-0',
        right: 'right-0',
        height: 'h-screen',
        translate: '-translate-x-full'
      }
    },
    open: {
      top: {
        translate: 'translate-y-0'
      },
      bottom: {
        translate: 'translate-y-0'
      },
      left: {
        translate: 'translate-x-0'
      },
      right: {
        translate: 'translate-x-0'
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

export default drawerConfig;

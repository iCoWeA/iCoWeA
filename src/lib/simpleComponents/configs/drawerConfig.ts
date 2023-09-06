import { type BackdropProps } from '../components/UI/Backdrop/Backdrop';

export type DrawerPositions = 'top' | 'bottom' | 'left' | 'right';

export interface DrawerConfig {
  defaultProps: {
    open: boolean;
    position: DrawerPositions;
    color: Colors;
    lockScroll: boolean;
    overlayRef: Element | null;
    backdropProps: BackdropProps;
  };
  styles: {
    drawer: {
      base: Record<string, string>;
      positions: Record<DrawerPositions, Record<string, string>>;
      open: Record<DrawerPositions, Record<string, string>>;
      colors: Record<string, Record<Colors, Record<string, string>>>;
    },
    backdrop: {
      base: Record<string, string>;
    }
  }
}

const drawerConfig: DrawerConfig = {
  defaultProps: {
    open: false,
    position: 'left',
    color: 'primary',
    lockScroll: true,
    overlayRef: null,
    backdropProps: {}
  },
  styles: {
    drawer: {
      base: {
        position: 'fixed',
        zIndex: 'z-40',
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
    },
    backdrop: {
      base: {
        zIndex: 'z-30'
      }
    }
  }
};

export default drawerConfig;

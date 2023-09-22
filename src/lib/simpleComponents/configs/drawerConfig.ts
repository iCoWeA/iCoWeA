import { type DrawerVariants } from '../components/UI/Drawer';

export interface DrawerConfig {
  defaultProps: {
    variant: DrawerVariants;
    lockScroll: boolean;
    closeOnAwayClick: boolean;
    backdrop: boolean;
    overlayRef: Element | null;
    direction: Directions;
    open: boolean;
    unmountOnExit: boolean;
  };
  styles: {
    base: Record<string, string>;
    directions: Record<Directions, Record<string, string>>;
    variants: Record<DrawerVariants, Record<Themes, Record<string, string>>>;
  }
}

const drawerConfig: DrawerConfig = {
  defaultProps: {
    variant: 'plain',
    lockScroll: true,
    closeOnAwayClick: false,
    backdrop: true,
    overlayRef: null,
    direction: 'bottom',
    open: false,
    unmountOnExit: true
  },
  styles: {
    base: {
      position: 'fixed',
      zIndex: 'z-10',
      display: 'flex',
      flexDirection: 'flex-col'
    },
    directions: {
      top: {
        width: 'w-screen'
      },
      bottom: {
        width: 'w-screen'
      },
      left: {
        height: 'h-screen'
      },
      right: {
        height: 'h-screen'
      }
    },
    variants: {
      plain: {
        light: {
          background: 'bg-light-surface-low'
        }
      },
      filled: {
        light: {
          background: 'bg-light-surface'
        }
      }
    }
  }
};

export default drawerConfig;

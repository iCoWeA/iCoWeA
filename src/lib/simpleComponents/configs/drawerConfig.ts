import { type DrawerVariants } from '../components/UI/Drawer';

export interface DrawerConfig {
  defaultProps: {
    variant: DrawerVariants;
    direction: Directions;
    open: boolean;
    lockScroll: boolean;
    keepMounted: boolean;
    overlayRef: Element | null;
  };
  styles: {
    base: Record<string, string>;
    hide: Record<string, string>;
    directions: Record<Directions, Record<string, string>>;
    open: Record<Directions, Record<string, string>>;
    variants: Record<DrawerVariants, Record<Themes, Record<string, string>>>;
  }
}

const drawerConfig: DrawerConfig = {
  defaultProps: {
    variant: 'plain',
    direction: 'bottom',
    open: false,
    lockScroll: true,
    keepMounted: false,
    overlayRef: null
  },
  styles: {
    base: {
      position: 'fixed',
      zIndex: 'z-20',
      display: 'flex',
      flexDirection: 'flex-col',
      transition: 'transition-[transform]',
      transitionDuration: 'duration-500'
    },
    hide: {
      display: 'hidden'
    },
    directions: {
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
    variants: {
      plain: {
        light: {
          background: 'bg-light-surface-light'
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

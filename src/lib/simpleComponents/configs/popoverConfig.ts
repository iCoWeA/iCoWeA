import { type PopoverVariants } from '../components/UI/Popover';

export interface MenuConfig {
  defaultProps: {
    variant: PopoverVariants;
    position: OuterPositions;
    responsive: boolean;
    offset: number;
    lockScroll: boolean;
    closeOnAwayClick: boolean;
    backdrop: boolean;
    overlayRef: Element | null;
    open: boolean;
    unmountOnExit: boolean;
  };
  styles: {
    base: Record<string, string>;
    variants: Record<PopoverVariants, Record<Themes, Record<string, string>>>;
  }
}

const menuConfig: MenuConfig = {
  defaultProps: {
    variant: 'plain',
    position: 'bottom',
    responsive: true,
    offset: 0,
    lockScroll: true,
    closeOnAwayClick: true,
    backdrop: false,
    overlayRef: null,
    open: false,
    unmountOnExit: true
  },
  styles: {
    base: {
      position: 'absolute',
      zIndex: 'z-40',
      flexDirection: 'flex-col',
      borderRadius: 'rounded-xl'
    },
    variants: {
      plain: {
        light: {
          background: 'bg-light-surface-high'
        }
      },
      filled: {
        light: {
          background: 'bg-light-surface'
        }
      },
      outlined: {
        light: {
          border: 'border border-light-divider',
          background: 'bg-light-surface-low'
        }
      }
    }
  }
};

export default menuConfig;

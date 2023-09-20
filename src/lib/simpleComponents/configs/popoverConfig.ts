import { type PopoverVariants } from '../components/UI/Popover';

export interface MenuConfig {
  defaultProps: {
    variant: PopoverVariants;
    position: OuterPositions;
    responsive: boolean;
    offset: number;
    lockScroll: boolean;
    closeOnAwayClick: boolean;
    keepMounted: boolean;
    backdrop: boolean;
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
    lockScroll: false,
    closeOnAwayClick: true,
    keepMounted: false,
    backdrop: false
  },
  styles: {
    base: {
      position: 'absolute',
      zIndex: 'z-40',
      flexDirection: 'flex-col',
      shadow: 'shadow-md shadow-black/50'
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

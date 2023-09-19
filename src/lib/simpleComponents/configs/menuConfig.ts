import { type MenuVariants } from '../components/UI/Menu';

export interface MenuConfig {
  defaultProps: {
    variant?: MenuVariants;
    position?: OuterPositions;
    responsive?: boolean;
    offset?: number;
    lockScroll?: boolean;
    closeOnAwayClick?: boolean;
    keepMounted?: boolean;
    backdrop?: boolean;
  };
  styles: {
    base: Record<string, string>;
    variants: Record<MenuVariants, Record<Themes, Record<string, string>>>;
  }
}

const menuConfig: MenuConfig = {
  defaultProps: {
    variant: 'filled',
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
      display: 'flex',
      flexDirection: 'flex-col',
      borderRadius: 'rounded-xl',
      overflow: 'overflow-hidden'
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

import { type PopoverVariants } from '../components/UI/Popover';

export interface MenuConfig {
  defaultProps: {
    variant: PopoverVariants;
    position: OuterPositions;
    responsive: boolean;
    offset: number;
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
    offset: 0
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

import { type PopperVariants } from '../components/UI/Popper';

export interface PopperConfig {
  defaultProps: {
    variant: PopperVariants;
    open: boolean;
    lockScroll: boolean;
    closeOnAwayClick: boolean;
    keepMounted: boolean;
    backdrop: boolean;
  };
  styles: {
    base: Record<string, string>;
    hide: Record<string, string>;
    open: Record<string, string>;
    variants: Record<PopperVariants, Record<Themes, Record<string, string>>>;
  }
}

const popperConfig: PopperConfig = {
  defaultProps: {
    variant: 'plain',
    open: false,
    lockScroll: false,
    closeOnAwayClick: true,
    keepMounted: false,
    backdrop: false
  },
  styles: {
    base: {
      position: 'absolute',
      display: 'flex',
      flexDirection: 'flex-col',
      borderRadius: 'rounded-xl',
      opacity: 'opacity-0',
      transition: 'transition-all',
      transitionDuration: 'duration-500'
    },
    hide: {
      display: 'hidden'
    },
    open: {
      opacity: 'opacity-100'
    },
    variants: {
      plain: {
        light: {
          fill: 'fill-light-on-suface',
          color: 'text-light-on-surface',
          background: 'bg-light-surface-low'
        }
      },
      filled: {
        light: {
          fill: 'fill-light-on-suface',
          color: 'text-light-on-surface',
          background: 'bg-light-surface'
        }
      },
      outlined: {
        light: {
          fill: 'fill-light-on-suface',
          color: 'text-light-on-surface',
          border: 'border border-light-divider',
          background: 'bg-light-surface-low'
        }
      }
    }
  }
};

export default popperConfig;

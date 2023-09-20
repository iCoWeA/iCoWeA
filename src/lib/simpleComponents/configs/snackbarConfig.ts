import { type SnackbarVariants } from '../components/UI/Snackbar';

export interface SnackbarConfig {
  styles: {
    base: Record<string, string>;
    empty: Record<string, string>;
    positions: Record<InnerPositions, Record<string, string>>;
    variants: Record<SnackbarVariants, Record<Themes, Record<string, string>>>;
  }
  defaultProps: {
    position: InnerPositions;
    lockScroll: boolean;
    closeOnAwayClick: boolean;
    keepMounted: boolean;
    backdrop: boolean;
  };
}

const snackbarConfig: SnackbarConfig = {
  defaultProps: {
    position: 'bottom-left',
    lockScroll: false,
    closeOnAwayClick: true,
    keepMounted: false,
    backdrop: false
  },
  styles: {
    base: {
      position: 'fixed',
      zIndex: 'z-20'
    },
    empty: {
      gap: 'gap-4',
      padding: 'py-3.5 px-4',
      font: 'antialiased font-normal text-sm font-sans'
    },
    positions: {
      top: {
        top: 'top-6',
        left: 'left-2/4',
        translate: '-translate-x-2/4'
      },
      'top-left': {
        top: 'top-6',
        left: 'left-6'
      },
      'top-right': {
        top: 'top-6',
        right: 'right-6'
      },
      bottom: {
        bottom: 'bottom-6',
        left: 'left-2/4',
        translate: '-translate-x-2/4'
      },
      'bottom-left': {
        bottom: 'bottom-6',
        left: 'left-6'
      },
      'bottom-right': {
        bottom: 'bottom-6',
        right: 'right-6'
      },
      left: {
        top: 'top-2/4',
        left: 'left-6',
        translate: '-translate-y-2/4'
      },
      right: {
        top: 'top-2/4',
        right: 'right-6',
        translate: '-translate-y-2/4'
      }
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

export default snackbarConfig;

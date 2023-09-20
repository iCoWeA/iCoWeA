import { type PopperVariants } from '../components/UI/Popper';

export interface SnackbarConfig {
  styles: {
    base: Record<string, string>;
    positions: Record<InnerPositions, Record<string, string>>;
  }
  defaultProps: {
    variant: PopperVariants;
    position: InnerPositions;
    lockScroll: boolean;
    closeOnAwayClick: boolean;
    keepMounted: boolean;
    backdrop: boolean;
    overlayRef: Element | null;
  };
}

const snackbarConfig: SnackbarConfig = {
  defaultProps: {
    variant: 'plain',
    position: 'bottom-left',
    lockScroll: false,
    closeOnAwayClick: true,
    keepMounted: false,
    backdrop: false,
    overlayRef: null
  },
  styles: {
    base: {
      position: 'fixed',
      zIndex: 'z-20'
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
    }
  }
};

export default snackbarConfig;

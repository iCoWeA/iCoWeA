import { type BackdropProps } from '../components/UI/Backdrop/Backdrop';

export interface PopoverConfig {
  defaultProps: {
    position: Positions;
    gap: number;
    responsive: boolean;
    lockScroll: boolean;
    unmountOnExit: boolean;
    backdrop: boolean;
    overlayRef: Element | null;
    backdropProps: BackdropProps;
  };
  styles: {
    popover: {
      base: Record<string, string>;
      open: Record<string, string>;
    },
    backdrop: {
      base: Record<string, string>;
    }
  }
}

const popoverConfig: PopoverConfig = {
  defaultProps: {
    position: 'bottom',
    gap: 1,
    responsive: true,
    lockScroll: false,
    unmountOnExit: true,
    backdrop: false,
    overlayRef: null,
    backdropProps: {}
  },
  styles: {
    popover: {
      base: {
        position: 'absolute',
        zIndex: 'z-[80]',
        display: 'block',
        opacity: 'opacity-0',
        transition: 'transition-[opacity]'
      },
      open: {
        opacity: 'opacity-100'
      }
    },
    backdrop: {
      base: {
        zIndex: 'z-[70]'
      }
    }
  }
};

export default popoverConfig;

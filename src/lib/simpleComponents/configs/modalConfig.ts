import { type BackdropProps } from '../components/UI/Backdrop/Backdrop';

export interface ModalConfig {
  defaultProps: {
    open: boolean;
    lockScroll: boolean;
    transitionConfig: { enterDuration: number, exitDuration: number }
    overlayRef: Element | null;
    backdropProps: BackdropProps;
  };
  styles: {
    modal: {
      base: Record<string, string>;
      open: Record<string, string>;
    },
    backdrop: {
      base: Record<string, string>;
    }
  }
}

const modalConfig: ModalConfig = {
  defaultProps: {
    open: false,
    lockScroll: true,
    transitionConfig: { enterDuration: 500, exitDuration: 500 },
    overlayRef: null,
    backdropProps: {}
  },
  styles: {
    modal: {
      base: {
        position: 'fixed',
        top: 'top-2/4',
        left: 'left-2/4',
        transform: '-translate-y-2/4 -translate-x-2/4',
        zIndex: 'z-[60]',
        display: 'flex',
        flexDirection: 'flex-col',
        opacity: 'opacity-0',
        transition: 'transition-[opacity]'
      },
      open: {
        opacity: 'opacity-100'
      }
    },
    backdrop: {
      base: {
        zIndex: 'z-50'
      }
    }
  }
};

export default modalConfig;

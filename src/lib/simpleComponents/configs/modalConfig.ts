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
    base: Record<string, string>;
    open: Record<string, string>;
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
    base: {
      position: 'fixed',
      zIndex: 'z-70',
      display: 'flex',
      flexDirection: 'flex-col',
      opacity: 'opacity-0',
      transition: 'transition-[opacity]'
    },
    open: {
      opacity: 'opacity-100'
    }
  }
};

export default modalConfig;

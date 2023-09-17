export interface ModalConfig {
  defaultProps: {
    open: boolean;
    lockScroll: boolean;
    keepMounted: boolean;
    overlayRef: Element | null;
  };
  styles: {
    base: Record<string, string>;
    hide: Record<string, string>;
    open: Record<string, string>;
  }
}

const modalConfig: ModalConfig = {
  defaultProps: {
    open: false,
    lockScroll: true,
    keepMounted: false,
    overlayRef: null
  },
  styles: {
    base: {
      position: 'fixed',
      top: 'top-2/4',
      left: 'left-2/4',
      translate: '-translate-x-2/4 -translate-y-2/4',
      zIndex: 'z-30',
      display: 'block',
      opacity: 'opacity-0',
      transition: 'transition-[opacity]',
      transitionDuration: 'duration-500'
    },
    hide: {
      display: 'hidden'
    },
    open: {
      opacity: 'opacity-100'
    }
  }
};

export default modalConfig;

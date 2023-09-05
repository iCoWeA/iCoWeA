export interface PopoverConfig {
  defaultProps: {
    position: Positions;
    gap: number;
    responsive: boolean;
    lockScroll: boolean;
    unmountOnExit: boolean;
    backdrop: boolean;
    transitionConfig: {
      enterDuration: number,
      exitDuration: number
    };
    overlayRef: Element | null;
    backdropProps: {
      invisible: boolean;
    }
  };
  styles: {
    base: Record<string, string>;
    open: Record<string, string>;
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
    transitionConfig: {
      enterDuration: 500,
      exitDuration: 500
    },
    overlayRef: null,
    backdropProps: {
      invisible: true
    }
  },
  styles: {
    base: {
      position: 'absolute',
      zIndex: 'z-90',
      display: 'block',
      opacity: 'opacity-0',
      transition: 'transition-[opacity]'
    },
    open: {
      opacity: 'opacity-100'
    }
  }
};

export default popoverConfig;

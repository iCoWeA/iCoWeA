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
  }
}

const popoverConfig: PopoverConfig = {
  defaultProps: {
    position: 'bottom',
    gap: 1,
    responsive: true,
    overlayRef: null,
    lockScroll: false,
    unmountOnExit: true,
    transitionConfig: {
      enterDuration: 500,
      exitDuration: 500
    },
    backdrop: false,
    backdropProps: {
      invisible: true
    }
  },
  styles: {
    base: {
      position: 'absolute',
      display: 'block',
      transition: 'transition-[opacity]',
      focus: 'focus:outline-0'
    }
  }
};

export default popoverConfig;

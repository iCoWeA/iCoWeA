export interface PopperConfig {
  defaultProps: {
    open: boolean;
    position: OuterPositions;
    offset: number;
    responsive: boolean;
    lockScroll: boolean;
    closeOnAwayClick: boolean;
    keepMounted: boolean;
    overlayRef: Element | null;
  };
  styles: {
    base: Record<string, string>;
    hide: Record<string, string>;
    open: Record<string, string>;
  }
}

const popperConfig: PopperConfig = {
  defaultProps: {
    open: false,
    position: 'bottom',
    offset: 0,
    responsive: true,
    lockScroll: false,
    closeOnAwayClick: true,
    keepMounted: false,
    overlayRef: null
  },
  styles: {
    base: {
      position: 'absolute',
      zIndex: 'z-40',
      display: 'block',
      height: 'h-fit',
      width: 'w-fit',
      opacity: 'opacity-0',
      transition: 'transition-all',
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

export default popperConfig;

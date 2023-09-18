export interface PopoverConfig {
  defaultProps: {
    position: OuterPositions;
    responsive: boolean;
    offset: number;
    lockScroll: boolean;
    closeOnAwayClick: boolean;
    keepMounted: boolean;
    backdrop: boolean;
    overlayRef: Element | null;
  },
  styles: {
    base: Record<string, string>;
  }
}

const popoverConfig: PopoverConfig = {
  defaultProps: {
    position: 'bottom',
    responsive: true,
    offset: 0,
    lockScroll: false,
    closeOnAwayClick: true,
    keepMounted: false,
    backdrop: false,
    overlayRef: null
  },
  styles: {
    base: {
      position: 'absolute',
      zIndex: 'z-40'
    }
  }
};

export default popoverConfig;

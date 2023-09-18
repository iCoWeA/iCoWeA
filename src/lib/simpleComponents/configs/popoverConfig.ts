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
  };
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
  }
};

export default popoverConfig;

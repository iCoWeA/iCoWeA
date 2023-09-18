export interface PopoverConfig {
  defaultProps: {
    position: OuterPositions;
    responsive: boolean;
    offset: number;
    lockScroll: boolean;
    closeOnAwayClick: boolean;
    keepMounted: boolean;
    backdrop: boolean;
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
    backdrop: false
  },
  styles: {
    base: {
      position: 'absolute',
      zIndex: 'z-40'
    }
  }
};

export default popoverConfig;

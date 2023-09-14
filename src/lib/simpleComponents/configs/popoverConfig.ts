export interface PopoverConfig {
  defaultProps: {
    position: OuterPositions;
    responsive: boolean;
    offset: number;
    lockScroll: boolean;
    closeOnAwayClick: boolean;
    unmountOnExit: boolean;
    backdrop: boolean;
  };
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
    unmountOnExit: true,
    backdrop: false
  },
  styles: {
    base: {
      position: 'absolute',
      display: 'block',
      height: 'h-fit',
      width: 'w-fit',
      opacity: 'opacity-0',
      transition: 'transition-[opacity]',
      transitionDuration: 'duration-500'
    }
  }
};

export default popoverConfig;

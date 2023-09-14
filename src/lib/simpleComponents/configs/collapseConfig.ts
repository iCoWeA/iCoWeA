export interface CollapseConfig {
  defaultProps: {
    direction: Directions;
    open: boolean;
    closeOnAwayClick: boolean;
    unmountOnExit: boolean;
  };
  styles: {
    base: Record<string, string>;
  }
}

const collapseConfig: CollapseConfig = {
  defaultProps: {
    direction: 'vertical',
    open: false,
    closeOnAwayClick: false,
    unmountOnExit: true
  },
  styles: {
    base: {
      display: 'block',
      height: 'h-0',
      width: 'w-0',
      overflow: 'overflow-hidden',
      transition: 'transition-[height]',
      transitionDuration: 'duration-500'
    }
  }
};

export default collapseConfig;

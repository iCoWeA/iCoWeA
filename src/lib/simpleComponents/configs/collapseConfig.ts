export interface CollapseConfig {
  defaultProps: {
    direction: Directions;
    open: boolean;
    fit: boolean;
    closeOnAwayClick: boolean;
    unmountOnExit: boolean;
  };
  styles: {
    base: Record<string, string>;
    directions: Record<Directions, Record<string, string>>;
  }
}

const collapseConfig: CollapseConfig = {
  defaultProps: {
    direction: 'vertical',
    open: false,
    fit: false,
    closeOnAwayClick: false,
    unmountOnExit: true
  },
  styles: {
    base: {
      display: 'block',
      overflow: 'overflow-hidden',
      transitionDuration: 'duration-500'
    },
    directions: {
      vertical: {
        height: 'h-0',
        width: 'w-fit',
        transition: 'transition-[height]'
      },
      horizontal: {
        height: 'h-fit',
        width: 'w-0',
        transition: 'transition-[width]'
      }
    }
  }
};

export default collapseConfig;

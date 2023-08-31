export interface CollapseConfig {
  defaultProps: {
    open: boolean;
    unmountOnExit: boolean;
    transitionConfig: {
      enterDuration: number,
      exitDuration: number
    };
  };
  styles: {
    base: Record<string, string>;
  }
}

const collapseConfig: CollapseConfig = {
  defaultProps: {
    open: false,
    unmountOnExit: false,
    transitionConfig: {
      enterDuration: 500,
      exitDuration: 500
    }
  },
  styles: {
    base: {
      display: 'block',
      overflow: 'overflow-hidden',
      transition: 'transition-[height]',
      focus: 'focus:outline-0'
    }
  }
};

export default collapseConfig;

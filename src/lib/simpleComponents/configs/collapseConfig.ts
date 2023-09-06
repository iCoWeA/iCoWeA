export interface CollapseConfig {
  defaultProps: {
    open: boolean;
    unmountOnExit: boolean;
  };
  styles: {
    base: Record<string, string>;
  }
}

const collapseConfig: CollapseConfig = {
  defaultProps: {
    open: false,
    unmountOnExit: false
  },
  styles: {
    base: {
      display: 'block',
      overflow: 'overflow-hidden',
      transition: 'transition-[height]'
    }
  }
};

export default collapseConfig;

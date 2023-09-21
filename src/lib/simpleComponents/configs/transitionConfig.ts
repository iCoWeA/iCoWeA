export interface TransitionConfig {
  defaultProps: {
    open: boolean;
    keepMounted: boolean;
  };
  styles: {
    base: Record<string, string>;
    hide: Record<string, string>;
  }
}

const transitionConfig: TransitionConfig = {
  defaultProps: {
    open: false,
    keepMounted: true
  },
  styles: {
    base: {
      display: 'block',
      height: 'h-fit',
      width: 'w-fit',
      transition: 'transition-all',
      transitionDuration: 'duration-500'
    },
    hide: {
      display: 'hidden'
    }
  }
};

export default transitionConfig;

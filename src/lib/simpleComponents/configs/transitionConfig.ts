export interface TransitionConfig {
  defaultProps: {
    open: boolean;
    unmountOnExit: boolean;
  };
  styles: {
    base: Record<string, string>;
    hide: Record<string, string>;
  }
}

const transitionConfig: TransitionConfig = {
  defaultProps: {
    open: false,
    unmountOnExit: false
  },
  styles: {
    base: {
      display: 'block',
      height: 'h-fit',
      width: 'w-fit',
      transitionDuration: 'duration-[5000ms]'
    },
    hide: {
      display: 'hidden'
    }
  }
};

export default transitionConfig;

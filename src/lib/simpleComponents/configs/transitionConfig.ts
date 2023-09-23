export interface TransitionConfig {
  defaultProps: {
    open: boolean;
    unmountOnExit: boolean;
    fade: boolean;
    grow: boolean;
    slide: boolean;
    collapse: boolean;
    direction: Directions;
  };
  styles: {
    base: Record<string, string>;
    hide: Record<string, string>;
  }
}

const transitionConfig: TransitionConfig = {
  defaultProps: {
    open: false,
    unmountOnExit: false,
    fade: true,
    grow: false,
    slide: false,
    collapse: false,
    direction: 'bottom'
  },
  styles: {
    base: {
      display: 'block',
      height: 'h-fit',
      width: 'w-fit',
      transition: 'transition-all',
      transitionDuration: 'duration-[5000ms]'
    },
    hide: {
      display: 'hidden'
    }
  }
};

export default transitionConfig;

export interface TransitionConfig {
  defaultProps: {
    open: boolean;
    unmountOnExit: boolean;
    fade: boolean;
    grow: boolean;
  };
  styles: {
    base: Record<string, string>;
    hide: Record<string, string>;
    slide: Record<string, string>;
    positions: Record<Directions, Record<string, string>>;
  }
}

const transitionConfig: TransitionConfig = {
  defaultProps: {
    open: false,
    unmountOnExit: false,
    fade: false,
    grow: false
  },
  styles: {
    base: {
      display: 'block',
      height: 'h-fit',
      width: 'w-fit',
      overflow: 'overflow-hidden',
      transition: 'transition-all',
      transitionDuration: 'duration-[5000ms]'
    },
    hide: {
      display: 'hidden'
    },
    slide: {
      position: 'absolute'
    },
    positions: {
      top: {
        top: 'top-0',
        left: 'left-2/4'
      },
      bottom: {
        bottom: 'top-full',
        left: 'left-2/4'
      },
      left: {
        top: 'top-2/4',
        left: 'left-0'
      },
      right: {
        top: 'top-2/4',
        right: 'left-full'
      }
    }
  }
};

export default transitionConfig;

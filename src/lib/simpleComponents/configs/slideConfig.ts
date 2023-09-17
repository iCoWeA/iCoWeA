export interface SlideConfig {
  defaultProps: {
    direction: Directions;
    open: boolean;
    keepMounted: boolean;
  };
  styles: {
    base: Record<string, string>;
    hide: Record<string, string>;
    directions: Record<Directions, Record<string, string>>;
    open: Record<Directions, Record<string, string>>;
  }
}

const slideConfig: SlideConfig = {
  defaultProps: {
    direction: 'bottom',
    open: false,
    keepMounted: false
  },
  styles: {
    base: {
      position: 'absolute',
      display: 'block',
      height: 'h-fit',
      width: 'w-fit',
      transition: 'transition',
      transitionDuration: 'duration-500'
    },
    hide: {
      display: 'hidden'
    },
    directions: {
      top: {
        top: 'top-0',
        left: 'left-2/4',
        translate: '-translate-y-full -translate-x-2/4'
      },
      bottom: {
        bottom: 'bottom-0',
        left: 'left-2/4',
        translate: 'translate-y-full -translate-x-2/4'
      },
      left: {
        top: 'top-2/4',
        left: 'left-0',
        translate: '-translate-y-2/4 -translate-x-full'
      },
      right: {
        top: 'top-2/4',
        right: 'right-0',
        translate: '-translate-y-2/4 translate-x-full'
      }
    },
    open: {
      top: {
        translate: 'translate-y-0'
      },
      bottom: {
        translate: 'translate-y-0'
      },
      left: {
        translate: '-translate-x-0'
      },
      right: {
        translate: 'translate-x-0'
      }
    }
  }
};

export default slideConfig;

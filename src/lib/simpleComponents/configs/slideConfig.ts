export interface SlideConfig {
  defaultProps: {
    direction: Directions;
  };
  styles: {
    base: Record<string, string>;
    directions: Record<Directions, Record<string, string>>;
    open: Record<Directions, Record<string, string>>;
  }
}

const slideConfig: SlideConfig = {
  defaultProps: {
    direction: 'bottom'
  },
  styles: {
    base: {
      position: 'absolute',
      transition: 'transition-all'
    },
    directions: {
      top: {
        top: 'top-0',
        left: 'left-2/4',
        translate: '-translate-y-full -translate-x-2/4'
      },
      bottom: {
        bottom: 'top-full',
        left: 'left-2/4',
        translate: '-translate-x-2/4'
      },
      left: {
        top: 'top-2/4',
        left: 'left-0',
        translate: '-translate-y-2/4 -translate-x-full'
      },
      right: {
        top: 'top-2/4',
        right: 'left-full',
        translate: '-translate-y-2/4'
      }
    },
    open: {
      top: {
        translate: 'translate-y-0'
      },
      bottom: {
        translate: '-translate-y-full'
      },
      left: {
        translate: 'translate-x-0'
      },
      right: {
        test: '-translate-x-full'
      }
    }
  }
};

export default slideConfig;

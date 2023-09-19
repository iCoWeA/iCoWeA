export interface PopperConfig {
  defaultProps: {
    open: boolean;
    lockScroll: boolean;
    closeOnAwayClick: boolean;
    keepMounted: boolean;
    backdrop: boolean;
  };
  styles: {
    base: Record<string, string>;
    hide: Record<string, string>;
    open: Record<string, string>;
  }
}

const popperConfig: PopperConfig = {
  defaultProps: {
    open: false,
    lockScroll: false,
    closeOnAwayClick: true,
    keepMounted: false,
    backdrop: false
  },
  styles: {
    base: {
      display: 'block',
      height: 'h-fit',
      width: 'w-fit',
      opacity: 'opacity-0',
      transition: 'transition-all',
      transitionDuration: 'duration-500'
    },
    hide: {
      display: 'hidden'
    },
    open: {
      opacity: 'opacity-100'
    }
  }
};

export default popperConfig;

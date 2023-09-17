export interface FadeConfig {
  defaultProps: {
    open: boolean;
    keepMounted: boolean;
  };
  styles: {
    base: Record<string, string>;
    hide: Record<string, string>;
    open: Record<string, string>;
  }
}

const fadeConfig: FadeConfig = {
  defaultProps: {
    open: false,
    keepMounted: false
  },
  styles: {
    base: {
      display: 'block',
      height: 'h-fit',
      width: 'w-fit',
      opacity: 'opacity-0',
      transition: 'transition-[opacity]',
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

export default fadeConfig;

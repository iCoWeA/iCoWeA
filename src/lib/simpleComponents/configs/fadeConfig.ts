export interface FadeConfig {
  defaultProps: {
    open: boolean;
    keepMounted: boolean;
  };
  styles: {
    base: Record<string, string>;
  }
}

const fadeConfig: FadeConfig = {
  defaultProps: {
    open: false,
    keepMounted: true
  },
  styles: {
    base: {
      display: 'block',
      height: 'h-fit',
      width: 'w-fit',
      opacity: 'opacity-0',
      transition: 'transition-[opacity]',
      transitionDuration: 'duration-500'
    }
  }
};

export default fadeConfig;

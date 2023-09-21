export interface FadeConfig {
  defaultProps: {
    open: boolean;
    keepMounted: boolean;
  };
  styles: {
    base: Record<string, string>;
    open: Record<string, string>;
  }
}

const fadeConfig: FadeConfig = {
  defaultProps: {
    open: false,
    keepMounted: true
  },
  styles: {
    base: {
      opacity: 'opacity-0',
      transition: 'transition-[opacity]'
    },
    open: {
      opacity: 'opacity-100'
    }
  }
};

export default fadeConfig;

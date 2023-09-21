export interface FadeConfig {
  styles: {
    base: Record<string, string>;
    open: Record<string, string>;
  }
}

const fadeConfig: FadeConfig = {
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

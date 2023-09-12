export interface AccordionIconConfig {
  defaultProps: {
    start: boolean;
  }
  styles: {
    base: Record<string, string>;
    start: Record<string, string>;
    open: Record<string, string>;
  }
}

const accordionIconConfig: AccordionIconConfig = {
  defaultProps: {
    start: false
  },
  styles: {
    base: {
      margin: 'ml-auto',
      height: 'h-6',
      transition: 'transition'
    },
    start: {
      margin: 'm-0'
    },
    open: {
      transform: 'rotate-180'
    }
  }
};

export default accordionIconConfig;

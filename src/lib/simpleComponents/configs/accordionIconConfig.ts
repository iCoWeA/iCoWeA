export interface AccordionIconConfig {
  defaultProps: {
    start: boolean;
    'aria-hidden': boolean;
    viewBox: '0 0 24 24';
  },
  styles: {
    base: Record<string, string>;
    start: Record<string, string>;
    open: Record<string, string>;
  }
}

const accordionIconConfig: AccordionIconConfig = {
  defaultProps: {
    start: false,
    'aria-hidden': true,
    viewBox: '0 0 24 24'
  },
  styles: {
    base: {
      margin: 'ml-auto',
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

export interface AccordionBodyConfig {
  defaultProps: {
    position: DecorationPosition;
  }
  styles: {
    base: Record<string, string>;
    open: Record<string, string>;
    end: Record<string, string>;
  }
}

const accordionBodyConfig: AccordionBodyConfig = {
  defaultProps: {
    position: 'end'
  },
  styles: {
    base: {
      height: 'h-6',
      transition: 'transition'
    },
    open: {
      transform: 'rotate-180'
    },
    end: {
      margin: 'ml-auto'
    }
  }
};

export default accordionBodyConfig;

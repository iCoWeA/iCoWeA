export interface AccordionIconConfig {
  styles: {
    base: Record<string, string>;
    open: Record<string, string>;
  }
}

const accordionIconConfig: AccordionIconConfig = {
  styles: {
    base: {
      height: 'h-6',
      transition: 'transition'
    },
    open: {
      transform: 'rotate-180'
    }
  }
};

export default accordionIconConfig;

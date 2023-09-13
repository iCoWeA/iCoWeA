export interface AccordionBodyConfig {
  styles: {
    base: Record<string, string>;
  }
}

const accordionBodyConfig: AccordionBodyConfig = {
  styles: {
    base: {
      display: 'flex',
      flexDirection: 'flex-col',
      padding: 'py-4'
    }
  }
};

export default accordionBodyConfig;

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
      gap: 'gap-4',
      padding: 'py-4'
    }
  }
};

export default accordionBodyConfig;

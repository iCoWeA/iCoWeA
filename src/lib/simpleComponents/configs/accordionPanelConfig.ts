export interface AccordionPanelConfig {
  styles: {
    base: Record<string, string>;
  }
}

const accordionPanelConfig: AccordionPanelConfig = {
  styles: {
    base: {
      display: 'flex',
      flexDirection: 'flex-col',
      gap: 'gap-4',
      padding: 'py-4'
    }
  }
};

export default accordionPanelConfig;

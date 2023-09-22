export interface AccordionPanelConfig {
  defaultProps: {
    role: 'region';
  },
  styles: {
    base: Record<string, string>;
  }
}

const accordionPanelConfig: AccordionPanelConfig = {
  defaultProps: {
    role: 'region'
  },
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

export interface AccordionConfig {
  defaultProps: {
    defaultOpen: boolean;
    disabled: boolean;
  };
  styles: {
    base: Record<string, string>;
  }
}

const accordionConfig: AccordionConfig = {
  defaultProps: {
    defaultOpen: false,
    disabled: false
  },
  styles: {
    base: {
      display: 'flex',
      flexDirection: 'flex-col',
      width: 'w-full'
    }
  }
};

export default accordionConfig;

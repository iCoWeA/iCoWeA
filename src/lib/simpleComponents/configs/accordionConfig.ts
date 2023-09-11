export interface AccordionConfig {
  defaultProps: {
    size: Sizes;
    defaultOpen: boolean;
    disabled: boolean;
  };
  styles: {
    base: Record<string, string>;
  }
}

const accordionConfig: AccordionConfig = {
  defaultProps: {
    size: 'md',
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

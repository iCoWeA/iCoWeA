export interface AccordionConfig {
  defaultProps: {
    variant: CheckVariants;
    size: Sizes;
    color: Colors;
    defaultOpen: boolean;
    disabled: boolean;
  };
  styles: {
    base: Record<string, string>;
  }
}

const accordionConfig: AccordionConfig = {
  defaultProps: {
    variant: 'text',
    size: 'md',
    color: 'default',
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

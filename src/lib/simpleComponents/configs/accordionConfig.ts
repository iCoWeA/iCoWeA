export interface AccordionConfig {
  defaultProps: {
    disabled: boolean;
  };
  styles: {
    base: Record<string, string>;
    disabled: Record<string, string>;
  }
}

const accordionConfig: AccordionConfig = {
  defaultProps: {
    disabled: false
  },
  styles: {
    base: {
      display: 'flex',
      flexDirection: 'flex-col',
      width: 'w-full'
    },
    disabled: {
      opacity: 'opacity-50',
      pointer: 'pointer-events-none',
      userSelect: 'select-none'
    }
  }
};

export default accordionConfig;

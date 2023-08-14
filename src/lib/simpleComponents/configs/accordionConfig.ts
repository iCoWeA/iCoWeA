export interface AccordionConfig {
  defaultProps: {
    disabled: boolean;
    transitionProps: {
      enterDuration: number;
      exitDuration: number;
      unmountOnExit: boolean;
    };
  };
  styles: {
    base: Record<string, string>;
    disabled: Record<string, string>;
  }
}

const accordionConfig: AccordionConfig = {
  defaultProps: {
    disabled: false,
    transitionProps: {
      enterDuration: 500,
      exitDuration: 500,
      unmountOnExit: false
    }
  },
  styles: {
    base: {
      display: 'flex',
      flexDirection: 'flex-col',
      width: 'w-full',
      focus: 'focus:outline-0'
    },
    disabled: {
      opacity: 'opacity-50',
      pointer: 'pointer-events-none',
      userSelect: 'select-none'
    }
  }
};

export default accordionConfig;

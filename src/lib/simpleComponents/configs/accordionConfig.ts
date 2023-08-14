export interface AccordionConfig {
  defaultProps: {
    disabled: boolean;
    transitionProps: {
      unmountOnExit: boolean;
      enterDuration: number;
      exitDuration: number;
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
      unmountOnExit: false,
      enterDuration: 500,
      exitDuration: 500
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

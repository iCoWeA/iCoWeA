export interface AccordionConfig {
  defaultProps: {
    onToggle?: (open?: boolean) => void;
    open?: boolean;
    duration: number;
    disabled: boolean;
    className: string;
  };
  styles: {
    base: Record<string, string>;
    disabled: Record<string, string>;
  }
}

const accordionConfig: AccordionConfig = {
  defaultProps: {
    duration: 500,
    disabled: false,
    className: ''
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

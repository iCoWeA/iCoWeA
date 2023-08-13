import { type AccordionDefaultProps } from '../components/UI/Accordion';

export interface AccordionConfig {
  defaultProps: Required<AccordionDefaultProps>;
  styles: {
    base: Record<string, string>;
    open: Record<string, string>;
    disabled: Record<string, string>;
  }
}

const accordionConfig: AccordionConfig = {
  defaultProps: {
    disabled: false,
    unmountOnExit: false
  },
  styles: {
    base: {
      display: 'flex',
      flexDirection: 'flex-col',
      width: 'w-full',
      group: 'group',
      focus: 'focus:outline-0'
    },
    open: {
      group: 'open'
    },
    disabled: {
      opacity: 'opacity-50',
      pointer: 'pointer-events-none',
      userSelect: 'select-none'
    }
  }
};

export default accordionConfig;

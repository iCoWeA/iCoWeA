import { type AccordionDefaultProps } from '../components/UI/Accordion';

export interface AccordionConfig {
  defaultProps: Required<AccordionDefaultProps>;
  styles: {
    base: Record<string, string>;
    disabled: Record<string, string>;
  }
}

const accordionConfig: AccordionConfig = {
  defaultProps: {
    transitionDuration: 250,
    disabled: false,
    unmountOnExit: false
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

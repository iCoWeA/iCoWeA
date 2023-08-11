import { type AccordionBodyDefaultProps } from '../components/UI/AccordionBody';

export interface AccordionBodyConfig {
  defaultProps: Required<AccordionBodyDefaultProps>;
  styles: {
    root: {
      base: Record<string, string>;
      open: Record<string, string>;
    },
    constainer: {
      base: Record<string, string>;
    }
    body: {
      base: Record<string, string>;
    }
  }
}

const accordionBodyConfig: AccordionBodyConfig = {
  defaultProps: {
    componentsProps: {}
  },
  styles: {
    root: {
      base: {
        display: 'grid',
        gridTemplateRows: 'grid-rows-[0fr]',
        transition: 'transition-[grid-template-rows]',
        focus: 'focus:outline-0'
      },
      open: {
        gridTemplateRows: 'grid-rows-[1fr]'
      }
    },
    constainer: {
      base: {
        display: 'flex',
        overflow: 'overflow-hidden',
        focus: 'focus:outline-0'
      }
    },
    body: {
      base: {
        display: 'flex',
        flexDirection: 'flex-col',
        gap: 'gap-4',
        padding: 'py-4',
        focus: 'focus:outline-0'
      }
    }
  }
};

export default accordionBodyConfig;

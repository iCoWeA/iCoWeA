import { type CollapseProps } from '../components/UI/Collapse';

export interface AccordionBodyConfig {
  defaultProps: {
    rootProps: CollapseProps;
    className: string;
  };
  styles: {
    root: Record<string, string>,
    body: {
      base: Record<string, string>;
    }
  }
}

const accordionBodyConfig: AccordionBodyConfig = {
  defaultProps: {
    rootProps: {},
    className: ''
  },
  styles: {
    root: {},
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

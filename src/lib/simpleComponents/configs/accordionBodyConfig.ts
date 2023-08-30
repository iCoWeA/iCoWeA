import { type CollapseProps } from '../components/UI/Collapse';

export interface AccordionBodyConfig {
  defaultProps: {
    collapseProps: CollapseProps;
    className: string;
  };
  styles: {
    base: Record<string, string>;
  }
}

const accordionBodyConfig: AccordionBodyConfig = {
  defaultProps: {
    collapseProps: {},
    className: ''
  },
  styles: {
    base: {
      display: 'flex',
      flexDirection: 'flex-col',
      gap: 'gap-4',
      padding: 'py-4',
      focus: 'focus:outline-0'
    }
  }
};

export default accordionBodyConfig;

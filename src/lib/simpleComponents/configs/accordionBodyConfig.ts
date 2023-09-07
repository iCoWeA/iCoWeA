import { type CollapseProps } from '../components/UI/Collapse/Collapse';

export interface AccordionBodyConfig {
  defaultProps: {
    collapseProps: CollapseProps;
  };
  styles: {
    base: Record<string, string>;
  }
}

const accordionBodyConfig: AccordionBodyConfig = {
  defaultProps: {
    collapseProps: {}
  },
  styles: {
    base: {
      display: 'flex',
      flexDirection: 'flex-col',
      gap: 'gap-4',
      padding: 'py-4 px-6'
    }
  }
};

export default accordionBodyConfig;

import { type CollapseProps } from '../components/UI/Collapse/Collapse';

export interface AccordionBodyConfig {
  defaultProps: {
    collapseProps: CollapseProps;
  };
  styles: {
    base: Record<string, string>;
    sizes: Record<Sizes, Record<string, string>>;
  }
}

const accordionBodyConfig: AccordionBodyConfig = {
  defaultProps: {
    collapseProps: {}
  },
  styles: {
    base: {
      display: 'flex',
      flexDirection: 'flex-col'
    },
    sizes: {
      sm: {
        padding: 'py-2'
      },
      md: {
        padding: 'py-3'
      },
      lg: {
        padding: 'py-4'
      }
    }
  }
};

export default accordionBodyConfig;

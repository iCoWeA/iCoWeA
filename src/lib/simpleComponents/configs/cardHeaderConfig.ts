import { type BoxLayouts } from '../components/UI/Box';

export interface CardHeaderConfig {
  defaultProps: {
    size: Sizes;
    fullwidht: boolean;
    layout: BoxLayouts;
    gap: Sizes;
  }
  styles: {
    fullwidth: Record<string, string>;
    sizes: Record<Sizes, Record<string, string>>;
  }
}

const cardHeaderConfig: CardHeaderConfig = {
  defaultProps: {
    size: 'md',
    fullwidht: false,
    layout: 'row',
    gap: 'md'
  },
  styles: {
    fullwidth: {
      padding: 'p-0'
    },
    sizes: {
      xs: {
        padding: 'p-xs-p'
      },
      sm: {
        padding: 'p-sm-p'
      },
      md: {
        padding: 'p-md-p'
      },
      lg: {
        padding: 'p-lg-p'
      }
    }
  }
};

export default cardHeaderConfig;

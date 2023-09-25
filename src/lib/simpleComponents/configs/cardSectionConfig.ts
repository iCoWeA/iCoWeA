import { type BoxLayouts } from '../components/UI/Box';

export interface CardSectionConfig {
  defaultProps: {
    size: Sizes;
    layout: BoxLayouts;
    variant: Variants;
    color: Colors;
  }
  styles: {
    sizes: Record<Sizes, Record<string, string>>;
  }
}

const cardSectionConfig: CardSectionConfig = {
  defaultProps: {
    size: 'md',
    layout: 'col',
    variant: 'plain',
    color: 'default'
  },
  styles: {
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

export default cardSectionConfig;

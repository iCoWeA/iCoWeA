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
        padding: 'px-xs-p'
      },
      sm: {
        padding: 'px-sm-p'
      },
      md: {
        padding: 'px-md-p'
      },
      lg: {
        padding: 'px-lg-p'
      }
    }
  }
};

export default cardSectionConfig;

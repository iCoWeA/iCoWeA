import { type BoxLayouts } from '../components/UI/Box';

export interface CardFooterConfig {
  defaultProps: {
    size: Sizes;
    layout: BoxLayouts;
    variant: Variants;
    color: Colors;
    gap: Sizes;
  }
  styles: {
    sizes: Record<Sizes, Record<string, string>>;
  }
}

const cardFooterConfig: CardFooterConfig = {
  defaultProps: {
    size: 'md',
    layout: 'row',
    variant: 'plain',
    color: 'default',
    gap: 'xs'
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

export default cardFooterConfig;

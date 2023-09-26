import { type BoxLayouts } from '../components/UI/Box';

export interface CardFooterConfig {
  defaultProps: {
    size: Sizes;
    layout: BoxLayouts;
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
    gap: 'xs'
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

export default cardFooterConfig;

import { type BoxLayouts } from '../components/UI/Box';

export interface CardHeaderConfig {
  defaultProps: {
    size: Sizes;
    fullwidht: boolean;
    layout: BoxLayouts;
    variant: Variants;
    color: Colors;
    gap: Sizes;
  }
  styles: {
    base: Record<string, string>;
    fullwidth: Record<string, string>;
    sizes: Record<Sizes, Record<string, string>>;
  }
}

const cardHeaderConfig: CardHeaderConfig = {
  defaultProps: {
    size: 'md',
    fullwidht: false,
    layout: 'row',
    variant: 'plain',
    color: 'default',
    gap: 'md'
  },
  styles: {
    base: {
      width: 'w-full'
    },
    fullwidth: {
      padding: 'p-0',
      border: 'border-0'
    },
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

export default cardHeaderConfig;

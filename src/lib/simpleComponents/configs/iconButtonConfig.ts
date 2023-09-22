import { type ButtonVariants } from '../components/UI/Button';

export interface IconButtonConfig {
  defaultProps: {
    borderShape: Shapes;
    variant: ButtonVariants;
    size: Sizes;
    color: Colors;
    elevated: boolean;
    fullwidth: boolean;
  };
  styles: {
    base: Record<string, string>;
    borderShapes: Record<Shapes, Record<string, string>>;
    sizes: Record<Sizes, Record<string, string>>;
    outlineSizes: Record<Sizes, Record<string, string>>;
  }
}

const iconIconButtonConfig: IconButtonConfig = {
  defaultProps: {
    borderShape: 'circular',
    variant: 'filled',
    size: 'md',
    color: 'primary',
    elevated: false,
    fullwidth: false
  },
  styles: {
    base: {
      alignItems: 'items-center',
      justifyContent: 'justify-center',
      aspectRatio: 'aspect-square'
    },
    borderShapes: {
      rounded: {
        borderRadius: 'rounded-xl'
      },
      circular: {
        borderRadius: 'rounded-full'
      },
      square: {
        borderRadius: 'rounded-none'
      }
    },
    sizes: {
      xs: {
        height: 'h-6',
        padding: 'p-0.5'
      },
      sm: {
        height: 'h-8',
        padding: 'p-1.5'
      },
      md: {
        height: 'h-10',
        padding: 'p-2.5'
      },
      lg: {
        height: 'h-12',
        padding: 'p-3.5'
      }
    },
    outlineSizes: {
      xs: {
        padding: 'p-px'
      },
      sm: {
        padding: 'p-[0.3125rem]'
      },
      md: {
        padding: 'p-[0.5625rem]'
      },
      lg: {
        padding: 'p-[0.8125rem]'
      }
    }
  }
};

export default iconIconButtonConfig;

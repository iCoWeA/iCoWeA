export interface CardFooterConfig {
  defaultProps: {
    size: Sizes;
    gap: Sizes;
    layout: BoxLayouts;
    variant: Variants;
    color: Colors;
    elevated: boolean;
  }
  styles: {
    sizes: Record<Sizes, Record<string, string>>;
  }
}

const cardFooterConfig: CardFooterConfig = {
  defaultProps: {
    size: 'md',
    gap: 'xs',
    layout: 'row',
    variant: 'plain',
    color: 'default',
    elevated: false
  },
  styles: {
    sizes: {
      xs: {
        padding: 'p-xs'
      },
      sm: {
        padding: 'p-sm'
      },
      md: {
        padding: 'p-md'
      },
      lg: {
        padding: 'p-lg'
      }
    }
  }
};

export default cardFooterConfig;

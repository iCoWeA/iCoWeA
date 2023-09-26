export interface CardHeaderConfig {
  defaultProps: {
    size: Sizes;
    fullwidht: boolean;
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

const cardHeaderConfig: CardHeaderConfig = {
  defaultProps: {
    size: 'md',
    fullwidht: false,
    gap: 'md',
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

export default cardHeaderConfig;

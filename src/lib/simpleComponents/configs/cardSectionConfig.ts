export interface CardSectionConfig {
  defaultProps: {
    size: Sizes;
    layout: BoxLayouts;
    variant: Variants;
    color: Colors;
    elevated: boolean;
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
    color: 'default',
    elevated: false
  },
  styles: {
    sizes: {
      xs: {
        padding: 'p-xs-px'
      },
      sm: {
        padding: 'p-sm-px'
      },
      md: {
        padding: 'p-md-px'
      },
      lg: {
        padding: 'p-lg-px'
      }
    }
  }
};

export default cardSectionConfig;

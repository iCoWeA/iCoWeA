export interface FooterConfig {
  defaultProps: {
    color: Colors;
    fullwidth: boolean;
  };
  styles: {
    base: Record<string, string>;
    divider: Record<string, string>;
  };
}

const footerConfig: FooterConfig = {
  defaultProps: {
    color: 'default',
    fullwidth: false
  },
  styles: {
    base: {
      padding: 'px-lg py-lg-y'
    },
    divider: {
      border: 'border-t'
    }
  }
};

export default footerConfig;

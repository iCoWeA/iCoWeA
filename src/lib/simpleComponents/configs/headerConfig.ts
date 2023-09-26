export interface HeaderConfig {
  defaultProps: {
    color: Colors;
    elevated: boolean;
    fullwidth: boolean;
  };
  styles: {
    base: Record<string, string>;
    divider: Record<string, string>;
  };
}

const headerConfig: HeaderConfig = {
  defaultProps: {
    color: 'default',
    elevated: false,
    fullwidth: false
  },
  styles: {
    base: {
      padding: 'px-lg py-lg-y'
    },
    divider: {
      border: 'border-b'
    }
  }
};

export default headerConfig;

import { type AriaRole, type BaseHTMLAttributes } from 'react';

export interface FooterConfig {
  defaultProps: {
    container: {
      role: AriaRole;
    },
    box: {
      fullwidth: boolean;
      containerProps: BaseHTMLAttributes<HTMLElement>;
      gap: Sizes;
      color: Colors;
      elevated: boolean;
    }
  };
  styles: {
    base: Record<string, string>;
    divider: Record<string, string>;
  };
}

const footerConfig: FooterConfig = {
  defaultProps: {
    container: {
      role: 'contentinfo'
    },
    box: {
      fullwidth: false,
      containerProps: {},
      gap: 'lg',
      color: 'default',
      elevated: false
    }
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
